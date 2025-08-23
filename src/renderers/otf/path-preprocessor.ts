import p5 from "p5";
import otf from "opentype.js";

export function noPreprocess(_p5: p5, textPaths: otf.Path[]): otf.Path[] {
    return textPaths;
}

export function freakTo(p5: p5, textPaths: otf.Path[], options?: { [key: string]: number }): otf.Path[] {
    let randomUnit: number;

    if (options === null || options === undefined || !("randomUnit" in options)) {
        console.error("path-preprocessor.ts | freakTo received malformed options parameter.");
        randomUnit = 3;
    } else {
        randomUnit = options["randomUnit"];
    }

    let processedTextPaths: otf.Path[] = JSON.parse(JSON.stringify(textPaths));

    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++){
        // get otf.Path object for current character
        const characterPath: otf.Path = textPaths[characterIndex];
        // This will accumulate all the new randomized path commands that we want
        let newCharacterPathCommands: otf.PathCommand[] = [];

        let previousPoint: Point = { x: 0, y: 0 };

        // process all path commands for this current character
        for (let charPathCommandIndex = 0; charPathCommandIndex < characterPath.commands.length; charPathCommandIndex++){
            let command = characterPath.commands[charPathCommandIndex];
            switch (command.type) {
                case "M":
                    newCharacterPathCommands.push({
                        type: "M",
                        x: command.x + p5.random(-randomUnit, randomUnit),
                        y: command.y + p5.random(-randomUnit, randomUnit)
                    } as otf.PathCommand);
                    break;
                case "L":
                    let lerpIntervals: number[] = [];
                    for (let i = 0; i < p5.random(0, randomUnit - 1); i++) {
                        lerpIntervals.push(p5.random(0, 0.9));
                    }
                    lerpIntervals.sort((a: number, b: number) => a - b); // sort in ascending order
                    for (let lerpInterval of lerpIntervals) {
                        let lerpedX: number = p5.lerp(previousPoint.x, command.x, lerpInterval);
                        let lerpedY: number = p5.lerp(previousPoint.y, command.y, lerpInterval);

                        // so we need to update the original textPaths as we are adding commands that need to
                        // be reflected in the original textPaths (cause we might need to use the original
                        // textPaths outside of here) -- this works fine cause arrays are passed by ref
                        textPaths[characterIndex].commands.splice(charPathCommandIndex, 0, {
                            type: "L",
                            x: lerpedX,
                            y: lerpedY
                        } as otf.PathCommand);

                        newCharacterPathCommands.push({
                            type: "L",
                            x: lerpedX + p5.random(-randomUnit/1.5, randomUnit/1.5),
                            y: lerpedY + p5.random(-randomUnit/1.5, randomUnit/1.5)
                        } as otf.PathCommand);
                    }
                    console.log("  ")

                    newCharacterPathCommands.push({
                        type: "L",
                        x: command.x + p5.random(-randomUnit, randomUnit),
                        y: command.y + p5.random(-randomUnit, randomUnit)
                    } as otf.PathCommand);

                    // as we have updated the textPaths by reference we need to adjust the charPathCommandIndex
                    // to be after the original "L" command
                    charPathCommandIndex += lerpIntervals.length;

                    break;
                case "C":
                    newCharacterPathCommands.push({
                        type: "C",
                        x1: command.x1 + p5.random(-randomUnit, randomUnit),
                        y1: command.y1 + p5.random(-randomUnit, randomUnit),
                        x2: command.x2 + p5.random(-randomUnit, randomUnit),
                        y2: command.y2 + p5.random(-randomUnit, randomUnit),
                        x: command.x   + p5.random(-randomUnit, randomUnit),
                        y: command.y   + p5.random(-randomUnit, randomUnit)
                    } as otf.PathCommand);
                    break;
                case "Q":
                    newCharacterPathCommands.push({
                        type: "Q",
                        x1: command.x1 + p5.random(-randomUnit, randomUnit),
                        y1: command.y1 + p5.random(-randomUnit, randomUnit),
                        x: command.x   + p5.random(-randomUnit, randomUnit),
                        y: command.y   + p5.random(-randomUnit, randomUnit)
                    } as otf.PathCommand);
                    break;
                case "Z":
                    newCharacterPathCommands.push({
                        type: "Z"
                    } as otf.PathCommand);
                    break;
            }

            if (command.type !== "Z") {
                previousPoint.x = command.x;
                previousPoint.y = command.y;
            }

        }

        // after processing paths and adding some randomization let's assign all the
        // new path commands to the original otf.Path[] object parameter
        processedTextPaths[characterIndex].commands = newCharacterPathCommands;
    }

    return processedTextPaths;
}