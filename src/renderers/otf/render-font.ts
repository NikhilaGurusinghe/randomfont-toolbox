import p5 from 'p5';
import otf from 'opentype.js';
import {pathCounterCounter} from "./utils/type-counters";
import {extractShapesFromPath, getFirstStartPointInPath, pathCommandsToPathData} from "./utils/otf-path-utils";

type FontRenderStrategy = (p5: p5,
                           textPaths: otf.Path[],
                           textFillStatuses: FillStatus[][],
                           options?: { [key: string]: any }) => void;
type FontPreprocessor = (p5: p5, textPaths: otf.Path[], options?: { [key: string]: any }) => otf.Path[];

// TODO: clean this up
export type LayoutOptions = {
    // Horizontal alignment per line
    align?: "left" | "center" | "right";
    // Multiplier for baseline distance: (ascender + descent) * lineHeight
    lineHeight?: number;
    // Extra margins for left/right alignment (pixels)
    marginX?: number;
    // Extra vertical offset for the entire block (pixels, added after centering)
    marginY?: number;
};

export enum FillStatus {
    FILLED = "filled",
    OPEN = "open"
}

export const textForegroundColour = 0;
export const textBackgroundColour = 255;

// TODO: clean this up
export function getTextPaths(p5: p5,
                             font: otf.Font,
                             text: string,
                             typeSize: number,
                             fontPreprocessor: FontPreprocessor,
                             fontPreprocessorOptions?: { [key: string]: any },
                             layoutOptions?: LayoutOptions):
    { originalTextPath: otf.Path[], processedTextPath: otf.Path[] } {

    const lines: string[] = text.split(/\r?\n/);

    // Defaults
    const align: "left" | "center" | "right" = layoutOptions?.align ?? "center";
    const lineHeightMultiplier: number = layoutOptions?.lineHeight ?? 1.2;
    const marginX: number = layoutOptions?.marginX ?? 0;
    const marginY: number = layoutOptions?.marginY ?? 0;

    // Font metrics (in pixels at given typeSize)
    const scale = typeSize / font.unitsPerEm;
    const ascent = font.ascender * scale;           // positive
    const descent = Math.abs(font.descender) * scale; // positive
    const baselineGap = (ascent + descent) * lineHeightMultiplier;

    // Precompute per-line bboxes at (0, 0) baseline to measure widths
    const lineBBoxes: otf.BoundingBox[] = lines.map(line => {
        const path = font.getPath(line, 0, 0, typeSize, { kerning: true });
        return path.getBoundingBox();
    });
    const lineWidths: number[] = lineBBoxes.map(bb => bb.x2 - bb.x1);

    // Overall block height for centering: first line top to last line bottom
    const blockHeight = (ascent + descent) + (lines.length - 1) * baselineGap;

    // Top of the visual block and baseline for the first line
    const top = (p5.windowHeight - blockHeight) / 2 + marginY;
    const baseline0 = top + ascent;

    // Build all paths with per-line positioning
    let textPaths: otf.Path[] = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const bb = lineBBoxes[i];
        const lineWidth = lineWidths[i];

        // Desired left based on alignment
        let desiredLeft: number;
        switch (align) {
            case "left":
                desiredLeft = marginX;
                break;
            case "right":
                desiredLeft = p5.windowWidth - lineWidth - marginX;
                break;
            case "center":
            default:
                desiredLeft = (p5.windowWidth - lineWidth) / 2;
                break;
        }

        const baselineY = baseline0 + i * baselineGap;
        // Adjust x by -bb.x1 so that the left edge of the bbox lands at desiredLeft
        const x = desiredLeft - bb.x1;

        const linePaths: otf.Path[] = font.getPaths(
            line,
            x,
            baselineY,
            typeSize,
            { kerning: true }
        );

        textPaths.push(...linePaths);
    }

    const processedTextPaths: otf.Path[] = fontPreprocessor(p5, textPaths, fontPreprocessorOptions);

    if (textPaths.length !== processedTextPaths.length)
        console.error("render-font.ts | something has gone wrong in otf\\render-font.ts#getTextPaths" +
            " regarding the lengths of the outputted otf.Path[]");

    return { originalTextPath: textPaths, processedTextPath: processedTextPaths };
}

export function renderFont(p5: p5,
                           textPaths: otf.Path[],
                           textFillStatuses: FillStatus[][],
                           fontRenderer: FontRenderStrategy,
                           fontRendererOptions?: { [key: string]: any },
                           unprocessedTextPaths?: otf.Path[]) : otf.Path[] {

    // unprocessedTextPaths tend to be useful in FontRenderStrategy as they preserve the original geometry
    // and curves of the font before they are processed crazily
    if (fontRendererOptions !== undefined && unprocessedTextPaths !== undefined) {
        fontRendererOptions["unprocessedTextPaths"] = unprocessedTextPaths;
    }

    // actually rendering font
    fontRenderer(p5, textPaths, textFillStatuses, fontRendererOptions);

    return textPaths;
}

