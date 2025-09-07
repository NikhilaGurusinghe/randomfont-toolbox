import p5 from 'p5';
import otf from 'opentype.js';
import {pathCounterCounter} from "./utils/type-counters";
import {extractShapesFromPath, getFirstStartPointInPath, pathCommandsToPathData} from "./utils/otf-path-utils";

type FontRenderStrategy = (p5: p5,
                           textPaths: otf.Path[],
                           textFillStatuses: FillStatus[][],
                           options?: { [key: string]: any }) => void;
type FontPreprocessor = (p5: p5, textPaths: otf.Path[], options?: { [key: string]: any }) => otf.Path[];

export enum FillStatus {
    FILLED = "filled",
    OPEN = "open"
}

export const textForegroundColour = 0;
export const textBackgroundColour = 255;

export function getTextPaths(p5: p5,
                             font: otf.Font,
                             text: string,
                             typeSize: number,
                             fontPreprocessor: FontPreprocessor,
                             fontPreprocessorOptions?: { [key: string]: any }):
    { originalTextPath: otf.Path[], processedTextPath: otf.Path[] } {
    const textPath: otf.Path = font.getPath(text, 0, 0, typeSize, { kerning: true });
    const textBoundingBox: otf.BoundingBox = textPath.getBoundingBox();
    const textHeight: number = textBoundingBox.y2 - textBoundingBox.y1;
    const textWidth: number = textBoundingBox.x2 - textBoundingBox.x1;

    let textPaths: otf.Path[] = font.getPaths(
        text,
        (p5.windowWidth - textWidth) / 2,
        (p5.windowHeight - textHeight + typeSize) / 2,
        typeSize,
        { kerning: true }
    );

    let processedTextPaths: otf.Path[] = fontPreprocessor(p5, textPaths, fontPreprocessorOptions);

    if (textPaths.length !== processedTextPaths.length)
        console.error("render-font.ts | something has gone wrong in otf\render-font.ts#getTextPaths" +
            " regarding the lengths of the outputted otf.Path[]");

    return { originalTextPath: textPaths, processedTextPath: processedTextPaths };
}

export function renderFont(p5: p5,
                           textPaths: otf.Path[],
                           fontRenderer: FontRenderStrategy,
                           fontRendererOptions?: { [key: string]: any },
                           unprocessedTextPaths?: otf.Path[]) : otf.Path[] {

    // sorting out rendering holes in fonts
    // unprocessedTextPaths can be used here if the processing you do on your text is so extreme that it destroys
    // my very fickle algorithm for determining the number and order of holes in a letterform :)
    const textFillStatuses: FillStatus[][] = unprocessedTextPaths === undefined ?
        getTextFillStatuses(p5, textPaths) : getTextFillStatuses(p5, unprocessedTextPaths);

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

function getTextFillStatuses(p5: p5, textPaths: otf.Path[]): FillStatus[][] {
    const toPathDataResolution: number = 3;
    const sampleUnit: number = 2;
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
                // textFillStatuses[characterIndex].push(FillStatus.FILLED);
                console.error("render-font-otf.ts | getTextFillStatuses could not find a suitable sample point " +
                    "(at character index " + characterIndex + ") for calculating text fill status")
            }
        }
    }

    return textFillStatuses;
}




