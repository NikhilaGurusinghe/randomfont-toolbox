import p5 from 'p5';

import '@src/styles/sketch.css';

import * as ReadQueryParams from '@src/utils/read-query-params';
import { letterImagePaths } from './magazine-letter-paths';

const wordToSpell: string = "ransom";
let currLetterInWordToSpell: number = 0;
// ransom
// anonymous
// murderer
const randomSeedQueryName: string = "random-seed";
const heldStickerShadowColour: string = "rgba(0, 0, 0, 0.2)";
const heldStickerShadowBlur: number = 12;
const heldStickerShadowOffsetX: number = -3;
const heldStickerShadowOffsetY: number = 3;
const pastedStickerShadowColour: string = "rgba(0, 0, 0, 0.34)";
const pastedStickerShadowBlur: number = 3;
const pastedStickerShadowOffsetX: number = 0;
const pastedStickerShadowOffsetY: number = 0;
const gridRows: number = 20;
const gridColumns: number = 20;
const gridStrokeColour: number = 100;
const gridStrokeAlpha: number = 0.15;
const gridStrokeWeight: number = 0.6;
let currImageSizeMultiplier: number = 0.5;
const cursorType: string = "grab";
const onMouseDownStickerSize: number = 1.03;
const placedStickers: { sticker: p5.Image, coordinates: Point, rotation: number, imageSizeMultiplier: number }[] = [];
const letterImageMap: Map<string, p5.Image[]> = new Map<string, p5.Image[]>();
// this stops the sticker from moving when mouse is down
let onMouseDownMousePosLock: Point = { x: 0, y: 0 };
// @ts-ignore
let currentStickerRotation: number = 0;
const maxStickerRotation: number = 30;
let currentHeldSticker : p5.Image;
let ctx: CanvasRenderingContext2D;