function generateSampleOffsetGrid(sideLength: number, sampleUnit: number): [x: number, y: number][] {
    if (sideLength % 2 === 0 ) {
        sideLength += 1;
        console.error(
            "render-font-otf.ts | generateSampleOffsetGrid received an even side length of " + (sideLength - 1)
            + ". The actual side length of the grid generated will be odd: " + sideLength);
    }

    let sampleOffsetGrid: [x: number, y: number][] = [];
    let maxSampleUnitScale: number = Math.floor(sideLength / 2);

    for (let i = maxSampleUnitScale; i >= -maxSampleUnitScale; i--) {
        for (let j = -maxSampleUnitScale; j <= maxSampleUnitScale; j++) {
            sampleOffsetGrid.push([j * sampleUnit, -i * sampleUnit])
        }
    }

    return sampleOffsetGrid;
}

export function getTextFillStatuses(p5: p5, textPaths: otf.Path[], sampleUnit: number = 2): FillStatus[][] {
    const toPathDataResolution: number = 3;
    const sampleOffsetKernel: [x: number, y: number][] = generateSampleOffsetGrid(5, sampleUnit);
    const ctx: CanvasRenderingContext2D = p5.drawingContext;

    let textFillStatuses: FillStatus[][] = [];

    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++){
        const entireLetterformPath = textPaths[characterIndex];
        const counterCount: number = pathCounterCounter(entireLetterformPath);

        textFillStatuses.push([]);

        if (counterCount <= 0) {
            textFillStatuses[characterIndex].push(FillStatus.FILLED);
            continue; // will increment characterIndex
        }

        let letterformComponentShapes: otf.PathCommand[][] = extractShapesFromPath(entireLetterformPath);

        for (let letterformComponentShape of letterformComponentShapes) {
            let samplePoint: Point | null = getFirstStartPointInPath(letterformComponentShape);

            if (samplePoint === null || samplePoint === undefined) {
                console.error("render-font-otf.ts | samplePoint.x and samplePoint.y was null");
                break;
            }

            // now we need to sample around the (sampleX, sampleY) coordinate we have and test against
            // ctx.isPointInPath with the relevant entireLetterformPath as the path
            let samplePointOffset: Point = {x: samplePoint.x, y: samplePoint.y};
            let wasFillStatusAssigned: boolean = false;

            for (let sampleOffset of sampleOffsetKernel) {
                samplePointOffset.x = samplePoint.x + sampleOffset[0];
                samplePointOffset.y = samplePoint.y + sampleOffset[1];

                // Searching to see if we're inside the current shape
                // The p5.pixelDensity() part is CRUCIAL!
                const characterPath2D: Path2D =
                    new Path2D(pathCommandsToPathData(letterformComponentShape, toPathDataResolution));
                const isInPath: boolean = ctx.isPointInPath(
                    characterPath2D,
                    p5.pixelDensity() * samplePointOffset.x,
                    p5.pixelDensity() * samplePointOffset.y,
                );

                const isInStroke: boolean = ctx.isPointInStroke(
                    characterPath2D,
                    p5.pixelDensity() * samplePointOffset.x,
                    p5.pixelDensity() * samplePointOffset.y,
                );

                // stop searching if we've found a point within the path and not on the stroke as this won't
                // show up in future isPointInPath calculations with the entire letterform
                if (isInPath && !isInStroke) {
                    wasFillStatusAssigned = true;

                    let characterShapePath2D: Path2D = new Path2D(entireLetterformPath.toPathData(toPathDataResolution));

                    // then sample this point in the textPath using ctx.isPointInPath
                    const isInPath: boolean = ctx.isPointInPath(
                        characterShapePath2D,
                        p5.pixelDensity() * samplePointOffset.x,
                        p5.pixelDensity() * samplePointOffset.y,
                    );

                    const isInStroke: boolean = ctx.isPointInStroke(
                        characterShapePath2D,
                        p5.pixelDensity() * samplePointOffset.x,
                        p5.pixelDensity() * samplePointOffset.y,
                    );

                    // we're only NOT in a counter/something that shouldn't be filled when
                    // isInPath === FALSE && isInStroke === FALSE;
                    if (isInPath || isInStroke) {
                        textFillStatuses[characterIndex].push(FillStatus.FILLED);
                    } else {
                        textFillStatuses[characterIndex].push(FillStatus.OPEN);
                    }

                    break;
                }
            }

            // TODO need to do error handling for what happens when we fall through here without a status
            if (!wasFillStatusAssigned) {
                textFillStatuses[characterIndex].push(FillStatus.OPEN);
                // console.error("render-font-otf.ts | getTextFillStatuses could not find a suitable sample point " +
                //     "(at character index " + characterIndex + ") for calculating text fill status")
            }
        }
    }

    return textFillStatuses;
}




