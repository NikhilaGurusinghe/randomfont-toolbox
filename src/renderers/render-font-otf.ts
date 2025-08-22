//TODO remove

import p5 from 'p5';
import otf from 'opentype.js';
import {pathCounterCounter} from "./util/type-counters";
import {extractShapesFromPath, getFirstStartPointInPath, pathCommandsToPathData} from "./util/otf-path-utils";

// @ts-ignore
type FontRenderStrategy = (p5: p5, path: otf.Path) => void;
enum FillStatus {
    FILLED = "filled",
    OPEN = "open"
}

export function renderFont(p5: p5,
                           font: otf.Font,
                           text: string,
                           fontSize: number,
                           // @ts-ignore
                           /*fontRenderer: FontRenderStrategy*/) : void {



    const textPaths: otf.Path[] = font.getPaths(text, 200, 200, fontSize);


    // pre-processing fonts
    console.log(getTextFillStatuses(p5, textPaths));



    // actually rendering font

    // for (const characterPath of textPaths) {
    //     for (let command of characterPath.commands) {
    //         switch (command.type) {
    //             case "M":
    //                 p5.beginShape();
    //                 p5.vertex(command.x, command.y);
    //                 break;
    //             case "L":
    //                 p5.vertex(command.x, command.y);
    //                 break;
    //             case "C":
    //                 p5.bezierVertex(command.x1, command.y1, command.x2, command.y2, command.x, command.y);
    //                 break;
    //             case "Q":
    //                 p5.quadraticVertex(command.x1, command.y1, command.x, command.y);
    //                 break;
    //             case "Z":
    //                 p5.endShape(p5.CLOSE);
    //                 break;
    //         }
    //     }
    // }
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
        // TODO this produces way toooo much arrays inside the array
        console.log(letterformComponentShapes)

        for (let letterformComponentShape of letterformComponentShapes) {
            let samplePoint: Point | null = getFirstStartPointInPath(letterformComponentShape);

            if (samplePoint === null || samplePoint === undefined) {
                console.error("render-font-otf.ts | samplePoint.x and samplePoint.y was null");
                break;
            }

            // TODO REMOVE THIS actually rendering font
            for (let command of letterformComponentShape) {
                switch (command.type) {
                    case "M":
                        p5.beginShape();
                        p5.vertex(command.x, command.y);
                        break;
                    case "L":
                        p5.vertex(command.x, command.y);
                        break;
                    case "C":
                        p5.bezierVertex(command.x1, command.y1, command.x2, command.y2, command.x, command.y);
                        break;
                    case "Q":
                        p5.quadraticVertex(command.x1, command.y1, command.x, command.y);
                        break;
                    case "Z":
                        p5.endShape(p5.CLOSE);
                        break;
                }
            }

            // now we need to sample around the (sampleX, sampleY) coordinate we have and test against
            // ctx.isPointInPath with the relevant entireLetterformPath as the path
            let samplePointOffset: Point = {x: samplePoint.x, y: samplePoint.y};
            let wasFillStatusAssigned: boolean = false;

            for (let sampleOffset of sampleOffsetKernel) {
                samplePointOffset.x = samplePoint.x + sampleOffset[0];
                samplePointOffset.y = samplePoint.y + sampleOffset[1];

                p5.push();
                p5.stroke('pink');
                p5.strokeWeight(4);
                p5.point(samplePointOffset.x, samplePointOffset.y);
                p5.pop();

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
                    console.log("!!!!!!!!!!!!!");
                    p5.push();
                    p5.stroke('red');
                    p5.strokeWeight(5);
                    p5.point(samplePointOffset.x, samplePointOffset.y);
                    p5.pop();

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

                    console.log("!!!!Render decided isInPath = " + isInPath);
                    console.log("!!!!Render decided isInStroke = " + isInStroke);
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




