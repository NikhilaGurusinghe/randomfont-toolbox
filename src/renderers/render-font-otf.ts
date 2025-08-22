//TODO remove

import p5 from 'p5';
import otf from 'opentype.js';
import {pathCounterCounter} from "./util/type-counters";
import {extractShapesFromPath, getFirstStartPointInPath, pathCommandsToPathData} from "./util/otf-path-utils";

// @ts-ignore
type FontRenderStrategy = (p5: p5, path: otf.Path) => void;

export function renderFont(p5: p5,
                           font: otf.Font,
                           text: string,
                           fontSize: number,
                           // @ts-ignore
                           /*fontRenderer: FontRenderStrategy*/) : void {

    // 1. Get number of counters per letter in text
    // 2. iterate through the otf.Path generated from .getPath with this in mind -- this can tell
    //    where we are within the character

    const toPathDataResolution: number = 3;

    // console.log(font);

    const textPaths: otf.Path[] = font.getPaths(text, 0, 0, fontSize);
    // const textPath: otf.Path = font.getPath(text, 0, 0, fontSize);
    // const textPath2D: Path2D = new Path2D(textPath.toPathData(toPathDataResolution));

    const ctx: CanvasRenderingContext2D = p5.drawingContext;

    // pre-processing fonts
    // const characterCounters: number[] = [];

    for (const characterPath of textPaths) {

        const counterCount: number = pathCounterCounter(characterPath);
        console.log("counterCount: " + counterCount);
        // characterCounters.push(counterCount);

        if (counterCount > 0) { // the current character has one or more counters!
            // TODO need to get all the shapes (ending with Z here into an array and loop through that)
            // we can skip the first one as we can assume that is the base character shape and will be filled in
            // currently this does one iteration

            let currCharacterShapes: otf.PathCommand[][] = extractShapesFromPath(characterPath);

            for (let characterShapePath of currCharacterShapes) {
                let characterShapePath2D: Path2D = new Path2D(characterPath.toPathData(toPathDataResolution));
                let samplePoint: DOMPoint | null = getFirstStartPointInPath(characterShapePath);

                if (samplePoint?.x === null || samplePoint?.x === undefined ||
                    samplePoint?.y === null || samplePoint?.y === undefined) {
                    console.error("render-font-otf.ts | samplePoint.x and samplePoint.y was null");
                    return;
                }

                console.log("sampleX: " + samplePoint.x);
                console.log("sampleY: " + samplePoint.y);

                // now we need to sample around the (sampleX, sampleY) coordinate we have and test against
                // ctx.isPointInPath with the relevant characterPath as the path
                const characterPath2D: Path2D = new Path2D(pathCommandsToPathData(characterShapePath, toPathDataResolution));
                console.log(pathCommandsToPathData(characterShapePath, toPathDataResolution));
                const sampleUnit: number = Math.max(5, fontSize * 0.05);
                const sampleGridOffsets: [x: number, y: number][] = [
                        [-sampleUnit, -sampleUnit], [-sampleUnit, 0], [-sampleUnit, sampleUnit],
                        [0, -sampleUnit],           [0, 0],           [0, sampleUnit],
                        [sampleUnit, -sampleUnit],  [sampleUnit, 0],  [sampleUnit, sampleUnit],
                ];

                let samplePointOffset: DOMPoint = new DOMPoint(samplePoint.x, samplePoint.y);

                for (let sampleOffset of sampleGridOffsets) {
                    samplePointOffset.x = samplePoint.x + sampleOffset[0];
                    samplePointOffset.y = samplePoint.y + sampleOffset[1];

                    p5.stroke('pink');
                    p5.strokeWeight(10);
                    p5.point(samplePointOffset.x, samplePointOffset.y);

                    // Searching to see if we're inside the current shape
                    // The p5.pixelDensity() part is CRUCIAL!
                    const isInPath: boolean = ctx.isPointInPath(
                        characterPath2D,
                        p5.pixelDensity() * samplePointOffset.x,
                        p5.pixelDensity() * samplePointOffset.y,
                        "evenodd"
                    );

                    console.log("sampleOffset " + sampleOffset);
                    console.log("inner sampleXOffset: " + samplePointOffset.x);
                    console.log("inner sampleYOffset: " + samplePointOffset.y);
                    console.log("inner decided isInPath = " + isInPath);

                    // stop searching if we've found a point within the path
                    if (isInPath) {
                        console.log("Point was inside Path!");
                        console.log("sampleXOffset: " + samplePoint.x);
                        console.log("sampleYOffset: " + samplePoint.y);

                        // then sample this point in the textPath using ctx.isPointInPath
                        // TODO this should use characterPath to get a path2D instead of the entire text.
                        const isInPath: boolean = ctx.isPointInPath(
                            characterShapePath2D,
                            p5.pixelDensity() * samplePointOffset.x,
                            p5.pixelDensity() * samplePointOffset.y,
                        );

                        console.log("Render decided isInPath = " + isInPath);

                        break;
                    }

                    console.log("----------------");

                }

                console.log("=================");
            }
        }

        // for (let i = 12; i < path.commands.length; i++) {
        //     let cmd = path.commands[i];
        //     if (cmd.type === "M") {
        //         beginShape();
        //         vertex(cmd.x, cmd.y);
        //     } else if (cmd.type === "L") {
        //         vertex(cmd.x, cmd.y);
        //     } else if (cmd.type === "C") {
        //         bezierVertex(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
        //     } else if (cmd.type === "Q") {
        //         quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y);
        //     } else if (cmd.type === "Z") {
        //         endShape(CLOSE);
        //     }
        // }

    }


}




