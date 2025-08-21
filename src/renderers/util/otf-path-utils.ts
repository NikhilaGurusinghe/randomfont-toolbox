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

export function getFirstStartPointInPath(path: otf.Path) : (DOMPoint | null) {
    for (let command of path.commands) {
        if (command.type === "C" ||  // cubic bezier
            command.type === "L" ||  // line to
            command.type === "Q" ) {  // quadratic bezier
            return new DOMPoint(command.x, command.y);
        }
    }

    return null;
}