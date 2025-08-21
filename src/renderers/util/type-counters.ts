import otf from 'opentype.js';

export function counterCounter(font: otf.Font, character: string): number {
    if (character.length > 1) {
        console.error("type-counters.ts | PathCounterCounter accepted a character of size " + character.length);
    }

    // Font size and x and y coords used here are dummies
    return pathCounterCounter(font.getPath(character[0], 0, 0, 20));
}

export function pathCounterCounter(characterPath: otf.Path): number {

    let counterCounter: number = 0;

    for (let command of characterPath.commands) {
        if (command.type === "Z") {
            counterCounter += 1;
        }
    }

    // This assumes that otf.Path SVG drawing commands are structured with the base letterform shape
    // followed by counters
    return counterCounter === 0 ? 0 : counterCounter - 1;
}

