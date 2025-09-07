import p5 from 'p5';

import '@src/styles/sketch.css';

import * as ReadQueryParams from '@src/utils/read-query-params';
import { letterImagePaths } from './magazine-letter-paths';

const wordToSpell: string = "DAransom";
let currLetterInWordToSpell: number = 0;
// ransom
// anonymous
// murderer
const randomSeedQueryName: string = "random-seed";
const heldStickerShadowColour: string = "rgba(0, 0, 0, 0.2)";
const heldStickerShadowBlur: number = 8;
const heldStickerShadowOffsetX: number = -3;
const heldStickerShadowOffsetY: number = 3;
const pastedStickerShadowColour: string = "rgba(0, 0, 0, 0.187)";
const pastedStickerShadowBlur: number = 3;
const pastedStickerShadowOffsetX: number = 0;
const pastedStickerShadowOffsetY: number = 0;
const cursorType: string = "grab";
const onMouseDownStickerSize: number = 0.97;
const placedStickers: { sticker: p5.Image, coordinates: Point, rotation: number }[] = [];
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

        // draw previously placed stickers
        placedStickers.forEach(({ sticker, coordinates, rotation }) => {
            p5.push();
            p5.translate(coordinates.x + sticker.width / 2, coordinates.y + sticker.height / 2);
            p5.rotate(rotation);
            ctx.save();
            ctx.shadowColor = pastedStickerShadowColour;
            ctx.shadowBlur = pastedStickerShadowBlur;
            ctx.shadowOffsetX = pastedStickerShadowOffsetX;
            ctx.shadowOffsetY = pastedStickerShadowOffsetY;
            p5.image(sticker, -sticker.width / 2, -sticker.height / 2);
            ctx.restore();
            p5.pop();
        });

        // draw the current held sticker under the mouse rotated around its center
        // shadow only when not pressed
        const isLeftMouseDown: boolean = p5.mouseIsPressed && p5.mouseButton === "left";
        if (!isLeftMouseDown) {
            ctx.save();
            ctx.shadowColor = heldStickerShadowColour;
            ctx.shadowBlur = heldStickerShadowBlur;
            ctx.shadowOffsetX = heldStickerShadowOffsetX;
            ctx.shadowOffsetY = heldStickerShadowOffsetY;
        }

        const translateX: number = isLeftMouseDown ? onMouseDownMousePosLock.x : p5.mouseX;
        const translateY: number = isLeftMouseDown ? onMouseDownMousePosLock.y : p5.mouseY;

        const stickerWidth: number = currentHeldSticker.width * (isLeftMouseDown ? onMouseDownStickerSize : 1);
        const stickerHeight: number = currentHeldSticker.height * (isLeftMouseDown ? onMouseDownStickerSize : 1);

        p5.push();
        p5.translate(translateX, translateY);
        p5.rotate(currentStickerRotation);
        p5.image(currentHeldSticker, -stickerWidth / 2, -stickerHeight / 2, stickerWidth, stickerHeight);
        p5.pop();

        if (!isLeftMouseDown) {
            ctx.restore();
        }
    }

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
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
    p5.mouseReleased = () : void => {
        if (p5.mouseButton !== "left")  return;

        // left mouse clicks only past this point
        // this supports the behaviour where stops the sticker from moving when mouse is down
        placedStickers.push({
            sticker: currentHeldSticker,
            coordinates:
                {x: onMouseDownMousePosLock.x - currentHeldSticker.width / 2,
                    y: onMouseDownMousePosLock.y - currentHeldSticker.height / 2},
            rotation: currentStickerRotation
        });

        const nextSticker: p5.Image | null | undefined = getNextRandomLetterImage();
        if (nextSticker === undefined) {
            console.error("sketch.ts | Fatal Error: at letter \"" + wordToSpell[0] + "\" there was no associated " +
                "image paths in letterImageMap (.get returned undefined).");
            return; // TODO better error handling here
        } else if (nextSticker === null) {
            //currentHeldSticker = null;
            console.log("NO MORE STICKERS!!")
        } else {
            currentHeldSticker = nextSticker;
            console.log(letterImageMap)
        }
        currentStickerRotation = p5.random(-maxStickerRotation, maxStickerRotation);
        console.log(currentStickerRotation)
    }

    function getNextRandomLetterImage(withoutReplacement: boolean = true) : p5.Image | undefined | null {
        // if we're requesting letters that don't exist then return null
        if (currLetterInWordToSpell >= wordToSpell.length) return null;

        console.log(wordToSpell[currLetterInWordToSpell])
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
}

new p5(sketch);
