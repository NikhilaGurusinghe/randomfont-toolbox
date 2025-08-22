import otf from 'opentype.js';

export function extractShapesFromPath(path: otf.Path) : otf.PathCommand[][] {
    let currShapeCounter: number = 0;
    let currShapes: otf.PathCommand[][] = [[]];
    for (let command of path.commands) {
        if (command.type !== "Z") { // if we aren't at a close shape command
            currShapes[currShapeCounter].push(command)
        } else {
            // if we are at a close shape command
            // push it
            currShapes[currShapeCounter].push(command)
            // increment the currShapeCounter
            currShapes.push([]);
            currShapeCounter++;
        }
    }

    return currShapes;
}

export function getFirstStartPointInPath(pathCommands: otf.PathCommand[]) : (DOMPoint | null) {
    for (let command of pathCommands) {
        if (command.type === "C" ||  // cubic bezier
            command.type === "L" ||  // line to
            command.type === "Q" ) {  // quadratic bezier
            return new DOMPoint(command.x, command.y);
        }
    }

    return null;
}

export function pathCommandsToPathData(pathCommands: otf.PathCommand[], decimalPlaces: number) : string {
    let pathData: string = "";

    for (let command of pathCommands) {
        pathData += command.type + " ";
        switch (command.type) {
            case "M":
            case "L":
                command.type += command.x.toFixed(decimalPlaces) + "," + command.y.toFixed(decimalPlaces);
                break;
            case "C":
                command.type += command.x1.toFixed(decimalPlaces) + "," + command.y1.toFixed(decimalPlaces) + " " +
                                command.x2.toFixed(decimalPlaces) + "," + command.y2.toFixed(decimalPlaces) + " " +
                                command.x.toFixed(decimalPlaces) + "," + command.y.toFixed(decimalPlaces);
                break;
            case "Q":
                command.type += command.x1.toFixed(decimalPlaces) + "," + command.y1.toFixed(decimalPlaces) + " " +
                                command.x.toFixed(decimalPlaces) + "," + command.y.toFixed(decimalPlaces);
                break;
            case "Z":
                break;
        }
    }

    return pathData;
}