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

export function freakToOriginal(p5: p5, textPaths: otf.Path[], textFillStatuses: FillStatus[][]) {
    const randomUnit = 4.5;

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
                    p5.vertex(
                        command.x + p5.random(-randomUnit, randomUnit),
                        command.y + p5.random(-randomUnit, randomUnit)
                    );
                    break;
                case "L":
                    p5.vertex(
                        command.x + p5.random(-randomUnit, randomUnit),
                        command.y + p5.random(-randomUnit, randomUnit)
                    );
                    break;
                case "C":
                    p5.bezierVertex(
                        command.x1 + p5.random(-randomUnit, randomUnit),
                        command.y1 + p5.random(-randomUnit, randomUnit),
                        command.x2 + p5.random(-randomUnit, randomUnit),
                        command.y2 + p5.random(-randomUnit, randomUnit),
                        command.x  + p5.random(-randomUnit, randomUnit),
                        command.y  + p5.random(-randomUnit, randomUnit)
                    );
                    break;
                case "Q":
                    p5.quadraticVertex(
                        command.x1 + p5.random(-randomUnit, randomUnit),
                        command.y1 + p5.random(-randomUnit, randomUnit),
                        command.x  + p5.random(-randomUnit, randomUnit),
                        command.y  + p5.random(-randomUnit, randomUnit)
                    );
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

// options looks like
export function freakToEroded(p5: p5,
                              textPaths: otf.Path[],
                              textFillStatuses: FillStatus[][],
                              options?: { [key: string]: any }) {

    // nudge factor of 7-8.3 is ideal for a letterform that is almost non-existent
    let nudgeFactor: number; //-7.6;//-8.3;
    //let unprocessedTextPaths: otf.Path[];

    if (options === undefined || !("nudgeFactor" in options) /*|| !("unprocessedTextPaths" in options)*/) {
        console.error("render-strategy.ts | freakToEroded received malformed options parameter.");
        return;
    } else {
        nudgeFactor = options["nudgeFactor"];
        //unprocessedTextPaths = options["unprocessedTextPaths"];
    }




    p5.push();
    p5.noStroke();
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++){
        const characterPath: otf.Path = textPaths[characterIndex];
        //const unprocessedCharacterPath: otf.Path = unprocessedTextPaths[characterIndex];
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
            //let unprocessedCommand: otf.PathCommand = unprocessedCharacterPath.commands[i];

            let dx: number;
            let dy: number;
            let magnitude: number;
            let offsetX: number;
            let offsetY: number;

            switch (command.type) {
                case "M":
                    p5.beginShape();
                    dx = command.y - previousPoint.y;
                    dy = previousPoint.x - command.x;
                    magnitude = Math.sqrt(dx**2 + dy**2);
                    offsetX = (dx / magnitude) * nudgeFactor;
                    offsetY = (dy / magnitude) * nudgeFactor;
                    p5.vertex(
                        command.x + offsetX,
                        command.y + offsetY
                    );
                    break;
                case "L":
                    dx = command.y - previousPoint.y;
                    dy = previousPoint.x - command.x;
                    magnitude = Math.sqrt(dx**2 + dy**2);
                    offsetX = (dx / magnitude) * nudgeFactor;
                    offsetY = (dy / magnitude) * nudgeFactor;
                    p5.vertex(
                        command.x + offsetX,
                        command.y + offsetY
                    );
                    break;
                case "C":
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
                    break;
                case "Q":
                    dx = command.y - command.y1;
                    dy = command.x1 - command.x;
                    magnitude = Math.sqrt(dx**2 + dy**2);
                    offsetX = (dx / magnitude) * nudgeFactor;
                    offsetY = (dy / magnitude) * nudgeFactor;
                    p5.quadraticVertex(
                        command.x1 + offsetX,
                        command.y1 + offsetY,
                        command.x  + offsetX,
                        command.y  + offsetY
                    );
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

            if (command.type !== "Z") {
                previousPoint.x = command.x;
                previousPoint.y = command.y;
            }
        }
    }
    p5.pop();
}
