"use strict";
(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[284],{

/***/ 481:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/.pnpm/p5@1.11.10/node_modules/p5/lib/p5.min.js
var p5_min = __webpack_require__(996);
var p5_min_default = /*#__PURE__*/__webpack_require__.n(p5_min);
;// ./src/utils/read-query-params.ts
function getQueryParamString(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}
function getQueryParamNumber(name) {
    const raw = getQueryParamString(name);
    if (raw === null)
        return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
}

;// ./src/assets/images/magazine-letters/a/a_0.png
const a_0_namespaceObject = __webpack_require__.p + "assets/images/a_0.d8ffe7ee.png";
;// ./src/assets/images/magazine-letters/a/a_1.png
const a_1_namespaceObject = __webpack_require__.p + "assets/images/a_1.ce8a749d.png";
;// ./src/assets/images/magazine-letters/a/a_2.png
const a_2_namespaceObject = __webpack_require__.p + "assets/images/a_2.d14312c6.png";
;// ./src/assets/images/magazine-letters/a/a_3.png
const a_3_namespaceObject = __webpack_require__.p + "assets/images/a_3.449ab863.png";
;// ./src/assets/images/magazine-letters/a/a_4.png
const a_4_namespaceObject = __webpack_require__.p + "assets/images/a_4.51abba71.png";
;// ./src/assets/images/magazine-letters/m/m_0.png
const m_0_namespaceObject = __webpack_require__.p + "assets/images/m_0.c72d5810.png";
;// ./src/assets/images/magazine-letters/m/m_1.png
const m_1_namespaceObject = __webpack_require__.p + "assets/images/m_1.bcb6ee19.png";
;// ./src/assets/images/magazine-letters/m/m_2.png
const m_2_namespaceObject = __webpack_require__.p + "assets/images/m_2.fdb9f04f.png";
;// ./src/assets/images/magazine-letters/m/m_3.png
const m_3_namespaceObject = __webpack_require__.p + "assets/images/m_3.bf2d6ba6.png";
;// ./src/assets/images/magazine-letters/n/n_0.png
const n_0_namespaceObject = __webpack_require__.p + "assets/images/n_0.9f052830.png";
;// ./src/assets/images/magazine-letters/n/n_1.png
const n_1_namespaceObject = __webpack_require__.p + "assets/images/n_1.c91c9fb1.png";
;// ./src/assets/images/magazine-letters/n/n_2.png
const n_2_namespaceObject = __webpack_require__.p + "assets/images/n_2.aa48ad53.png";
;// ./src/assets/images/magazine-letters/n/n_3.png
const n_3_namespaceObject = __webpack_require__.p + "assets/images/n_3.3d0a24d9.png";
;// ./src/assets/images/magazine-letters/n/n_4.png
const n_4_namespaceObject = __webpack_require__.p + "assets/images/n_4.74fd9196.png";
;// ./src/assets/images/magazine-letters/n/n_5.png
const n_5_namespaceObject = __webpack_require__.p + "assets/images/n_5.b8dc1897.png";
;// ./src/assets/images/magazine-letters/n/n_6.png
const n_6_namespaceObject = __webpack_require__.p + "assets/images/n_6.e4823507.png";
;// ./src/assets/images/magazine-letters/o/o_0.png
const o_0_namespaceObject = __webpack_require__.p + "assets/images/o_0.0d3c113d.png";
;// ./src/assets/images/magazine-letters/o/o_1.png
const o_1_namespaceObject = __webpack_require__.p + "assets/images/o_1.a6d55fa6.png";
;// ./src/assets/images/magazine-letters/o/o_2.png
const o_2_namespaceObject = __webpack_require__.p + "assets/images/o_2.b138ef38.png";
;// ./src/assets/images/magazine-letters/o/o_3.png
const o_3_namespaceObject = __webpack_require__.p + "assets/images/o_3.9300adda.png";
;// ./src/assets/images/magazine-letters/o/o_4.png
const o_4_namespaceObject = __webpack_require__.p + "assets/images/o_4.d8da9b6c.png";
;// ./src/assets/images/magazine-letters/o/o_5.png
const o_5_namespaceObject = __webpack_require__.p + "assets/images/o_5.ea6bfd97.png";
;// ./src/assets/images/magazine-letters/o/o_6.png
const o_6_namespaceObject = __webpack_require__.p + "assets/images/o_6.8033cde9.png";
;// ./src/assets/images/magazine-letters/r/r_0.png
const r_0_namespaceObject = __webpack_require__.p + "assets/images/r_0.539c71fd.png";
;// ./src/assets/images/magazine-letters/r/r_1.png
const r_1_namespaceObject = __webpack_require__.p + "assets/images/r_1.297e12a0.png";
;// ./src/assets/images/magazine-letters/r/r_2.png
const r_2_namespaceObject = __webpack_require__.p + "assets/images/r_2.b6ab93e1.png";
;// ./src/assets/images/magazine-letters/r/r_3.png
const r_3_namespaceObject = __webpack_require__.p + "assets/images/r_3.16e1d061.png";
;// ./src/assets/images/magazine-letters/r/r_4.png
const r_4_namespaceObject = __webpack_require__.p + "assets/images/r_4.3134e951.png";
;// ./src/assets/images/magazine-letters/r/r_5.png
const r_5_namespaceObject = __webpack_require__.p + "assets/images/r_5.c0470785.png";
;// ./src/assets/images/magazine-letters/r/r_6.png
const r_6_namespaceObject = __webpack_require__.p + "assets/images/r_6.62c55513.png";
;// ./src/assets/images/magazine-letters/s/s_0.png
const s_0_namespaceObject = __webpack_require__.p + "assets/images/s_0.e945fbcd.png";
;// ./src/assets/images/magazine-letters/s/s_1.png
const s_1_namespaceObject = __webpack_require__.p + "assets/images/s_1.c71e1eaa.png";
;// ./src/assets/images/magazine-letters/s/s_2.png
const s_2_namespaceObject = __webpack_require__.p + "assets/images/s_2.e926287c.png";
;// ./src/assets/images/magazine-letters/s/s_3.png
const s_3_namespaceObject = __webpack_require__.p + "assets/images/s_3.01300d06.png";
;// ./src/assets/images/magazine-letters/s/s_4.png
const s_4_namespaceObject = __webpack_require__.p + "assets/images/s_4.37a6b22a.png";
;// ./src/assets/images/magazine-letters/s/s_5.png
const s_5_namespaceObject = __webpack_require__.p + "assets/images/s_5.252e918e.png";
;// ./src/experiments/small/magazine-letter-paths.ts




































const letterImagePaths = new Map([
    ['a', [a_0_namespaceObject, a_1_namespaceObject, a_2_namespaceObject, a_3_namespaceObject, a_4_namespaceObject]],
    ['m', [m_0_namespaceObject, m_1_namespaceObject, m_2_namespaceObject, m_3_namespaceObject]],
    ['n', [n_0_namespaceObject, n_1_namespaceObject, n_2_namespaceObject, n_3_namespaceObject, n_4_namespaceObject, n_5_namespaceObject, n_6_namespaceObject]],
    ['o', [o_0_namespaceObject, o_1_namespaceObject, o_2_namespaceObject, o_3_namespaceObject, o_4_namespaceObject, o_5_namespaceObject, o_6_namespaceObject]],
    ['r', [r_0_namespaceObject, r_1_namespaceObject, r_2_namespaceObject, r_3_namespaceObject, r_4_namespaceObject, r_5_namespaceObject, r_6_namespaceObject]],
    ['s', [s_0_namespaceObject, s_1_namespaceObject, s_2_namespaceObject, s_3_namespaceObject, s_4_namespaceObject, s_5_namespaceObject]],
]);

;// ./src/experiments/small/sketch.ts




const wordToSpell = "ransom";
let currLetterInWordToSpell = 0;
const randomSeedQueryName = "random-seed";
const heldStickerShadowColour = "rgba(0, 0, 0, 0.2)";
const heldStickerShadowBlur = 12;
const heldStickerShadowOffsetX = -3;
const heldStickerShadowOffsetY = 3;
const pastedStickerShadowColour = "rgba(0, 0, 0, 0.34)";
const pastedStickerShadowBlur = 3;
const pastedStickerShadowOffsetX = 0;
const pastedStickerShadowOffsetY = 0;
const gridRows = 20;
const gridColumns = 20;
const gridStrokeColour = 100;
const gridStrokeAlpha = 0.15;
const gridStrokeWeight = 0.6;
let currImageSizeMultiplier = 0.5;
const cursorType = "grab";
const onMouseDownStickerSize = 1.03;
const placedStickers = [];
const letterImageMap = new Map();
let onMouseDownMousePosLock = { x: 0, y: 0 };
let currentStickerRotation = 0;
const maxStickerRotation = 30;
let currentHeldSticker;
let ctx;
function sketch(p5) {
    p5.preload = () => {
        alert("𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝘀\n" +
            "   𝗹𝗲𝗳𝘁 𝗰𝗹𝗶𝗰𝗸 🡺 place a letter down\n" +
            "   𝘀𝗰𝗿𝗼𝗹𝗹 𝘄𝗵𝗲𝗲𝗹/𝘁𝗿𝗮𝗰𝗸𝗽𝗮𝗱 𝘀𝗰𝗿𝗼𝗹𝗹 🡺 rotate letter\n" +
            "   𝘂𝗽 𝗮𝗿𝗿𝗼𝘄 🡺 scale letter up\n" +
            "   𝗱𝗼𝘄𝗻 𝗮𝗿𝗿𝗼𝘄 🡺 scale letter down\n" +
            "   𝘀𝗽𝗮𝗰𝗲𝗯𝗮𝗿 🡺 take a screenshot of the letters!" +
            "after placing all letters click once more to refresh the page.");
        p5.angleMode(p5.DEGREES);
        const queryParamRandomSeed = getQueryParamNumber(randomSeedQueryName);
        if (queryParamRandomSeed !== null) {
            p5.randomSeed(queryParamRandomSeed);
            console.log("sketch.ts | the current random seed (via query param) is: " + queryParamRandomSeed);
        }
        letterImagePaths.forEach((letterImagePath, letter) => {
            letterImageMap.set(letter, []);
            letterImagePath.forEach((path) => {
                letterImageMap.get(letter)?.push(p5.loadImage(path));
            });
        });
        const firstSticker = getNextRandomLetterImage();
        if (firstSticker === undefined) {
            console.error("sketch.ts | Fatal Error: at letter \"" + wordToSpell[0] + "\" there was no associated " +
                "image paths in letterImageMap (.get returned undefined).");
            return;
        }
        else if (firstSticker === null) {
            console.error("sketch.ts | Fatal Error: the first request for getNextRandomLetterImage() has reached" +
                "the end of wordToSpell");
            return;
        }
        currentHeldSticker = firstSticker;
        currentStickerRotation = p5.random(-maxStickerRotation, maxStickerRotation);
    };
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        ctx = p5.drawingContext;
        p5.cursor(cursorType);
    };
    p5.draw = () => {
        p5.clear();
        const areAllLettersDrawn = currLetterInWordToSpell >= wordToSpell.length + 1;
        if (!areAllLettersDrawn) {
            drawGrid(gridRows, gridColumns, gridStrokeColour, gridStrokeAlpha, gridStrokeWeight);
        }
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
            p5.image(sticker, -scaledStickerWidth / 2, -scaledStickerHeight / 2, scaledStickerWidth, scaledStickerHeight);
            ctx.restore();
            p5.pop();
        });
        if (areAllLettersDrawn)
            return;
        const isLeftMouseDown = p5.mouseIsPressed && p5.mouseButton === "left";
        ctx.save();
        if (!isLeftMouseDown) {
            ctx.shadowColor = heldStickerShadowColour;
            ctx.shadowBlur = heldStickerShadowBlur;
            ctx.shadowOffsetX = heldStickerShadowOffsetX;
            ctx.shadowOffsetY = heldStickerShadowOffsetY;
        }
        else {
            ctx.shadowColor = pastedStickerShadowColour;
            ctx.shadowBlur = pastedStickerShadowBlur;
            ctx.shadowOffsetX = pastedStickerShadowOffsetX;
            ctx.shadowOffsetY = pastedStickerShadowOffsetY;
        }
        const translateX = isLeftMouseDown ? onMouseDownMousePosLock.x : p5.mouseX;
        const translateY = isLeftMouseDown ? onMouseDownMousePosLock.y : p5.mouseY;
        const stickerWidth = currentHeldSticker.width * (!isLeftMouseDown ? onMouseDownStickerSize : 1) * currImageSizeMultiplier;
        const stickerHeight = currentHeldSticker.height * (!isLeftMouseDown ? onMouseDownStickerSize : 1) * currImageSizeMultiplier;
        p5.push();
        p5.translate(translateX, translateY);
        p5.rotate(currentStickerRotation);
        p5.image(currentHeldSticker, -stickerWidth / 2, -stickerHeight / 2, stickerWidth, stickerHeight);
        p5.pop();
        ctx.restore();
    };
    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };
    p5.mouseWheel = (event) => {
        if (event.deltaY > 0) {
            currentStickerRotation += 1;
        }
        else {
            currentStickerRotation -= 1;
        }
        return false;
    };
    p5.keyPressed = () => {
        if (p5.key === "ArrowUp") {
            currImageSizeMultiplier += 0.01;
        }
        else if (p5.key === "ArrowDown") {
            currImageSizeMultiplier -= 0.01;
        }
        else if (p5.key === " ") {
            p5.saveCanvas("ransom.png");
        }
    };
    p5.mousePressed = () => {
        if (p5.mouseButton !== "left")
            return;
        onMouseDownMousePosLock.x = p5.mouseX;
        onMouseDownMousePosLock.y = p5.mouseY;
    };
    p5.mouseReleased = () => {
        if (p5.mouseButton !== "left")
            return false;
        if (currLetterInWordToSpell >= wordToSpell.length + 1) {
            const doesUserWantRefresh = confirm("𝗗𝗼 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗿𝗲𝗳𝗿𝗲𝘀𝗵 𝘁𝗵𝗲 𝗽𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗲𝘁 𝗻𝗲𝘄 𝗹𝗲𝘁𝘁𝗲𝗿𝘀?\n" +
                "clicking \"OK\" will refresh the page, and clicking \"Cancel\" will leave the page as is.");
            if (doesUserWantRefresh)
                location.reload();
        }
        placedStickers.push({
            sticker: currentHeldSticker,
            coordinates: { x: onMouseDownMousePosLock.x - (currentHeldSticker.width * currImageSizeMultiplier) / 2,
                y: onMouseDownMousePosLock.y - (currentHeldSticker.height * currImageSizeMultiplier) / 2 },
            rotation: currentStickerRotation,
            imageSizeMultiplier: currImageSizeMultiplier,
        });
        const nextSticker = getNextRandomLetterImage();
        if (nextSticker === undefined) {
            console.error("sketch.ts | Fatal Error: at letter \"" + wordToSpell[0] + "\" there was no associated " +
                "image paths in letterImageMap (.get returned undefined).");
            return false;
        }
        else if (nextSticker === null) {
            p5.cursor("not-allowed");
        }
        else {
            currentHeldSticker = nextSticker;
        }
        currentStickerRotation = p5.random(-maxStickerRotation, maxStickerRotation);
        return false;
    };
    function getNextRandomLetterImage(withoutReplacement = true) {
        if (currLetterInWordToSpell >= wordToSpell.length) {
            currLetterInWordToSpell += 1;
            return null;
        }
        const nextLetterImage = getRandomLetterImage(wordToSpell[currLetterInWordToSpell], withoutReplacement);
        currLetterInWordToSpell += 1;
        return nextLetterImage;
    }
    function getRandomLetterImage(letter, withoutReplacement = true) {
        const letterImageArray = letterImageMap.get(letter);
        if (!letterImageArray)
            return undefined;
        const randomArrayIndex = Math.floor(p5.random() * letterImageArray.length);
        const letterImage = letterImageArray[randomArrayIndex];
        if (withoutReplacement) {
            letterImageArray.splice(randomArrayIndex, 1);
        }
        return letterImage;
    }
    function drawGrid(rows, columns, strokeColour, strokeAlpha, strokeWeight) {
        const cellSize = Math.min(p5.width / columns, p5.height / rows);
        p5.push();
        p5.stroke(strokeColour, Math.round(strokeAlpha * 255));
        p5.strokeWeight(strokeWeight);
        const numberOfColsHalf = Math.ceil((p5.width / 2) / cellSize);
        for (let x = -numberOfColsHalf; x < numberOfColsHalf; x++) {
            p5.line(p5.width / 2 + x * cellSize, 0, p5.width / 2 + x * cellSize, p5.height);
        }
        const numberOfRowsHalf = Math.ceil((p5.height / 2) / cellSize);
        for (let y = -numberOfRowsHalf; y < numberOfRowsHalf; y++) {
            p5.line(0, p5.height / 2 + y * cellSize, p5.width, p5.height / 2 + y * cellSize);
        }
        p5.pop();
    }
}
new (p5_min_default())(sketch);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(481));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFFRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4RCxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0FBQ0wsQ0FBQztBQUVELElBQUksa0JBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvdXRpbHMvcmVhZC1xdWVyeS1wYXJhbXMudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9leHBlcmltZW50cy9zbWFsbC9tYWdhemluZS1sZXR0ZXItcGF0aHMudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9leHBlcmltZW50cy9zbWFsbC9za2V0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5UGFyYW1TdHJpbmcobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgcmV0dXJuIHBhcmFtcy5nZXQobmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVBhcmFtTnVtYmVyKG5hbWU6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xyXG4gICAgY29uc3QgcmF3OiBzdHJpbmcgfCBudWxsID0gZ2V0UXVlcnlQYXJhbVN0cmluZyhuYW1lKTtcclxuICAgIGlmIChyYXcgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgbjogbnVtYmVyID0gTnVtYmVyKHJhdyk7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGw7XHJcbn1cclxuXHJcbiIsImltcG9ydCBhXzAgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvYS9hXzAucG5nJztcclxuaW1wb3J0IGFfMSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9hL2FfMS5wbmcnO1xyXG5pbXBvcnQgYV8yIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL2EvYV8yLnBuZyc7XHJcbmltcG9ydCBhXzMgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvYS9hXzMucG5nJztcclxuaW1wb3J0IGFfNCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9hL2FfNC5wbmcnO1xyXG5cclxuaW1wb3J0IG1fMCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9tL21fMC5wbmcnO1xyXG5pbXBvcnQgbV8xIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL20vbV8xLnBuZyc7XHJcbmltcG9ydCBtXzIgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbS9tXzIucG5nJztcclxuaW1wb3J0IG1fMyBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9tL21fMy5wbmcnO1xyXG5cclxuaW1wb3J0IG5fMCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9uL25fMC5wbmcnO1xyXG5pbXBvcnQgbl8xIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL24vbl8xLnBuZyc7XHJcbmltcG9ydCBuXzIgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbi9uXzIucG5nJztcclxuaW1wb3J0IG5fMyBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9uL25fMy5wbmcnO1xyXG5pbXBvcnQgbl80IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL24vbl80LnBuZyc7XHJcbmltcG9ydCBuXzUgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbi9uXzUucG5nJztcclxuaW1wb3J0IG5fNiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9uL25fNi5wbmcnO1xyXG5cclxuaW1wb3J0IG9fMCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9vL29fMC5wbmcnO1xyXG5pbXBvcnQgb18xIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL28vb18xLnBuZyc7XHJcbmltcG9ydCBvXzIgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvby9vXzIucG5nJztcclxuaW1wb3J0IG9fMyBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9vL29fMy5wbmcnO1xyXG5pbXBvcnQgb180IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL28vb180LnBuZyc7XHJcbmltcG9ydCBvXzUgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvby9vXzUucG5nJztcclxuaW1wb3J0IG9fNiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9vL29fNi5wbmcnO1xyXG5cclxuaW1wb3J0IHJfMCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9yL3JfMC5wbmcnO1xyXG5pbXBvcnQgcl8xIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Ivcl8xLnBuZyc7XHJcbmltcG9ydCByXzIgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvci9yXzIucG5nJztcclxuaW1wb3J0IHJfMyBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9yL3JfMy5wbmcnO1xyXG5pbXBvcnQgcl80IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Ivcl80LnBuZyc7XHJcbmltcG9ydCByXzUgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvci9yXzUucG5nJztcclxuaW1wb3J0IHJfNiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9yL3JfNi5wbmcnO1xyXG5cclxuaW1wb3J0IHNfMCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9zL3NfMC5wbmcnO1xyXG5pbXBvcnQgc18xIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Mvc18xLnBuZyc7XHJcbmltcG9ydCBzXzIgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvcy9zXzIucG5nJztcclxuaW1wb3J0IHNfMyBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9zL3NfMy5wbmcnO1xyXG5pbXBvcnQgc180IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Mvc180LnBuZyc7XHJcbmltcG9ydCBzXzUgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvcy9zXzUucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBsZXR0ZXJJbWFnZVBhdGhzOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4gPSBuZXcgTWFwKFtcclxuICAgIFsnYScsIFthXzAsIGFfMSwgYV8yLCBhXzMsIGFfNF1dLFxyXG4gICAgWydtJywgW21fMCwgbV8xLCBtXzIsIG1fM11dLFxyXG4gICAgWyduJywgW25fMCwgbl8xLCBuXzIsIG5fMywgbl80LCBuXzUsIG5fNl1dLFxyXG4gICAgWydvJywgW29fMCwgb18xLCBvXzIsIG9fMywgb180LCBvXzUsIG9fNl1dLFxyXG4gICAgWydyJywgW3JfMCwgcl8xLCByXzIsIHJfMywgcl80LCByXzUsIHJfNl1dLFxyXG4gICAgWydzJywgW3NfMCwgc18xLCBzXzIsIHNfMywgc180LCBzXzVdXSxcclxuXSk7XHJcbiIsImltcG9ydCBwNSBmcm9tICdwNSc7XHJcblxyXG5pbXBvcnQgJ0BzcmMvc3R5bGVzL3NrZXRjaC5jc3MnO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhZFF1ZXJ5UGFyYW1zIGZyb20gJ0BzcmMvdXRpbHMvcmVhZC1xdWVyeS1wYXJhbXMnO1xyXG5pbXBvcnQgeyBsZXR0ZXJJbWFnZVBhdGhzIH0gZnJvbSAnLi9tYWdhemluZS1sZXR0ZXItcGF0aHMnO1xyXG5cclxuY29uc3Qgd29yZFRvU3BlbGw6IHN0cmluZyA9IFwicmFuc29tXCI7XHJcbmxldCBjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbDogbnVtYmVyID0gMDtcclxuLy8gcmFuc29tXHJcbi8vIGFub255bW91c1xyXG4vLyBtdXJkZXJlclxyXG5jb25zdCByYW5kb21TZWVkUXVlcnlOYW1lOiBzdHJpbmcgPSBcInJhbmRvbS1zZWVkXCI7XHJcbmNvbnN0IGhlbGRTdGlja2VyU2hhZG93Q29sb3VyOiBzdHJpbmcgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xyXG5jb25zdCBoZWxkU3RpY2tlclNoYWRvd0JsdXI6IG51bWJlciA9IDEyO1xyXG5jb25zdCBoZWxkU3RpY2tlclNoYWRvd09mZnNldFg6IG51bWJlciA9IC0zO1xyXG5jb25zdCBoZWxkU3RpY2tlclNoYWRvd09mZnNldFk6IG51bWJlciA9IDM7XHJcbmNvbnN0IHBhc3RlZFN0aWNrZXJTaGFkb3dDb2xvdXI6IHN0cmluZyA9IFwicmdiYSgwLCAwLCAwLCAwLjM0KVwiO1xyXG5jb25zdCBwYXN0ZWRTdGlja2VyU2hhZG93Qmx1cjogbnVtYmVyID0gMztcclxuY29uc3QgcGFzdGVkU3RpY2tlclNoYWRvd09mZnNldFg6IG51bWJlciA9IDA7XHJcbmNvbnN0IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRZOiBudW1iZXIgPSAwO1xyXG5jb25zdCBncmlkUm93czogbnVtYmVyID0gMjA7XHJcbmNvbnN0IGdyaWRDb2x1bW5zOiBudW1iZXIgPSAyMDtcclxuY29uc3QgZ3JpZFN0cm9rZUNvbG91cjogbnVtYmVyID0gMTAwO1xyXG5jb25zdCBncmlkU3Ryb2tlQWxwaGE6IG51bWJlciA9IDAuMTU7XHJcbmNvbnN0IGdyaWRTdHJva2VXZWlnaHQ6IG51bWJlciA9IDAuNjtcclxubGV0IGN1cnJJbWFnZVNpemVNdWx0aXBsaWVyOiBudW1iZXIgPSAwLjU7XHJcbmNvbnN0IGN1cnNvclR5cGU6IHN0cmluZyA9IFwiZ3JhYlwiO1xyXG5jb25zdCBvbk1vdXNlRG93blN0aWNrZXJTaXplOiBudW1iZXIgPSAxLjAzO1xyXG5jb25zdCBwbGFjZWRTdGlja2VyczogeyBzdGlja2VyOiBwNS5JbWFnZSwgY29vcmRpbmF0ZXM6IFBvaW50LCByb3RhdGlvbjogbnVtYmVyLCBpbWFnZVNpemVNdWx0aXBsaWVyOiBudW1iZXIgfVtdID0gW107XHJcbmNvbnN0IGxldHRlckltYWdlTWFwOiBNYXA8c3RyaW5nLCBwNS5JbWFnZVtdPiA9IG5ldyBNYXA8c3RyaW5nLCBwNS5JbWFnZVtdPigpO1xyXG4vLyB0aGlzIHN0b3BzIHRoZSBzdGlja2VyIGZyb20gbW92aW5nIHdoZW4gbW91c2UgaXMgZG93blxyXG5sZXQgb25Nb3VzZURvd25Nb3VzZVBvc0xvY2s6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcbi8vIEB0cy1pZ25vcmVcclxubGV0IGN1cnJlbnRTdGlja2VyUm90YXRpb246IG51bWJlciA9IDA7XHJcbmNvbnN0IG1heFN0aWNrZXJSb3RhdGlvbjogbnVtYmVyID0gMzA7XHJcbmxldCBjdXJyZW50SGVsZFN0aWNrZXIgOiBwNS5JbWFnZTtcclxubGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuZnVuY3Rpb24gc2tldGNoKHA1OiBwNSkgOiB2b2lkIHtcclxuXHJcbiAgICBwNS5wcmVsb2FkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBwcmludCBhbGwgY29udHJvbHMgdG8gYW4gYWxlcnRcclxuICAgICAgICBhbGVydChcIvCdl5bwnZe88J2Xu/CdmIHwnZe/8J2XvPCdl7nwnZiAXFxuXCIgK1xyXG4gICAgICAgICAgICBcIiAgIPCdl7nwnZey8J2Xs/CdmIEg8J2XsPCdl7nwnZe28J2XsPCdl7gg8J+huiBwbGFjZSBhIGxldHRlciBkb3duXFxuXCIgK1xyXG4gICAgICAgICAgICBcIiAgIPCdmIDwnZew8J2Xv/Cdl7zwnZe58J2XuSDwnZiE8J2XtfCdl7LwnZey8J2XuS/wnZiB8J2Xv/Cdl67wnZew8J2XuPCdl73wnZeu8J2XsSDwnZiA8J2XsPCdl7/wnZe88J2XufCdl7kg8J+huiByb3RhdGUgbGV0dGVyXFxuXCIgK1xyXG4gICAgICAgICAgICBcIiAgIPCdmILwnZe9IPCdl67wnZe/8J2Xv/Cdl7zwnZiEIPCfobogc2NhbGUgbGV0dGVyIHVwXFxuXCIgK1xyXG4gICAgICAgICAgICBcIiAgIPCdl7HwnZe88J2YhPCdl7sg8J2XrvCdl7/wnZe/8J2XvPCdmIQg8J+huiBzY2FsZSBsZXR0ZXIgZG93blxcblwiICtcclxuICAgICAgICAgICAgXCIgICDwnZiA8J2XvfCdl67wnZew8J2XsvCdl6/wnZeu8J2XvyDwn6G6IHRha2UgYSBzY3JlZW5zaG90IG9mIHRoZSBsZXR0ZXJzIVwiICtcclxuICAgICAgICAgICAgXCJhZnRlciBwbGFjaW5nIGFsbCBsZXR0ZXJzIGNsaWNrIG9uY2UgbW9yZSB0byByZWZyZXNoIHRoZSBwYWdlLlwiKTtcclxuXHJcbiAgICAgICAgLy8gc2V0dGluZyBhbmdsZW1vZGUgdG8gZGVncmVlc1xyXG4gICAgICAgIHA1LmFuZ2xlTW9kZShwNS5ERUdSRUVTKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0dGluZyB0aGUgcmFuZG9tIHNlZWQgZnJvbSB0aGUgdXJsIChpZiBpdCBpcyBwcm92aWRlZCBhcyBhIHF1ZXJ5IHBhcmFtZXRlcilcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtUmFuZG9tU2VlZDogbnVtYmVyIHwgbnVsbCA9IFJlYWRRdWVyeVBhcmFtcy5nZXRRdWVyeVBhcmFtTnVtYmVyKHJhbmRvbVNlZWRRdWVyeU5hbWUpXHJcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1SYW5kb21TZWVkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHA1LnJhbmRvbVNlZWQocXVlcnlQYXJhbVJhbmRvbVNlZWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNrZXRjaC50cyB8IHRoZSBjdXJyZW50IHJhbmRvbSBzZWVkICh2aWEgcXVlcnkgcGFyYW0pIGlzOiBcIiArIHF1ZXJ5UGFyYW1SYW5kb21TZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpc2luZyBsZXR0ZXJJbWFnZU1hcCB0byBhbGwgZW1wdHkgZm9yIGFsbCBzdXBwb3J0ZWQgY2hhcmFjdGVyc1xyXG4gICAgICAgIGxldHRlckltYWdlUGF0aHMuZm9yRWFjaCgobGV0dGVySW1hZ2VQYXRoOiBzdHJpbmdbXSwgbGV0dGVyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0dGVySW1hZ2VNYXAuc2V0KGxldHRlciwgW10pO1xyXG4gICAgICAgICAgICBsZXR0ZXJJbWFnZVBhdGguZm9yRWFjaCgocGF0aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJJbWFnZU1hcC5nZXQobGV0dGVyKT8ucHVzaChwNS5sb2FkSW1hZ2UocGF0aCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGZpcnN0U3RpY2tlcjogcDUuSW1hZ2UgfCBudWxsIHwgdW5kZWZpbmVkID0gZ2V0TmV4dFJhbmRvbUxldHRlckltYWdlKCk7XHJcbiAgICAgICAgaWYgKGZpcnN0U3RpY2tlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJza2V0Y2gudHMgfCBGYXRhbCBFcnJvcjogYXQgbGV0dGVyIFxcXCJcIiArIHdvcmRUb1NwZWxsWzBdICsgXCJcXFwiIHRoZXJlIHdhcyBubyBhc3NvY2lhdGVkIFwiICtcclxuICAgICAgICAgICAgICAgIFwiaW1hZ2UgcGF0aHMgaW4gbGV0dGVySW1hZ2VNYXAgKC5nZXQgcmV0dXJuZWQgdW5kZWZpbmVkKS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gVE9ETyBiZXR0ZXIgZXJyb3IgaGFuZGxpbmcgaGVyZVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RTdGlja2VyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJza2V0Y2gudHMgfCBGYXRhbCBFcnJvcjogdGhlIGZpcnN0IHJlcXVlc3QgZm9yIGdldE5leHRSYW5kb21MZXR0ZXJJbWFnZSgpIGhhcyByZWFjaGVkXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJ0aGUgZW5kIG9mIHdvcmRUb1NwZWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFRPRE8gYmV0dGVyIGVycm9yIGhhbmRsaW5nIGhlcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEhlbGRTdGlja2VyID0gZmlyc3RTdGlja2VyO1xyXG4gICAgICAgIGN1cnJlbnRTdGlja2VyUm90YXRpb24gPSBwNS5yYW5kb20oLW1heFN0aWNrZXJSb3RhdGlvbiwgbWF4U3RpY2tlclJvdGF0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcDUuc2V0dXAgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LmNyZWF0ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuICAgICAgICBjdHggPSBwNS5kcmF3aW5nQ29udGV4dCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgICAgIHA1LmN1cnNvcihjdXJzb3JUeXBlKTtcclxuICAgIH07XHJcblxyXG4gICAgcDUuZHJhdyA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgcDUuY2xlYXIoKTtcclxuICAgICAgICBjb25zdCBhcmVBbGxMZXR0ZXJzRHJhd246IGJvb2xlYW4gPSBjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbCA+PSB3b3JkVG9TcGVsbC5sZW5ndGggKyAxO1xyXG5cclxuICAgICAgICBpZiAoIWFyZUFsbExldHRlcnNEcmF3bikge1xyXG4gICAgICAgICAgICBkcmF3R3JpZChncmlkUm93cywgZ3JpZENvbHVtbnMsIGdyaWRTdHJva2VDb2xvdXIsIGdyaWRTdHJva2VBbHBoYSwgZ3JpZFN0cm9rZVdlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkcmF3IHByZXZpb3VzbHkgcGxhY2VkIHN0aWNrZXJzXHJcbiAgICAgICAgcGxhY2VkU3RpY2tlcnMuZm9yRWFjaCgoeyBzdGlja2VyLCBjb29yZGluYXRlcywgcm90YXRpb24sIGltYWdlU2l6ZU11bHRpcGxpZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY2FsZWRTdGlja2VyV2lkdGggPSBzdGlja2VyLndpZHRoICogaW1hZ2VTaXplTXVsdGlwbGllcjtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVkU3RpY2tlckhlaWdodCA9IHN0aWNrZXIuaGVpZ2h0ICogaW1hZ2VTaXplTXVsdGlwbGllcjtcclxuICAgICAgICAgICAgcDUucHVzaCgpO1xyXG4gICAgICAgICAgICBwNS50cmFuc2xhdGUoY29vcmRpbmF0ZXMueCArIHNjYWxlZFN0aWNrZXJXaWR0aCAvIDIsIGNvb3JkaW5hdGVzLnkgKyBzY2FsZWRTdGlja2VySGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgIHA1LnJvdGF0ZShyb3RhdGlvbik7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHBhc3RlZFN0aWNrZXJTaGFkb3dDb2xvdXI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gcGFzdGVkU3RpY2tlclNoYWRvd0JsdXI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gcGFzdGVkU3RpY2tlclNoYWRvd09mZnNldFg7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gcGFzdGVkU3RpY2tlclNoYWRvd09mZnNldFk7XHJcbiAgICAgICAgICAgIHA1LmltYWdlKFxyXG4gICAgICAgICAgICAgICAgc3RpY2tlcixcclxuICAgICAgICAgICAgICAgIC1zY2FsZWRTdGlja2VyV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlZFN0aWNrZXJIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVkU3RpY2tlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVkU3RpY2tlckhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICBwNS5wb3AoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZG9uJ3QgZHJhdyBhbnl0aGluZyB1bmRlciB0aGUgY3Vyc29yIGlmIGFsbCBsZXR0ZXJzIGFyZSBkcmF3blxyXG4gICAgICAgIGlmIChhcmVBbGxMZXR0ZXJzRHJhd24pIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gZHJhdyB0aGUgY3VycmVudCBoZWxkIHN0aWNrZXIgdW5kZXIgdGhlIG1vdXNlIHJvdGF0ZWQgYXJvdW5kIGl0cyBjZW50ZXJcclxuICAgICAgICAvLyBzaGFkb3cgb25seSB3aGVuIG5vdCBwcmVzc2VkXHJcbiAgICAgICAgY29uc3QgaXNMZWZ0TW91c2VEb3duOiBib29sZWFuID0gcDUubW91c2VJc1ByZXNzZWQgJiYgcDUubW91c2VCdXR0b24gPT09IFwibGVmdFwiO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICAgIGlmICghaXNMZWZ0TW91c2VEb3duKSB7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IGhlbGRTdGlja2VyU2hhZG93Q29sb3VyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IGhlbGRTdGlja2VyU2hhZG93Qmx1cjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd09mZnNldFggPSBoZWxkU3RpY2tlclNoYWRvd09mZnNldFg7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gaGVsZFN0aWNrZXJTaGFkb3dPZmZzZXRZO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IHBhc3RlZFN0aWNrZXJTaGFkb3dDb2xvdXI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gcGFzdGVkU3RpY2tlclNoYWRvd0JsdXI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gcGFzdGVkU3RpY2tlclNoYWRvd09mZnNldFg7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gcGFzdGVkU3RpY2tlclNoYWRvd09mZnNldFk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVYOiBudW1iZXIgPSBpc0xlZnRNb3VzZURvd24gPyBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay54IDogcDUubW91c2VYO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVk6IG51bWJlciA9IGlzTGVmdE1vdXNlRG93biA/IG9uTW91c2VEb3duTW91c2VQb3NMb2NrLnkgOiBwNS5tb3VzZVk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0aWNrZXJXaWR0aDogbnVtYmVyID0gY3VycmVudEhlbGRTdGlja2VyLndpZHRoICogKCFpc0xlZnRNb3VzZURvd24gPyBvbk1vdXNlRG93blN0aWNrZXJTaXplIDogMSkgKiBjdXJySW1hZ2VTaXplTXVsdGlwbGllcjtcclxuICAgICAgICBjb25zdCBzdGlja2VySGVpZ2h0OiBudW1iZXIgPSBjdXJyZW50SGVsZFN0aWNrZXIuaGVpZ2h0ICogKCFpc0xlZnRNb3VzZURvd24gPyBvbk1vdXNlRG93blN0aWNrZXJTaXplIDogMSkgKiBjdXJySW1hZ2VTaXplTXVsdGlwbGllcjtcclxuXHJcbiAgICAgICAgcDUucHVzaCgpO1xyXG4gICAgICAgIHA1LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKTtcclxuICAgICAgICBwNS5yb3RhdGUoY3VycmVudFN0aWNrZXJSb3RhdGlvbik7XHJcbiAgICAgICAgcDUuaW1hZ2UoXHJcbiAgICAgICAgICAgIGN1cnJlbnRIZWxkU3RpY2tlcixcclxuICAgICAgICAgICAgLXN0aWNrZXJXaWR0aCAvIDIsXHJcbiAgICAgICAgICAgIC1zdGlja2VySGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgc3RpY2tlcldpZHRoLFxyXG4gICAgICAgICAgICBzdGlja2VySGVpZ2h0KTtcclxuICAgICAgICBwNS5wb3AoKTtcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcDUud2luZG93UmVzaXplZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgcDUucmVzaXplQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHA1Lm1vdXNlV2hlZWwgPSAoZXZlbnQ6IFdoZWVsRXZlbnQpIDogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgY3VycmVudFN0aWNrZXJSb3RhdGlvbiArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGlja2VyUm90YXRpb24gLT0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5rZXlQcmVzc2VkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAocDUua2V5ID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICBjdXJySW1hZ2VTaXplTXVsdGlwbGllciArPSAwLjAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocDUua2V5ID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJJbWFnZVNpemVNdWx0aXBsaWVyIC09IDAuMDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIHA1LnNhdmVDYW52YXMoXCJyYW5zb20ucG5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBvbk1vdXNlRG93blxyXG4gICAgcDUubW91c2VQcmVzc2VkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAocDUubW91c2VCdXR0b24gIT09IFwibGVmdFwiKSAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBsZWZ0IG1vdXNlIGNsaWNrcyBvbmx5IHBhc3QgdGhpcyBwb2ludFxyXG4gICAgICAgIC8vIHRoaXMgc3RvcHMgdGhlIHN0aWNrZXIgZnJvbSBtb3Zpbmcgd2hlbiBtb3VzZSBpcyBkb3duXHJcbiAgICAgICAgb25Nb3VzZURvd25Nb3VzZVBvc0xvY2sueCA9IHA1Lm1vdXNlWDtcclxuICAgICAgICBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay55ID0gcDUubW91c2VZO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTW91c2VVcFxyXG4gICAgcDUubW91c2VSZWxlYXNlZCA9ICgpIDogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgaWYgKHA1Lm1vdXNlQnV0dG9uICE9PSBcImxlZnRcIikgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoY3VyckxldHRlckluV29yZFRvU3BlbGwgPj0gd29yZFRvU3BlbGwubGVuZ3RoICsgMSkge1xyXG4gICAgICAgICAgICBjb25zdCBkb2VzVXNlcldhbnRSZWZyZXNoOiBib29sZWFuID0gY29uZmlybShcIvCdl5fwnZe8IPCdmIbwnZe88J2YgiDwnZiE8J2XrvCdl7vwnZiBIPCdmIHwnZe8IPCdl7/wnZey8J2Xs/Cdl7/wnZey8J2YgPCdl7Ug8J2YgfCdl7XwnZeyIPCdl73wnZeu8J2XtPCdl7Ig8J2XrvCdl7vwnZexIPCdl7TwnZey8J2YgSDwnZe78J2XsvCdmIQg8J2XufCdl7LwnZiB8J2YgfCdl7LwnZe/8J2YgD9cXG5cIiArXHJcbiAgICAgICAgICAgICAgICBcImNsaWNraW5nIFxcXCJPS1xcXCIgd2lsbCByZWZyZXNoIHRoZSBwYWdlLCBhbmQgY2xpY2tpbmcgXFxcIkNhbmNlbFxcXCIgd2lsbCBsZWF2ZSB0aGUgcGFnZSBhcyBpcy5cIilcclxuXHJcbiAgICAgICAgICAgIGlmIChkb2VzVXNlcldhbnRSZWZyZXNoKSBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxlZnQgbW91c2UgY2xpY2tzIG9ubHkgcGFzdCB0aGlzIHBvaW50XHJcbiAgICAgICAgLy8gdGhpcyBzdXBwb3J0cyB0aGUgYmVoYXZpb3VyIHdoZXJlIHN0b3BzIHRoZSBzdGlja2VyIGZyb20gbW92aW5nIHdoZW4gbW91c2UgaXMgZG93blxyXG4gICAgICAgIHBsYWNlZFN0aWNrZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBzdGlja2VyOiBjdXJyZW50SGVsZFN0aWNrZXIsXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOlxyXG4gICAgICAgICAgICAgICAge3g6IG9uTW91c2VEb3duTW91c2VQb3NMb2NrLnggLSAoY3VycmVudEhlbGRTdGlja2VyLndpZHRoICogY3VyckltYWdlU2l6ZU11bHRpcGxpZXIpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICB5OiBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay55IC0gKGN1cnJlbnRIZWxkU3RpY2tlci5oZWlnaHQgKiBjdXJySW1hZ2VTaXplTXVsdGlwbGllcikgLyAyfSxcclxuICAgICAgICAgICAgcm90YXRpb246IGN1cnJlbnRTdGlja2VyUm90YXRpb24sXHJcbiAgICAgICAgICAgIGltYWdlU2l6ZU11bHRpcGxpZXI6IGN1cnJJbWFnZVNpemVNdWx0aXBsaWVyLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0U3RpY2tlcjogcDUuSW1hZ2UgfCBudWxsIHwgdW5kZWZpbmVkID0gZ2V0TmV4dFJhbmRvbUxldHRlckltYWdlKCk7XHJcbiAgICAgICAgaWYgKG5leHRTdGlja2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNrZXRjaC50cyB8IEZhdGFsIEVycm9yOiBhdCBsZXR0ZXIgXFxcIlwiICsgd29yZFRvU3BlbGxbMF0gKyBcIlxcXCIgdGhlcmUgd2FzIG5vIGFzc29jaWF0ZWQgXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJpbWFnZSBwYXRocyBpbiBsZXR0ZXJJbWFnZU1hcCAoLmdldCByZXR1cm5lZCB1bmRlZmluZWQpLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBUT0RPIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0U3RpY2tlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwNS5jdXJzb3IoXCJub3QtYWxsb3dlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50SGVsZFN0aWNrZXIgPSBuZXh0U3RpY2tlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFN0aWNrZXJSb3RhdGlvbiA9IHA1LnJhbmRvbSgtbWF4U3RpY2tlclJvdGF0aW9uLCBtYXhTdGlja2VyUm90YXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFJhbmRvbUxldHRlckltYWdlKHdpdGhvdXRSZXBsYWNlbWVudDogYm9vbGVhbiA9IHRydWUpIDogcDUuSW1hZ2UgfCB1bmRlZmluZWQgfCBudWxsIHtcclxuICAgICAgICAvLyBpZiB3ZSdyZSByZXF1ZXN0aW5nIGxldHRlcnMgdGhhdCBkb24ndCBleGlzdCB0aGVuIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKGN1cnJMZXR0ZXJJbldvcmRUb1NwZWxsID49IHdvcmRUb1NwZWxsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbCArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXJJbWFnZTogcDUuSW1hZ2UgfCB1bmRlZmluZWQgPVxyXG4gICAgICAgICAgICBnZXRSYW5kb21MZXR0ZXJJbWFnZSh3b3JkVG9TcGVsbFtjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbF0sIHdpdGhvdXRSZXBsYWNlbWVudCk7XHJcblxyXG4gICAgICAgIGN1cnJMZXR0ZXJJbldvcmRUb1NwZWxsICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIG5leHRMZXR0ZXJJbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21MZXR0ZXJJbWFnZShsZXR0ZXI6IHN0cmluZywgd2l0aG91dFJlcGxhY2VtZW50OiBib29sZWFuID0gdHJ1ZSkgOiBwNS5JbWFnZSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgbGV0dGVySW1hZ2VBcnJheTogcDUuSW1hZ2VbXSB8IHVuZGVmaW5lZCA9IGxldHRlckltYWdlTWFwLmdldChsZXR0ZXIpO1xyXG5cclxuICAgICAgICBpZiAoIWxldHRlckltYWdlQXJyYXkpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUFycmF5SW5kZXg6IG51bWJlciA9IE1hdGguZmxvb3IocDUucmFuZG9tKCkgKiBsZXR0ZXJJbWFnZUFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgbGV0dGVySW1hZ2U6IHA1LkltYWdlID0gbGV0dGVySW1hZ2VBcnJheVtyYW5kb21BcnJheUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIDEgZWxlbWVudCBhdCBpbmRleCByYW5kb21BcnJheUluZGV4IGlmIHdlIGRvbid0IHdhbnQgdG8gcmVwbGFjZVxyXG4gICAgICAgIGlmICh3aXRob3V0UmVwbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0dGVySW1hZ2VBcnJheS5zcGxpY2UocmFuZG9tQXJyYXlJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGV0dGVySW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd0dyaWQocm93czogbnVtYmVyLCBjb2x1bW5zOiBudW1iZXIsIHN0cm9rZUNvbG91cjogbnVtYmVyLCBzdHJva2VBbHBoYTogbnVtYmVyLCBzdHJva2VXZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbXB1dGUgc3F1YXJlIGNlbGwgc2l6ZSBzbyBjZWxscyByZW1haW4gc3F1YXJlXHJcbiAgICAgICAgY29uc3QgY2VsbFNpemUgPSBNYXRoLm1pbihwNS53aWR0aCAvIGNvbHVtbnMsIHA1LmhlaWdodCAvIHJvd3MpO1xyXG5cclxuICAgICAgICBwNS5wdXNoKCk7XHJcbiAgICAgICAgcDUuc3Ryb2tlKHN0cm9rZUNvbG91ciwgTWF0aC5yb3VuZChzdHJva2VBbHBoYSAqIDI1NSkpO1xyXG4gICAgICAgIHA1LnN0cm9rZVdlaWdodChzdHJva2VXZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBudW1iZXJPZkNvbHNIYWxmID0gTWF0aC5jZWlsKChwNS53aWR0aC8yKS9jZWxsU2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IC1udW1iZXJPZkNvbHNIYWxmOyB4IDwgbnVtYmVyT2ZDb2xzSGFsZjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHA1LmxpbmUocDUud2lkdGgvMiArIHggKiBjZWxsU2l6ZSwgMCwgcDUud2lkdGgvMiArIHggKiBjZWxsU2l6ZSwgcDUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG51bWJlck9mUm93c0hhbGYgPSBNYXRoLmNlaWwoKHA1LmhlaWdodC8yKS9jZWxsU2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IC1udW1iZXJPZlJvd3NIYWxmOyB5IDwgbnVtYmVyT2ZSb3dzSGFsZjsgeSsrKSB7XHJcbiAgICAgICAgICAgIHA1LmxpbmUoIDAsIHA1LmhlaWdodC8yICsgeSAqIGNlbGxTaXplLCBwNS53aWR0aCwgcDUuaGVpZ2h0LzIgKyB5ICogY2VsbFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwNS5wb3AoKTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IHA1KHNrZXRjaCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==