import p5 from 'p5';
import otf from 'opentype.js';
import { FillStatus, textBackgroundColour, textForegroundColour } from "./render-font";

export function filled(p5: p5, textPaths: otf.Path[], textFillStatuses: FillStatus[][]) {

    p5.push();
    p5.noStroke();
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++){
        const characterPath: otf.Path = textPaths[characterIndex];
        const characterFillStatus: FillStatus[] = textFillStatuses[characterIndex];
        let textFillStatusCounter: number = 0;

        if (characterFillStatus[textFillStatusCounter] === FillStatus.FILLED) {
            p5.fill(textForegroundColour);
        } else if (characterFillStatus[textFillStatusCounter] === FillStatus.OPEN) {
            p5.fill(textBackgroundColour);
        }

        for (let command of characterPath.commands) {
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
                    textFillStatusCounter++;
                    if (characterFillStatus[textFillStatusCounter] === FillStatus.FILLED) {
                        p5.fill(textForegroundColour);
                    } else if (characterFillStatus[textFillStatusCounter] === FillStatus.OPEN) {
                        p5.fill(textBackgroundColour);
                    }
                    break;
            }
        }
    }
    p5.pop();
}

function isNumberArray(x: unknown): x is number[] {
    return Array.isArray(x) && x.every(v => typeof v === 'number');
}

// options looks like
export function erode(p5: p5,
                      textPaths: otf.Path[],
                      textFillStatuses: FillStatus[][],
                      options?: { [key: string]: any }) {

    let unprocessedTextPaths: otf.Path[];

    if (options === undefined || !("erosionStrength" in options) || !("unprocessedTextPaths" in options)) {
        console.error("render-strategy.ts | freakToEroded received malformed options parameter.");
        return;
    } else {
        unprocessedTextPaths = options["unprocessedTextPaths"];
    }

    // This allows for the nudge factor to be passed in as a single number or an array of numbers (one nudge factor for
    // each character in textPaths.
    const rawErosion= options["erosionStrength"]; //-7.6;//-8.3;
    const isRawErosionNumberArray: boolean = isNumberArray(rawErosion);
    if (!isRawErosionNumberArray && typeof rawErosion !== "number") {
        console.error("render-strategy.ts | erosionStrength must be a number or number[]");
        return;
    }
    if (isRawErosionNumberArray && (rawErosion as number[]).length !== textPaths.length) {
        console.error("render-strategy.ts | if erosionStrength is a number[], then it must be length of textPaths" +
            "currently rawErosion is length " + (rawErosion as number[]).length + " " +
            "and textPaths.length is " + textPaths.length);
        return;
    }

    p5.push();
    p5.noStroke();
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++){
        // nudge factor of 7-8.3 is ideal for a letterform that is almost non-existent //-7.6;//-8.3;
        const nudgeFactor: number = typeof rawErosion === "number" ? rawErosion : rawErosion[characterIndex];
        const characterPath: otf.Path = textPaths[characterIndex];
        const unprocessedCharacterPath: otf.Path = unprocessedTextPaths[characterIndex];
        const characterFillStatus: FillStatus[] = textFillStatuses[characterIndex];
        let textFillStatusCounter: number = 0;

        if (characterFillStatus[textFillStatusCounter] === FillStatus.FILLED) {
            p5.fill(textForegroundColour);
        } else if (characterFillStatus[textFillStatusCounter] === FillStatus.OPEN) {
            p5.fill(textBackgroundColour);
        }

        let previousPoint: Point = { x: 0, y: 0 };

        for (let i = 0; i < characterPath.commands.length; i++){
            let command: otf.PathCommand = characterPath.commands[i];
            let unprocessedCommand: otf.PathCommand = unprocessedCharacterPath.commands[i];

            let dx: number;
            let dy: number;
            let magnitude: number;
            let offsetX: number;
            let offsetY: number;

            if (command.type !== unprocessedCommand.type) {
                console.error("render-strategy.ts | something has gone wrong in otf\render-font.ts#getTextPaths" +
                    " regarding the lengths of the outputted otf.Path[]");
            }

            if (command.type === "M" && unprocessedCommand.type === "M") {
                p5.beginShape();
                dx = unprocessedCommand.y - previousPoint.y;
                dy = previousPoint.x - unprocessedCommand.x;
                magnitude = Math.sqrt(dx ** 2 + dy ** 2);
                offsetX = (dx / magnitude) * nudgeFactor;
                offsetY = (dy / magnitude) * nudgeFactor;
                p5.vertex(
                    command.x + offsetX,
                    command.y + offsetY
                );

                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            } else if (command.type === "L" && unprocessedCommand.type === "L") {
                dx = unprocessedCommand.y - previousPoint.y;
                dy = previousPoint.x - unprocessedCommand.x;
                magnitude = Math.sqrt(dx ** 2 + dy ** 2);
                offsetX = (dx / magnitude) * nudgeFactor/1.5;
                offsetY = (dy / magnitude) * nudgeFactor/1.5;

                // TODO this makes font outlines spiky and not thin which is bad
                p5.vertex(
                    command.x + offsetX,
                    command.y + offsetY
                );

                // Update previous point consistently
                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            } else if (command.type === "C" && unprocessedCommand.type === "C") {
                console.error("render-strategy.ts | a cubic bezier was drawn! This is really bad.")
                // TODO i haven't seen a single curve invoke this, so I've just ignored this
                p5.bezierVertex(
                    command.x1,
                    command.y1,
                    command.x2,
                    command.y2,
                    command.x,
                    command.y
                );

                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            } else if (command.type === "Q" && unprocessedCommand.type === "Q") {
                dx = unprocessedCommand.y - unprocessedCommand.y1;
                dy = unprocessedCommand.x1 - unprocessedCommand.x;
                magnitude = Math.sqrt(dx ** 2 + dy ** 2);
                offsetX = (dx / magnitude) * nudgeFactor;
                offsetY = (dy / magnitude) * nudgeFactor;
                p5.quadraticVertex(
                    command.x1 + offsetX,
                    command.y1 + offsetY,
                    command.x + offsetX,
                    command.y + offsetY
                );

                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            } else if (command.type === "Z" && unprocessedCommand.type === "Z") {
                p5.endShape(p5.CLOSE);

                textFillStatusCounter++;
                if (characterFillStatus[textFillStatusCounter] === FillStatus.FILLED) {
                    p5.fill(textForegroundColour);
                } else if (characterFillStatus[textFillStatusCounter] === FillStatus.OPEN) {
                    p5.fill(textBackgroundColour);
                }
            }
        }
    }
    p5.pop();
}
