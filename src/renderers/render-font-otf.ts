// @ts-nocheck
//TODO remove

import p5 from 'p5';
import otf from 'opentype.js';
import { pathCounterCounter } from "./util/type-counters";

type FontRenderStrategy = (p5: p5, path: otf.Path) => void;

export function renderFont(p5: p5,
                           font: otf.Font,
                           text: string,
                           fontSize: number,
                           fontRenderer: FontRenderStrategy) : void {

    // 1. Get number of counters per letter in text
    // 2. iterate through the otf.Path generated from .getPath with this in mind -- this can tell
    //    where we are within the character

    const textPaths: otf.Path[] = font.getPaths(text, 0, 0, fontSize);
    const textPath: otf.Path = font.getPath(text, 0, 0, fontSize);

    const ctx: CanvasRenderingContext2D = p5.drawingContext;

    // pre-processing fonts
    const characterCounters: number[] = [];

    for (const characterPath of textPaths) {
        const counterCount: number = pathCounterCounter(characterPath);
        characterCounters.push(counterCount);

        if (counterCount > 0) { // the current character has one or more counters!
            let sampleX: number = 0;
            let sampleY: number = 0;

            for (let command of characterPath.commands) {
                // if we have a counter we want to find a point using the cardinal directions trick
                // this will get us the "next" point but that is sufficient for us as it is a point
                // on the outline of the shape

                if (command.type === "C" ||  // cubic bezier
                    command.type === "L" ||  // line to
                    command.type === "Q") {  // quadratic bezier
                    sampleX = command.x;
                    sampleY = command.y;
                    break;
                }
            }

            // now we need to sample around the (sampleX, sampleY) coordinate we have and test against
            // ctx.isPointInPath with the relevant characterPath as the path
            const characterPath2D: Path2D = new Path2D(characterPath.toPathData());
            const isInPath: boolean = ctx.isPointInPath(characterPath2D, p5.pixelDensity() * sampleX, p5.pixelDensity() * sampleY);






            // then sample this point in the textPath using ctx.isPointInPath

        }


    }





}




