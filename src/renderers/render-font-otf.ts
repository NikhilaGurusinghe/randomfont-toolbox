//TODO remove

import p5 from 'p5';
import otf from 'opentype.js';
import {pathCounterCounter} from "./util/type-counters";

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

    console.log(font);

    const textPaths: otf.Path[] = font.getPaths(text, 0, 0, fontSize);
    const textPath: otf.Path = font.getPath(text, 0, 0, fontSize);
    const textPath2D: Path2D = new Path2D(textPath.toPathData(toPathDataResolution));

    const ctx: CanvasRenderingContext2D = p5.drawingContext;

    // pre-processing fonts
    // const characterCounters: number[] = [];

    for (const characterPath of textPaths) {
        console.log(characterPath);

        const counterCount: number = pathCounterCounter(characterPath);
        console.log("counterCount: " + counterCount);
        // characterCounters.push(counterCount);

        if (counterCount > 0) { // the current character has one or more counters!
            let sampleX: number = 0;
            let sampleY: number = 0;

            // TODO need to get all the shapes (ending with Z here into an array and loop through that)
            // we can skip the first one as we can assume that is the base character shape and will be filled in
            // currently this does one iteration

            let currShapeCounter: number = 0;
            let currCharacterShapes: otf.PathCommand[][] = [[]];
            for (let command of characterPath.commands) {
                if (command.type !== "Z") { // if we aren't at a close shape command
                    currCharacterShapes[currShapeCounter].push(command)
                } else {
                    // if we are at a close shape command
                    // push it
                    currCharacterShapes[currShapeCounter].push(command)
                    // increment the currShapeCounter
                    currCharacterShapes.push([]);
                    currShapeCounter++;
                }
            }

            // for (let currShape of currCharacterShapes) {
            //     for (let currShapeCommands of currShape) {
            //
            //     }
            // }



            for (let i = 32; i < characterPath.commands.length; i++) {
                // if we have a counter we want to find a point using the cardinal directions trick
                // this will get us the "next" point but that is sufficient for us as it is a point
                // on the outline of the shape

                let command: otf.PathCommand = characterPath.commands[i];

                if (command.type === "C" ||  // cubic bezier
                    command.type === "L" ||  // line to
                    command.type === "Q") {  // quadratic bezier
                    sampleX = command.x;
                    sampleY = command.y;
                    break;
                }
            }

            console.log("sampleX: " + sampleX);
            console.log("sampleY: " + sampleY);

            // now we need to sample around the (sampleX, sampleY) coordinate we have and test against
            // ctx.isPointInPath with the relevant characterPath as the path
            const characterPath2D: Path2D = new Path2D(characterPath.toPathData(toPathDataResolution));
            const sampleUnit: number = 0.5;
            const sampleGridOffsets: [x: number, y: number][] = [
                [-sampleUnit, -sampleUnit], [-sampleUnit, 0], [-sampleUnit, sampleUnit],
                [0, -sampleUnit],           [0, 0],           [0, sampleUnit],
                [sampleUnit, -sampleUnit],  [sampleUnit, 0],  [sampleUnit, sampleUnit],
            ];

            let sampleXOffset: number = sampleX;
            let sampleYOffset: number = sampleY;

            for (let sampleOffset of sampleGridOffsets) {
                sampleXOffset = sampleX + sampleOffset[0];
                sampleYOffset = sampleY + sampleOffset[1];

                // Searching to see if we're inside the current shape
                // The p5.pixelDensity() part is CRUCIAL!
                const isInPath: boolean = ctx.isPointInPath(
                    characterPath2D, // this characterPath2D should be the individual shape this is currently the entire letterform
                    p5.pixelDensity() * sampleXOffset,
                    p5.pixelDensity() * sampleYOffset
                );

                console.log("sampleOffset " + sampleOffset);
                console.log("inner sampleXOffset: " + sampleXOffset);
                console.log("inner sampleYOffset: " + sampleYOffset);
                console.log("inner decided isInPath = " + isInPath);


                // stop searching if we've found a point within the path
                if (isInPath) {
                    console.log("sampleXOffset: " + sampleX);
                    console.log("sampleYOffset: " + sampleY);

                    // then sample this point in the textPath using ctx.isPointInPath
                    const isInPath: boolean = ctx.isPointInPath(
                        textPath2D,
                        p5.pixelDensity() * sampleXOffset,
                        p5.pixelDensity() * sampleYOffset,
                    );

                    console.log("Render decided isInPath = " + isInPath);

                    break;
                }
            }
        }
    }
}