function sketch(p5: p5) : void {

    p5.preload = () : void => {
        // setting anglemode to degrees
        p5.angleMode(p5.DEGREES);

        // getting the random seed from the url (if it is provided as a query parameter)
        const queryParamRandomSeed: number | null = ReadQueryParams.getQueryParamNumber(randomSeedQueryName)
        if (queryParamRandomSeed !== null) {
            p5.randomSeed(queryParamRandomSeed);
            console.log("sketch.ts | the current random seed (via query param) is: " + queryParamRandomSeed);
        }

        // initialising letterImageMap to all empty for all supported characters
        letterImagePaths.forEach((letterImagePath: string[], letter: string) => {
            letterImageMap.set(letter, []);
            letterImagePath.forEach((path: string) => {
                letterImageMap.get(letter)?.push(p5.loadImage(path));
            })
        })

        const firstSticker: p5.Image | null | undefined = getNextRandomLetterImage();
        if (firstSticker === undefined) {
            console.error("sketch.ts | Fatal Error: at letter \"" + wordToSpell[0] + "\" there was no associated " +
                "image paths in letterImageMap (.get returned undefined).");
            return; // TODO better error handling here
        } else if (firstSticker === null) {
            console.error("sketch.ts | Fatal Error: the first request for getNextRandomLetterImage() has reached" +
                "the end of wordToSpell");
            return; // TODO better error handling here
        }
        currentHeldSticker = firstSticker;
        currentStickerRotation = p5.random(-maxStickerRotation, maxStickerRotation);

    }

    p5.setup = () : void => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        ctx = p5.drawingContext as CanvasRenderingContext2D;

        p5.cursor(cursorType);
    };

    p5.draw = () : void => {
        p5.clear();
        const areAllLettersDrawn: boolean = currLetterInWordToSpell >= wordToSpell.length + 1;

        if (!areAllLettersDrawn) {
            drawGrid(gridRows, gridColumns, gridStrokeColour, gridStrokeAlpha, gridStrokeWeight);
        }

        // draw previously placed stickers
        placedStickers.forEach(({ sticker, coordinates, rotation, imageSizeMultiplier }) => {
            const scaledStickerWidth = sticker.width * imageSizeMultiplier;
            const scaledStickerHeight = sticker.height * imageSizeMultiplier;
            p5.push();
            p5.translate(coordinates.x + scaledStickerWidth / 2, coordinates.y + scaledStickerHeight / 2);
            p5.rotate(rotation);
            ctx.save();
            ctx.shadowColor = pastedStickerShadowColour;
            ctx.shadowBlur = pastedStickerShadowBlur;
            ctx.shadowOffsetX = pastedStickerShadowOffsetX;
            ctx.shadowOffsetY = pastedStickerShadowOffsetY;
            p5.image(
                sticker,
                -scaledStickerWidth / 2,
                -scaledStickerHeight / 2,
                scaledStickerWidth,
                scaledStickerHeight
            );
            ctx.restore();
            p5.pop();
        });

        // don't draw anything under the cursor if all letters are drawn
        if (areAllLettersDrawn) return;

        // draw the current held sticker under the mouse rotated around its center
        // shadow only when not pressed
        const isLeftMouseDown: boolean = p5.mouseIsPressed && p5.mouseButton === "left";
        ctx.save();

        if (!isLeftMouseDown) {
            ctx.shadowColor = heldStickerShadowColour;
            ctx.shadowBlur = heldStickerShadowBlur;
            ctx.shadowOffsetX = heldStickerShadowOffsetX;
            ctx.shadowOffsetY = heldStickerShadowOffsetY;
        } else {
            ctx.shadowColor = pastedStickerShadowColour;
            ctx.shadowBlur = pastedStickerShadowBlur;
            ctx.shadowOffsetX = pastedStickerShadowOffsetX;
            ctx.shadowOffsetY = pastedStickerShadowOffsetY;
        }

        const translateX: number = isLeftMouseDown ? onMouseDownMousePosLock.x : p5.mouseX;
        const translateY: number = isLeftMouseDown ? onMouseDownMousePosLock.y : p5.mouseY;

        const stickerWidth: number = currentHeldSticker.width * (!isLeftMouseDown ? onMouseDownStickerSize : 1) * currImageSizeMultiplier;
        const stickerHeight: number = currentHeldSticker.height * (!isLeftMouseDown ? onMouseDownStickerSize : 1) * currImageSizeMultiplier;

        p5.push();
        p5.translate(translateX, translateY);
        p5.rotate(currentStickerRotation);
        p5.image(
            currentHeldSticker,
            -stickerWidth / 2,
            -stickerHeight / 2,
            stickerWidth,
            stickerHeight);
        p5.pop();

        ctx.restore();

    }

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    p5.mouseWheel = (event: WheelEvent) : boolean => {
        if (event.deltaY > 0) {
            currentStickerRotation += 1;
        } else {
            currentStickerRotation -= 1;
        }

        return false;
    }

    p5.keyPressed = () : void => {
        if (p5.key === "ArrowUp") {
            currImageSizeMultiplier += 0.01;
        } else if (p5.key === "ArrowDown") {
            currImageSizeMultiplier -= 0.01;
        }

    }

    // onMouseDown
    p5.mousePressed = () : void => {
        if (p5.mouseButton !== "left")  return;

        // left mouse clicks only past this point
        // this stops the sticker from moving when mouse is down
        onMouseDownMousePosLock.x = p5.mouseX;
        onMouseDownMousePosLock.y = p5.mouseY;
    }

    // onMouseUp
    p5.mouseReleased = () : boolean => {
        if (p5.mouseButton !== "left" || currLetterInWordToSpell >= wordToSpell.length + 1)  return false;

        // left mouse clicks only past this point
        // this supports the behaviour where stops the sticker from moving when mouse is down
        placedStickers.push({
            sticker: currentHeldSticker,
            coordinates:
                {x: onMouseDownMousePosLock.x - (currentHeldSticker.width * currImageSizeMultiplier) / 2,
                    y: onMouseDownMousePosLock.y - (currentHeldSticker.height * currImageSizeMultiplier) / 2},
            rotation: currentStickerRotation,
            imageSizeMultiplier: currImageSizeMultiplier,
        });

        const nextSticker: p5.Image | null | undefined = getNextRandomLetterImage();
        if (nextSticker === undefined) {
            console.error("sketch.ts | Fatal Error: at letter \"" + wordToSpell[0] + "\" there was no associated " +
                "image paths in letterImageMap (.get returned undefined).");
            return false; // TODO better error handling here
        } else if (nextSticker === null) {
            p5.cursor("not-allowed");
        } else {
            currentHeldSticker = nextSticker;
        }
        currentStickerRotation = p5.random(-maxStickerRotation, maxStickerRotation);

        return false;
    }

    function getNextRandomLetterImage(withoutReplacement: boolean = true) : p5.Image | undefined | null {
        // if we're requesting letters that don't exist then return null
        if (currLetterInWordToSpell >= wordToSpell.length) {
            currLetterInWordToSpell += 1;
            return null;
        }

        const nextLetterImage: p5.Image | undefined =
            getRandomLetterImage(wordToSpell[currLetterInWordToSpell], withoutReplacement);

        currLetterInWordToSpell += 1;
        return nextLetterImage;
    }

    function getRandomLetterImage(letter: string, withoutReplacement: boolean = true) : p5.Image | undefined {
        const letterImageArray: p5.Image[] | undefined = letterImageMap.get(letter);

        if (!letterImageArray) return undefined;

        const randomArrayIndex: number = Math.floor(p5.random() * letterImageArray.length);
        const letterImage: p5.Image = letterImageArray[randomArrayIndex];

        // remove 1 element at index randomArrayIndex if we don't want to replace
        if (withoutReplacement) {
            letterImageArray.splice(randomArrayIndex, 1);
        }

        return letterImage;
    }

    function drawGrid(rows: number, columns: number, strokeColour: number, strokeAlpha: number, strokeWeight: number) {
        // compute square cell size so cells remain square
        const cellSize = Math.min(p5.width / columns, p5.height / rows);

        p5.push();
        p5.stroke(strokeColour, Math.round(strokeAlpha * 255));
        p5.strokeWeight(strokeWeight);

        const numberOfColsHalf = Math.ceil((p5.width/2)/cellSize);
        for (let x = -numberOfColsHalf; x < numberOfColsHalf; x++) {
            p5.line(p5.width/2 + x * cellSize, 0, p5.width/2 + x * cellSize, p5.height);
        }

        const numberOfRowsHalf = Math.ceil((p5.height/2)/cellSize);
        for (let y = -numberOfRowsHalf; y < numberOfRowsHalf; y++) {
            p5.line( 0, p5.height/2 + y * cellSize, p5.width, p5.height/2 + y * cellSize);
        }
        p5.pop();
    }
}

new p5(sketch);
