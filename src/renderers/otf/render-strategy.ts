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
                        command.x + p5.random(-randomUnit, randomUnit),
                        command.y + p5.random(-randomUnit, randomUnit)
                    );
                    break;
                case "Q":
                    p5.quadraticVertex(
                        command.x1 + p5.random(-randomUnit, randomUnit),
                        command.y1 + p5.random(-randomUnit, randomUnit),
                        command.x + p5.random(-randomUnit, randomUnit),
                        command.y + p5.random(-randomUnit, randomUnit)
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

export function freakTo(p5: p5, textPaths: otf.Path[], textFillStatuses: FillStatus[][]) {
    const randomUnit = 4;

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

        let previousPoint: Point = { x: 0, y: 0 };

        for (let command of characterPath.commands) {
            switch (command.type) {
                case "M":
                    p5.beginShape();
                    p5.vertex(
                        command.x + p5.random(-randomUnit, randomUnit),
                        command.y + p5.random(-randomUnit, randomUnit)
                    );
                    previousPoint.x = command.x;
                    previousPoint.y = command.y;
                    break;
                case "L":
                    let lerpIntervals: number[] = [];
                    for (let i = 0; i < p5.random(0, randomUnit-1); i++) {
                        lerpIntervals.push(p5.random(0, 0.9));
                    }
                    lerpIntervals.sort((a: number, b: number) => a - b); // sort in ascending order
                    for (let lerpInterval of lerpIntervals) {
                        p5.vertex(
                            p5.lerp(previousPoint.x, command.x, lerpInterval) + p5.random(-randomUnit/1.5, randomUnit/1.5),
                            p5.lerp(previousPoint.y, command.y, lerpInterval) + p5.random(-randomUnit/1.5, randomUnit/1.5),
                        );
                    }

                    p5.vertex(
                        command.x + p5.random(-randomUnit, randomUnit),
                        command.y + p5.random(-randomUnit, randomUnit)
                    );
                    previousPoint.x = command.x;
                    previousPoint.y = command.y;
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
                    previousPoint.x = command.x;
                    previousPoint.y = command.y;
                    break;
                case "Q":
                    p5.quadraticVertex(
                        command.x1 + p5.random(-randomUnit, randomUnit),
                        command.y1 + p5.random(-randomUnit, randomUnit),
                        command.x  + p5.random(-randomUnit, randomUnit),
                        command.y  + p5.random(-randomUnit, randomUnit)
                    );
                    previousPoint.x = command.x;
                    previousPoint.y = command.y;
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
