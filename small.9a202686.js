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
            return false;
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
            if (currLetterInWordToSpell >= wordToSpell.length + 1) {
                const doesUserWantRefresh = confirm("𝗗𝗼 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗿𝗲𝗳𝗿𝗲𝘀𝗵 𝘁𝗵𝗲 𝗽𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗲𝘁 𝗻𝗲𝘄 𝗹𝗲𝘁𝘁𝗲𝗿𝘀?\n" +
                    "clicking \"OK\" will refresh the page, and clicking \"Cancel\" will remove the grid on the page " +
                    "so screenshots with 𝘀𝗽𝗮𝗰𝗲𝗯𝗮𝗿 look nicer.");
                if (doesUserWantRefresh)
                    location.reload();
                return false;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRixDQUFDO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEQsRUFBRSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFJLGtCQUFFLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3V0aWxzL3JlYWQtcXVlcnktcGFyYW1zLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvc21hbGwvbWFnYXppbmUtbGV0dGVyLXBhdGhzLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvc21hbGwvc2tldGNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVBhcmFtU3RyaW5nKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgIHJldHVybiBwYXJhbXMuZ2V0KG5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbU51bWJlcihuYW1lOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIGNvbnN0IHJhdzogc3RyaW5nIHwgbnVsbCA9IGdldFF1ZXJ5UGFyYW1TdHJpbmcobmFtZSk7XHJcbiAgICBpZiAocmF3ID09PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IG46IG51bWJlciA9IE51bWJlcihyYXcpO1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShuKSA/IG4gOiBudWxsO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgYV8wIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL2EvYV8wLnBuZyc7XHJcbmltcG9ydCBhXzEgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvYS9hXzEucG5nJztcclxuaW1wb3J0IGFfMiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9hL2FfMi5wbmcnO1xyXG5pbXBvcnQgYV8zIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL2EvYV8zLnBuZyc7XHJcbmltcG9ydCBhXzQgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvYS9hXzQucG5nJztcclxuXHJcbmltcG9ydCBtXzAgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbS9tXzAucG5nJztcclxuaW1wb3J0IG1fMSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9tL21fMS5wbmcnO1xyXG5pbXBvcnQgbV8yIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL20vbV8yLnBuZyc7XHJcbmltcG9ydCBtXzMgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbS9tXzMucG5nJztcclxuXHJcbmltcG9ydCBuXzAgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbi9uXzAucG5nJztcclxuaW1wb3J0IG5fMSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9uL25fMS5wbmcnO1xyXG5pbXBvcnQgbl8yIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL24vbl8yLnBuZyc7XHJcbmltcG9ydCBuXzMgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbi9uXzMucG5nJztcclxuaW1wb3J0IG5fNCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9uL25fNC5wbmcnO1xyXG5pbXBvcnQgbl81IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL24vbl81LnBuZyc7XHJcbmltcG9ydCBuXzYgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbi9uXzYucG5nJztcclxuXHJcbmltcG9ydCBvXzAgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvby9vXzAucG5nJztcclxuaW1wb3J0IG9fMSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9vL29fMS5wbmcnO1xyXG5pbXBvcnQgb18yIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL28vb18yLnBuZyc7XHJcbmltcG9ydCBvXzMgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvby9vXzMucG5nJztcclxuaW1wb3J0IG9fNCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9vL29fNC5wbmcnO1xyXG5pbXBvcnQgb181IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL28vb181LnBuZyc7XHJcbmltcG9ydCBvXzYgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvby9vXzYucG5nJztcclxuXHJcbmltcG9ydCByXzAgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvci9yXzAucG5nJztcclxuaW1wb3J0IHJfMSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9yL3JfMS5wbmcnO1xyXG5pbXBvcnQgcl8yIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Ivcl8yLnBuZyc7XHJcbmltcG9ydCByXzMgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvci9yXzMucG5nJztcclxuaW1wb3J0IHJfNCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9yL3JfNC5wbmcnO1xyXG5pbXBvcnQgcl81IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Ivcl81LnBuZyc7XHJcbmltcG9ydCByXzYgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvci9yXzYucG5nJztcclxuXHJcbmltcG9ydCBzXzAgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvcy9zXzAucG5nJztcclxuaW1wb3J0IHNfMSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9zL3NfMS5wbmcnO1xyXG5pbXBvcnQgc18yIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Mvc18yLnBuZyc7XHJcbmltcG9ydCBzXzMgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvcy9zXzMucG5nJztcclxuaW1wb3J0IHNfNCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9zL3NfNC5wbmcnO1xyXG5pbXBvcnQgc181IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Mvc181LnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgbGV0dGVySW1hZ2VQYXRoczogTWFwPHN0cmluZywgc3RyaW5nW10+ID0gbmV3IE1hcChbXHJcbiAgICBbJ2EnLCBbYV8wLCBhXzEsIGFfMiwgYV8zLCBhXzRdXSxcclxuICAgIFsnbScsIFttXzAsIG1fMSwgbV8yLCBtXzNdXSxcclxuICAgIFsnbicsIFtuXzAsIG5fMSwgbl8yLCBuXzMsIG5fNCwgbl81LCBuXzZdXSxcclxuICAgIFsnbycsIFtvXzAsIG9fMSwgb18yLCBvXzMsIG9fNCwgb181LCBvXzZdXSxcclxuICAgIFsncicsIFtyXzAsIHJfMSwgcl8yLCByXzMsIHJfNCwgcl81LCByXzZdXSxcclxuICAgIFsncycsIFtzXzAsIHNfMSwgc18yLCBzXzMsIHNfNCwgc181XV0sXHJcbl0pO1xyXG4iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5cclxuaW1wb3J0ICdAc3JjL3N0eWxlcy9za2V0Y2guY3NzJztcclxuXHJcbmltcG9ydCAqIGFzIFJlYWRRdWVyeVBhcmFtcyBmcm9tICdAc3JjL3V0aWxzL3JlYWQtcXVlcnktcGFyYW1zJztcclxuaW1wb3J0IHsgbGV0dGVySW1hZ2VQYXRocyB9IGZyb20gJy4vbWFnYXppbmUtbGV0dGVyLXBhdGhzJztcclxuXHJcbmNvbnN0IHdvcmRUb1NwZWxsOiBzdHJpbmcgPSBcInJhbnNvbVwiO1xyXG5sZXQgY3VyckxldHRlckluV29yZFRvU3BlbGw6IG51bWJlciA9IDA7XHJcbi8vIHJhbnNvbVxyXG4vLyBhbm9ueW1vdXNcclxuLy8gbXVyZGVyZXJcclxuY29uc3QgcmFuZG9tU2VlZFF1ZXJ5TmFtZTogc3RyaW5nID0gXCJyYW5kb20tc2VlZFwiO1xyXG5jb25zdCBoZWxkU3RpY2tlclNoYWRvd0NvbG91cjogc3RyaW5nID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcclxuY29uc3QgaGVsZFN0aWNrZXJTaGFkb3dCbHVyOiBudW1iZXIgPSAxMjtcclxuY29uc3QgaGVsZFN0aWNrZXJTaGFkb3dPZmZzZXRYOiBudW1iZXIgPSAtMztcclxuY29uc3QgaGVsZFN0aWNrZXJTaGFkb3dPZmZzZXRZOiBudW1iZXIgPSAzO1xyXG5jb25zdCBwYXN0ZWRTdGlja2VyU2hhZG93Q29sb3VyOiBzdHJpbmcgPSBcInJnYmEoMCwgMCwgMCwgMC4zNClcIjtcclxuY29uc3QgcGFzdGVkU3RpY2tlclNoYWRvd0JsdXI6IG51bWJlciA9IDM7XHJcbmNvbnN0IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRYOiBudW1iZXIgPSAwO1xyXG5jb25zdCBwYXN0ZWRTdGlja2VyU2hhZG93T2Zmc2V0WTogbnVtYmVyID0gMDtcclxuY29uc3QgZ3JpZFJvd3M6IG51bWJlciA9IDIwO1xyXG5jb25zdCBncmlkQ29sdW1uczogbnVtYmVyID0gMjA7XHJcbmNvbnN0IGdyaWRTdHJva2VDb2xvdXI6IG51bWJlciA9IDEwMDtcclxuY29uc3QgZ3JpZFN0cm9rZUFscGhhOiBudW1iZXIgPSAwLjE1O1xyXG5jb25zdCBncmlkU3Ryb2tlV2VpZ2h0OiBudW1iZXIgPSAwLjY7XHJcbmxldCBjdXJySW1hZ2VTaXplTXVsdGlwbGllcjogbnVtYmVyID0gMC41O1xyXG5jb25zdCBjdXJzb3JUeXBlOiBzdHJpbmcgPSBcImdyYWJcIjtcclxuY29uc3Qgb25Nb3VzZURvd25TdGlja2VyU2l6ZTogbnVtYmVyID0gMS4wMztcclxuY29uc3QgcGxhY2VkU3RpY2tlcnM6IHsgc3RpY2tlcjogcDUuSW1hZ2UsIGNvb3JkaW5hdGVzOiBQb2ludCwgcm90YXRpb246IG51bWJlciwgaW1hZ2VTaXplTXVsdGlwbGllcjogbnVtYmVyIH1bXSA9IFtdO1xyXG5jb25zdCBsZXR0ZXJJbWFnZU1hcDogTWFwPHN0cmluZywgcDUuSW1hZ2VbXT4gPSBuZXcgTWFwPHN0cmluZywgcDUuSW1hZ2VbXT4oKTtcclxuLy8gdGhpcyBzdG9wcyB0aGUgc3RpY2tlciBmcm9tIG1vdmluZyB3aGVuIG1vdXNlIGlzIGRvd25cclxubGV0IG9uTW91c2VEb3duTW91c2VQb3NMb2NrOiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG4vLyBAdHMtaWdub3JlXHJcbmxldCBjdXJyZW50U3RpY2tlclJvdGF0aW9uOiBudW1iZXIgPSAwO1xyXG5jb25zdCBtYXhTdGlja2VyUm90YXRpb246IG51bWJlciA9IDMwO1xyXG5sZXQgY3VycmVudEhlbGRTdGlja2VyIDogcDUuSW1hZ2U7XHJcbmxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbmZ1bmN0aW9uIHNrZXRjaChwNTogcDUpIDogdm9pZCB7XHJcblxyXG4gICAgcDUucHJlbG9hZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gcHJpbnQgYWxsIGNvbnRyb2xzIHRvIGFuIGFsZXJ0XHJcbiAgICAgICAgYWxlcnQoXCLwnZeW8J2XvPCdl7vwnZiB8J2Xv/Cdl7zwnZe58J2YgFxcblwiICtcclxuICAgICAgICAgICAgXCIgICDwnZe58J2XsvCdl7PwnZiBIPCdl7DwnZe58J2XtvCdl7DwnZe4IPCfobogcGxhY2UgYSBsZXR0ZXIgZG93blxcblwiICtcclxuICAgICAgICAgICAgXCIgICDwnZiA8J2XsPCdl7/wnZe88J2XufCdl7kg8J2YhPCdl7XwnZey8J2XsvCdl7kv8J2YgfCdl7/wnZeu8J2XsPCdl7jwnZe98J2XrvCdl7Eg8J2YgPCdl7DwnZe/8J2XvPCdl7nwnZe5IPCfobogcm90YXRlIGxldHRlclxcblwiICtcclxuICAgICAgICAgICAgXCIgICDwnZiC8J2XvSDwnZeu8J2Xv/Cdl7/wnZe88J2YhCDwn6G6IHNjYWxlIGxldHRlciB1cFxcblwiICtcclxuICAgICAgICAgICAgXCIgICDwnZex8J2XvPCdmITwnZe7IPCdl67wnZe/8J2Xv/Cdl7zwnZiEIPCfobogc2NhbGUgbGV0dGVyIGRvd25cXG5cIiArXHJcbiAgICAgICAgICAgIFwiICAg8J2YgPCdl73wnZeu8J2XsPCdl7LwnZev8J2XrvCdl78g8J+huiB0YWtlIGEgc2NyZWVuc2hvdCBvZiB0aGUgbGV0dGVycyFcIiArXHJcbiAgICAgICAgICAgIFwiYWZ0ZXIgcGxhY2luZyBhbGwgbGV0dGVycyBjbGljayBvbmNlIG1vcmUgdG8gcmVmcmVzaCB0aGUgcGFnZS5cIik7XHJcblxyXG4gICAgICAgIC8vIHNldHRpbmcgYW5nbGVtb2RlIHRvIGRlZ3JlZXNcclxuICAgICAgICBwNS5hbmdsZU1vZGUocDUuREVHUkVFUyk7XHJcblxyXG4gICAgICAgIC8vIGdldHRpbmcgdGhlIHJhbmRvbSBzZWVkIGZyb20gdGhlIHVybCAoaWYgaXQgaXMgcHJvdmlkZWQgYXMgYSBxdWVyeSBwYXJhbWV0ZXIpXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbVJhbmRvbVNlZWQ6IG51bWJlciB8IG51bGwgPSBSZWFkUXVlcnlQYXJhbXMuZ2V0UXVlcnlQYXJhbU51bWJlcihyYW5kb21TZWVkUXVlcnlOYW1lKVxyXG4gICAgICAgIGlmIChxdWVyeVBhcmFtUmFuZG9tU2VlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwNS5yYW5kb21TZWVkKHF1ZXJ5UGFyYW1SYW5kb21TZWVkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJza2V0Y2gudHMgfCB0aGUgY3VycmVudCByYW5kb20gc2VlZCAodmlhIHF1ZXJ5IHBhcmFtKSBpczogXCIgKyBxdWVyeVBhcmFtUmFuZG9tU2VlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbml0aWFsaXNpbmcgbGV0dGVySW1hZ2VNYXAgdG8gYWxsIGVtcHR5IGZvciBhbGwgc3VwcG9ydGVkIGNoYXJhY3RlcnNcclxuICAgICAgICBsZXR0ZXJJbWFnZVBhdGhzLmZvckVhY2goKGxldHRlckltYWdlUGF0aDogc3RyaW5nW10sIGxldHRlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGxldHRlckltYWdlTWFwLnNldChsZXR0ZXIsIFtdKTtcclxuICAgICAgICAgICAgbGV0dGVySW1hZ2VQYXRoLmZvckVhY2goKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVySW1hZ2VNYXAuZ2V0KGxldHRlcik/LnB1c2gocDUubG9hZEltYWdlKHBhdGgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBmaXJzdFN0aWNrZXI6IHA1LkltYWdlIHwgbnVsbCB8IHVuZGVmaW5lZCA9IGdldE5leHRSYW5kb21MZXR0ZXJJbWFnZSgpO1xyXG4gICAgICAgIGlmIChmaXJzdFN0aWNrZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwic2tldGNoLnRzIHwgRmF0YWwgRXJyb3I6IGF0IGxldHRlciBcXFwiXCIgKyB3b3JkVG9TcGVsbFswXSArIFwiXFxcIiB0aGVyZSB3YXMgbm8gYXNzb2NpYXRlZCBcIiArXHJcbiAgICAgICAgICAgICAgICBcImltYWdlIHBhdGhzIGluIGxldHRlckltYWdlTWFwICguZ2V0IHJldHVybmVkIHVuZGVmaW5lZCkuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFRPRE8gYmV0dGVyIGVycm9yIGhhbmRsaW5nIGhlcmVcclxuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0U3RpY2tlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwic2tldGNoLnRzIHwgRmF0YWwgRXJyb3I6IHRoZSBmaXJzdCByZXF1ZXN0IGZvciBnZXROZXh0UmFuZG9tTGV0dGVySW1hZ2UoKSBoYXMgcmVhY2hlZFwiICtcclxuICAgICAgICAgICAgICAgIFwidGhlIGVuZCBvZiB3b3JkVG9TcGVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBUT0RPIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRIZWxkU3RpY2tlciA9IGZpcnN0U3RpY2tlcjtcclxuICAgICAgICBjdXJyZW50U3RpY2tlclJvdGF0aW9uID0gcDUucmFuZG9tKC1tYXhTdGlja2VyUm90YXRpb24sIG1heFN0aWNrZXJSb3RhdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHA1LnNldHVwID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBwNS5jcmVhdGVDYW52YXMocDUud2luZG93V2lkdGgsIHA1LndpbmRvd0hlaWdodCk7XHJcbiAgICAgICAgY3R4ID0gcDUuZHJhd2luZ0NvbnRleHQgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgICAgICBwNS5jdXJzb3IoY3Vyc29yVHlwZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHA1LmRyYXcgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LmNsZWFyKCk7XHJcbiAgICAgICAgY29uc3QgYXJlQWxsTGV0dGVyc0RyYXduOiBib29sZWFuID0gY3VyckxldHRlckluV29yZFRvU3BlbGwgPj0gd29yZFRvU3BlbGwubGVuZ3RoICsgMTtcclxuXHJcbiAgICAgICAgaWYgKCFhcmVBbGxMZXR0ZXJzRHJhd24pIHtcclxuICAgICAgICAgICAgZHJhd0dyaWQoZ3JpZFJvd3MsIGdyaWRDb2x1bW5zLCBncmlkU3Ryb2tlQ29sb3VyLCBncmlkU3Ryb2tlQWxwaGEsIGdyaWRTdHJva2VXZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyBwcmV2aW91c2x5IHBsYWNlZCBzdGlja2Vyc1xyXG4gICAgICAgIHBsYWNlZFN0aWNrZXJzLmZvckVhY2goKHsgc3RpY2tlciwgY29vcmRpbmF0ZXMsIHJvdGF0aW9uLCBpbWFnZVNpemVNdWx0aXBsaWVyIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVkU3RpY2tlcldpZHRoID0gc3RpY2tlci53aWR0aCAqIGltYWdlU2l6ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlZFN0aWNrZXJIZWlnaHQgPSBzdGlja2VyLmhlaWdodCAqIGltYWdlU2l6ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIHA1LnB1c2goKTtcclxuICAgICAgICAgICAgcDUudHJhbnNsYXRlKGNvb3JkaW5hdGVzLnggKyBzY2FsZWRTdGlja2VyV2lkdGggLyAyLCBjb29yZGluYXRlcy55ICsgc2NhbGVkU3RpY2tlckhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBwNS5yb3RhdGUocm90YXRpb24pO1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBwYXN0ZWRTdGlja2VyU2hhZG93Q29sb3VyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IHBhc3RlZFN0aWNrZXJTaGFkb3dCbHVyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRZO1xyXG4gICAgICAgICAgICBwNS5pbWFnZShcclxuICAgICAgICAgICAgICAgIHN0aWNrZXIsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGVkU3RpY2tlcldpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIC1zY2FsZWRTdGlja2VySGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIHNjYWxlZFN0aWNrZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIHNjYWxlZFN0aWNrZXJIZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgcDUucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRvbid0IGRyYXcgYW55dGhpbmcgdW5kZXIgdGhlIGN1cnNvciBpZiBhbGwgbGV0dGVycyBhcmUgZHJhd25cclxuICAgICAgICBpZiAoYXJlQWxsTGV0dGVyc0RyYXduKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGRyYXcgdGhlIGN1cnJlbnQgaGVsZCBzdGlja2VyIHVuZGVyIHRoZSBtb3VzZSByb3RhdGVkIGFyb3VuZCBpdHMgY2VudGVyXHJcbiAgICAgICAgLy8gc2hhZG93IG9ubHkgd2hlbiBub3QgcHJlc3NlZFxyXG4gICAgICAgIGNvbnN0IGlzTGVmdE1vdXNlRG93bjogYm9vbGVhbiA9IHA1Lm1vdXNlSXNQcmVzc2VkICYmIHA1Lm1vdXNlQnV0dG9uID09PSBcImxlZnRcIjtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWlzTGVmdE1vdXNlRG93bikge1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBoZWxkU3RpY2tlclNoYWRvd0NvbG91cjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBoZWxkU3RpY2tlclNoYWRvd0JsdXI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gaGVsZFN0aWNrZXJTaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IGhlbGRTdGlja2VyU2hhZG93T2Zmc2V0WTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBwYXN0ZWRTdGlja2VyU2hhZG93Q29sb3VyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IHBhc3RlZFN0aWNrZXJTaGFkb3dCbHVyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWDogbnVtYmVyID0gaXNMZWZ0TW91c2VEb3duID8gb25Nb3VzZURvd25Nb3VzZVBvc0xvY2sueCA6IHA1Lm1vdXNlWDtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVZOiBudW1iZXIgPSBpc0xlZnRNb3VzZURvd24gPyBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay55IDogcDUubW91c2VZO1xyXG5cclxuICAgICAgICBjb25zdCBzdGlja2VyV2lkdGg6IG51bWJlciA9IGN1cnJlbnRIZWxkU3RpY2tlci53aWR0aCAqICghaXNMZWZ0TW91c2VEb3duID8gb25Nb3VzZURvd25TdGlja2VyU2l6ZSA6IDEpICogY3VyckltYWdlU2l6ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgY29uc3Qgc3RpY2tlckhlaWdodDogbnVtYmVyID0gY3VycmVudEhlbGRTdGlja2VyLmhlaWdodCAqICghaXNMZWZ0TW91c2VEb3duID8gb25Nb3VzZURvd25TdGlja2VyU2l6ZSA6IDEpICogY3VyckltYWdlU2l6ZU11bHRpcGxpZXI7XHJcblxyXG4gICAgICAgIHA1LnB1c2goKTtcclxuICAgICAgICBwNS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSk7XHJcbiAgICAgICAgcDUucm90YXRlKGN1cnJlbnRTdGlja2VyUm90YXRpb24pO1xyXG4gICAgICAgIHA1LmltYWdlKFxyXG4gICAgICAgICAgICBjdXJyZW50SGVsZFN0aWNrZXIsXHJcbiAgICAgICAgICAgIC1zdGlja2VyV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAtc3RpY2tlckhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIHN0aWNrZXJXaWR0aCxcclxuICAgICAgICAgICAgc3RpY2tlckhlaWdodCk7XHJcbiAgICAgICAgcDUucG9wKCk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHA1LndpbmRvd1Jlc2l6ZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5tb3VzZVdoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGlja2VyUm90YXRpb24gKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RpY2tlclJvdGF0aW9uIC09IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcDUua2V5UHJlc3NlZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHA1LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgY3VyckltYWdlU2l6ZU11bHRpcGxpZXIgKz0gMC4wMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICBjdXJySW1hZ2VTaXplTXVsdGlwbGllciAtPSAwLjAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocDUua2V5ID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICBwNS5zYXZlQ2FudmFzKFwicmFuc29tLnBuZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25Nb3VzZURvd25cclxuICAgIHA1Lm1vdXNlUHJlc3NlZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHA1Lm1vdXNlQnV0dG9uICE9PSBcImxlZnRcIikgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gbGVmdCBtb3VzZSBjbGlja3Mgb25seSBwYXN0IHRoaXMgcG9pbnRcclxuICAgICAgICAvLyB0aGlzIHN0b3BzIHRoZSBzdGlja2VyIGZyb20gbW92aW5nIHdoZW4gbW91c2UgaXMgZG93blxyXG4gICAgICAgIG9uTW91c2VEb3duTW91c2VQb3NMb2NrLnggPSBwNS5tb3VzZVg7XHJcbiAgICAgICAgb25Nb3VzZURvd25Nb3VzZVBvc0xvY2sueSA9IHA1Lm1vdXNlWTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbk1vdXNlVXBcclxuICAgIHA1Lm1vdXNlUmVsZWFzZWQgPSAoKSA6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGlmIChwNS5tb3VzZUJ1dHRvbiAhPT0gXCJsZWZ0XCIpICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGN1cnJMZXR0ZXJJbldvcmRUb1NwZWxsID49IHdvcmRUb1NwZWxsLmxlbmd0aCArIDEpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9lc1VzZXJXYW50UmVmcmVzaDogYm9vbGVhbiA9IGNvbmZpcm0oXCLwnZeX8J2XvCDwnZiG8J2XvPCdmIIg8J2YhPCdl67wnZe78J2YgSDwnZiB8J2XvCDwnZe/8J2XsvCdl7PwnZe/8J2XsvCdmIDwnZe1IPCdmIHwnZe18J2XsiDwnZe98J2XrvCdl7TwnZeyIPCdl67wnZe78J2XsSDwnZe08J2XsvCdmIEg8J2Xu/Cdl7LwnZiEIPCdl7nwnZey8J2YgfCdmIHwnZey8J2Xv/CdmIA/XFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJjbGlja2luZyBcXFwiT0tcXFwiIHdpbGwgcmVmcmVzaCB0aGUgcGFnZSwgYW5kIGNsaWNraW5nIFxcXCJDYW5jZWxcXFwiIHdpbGwgbGVhdmUgdGhlIHBhZ2UgYXMgaXMuXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAoZG9lc1VzZXJXYW50UmVmcmVzaCkgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxlZnQgbW91c2UgY2xpY2tzIG9ubHkgcGFzdCB0aGlzIHBvaW50XHJcbiAgICAgICAgLy8gdGhpcyBzdXBwb3J0cyB0aGUgYmVoYXZpb3VyIHdoZXJlIHN0b3BzIHRoZSBzdGlja2VyIGZyb20gbW92aW5nIHdoZW4gbW91c2UgaXMgZG93blxyXG4gICAgICAgIHBsYWNlZFN0aWNrZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBzdGlja2VyOiBjdXJyZW50SGVsZFN0aWNrZXIsXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOlxyXG4gICAgICAgICAgICAgICAge3g6IG9uTW91c2VEb3duTW91c2VQb3NMb2NrLnggLSAoY3VycmVudEhlbGRTdGlja2VyLndpZHRoICogY3VyckltYWdlU2l6ZU11bHRpcGxpZXIpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICB5OiBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay55IC0gKGN1cnJlbnRIZWxkU3RpY2tlci5oZWlnaHQgKiBjdXJySW1hZ2VTaXplTXVsdGlwbGllcikgLyAyfSxcclxuICAgICAgICAgICAgcm90YXRpb246IGN1cnJlbnRTdGlja2VyUm90YXRpb24sXHJcbiAgICAgICAgICAgIGltYWdlU2l6ZU11bHRpcGxpZXI6IGN1cnJJbWFnZVNpemVNdWx0aXBsaWVyLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0U3RpY2tlcjogcDUuSW1hZ2UgfCBudWxsIHwgdW5kZWZpbmVkID0gZ2V0TmV4dFJhbmRvbUxldHRlckltYWdlKCk7XHJcbiAgICAgICAgaWYgKG5leHRTdGlja2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNrZXRjaC50cyB8IEZhdGFsIEVycm9yOiBhdCBsZXR0ZXIgXFxcIlwiICsgd29yZFRvU3BlbGxbMF0gKyBcIlxcXCIgdGhlcmUgd2FzIG5vIGFzc29jaWF0ZWQgXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJpbWFnZSBwYXRocyBpbiBsZXR0ZXJJbWFnZU1hcCAoLmdldCByZXR1cm5lZCB1bmRlZmluZWQpLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBUT0RPIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0U3RpY2tlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwNS5jdXJzb3IoXCJub3QtYWxsb3dlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbCA+PSB3b3JkVG9TcGVsbC5sZW5ndGggKyAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2VzVXNlcldhbnRSZWZyZXNoOiBib29sZWFuID0gY29uZmlybShcIvCdl5fwnZe8IPCdmIbwnZe88J2YgiDwnZiE8J2XrvCdl7vwnZiBIPCdmIHwnZe8IPCdl7/wnZey8J2Xs/Cdl7/wnZey8J2YgPCdl7Ug8J2YgfCdl7XwnZeyIPCdl73wnZeu8J2XtPCdl7Ig8J2XrvCdl7vwnZexIPCdl7TwnZey8J2YgSDwnZe78J2XsvCdmIQg8J2XufCdl7LwnZiB8J2YgfCdl7LwnZe/8J2YgD9cXG5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja2luZyBcXFwiT0tcXFwiIHdpbGwgcmVmcmVzaCB0aGUgcGFnZSwgYW5kIGNsaWNraW5nIFxcXCJDYW5jZWxcXFwiIHdpbGwgcmVtb3ZlIHRoZSBncmlkIG9uIHRoZSBwYWdlIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBcInNvIHNjcmVlbnNob3RzIHdpdGgg8J2YgPCdl73wnZeu8J2XsPCdl7LwnZev8J2XrvCdl78gbG9vayBuaWNlci5cIilcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9lc1VzZXJXYW50UmVmcmVzaCkgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudEhlbGRTdGlja2VyID0gbmV4dFN0aWNrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRTdGlja2VyUm90YXRpb24gPSBwNS5yYW5kb20oLW1heFN0aWNrZXJSb3RhdGlvbiwgbWF4U3RpY2tlclJvdGF0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE5leHRSYW5kb21MZXR0ZXJJbWFnZSh3aXRob3V0UmVwbGFjZW1lbnQ6IGJvb2xlYW4gPSB0cnVlKSA6IHA1LkltYWdlIHwgdW5kZWZpbmVkIHwgbnVsbCB7XHJcbiAgICAgICAgLy8gaWYgd2UncmUgcmVxdWVzdGluZyBsZXR0ZXJzIHRoYXQgZG9uJ3QgZXhpc3QgdGhlbiByZXR1cm4gbnVsbFxyXG4gICAgICAgIGlmIChjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbCA+PSB3b3JkVG9TcGVsbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY3VyckxldHRlckluV29yZFRvU3BlbGwgKz0gMTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0TGV0dGVySW1hZ2U6IHA1LkltYWdlIHwgdW5kZWZpbmVkID1cclxuICAgICAgICAgICAgZ2V0UmFuZG9tTGV0dGVySW1hZ2Uod29yZFRvU3BlbGxbY3VyckxldHRlckluV29yZFRvU3BlbGxdLCB3aXRob3V0UmVwbGFjZW1lbnQpO1xyXG5cclxuICAgICAgICBjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbCArPSAxO1xyXG4gICAgICAgIHJldHVybiBuZXh0TGV0dGVySW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tTGV0dGVySW1hZ2UobGV0dGVyOiBzdHJpbmcsIHdpdGhvdXRSZXBsYWNlbWVudDogYm9vbGVhbiA9IHRydWUpIDogcDUuSW1hZ2UgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IGxldHRlckltYWdlQXJyYXk6IHA1LkltYWdlW10gfCB1bmRlZmluZWQgPSBsZXR0ZXJJbWFnZU1hcC5nZXQobGV0dGVyKTtcclxuXHJcbiAgICAgICAgaWYgKCFsZXR0ZXJJbWFnZUFycmF5KSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBjb25zdCByYW5kb21BcnJheUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKHA1LnJhbmRvbSgpICogbGV0dGVySW1hZ2VBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGxldHRlckltYWdlOiBwNS5JbWFnZSA9IGxldHRlckltYWdlQXJyYXlbcmFuZG9tQXJyYXlJbmRleF07XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSAxIGVsZW1lbnQgYXQgaW5kZXggcmFuZG9tQXJyYXlJbmRleCBpZiB3ZSBkb24ndCB3YW50IHRvIHJlcGxhY2VcclxuICAgICAgICBpZiAod2l0aG91dFJlcGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIGxldHRlckltYWdlQXJyYXkuc3BsaWNlKHJhbmRvbUFycmF5SW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxldHRlckltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdHcmlkKHJvd3M6IG51bWJlciwgY29sdW1uczogbnVtYmVyLCBzdHJva2VDb2xvdXI6IG51bWJlciwgc3Ryb2tlQWxwaGE6IG51bWJlciwgc3Ryb2tlV2VpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb21wdXRlIHNxdWFyZSBjZWxsIHNpemUgc28gY2VsbHMgcmVtYWluIHNxdWFyZVxyXG4gICAgICAgIGNvbnN0IGNlbGxTaXplID0gTWF0aC5taW4ocDUud2lkdGggLyBjb2x1bW5zLCBwNS5oZWlnaHQgLyByb3dzKTtcclxuXHJcbiAgICAgICAgcDUucHVzaCgpO1xyXG4gICAgICAgIHA1LnN0cm9rZShzdHJva2VDb2xvdXIsIE1hdGgucm91bmQoc3Ryb2tlQWxwaGEgKiAyNTUpKTtcclxuICAgICAgICBwNS5zdHJva2VXZWlnaHQoc3Ryb2tlV2VpZ2h0KTtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZDb2xzSGFsZiA9IE1hdGguY2VpbCgocDUud2lkdGgvMikvY2VsbFNpemUpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAtbnVtYmVyT2ZDb2xzSGFsZjsgeCA8IG51bWJlck9mQ29sc0hhbGY7IHgrKykge1xyXG4gICAgICAgICAgICBwNS5saW5lKHA1LndpZHRoLzIgKyB4ICogY2VsbFNpemUsIDAsIHA1LndpZHRoLzIgKyB4ICogY2VsbFNpemUsIHA1LmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBudW1iZXJPZlJvd3NIYWxmID0gTWF0aC5jZWlsKChwNS5oZWlnaHQvMikvY2VsbFNpemUpO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAtbnVtYmVyT2ZSb3dzSGFsZjsgeSA8IG51bWJlck9mUm93c0hhbGY7IHkrKykge1xyXG4gICAgICAgICAgICBwNS5saW5lKCAwLCBwNS5oZWlnaHQvMiArIHkgKiBjZWxsU2l6ZSwgcDUud2lkdGgsIHA1LmhlaWdodC8yICsgeSAqIGNlbGxTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcDUucG9wKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBwNShza2V0Y2gpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=