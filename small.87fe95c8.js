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
let imageSizeMultiplier = 0.5;
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
        placedStickers.forEach(({ sticker, coordinates, rotation }) => {
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
        const stickerWidth = currentHeldSticker.width * (!isLeftMouseDown ? onMouseDownStickerSize : 1) * imageSizeMultiplier;
        const stickerHeight = currentHeldSticker.height * (!isLeftMouseDown ? onMouseDownStickerSize : 1) * imageSizeMultiplier;
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
            imageSizeMultiplier += 0.01;
        }
        else if (p5.key === "ArrowDown") {
            imageSizeMultiplier -= 0.01;
        }
    };
    p5.mousePressed = () => {
        if (p5.mouseButton !== "left")
            return;
        onMouseDownMousePosLock.x = p5.mouseX;
        onMouseDownMousePosLock.y = p5.mouseY;
    };
    p5.mouseReleased = () => {
        if (p5.mouseButton !== "left" || currLetterInWordToSpell >= wordToSpell.length + 1)
            return false;
        placedStickers.push({
            sticker: currentHeldSticker,
            coordinates: { x: onMouseDownMousePosLock.x - (currentHeldSticker.width * imageSizeMultiplier) / 2,
                y: onMouseDownMousePosLock.y - (currentHeldSticker.height * imageSizeMultiplier) / 2 },
            rotation: currentStickerRotation
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDbEYsQ0FBQztRQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7QUFDTCxDQUFDO0FBRUQsSUFBSSxrQkFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy91dGlscy9yZWFkLXF1ZXJ5LXBhcmFtcy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL2V4cGVyaW1lbnRzL3NtYWxsL21hZ2F6aW5lLWxldHRlci1wYXRocy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL2V4cGVyaW1lbnRzL3NtYWxsL3NrZXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlQYXJhbVN0cmluZyhuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICByZXR1cm4gcGFyYW1zLmdldChuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5UGFyYW1OdW1iZXIobmFtZTogc3RyaW5nKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBjb25zdCByYXc6IHN0cmluZyB8IG51bGwgPSBnZXRRdWVyeVBhcmFtU3RyaW5nKG5hbWUpO1xyXG4gICAgaWYgKHJhdyA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBuOiBudW1iZXIgPSBOdW1iZXIocmF3KTtcclxuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbDtcclxufVxyXG5cclxuIiwiaW1wb3J0IGFfMCBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9hL2FfMC5wbmcnO1xyXG5pbXBvcnQgYV8xIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL2EvYV8xLnBuZyc7XHJcbmltcG9ydCBhXzIgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvYS9hXzIucG5nJztcclxuaW1wb3J0IGFfMyBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9hL2FfMy5wbmcnO1xyXG5pbXBvcnQgYV80IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL2EvYV80LnBuZyc7XHJcblxyXG5pbXBvcnQgbV8wIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL20vbV8wLnBuZyc7XHJcbmltcG9ydCBtXzEgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbS9tXzEucG5nJztcclxuaW1wb3J0IG1fMiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9tL21fMi5wbmcnO1xyXG5pbXBvcnQgbV8zIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL20vbV8zLnBuZyc7XHJcblxyXG5pbXBvcnQgbl8wIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL24vbl8wLnBuZyc7XHJcbmltcG9ydCBuXzEgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbi9uXzEucG5nJztcclxuaW1wb3J0IG5fMiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9uL25fMi5wbmcnO1xyXG5pbXBvcnQgbl8zIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL24vbl8zLnBuZyc7XHJcbmltcG9ydCBuXzQgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvbi9uXzQucG5nJztcclxuaW1wb3J0IG5fNSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9uL25fNS5wbmcnO1xyXG5pbXBvcnQgbl82IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL24vbl82LnBuZyc7XHJcblxyXG5pbXBvcnQgb18wIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL28vb18wLnBuZyc7XHJcbmltcG9ydCBvXzEgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvby9vXzEucG5nJztcclxuaW1wb3J0IG9fMiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9vL29fMi5wbmcnO1xyXG5pbXBvcnQgb18zIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL28vb18zLnBuZyc7XHJcbmltcG9ydCBvXzQgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvby9vXzQucG5nJztcclxuaW1wb3J0IG9fNSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9vL29fNS5wbmcnO1xyXG5pbXBvcnQgb182IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL28vb182LnBuZyc7XHJcblxyXG5pbXBvcnQgcl8wIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Ivcl8wLnBuZyc7XHJcbmltcG9ydCByXzEgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvci9yXzEucG5nJztcclxuaW1wb3J0IHJfMiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9yL3JfMi5wbmcnO1xyXG5pbXBvcnQgcl8zIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Ivcl8zLnBuZyc7XHJcbmltcG9ydCByXzQgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvci9yXzQucG5nJztcclxuaW1wb3J0IHJfNSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9yL3JfNS5wbmcnO1xyXG5pbXBvcnQgcl82IGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Ivcl82LnBuZyc7XHJcblxyXG5pbXBvcnQgc18wIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Mvc18wLnBuZyc7XHJcbmltcG9ydCBzXzEgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvcy9zXzEucG5nJztcclxuaW1wb3J0IHNfMiBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9zL3NfMi5wbmcnO1xyXG5pbXBvcnQgc18zIGZyb20gJ0BzcmMvYXNzZXRzL2ltYWdlcy9tYWdhemluZS1sZXR0ZXJzL3Mvc18zLnBuZyc7XHJcbmltcG9ydCBzXzQgZnJvbSAnQHNyYy9hc3NldHMvaW1hZ2VzL21hZ2F6aW5lLWxldHRlcnMvcy9zXzQucG5nJztcclxuaW1wb3J0IHNfNSBmcm9tICdAc3JjL2Fzc2V0cy9pbWFnZXMvbWFnYXppbmUtbGV0dGVycy9zL3NfNS5wbmcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxldHRlckltYWdlUGF0aHM6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiA9IG5ldyBNYXAoW1xyXG4gICAgWydhJywgW2FfMCwgYV8xLCBhXzIsIGFfMywgYV80XV0sXHJcbiAgICBbJ20nLCBbbV8wLCBtXzEsIG1fMiwgbV8zXV0sXHJcbiAgICBbJ24nLCBbbl8wLCBuXzEsIG5fMiwgbl8zLCBuXzQsIG5fNSwgbl82XV0sXHJcbiAgICBbJ28nLCBbb18wLCBvXzEsIG9fMiwgb18zLCBvXzQsIG9fNSwgb182XV0sXHJcbiAgICBbJ3InLCBbcl8wLCByXzEsIHJfMiwgcl8zLCByXzQsIHJfNSwgcl82XV0sXHJcbiAgICBbJ3MnLCBbc18wLCBzXzEsIHNfMiwgc18zLCBzXzQsIHNfNV1dLFxyXG5dKTtcclxuIiwiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuXHJcbmltcG9ydCAnQHNyYy9zdHlsZXMvc2tldGNoLmNzcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFkUXVlcnlQYXJhbXMgZnJvbSAnQHNyYy91dGlscy9yZWFkLXF1ZXJ5LXBhcmFtcyc7XHJcbmltcG9ydCB7IGxldHRlckltYWdlUGF0aHMgfSBmcm9tICcuL21hZ2F6aW5lLWxldHRlci1wYXRocyc7XHJcblxyXG5jb25zdCB3b3JkVG9TcGVsbDogc3RyaW5nID0gXCJyYW5zb21cIjtcclxubGV0IGN1cnJMZXR0ZXJJbldvcmRUb1NwZWxsOiBudW1iZXIgPSAwO1xyXG4vLyByYW5zb21cclxuLy8gYW5vbnltb3VzXHJcbi8vIG11cmRlcmVyXHJcbmNvbnN0IHJhbmRvbVNlZWRRdWVyeU5hbWU6IHN0cmluZyA9IFwicmFuZG9tLXNlZWRcIjtcclxuY29uc3QgaGVsZFN0aWNrZXJTaGFkb3dDb2xvdXI6IHN0cmluZyA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XHJcbmNvbnN0IGhlbGRTdGlja2VyU2hhZG93Qmx1cjogbnVtYmVyID0gMTI7XHJcbmNvbnN0IGhlbGRTdGlja2VyU2hhZG93T2Zmc2V0WDogbnVtYmVyID0gLTM7XHJcbmNvbnN0IGhlbGRTdGlja2VyU2hhZG93T2Zmc2V0WTogbnVtYmVyID0gMztcclxuY29uc3QgcGFzdGVkU3RpY2tlclNoYWRvd0NvbG91cjogc3RyaW5nID0gXCJyZ2JhKDAsIDAsIDAsIDAuMzQpXCI7XHJcbmNvbnN0IHBhc3RlZFN0aWNrZXJTaGFkb3dCbHVyOiBudW1iZXIgPSAzO1xyXG5jb25zdCBwYXN0ZWRTdGlja2VyU2hhZG93T2Zmc2V0WDogbnVtYmVyID0gMDtcclxuY29uc3QgcGFzdGVkU3RpY2tlclNoYWRvd09mZnNldFk6IG51bWJlciA9IDA7XHJcbmNvbnN0IGdyaWRSb3dzOiBudW1iZXIgPSAyMDtcclxuY29uc3QgZ3JpZENvbHVtbnM6IG51bWJlciA9IDIwO1xyXG5jb25zdCBncmlkU3Ryb2tlQ29sb3VyOiBudW1iZXIgPSAxMDA7XHJcbmNvbnN0IGdyaWRTdHJva2VBbHBoYTogbnVtYmVyID0gMC4xNTtcclxuY29uc3QgZ3JpZFN0cm9rZVdlaWdodDogbnVtYmVyID0gMC42O1xyXG5sZXQgaW1hZ2VTaXplTXVsdGlwbGllcjogbnVtYmVyID0gMC41O1xyXG5jb25zdCBjdXJzb3JUeXBlOiBzdHJpbmcgPSBcImdyYWJcIjtcclxuY29uc3Qgb25Nb3VzZURvd25TdGlja2VyU2l6ZTogbnVtYmVyID0gMS4wMztcclxuY29uc3QgcGxhY2VkU3RpY2tlcnM6IHsgc3RpY2tlcjogcDUuSW1hZ2UsIGNvb3JkaW5hdGVzOiBQb2ludCwgcm90YXRpb246IG51bWJlciB9W10gPSBbXTtcclxuY29uc3QgbGV0dGVySW1hZ2VNYXA6IE1hcDxzdHJpbmcsIHA1LkltYWdlW10+ID0gbmV3IE1hcDxzdHJpbmcsIHA1LkltYWdlW10+KCk7XHJcbi8vIHRoaXMgc3RvcHMgdGhlIHN0aWNrZXIgZnJvbSBtb3Zpbmcgd2hlbiBtb3VzZSBpcyBkb3duXHJcbmxldCBvbk1vdXNlRG93bk1vdXNlUG9zTG9jazogUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcclxuLy8gQHRzLWlnbm9yZVxyXG5sZXQgY3VycmVudFN0aWNrZXJSb3RhdGlvbjogbnVtYmVyID0gMDtcclxuY29uc3QgbWF4U3RpY2tlclJvdGF0aW9uOiBudW1iZXIgPSAzMDtcclxubGV0IGN1cnJlbnRIZWxkU3RpY2tlciA6IHA1LkltYWdlO1xyXG5sZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5mdW5jdGlvbiBza2V0Y2gocDU6IHA1KSA6IHZvaWQge1xyXG5cclxuICAgIHA1LnByZWxvYWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIHNldHRpbmcgYW5nbGVtb2RlIHRvIGRlZ3JlZXNcclxuICAgICAgICBwNS5hbmdsZU1vZGUocDUuREVHUkVFUyk7XHJcblxyXG4gICAgICAgIC8vIGdldHRpbmcgdGhlIHJhbmRvbSBzZWVkIGZyb20gdGhlIHVybCAoaWYgaXQgaXMgcHJvdmlkZWQgYXMgYSBxdWVyeSBwYXJhbWV0ZXIpXHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbVJhbmRvbVNlZWQ6IG51bWJlciB8IG51bGwgPSBSZWFkUXVlcnlQYXJhbXMuZ2V0UXVlcnlQYXJhbU51bWJlcihyYW5kb21TZWVkUXVlcnlOYW1lKVxyXG4gICAgICAgIGlmIChxdWVyeVBhcmFtUmFuZG9tU2VlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwNS5yYW5kb21TZWVkKHF1ZXJ5UGFyYW1SYW5kb21TZWVkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJza2V0Y2gudHMgfCB0aGUgY3VycmVudCByYW5kb20gc2VlZCAodmlhIHF1ZXJ5IHBhcmFtKSBpczogXCIgKyBxdWVyeVBhcmFtUmFuZG9tU2VlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbml0aWFsaXNpbmcgbGV0dGVySW1hZ2VNYXAgdG8gYWxsIGVtcHR5IGZvciBhbGwgc3VwcG9ydGVkIGNoYXJhY3RlcnNcclxuICAgICAgICBsZXR0ZXJJbWFnZVBhdGhzLmZvckVhY2goKGxldHRlckltYWdlUGF0aDogc3RyaW5nW10sIGxldHRlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGxldHRlckltYWdlTWFwLnNldChsZXR0ZXIsIFtdKTtcclxuICAgICAgICAgICAgbGV0dGVySW1hZ2VQYXRoLmZvckVhY2goKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0dGVySW1hZ2VNYXAuZ2V0KGxldHRlcik/LnB1c2gocDUubG9hZEltYWdlKHBhdGgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBmaXJzdFN0aWNrZXI6IHA1LkltYWdlIHwgbnVsbCB8IHVuZGVmaW5lZCA9IGdldE5leHRSYW5kb21MZXR0ZXJJbWFnZSgpO1xyXG4gICAgICAgIGlmIChmaXJzdFN0aWNrZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwic2tldGNoLnRzIHwgRmF0YWwgRXJyb3I6IGF0IGxldHRlciBcXFwiXCIgKyB3b3JkVG9TcGVsbFswXSArIFwiXFxcIiB0aGVyZSB3YXMgbm8gYXNzb2NpYXRlZCBcIiArXHJcbiAgICAgICAgICAgICAgICBcImltYWdlIHBhdGhzIGluIGxldHRlckltYWdlTWFwICguZ2V0IHJldHVybmVkIHVuZGVmaW5lZCkuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFRPRE8gYmV0dGVyIGVycm9yIGhhbmRsaW5nIGhlcmVcclxuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0U3RpY2tlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwic2tldGNoLnRzIHwgRmF0YWwgRXJyb3I6IHRoZSBmaXJzdCByZXF1ZXN0IGZvciBnZXROZXh0UmFuZG9tTGV0dGVySW1hZ2UoKSBoYXMgcmVhY2hlZFwiICtcclxuICAgICAgICAgICAgICAgIFwidGhlIGVuZCBvZiB3b3JkVG9TcGVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBUT0RPIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRIZWxkU3RpY2tlciA9IGZpcnN0U3RpY2tlcjtcclxuICAgICAgICBjdXJyZW50U3RpY2tlclJvdGF0aW9uID0gcDUucmFuZG9tKC1tYXhTdGlja2VyUm90YXRpb24sIG1heFN0aWNrZXJSb3RhdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHA1LnNldHVwID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBwNS5jcmVhdGVDYW52YXMocDUud2luZG93V2lkdGgsIHA1LndpbmRvd0hlaWdodCk7XHJcbiAgICAgICAgY3R4ID0gcDUuZHJhd2luZ0NvbnRleHQgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgICAgICBwNS5jdXJzb3IoY3Vyc29yVHlwZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHA1LmRyYXcgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LmNsZWFyKCk7XHJcbiAgICAgICAgY29uc3QgYXJlQWxsTGV0dGVyc0RyYXduOiBib29sZWFuID0gY3VyckxldHRlckluV29yZFRvU3BlbGwgPj0gd29yZFRvU3BlbGwubGVuZ3RoICsgMTtcclxuXHJcbiAgICAgICAgaWYgKCFhcmVBbGxMZXR0ZXJzRHJhd24pIHtcclxuICAgICAgICAgICAgZHJhd0dyaWQoZ3JpZFJvd3MsIGdyaWRDb2x1bW5zLCBncmlkU3Ryb2tlQ29sb3VyLCBncmlkU3Ryb2tlQWxwaGEsIGdyaWRTdHJva2VXZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyBwcmV2aW91c2x5IHBsYWNlZCBzdGlja2Vyc1xyXG4gICAgICAgIHBsYWNlZFN0aWNrZXJzLmZvckVhY2goKHsgc3RpY2tlciwgY29vcmRpbmF0ZXMsIHJvdGF0aW9uIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGVkU3RpY2tlcldpZHRoID0gc3RpY2tlci53aWR0aCAqIGltYWdlU2l6ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlZFN0aWNrZXJIZWlnaHQgPSBzdGlja2VyLmhlaWdodCAqIGltYWdlU2l6ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIHA1LnB1c2goKTtcclxuICAgICAgICAgICAgcDUudHJhbnNsYXRlKGNvb3JkaW5hdGVzLnggKyBzY2FsZWRTdGlja2VyV2lkdGggLyAyLCBjb29yZGluYXRlcy55ICsgc2NhbGVkU3RpY2tlckhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICBwNS5yb3RhdGUocm90YXRpb24pO1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBwYXN0ZWRTdGlja2VyU2hhZG93Q29sb3VyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IHBhc3RlZFN0aWNrZXJTaGFkb3dCbHVyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRZO1xyXG4gICAgICAgICAgICBwNS5pbWFnZShcclxuICAgICAgICAgICAgICAgIHN0aWNrZXIsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGVkU3RpY2tlcldpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgIC1zY2FsZWRTdGlja2VySGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIHNjYWxlZFN0aWNrZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIHNjYWxlZFN0aWNrZXJIZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgcDUucG9wKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRvbid0IGRyYXcgYW55dGhpbmcgdW5kZXIgdGhlIGN1cnNvciBpZiBhbGwgbGV0dGVycyBhcmUgZHJhd25cclxuICAgICAgICBpZiAoYXJlQWxsTGV0dGVyc0RyYXduKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGRyYXcgdGhlIGN1cnJlbnQgaGVsZCBzdGlja2VyIHVuZGVyIHRoZSBtb3VzZSByb3RhdGVkIGFyb3VuZCBpdHMgY2VudGVyXHJcbiAgICAgICAgLy8gc2hhZG93IG9ubHkgd2hlbiBub3QgcHJlc3NlZFxyXG4gICAgICAgIGNvbnN0IGlzTGVmdE1vdXNlRG93bjogYm9vbGVhbiA9IHA1Lm1vdXNlSXNQcmVzc2VkICYmIHA1Lm1vdXNlQnV0dG9uID09PSBcImxlZnRcIjtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWlzTGVmdE1vdXNlRG93bikge1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBoZWxkU3RpY2tlclNoYWRvd0NvbG91cjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSBoZWxkU3RpY2tlclNoYWRvd0JsdXI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gaGVsZFN0aWNrZXJTaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IGhlbGRTdGlja2VyU2hhZG93T2Zmc2V0WTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBwYXN0ZWRTdGlja2VyU2hhZG93Q29sb3VyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IHBhc3RlZFN0aWNrZXJTaGFkb3dCbHVyO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRYO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHBhc3RlZFN0aWNrZXJTaGFkb3dPZmZzZXRZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlWDogbnVtYmVyID0gaXNMZWZ0TW91c2VEb3duID8gb25Nb3VzZURvd25Nb3VzZVBvc0xvY2sueCA6IHA1Lm1vdXNlWDtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGVZOiBudW1iZXIgPSBpc0xlZnRNb3VzZURvd24gPyBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay55IDogcDUubW91c2VZO1xyXG5cclxuICAgICAgICBjb25zdCBzdGlja2VyV2lkdGg6IG51bWJlciA9IGN1cnJlbnRIZWxkU3RpY2tlci53aWR0aCAqICghaXNMZWZ0TW91c2VEb3duID8gb25Nb3VzZURvd25TdGlja2VyU2l6ZSA6IDEpICogaW1hZ2VTaXplTXVsdGlwbGllcjtcclxuICAgICAgICBjb25zdCBzdGlja2VySGVpZ2h0OiBudW1iZXIgPSBjdXJyZW50SGVsZFN0aWNrZXIuaGVpZ2h0ICogKCFpc0xlZnRNb3VzZURvd24gPyBvbk1vdXNlRG93blN0aWNrZXJTaXplIDogMSkgKiBpbWFnZVNpemVNdWx0aXBsaWVyO1xyXG5cclxuICAgICAgICBwNS5wdXNoKCk7XHJcbiAgICAgICAgcDUudHJhbnNsYXRlKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpO1xyXG4gICAgICAgIHA1LnJvdGF0ZShjdXJyZW50U3RpY2tlclJvdGF0aW9uKTtcclxuICAgICAgICBwNS5pbWFnZShcclxuICAgICAgICAgICAgY3VycmVudEhlbGRTdGlja2VyLFxyXG4gICAgICAgICAgICAtc3RpY2tlcldpZHRoIC8gMixcclxuICAgICAgICAgICAgLXN0aWNrZXJIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBzdGlja2VyV2lkdGgsXHJcbiAgICAgICAgICAgIHN0aWNrZXJIZWlnaHQpO1xyXG4gICAgICAgIHA1LnBvcCgpO1xyXG5cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwNS53aW5kb3dSZXNpemVkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBwNS5yZXNpemVDYW52YXMocDUud2luZG93V2lkdGgsIHA1LndpbmRvd0hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUubW91c2VXaGVlbCA9IChldmVudDogV2hlZWxFdmVudCkgOiBib29sZWFuID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RpY2tlclJvdGF0aW9uICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudFN0aWNrZXJSb3RhdGlvbiAtPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LmtleVByZXNzZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmIChwNS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIGltYWdlU2l6ZU11bHRpcGxpZXIgKz0gMC4wMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xyXG4gICAgICAgICAgICBpbWFnZVNpemVNdWx0aXBsaWVyIC09IDAuMDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBvbk1vdXNlRG93blxyXG4gICAgcDUubW91c2VQcmVzc2VkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAocDUubW91c2VCdXR0b24gIT09IFwibGVmdFwiKSAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBsZWZ0IG1vdXNlIGNsaWNrcyBvbmx5IHBhc3QgdGhpcyBwb2ludFxyXG4gICAgICAgIC8vIHRoaXMgc3RvcHMgdGhlIHN0aWNrZXIgZnJvbSBtb3Zpbmcgd2hlbiBtb3VzZSBpcyBkb3duXHJcbiAgICAgICAgb25Nb3VzZURvd25Nb3VzZVBvc0xvY2sueCA9IHA1Lm1vdXNlWDtcclxuICAgICAgICBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay55ID0gcDUubW91c2VZO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTW91c2VVcFxyXG4gICAgcDUubW91c2VSZWxlYXNlZCA9ICgpIDogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgaWYgKHA1Lm1vdXNlQnV0dG9uICE9PSBcImxlZnRcIiB8fCBjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbCA+PSB3b3JkVG9TcGVsbC5sZW5ndGggKyAxKSAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBsZWZ0IG1vdXNlIGNsaWNrcyBvbmx5IHBhc3QgdGhpcyBwb2ludFxyXG4gICAgICAgIC8vIHRoaXMgc3VwcG9ydHMgdGhlIGJlaGF2aW91ciB3aGVyZSBzdG9wcyB0aGUgc3RpY2tlciBmcm9tIG1vdmluZyB3aGVuIG1vdXNlIGlzIGRvd25cclxuICAgICAgICBwbGFjZWRTdGlja2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgc3RpY2tlcjogY3VycmVudEhlbGRTdGlja2VyLFxyXG4gICAgICAgICAgICBjb29yZGluYXRlczpcclxuICAgICAgICAgICAgICAgIHt4OiBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay54IC0gKGN1cnJlbnRIZWxkU3RpY2tlci53aWR0aCAqIGltYWdlU2l6ZU11bHRpcGxpZXIpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICB5OiBvbk1vdXNlRG93bk1vdXNlUG9zTG9jay55IC0gKGN1cnJlbnRIZWxkU3RpY2tlci5oZWlnaHQgKiBpbWFnZVNpemVNdWx0aXBsaWVyKSAvIDJ9LFxyXG4gICAgICAgICAgICByb3RhdGlvbjogY3VycmVudFN0aWNrZXJSb3RhdGlvblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0U3RpY2tlcjogcDUuSW1hZ2UgfCBudWxsIHwgdW5kZWZpbmVkID0gZ2V0TmV4dFJhbmRvbUxldHRlckltYWdlKCk7XHJcbiAgICAgICAgaWYgKG5leHRTdGlja2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInNrZXRjaC50cyB8IEZhdGFsIEVycm9yOiBhdCBsZXR0ZXIgXFxcIlwiICsgd29yZFRvU3BlbGxbMF0gKyBcIlxcXCIgdGhlcmUgd2FzIG5vIGFzc29jaWF0ZWQgXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJpbWFnZSBwYXRocyBpbiBsZXR0ZXJJbWFnZU1hcCAoLmdldCByZXR1cm5lZCB1bmRlZmluZWQpLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBUT0RPIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlXHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0U3RpY2tlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwNS5jdXJzb3IoXCJub3QtYWxsb3dlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50SGVsZFN0aWNrZXIgPSBuZXh0U3RpY2tlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFN0aWNrZXJSb3RhdGlvbiA9IHA1LnJhbmRvbSgtbWF4U3RpY2tlclJvdGF0aW9uLCBtYXhTdGlja2VyUm90YXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFJhbmRvbUxldHRlckltYWdlKHdpdGhvdXRSZXBsYWNlbWVudDogYm9vbGVhbiA9IHRydWUpIDogcDUuSW1hZ2UgfCB1bmRlZmluZWQgfCBudWxsIHtcclxuICAgICAgICAvLyBpZiB3ZSdyZSByZXF1ZXN0aW5nIGxldHRlcnMgdGhhdCBkb24ndCBleGlzdCB0aGVuIHJldHVybiBudWxsXHJcbiAgICAgICAgaWYgKGN1cnJMZXR0ZXJJbldvcmRUb1NwZWxsID49IHdvcmRUb1NwZWxsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbCArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXJJbWFnZTogcDUuSW1hZ2UgfCB1bmRlZmluZWQgPVxyXG4gICAgICAgICAgICBnZXRSYW5kb21MZXR0ZXJJbWFnZSh3b3JkVG9TcGVsbFtjdXJyTGV0dGVySW5Xb3JkVG9TcGVsbF0sIHdpdGhvdXRSZXBsYWNlbWVudCk7XHJcblxyXG4gICAgICAgIGN1cnJMZXR0ZXJJbldvcmRUb1NwZWxsICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIG5leHRMZXR0ZXJJbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21MZXR0ZXJJbWFnZShsZXR0ZXI6IHN0cmluZywgd2l0aG91dFJlcGxhY2VtZW50OiBib29sZWFuID0gdHJ1ZSkgOiBwNS5JbWFnZSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3QgbGV0dGVySW1hZ2VBcnJheTogcDUuSW1hZ2VbXSB8IHVuZGVmaW5lZCA9IGxldHRlckltYWdlTWFwLmdldChsZXR0ZXIpO1xyXG5cclxuICAgICAgICBpZiAoIWxldHRlckltYWdlQXJyYXkpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHJhbmRvbUFycmF5SW5kZXg6IG51bWJlciA9IE1hdGguZmxvb3IocDUucmFuZG9tKCkgKiBsZXR0ZXJJbWFnZUFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgbGV0dGVySW1hZ2U6IHA1LkltYWdlID0gbGV0dGVySW1hZ2VBcnJheVtyYW5kb21BcnJheUluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIDEgZWxlbWVudCBhdCBpbmRleCByYW5kb21BcnJheUluZGV4IGlmIHdlIGRvbid0IHdhbnQgdG8gcmVwbGFjZVxyXG4gICAgICAgIGlmICh3aXRob3V0UmVwbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0dGVySW1hZ2VBcnJheS5zcGxpY2UocmFuZG9tQXJyYXlJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGV0dGVySW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd0dyaWQocm93czogbnVtYmVyLCBjb2x1bW5zOiBudW1iZXIsIHN0cm9rZUNvbG91cjogbnVtYmVyLCBzdHJva2VBbHBoYTogbnVtYmVyLCBzdHJva2VXZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbXB1dGUgc3F1YXJlIGNlbGwgc2l6ZSBzbyBjZWxscyByZW1haW4gc3F1YXJlXHJcbiAgICAgICAgY29uc3QgY2VsbFNpemUgPSBNYXRoLm1pbihwNS53aWR0aCAvIGNvbHVtbnMsIHA1LmhlaWdodCAvIHJvd3MpO1xyXG5cclxuICAgICAgICBwNS5wdXNoKCk7XHJcbiAgICAgICAgcDUuc3Ryb2tlKHN0cm9rZUNvbG91ciwgTWF0aC5yb3VuZChzdHJva2VBbHBoYSAqIDI1NSkpO1xyXG4gICAgICAgIHA1LnN0cm9rZVdlaWdodChzdHJva2VXZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBudW1iZXJPZkNvbHNIYWxmID0gTWF0aC5jZWlsKChwNS53aWR0aC8yKS9jZWxsU2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IC1udW1iZXJPZkNvbHNIYWxmOyB4IDwgbnVtYmVyT2ZDb2xzSGFsZjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHA1LmxpbmUocDUud2lkdGgvMiArIHggKiBjZWxsU2l6ZSwgMCwgcDUud2lkdGgvMiArIHggKiBjZWxsU2l6ZSwgcDUuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG51bWJlck9mUm93c0hhbGYgPSBNYXRoLmNlaWwoKHA1LmhlaWdodC8yKS9jZWxsU2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IC1udW1iZXJPZlJvd3NIYWxmOyB5IDwgbnVtYmVyT2ZSb3dzSGFsZjsgeSsrKSB7XHJcbiAgICAgICAgICAgIHA1LmxpbmUoIDAsIHA1LmhlaWdodC8yICsgeSAqIGNlbGxTaXplLCBwNS53aWR0aCwgcDUuaGVpZ2h0LzIgKyB5ICogY2VsbFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwNS5wb3AoKTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IHA1KHNrZXRjaCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==