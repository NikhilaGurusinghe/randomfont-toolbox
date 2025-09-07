(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[191],{

/***/ 134:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ freakTo)
/* harmony export */ });
/* unused harmony export noPreprocess */
function noPreprocess(_p5, textPaths) {
    return textPaths;
}
function freakTo(p5, textPaths, options) {
    let randomUnit;
    if (options === null || options === undefined || !("craziness" in options)) {
        console.error("path-preprocessor.ts | freakTo received malformed options parameter.");
        randomUnit = 3;
    }
    else {
        randomUnit = options["craziness"];
    }
    let processedTextPaths = JSON.parse(JSON.stringify(textPaths));
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++) {
        const characterPath = textPaths[characterIndex];
        let newCharacterPathCommands = [];
        let previousPoint = { x: 0, y: 0 };
        for (let charPathCommandIndex = 0; charPathCommandIndex < characterPath.commands.length; charPathCommandIndex++) {
            let command = characterPath.commands[charPathCommandIndex];
            switch (command.type) {
                case "M":
                    newCharacterPathCommands.push({
                        type: "M",
                        x: command.x + p5.random(-randomUnit, randomUnit),
                        y: command.y + p5.random(-randomUnit, randomUnit)
                    });
                    break;
                case "L":
                    let lerpIntervals = [];
                    for (let i = 0; i < p5.random(0, randomUnit - 1); i++) {
                        lerpIntervals.push(p5.random(0, 0.9));
                    }
                    lerpIntervals.sort((a, b) => a - b);
                    for (let lerpInterval of lerpIntervals) {
                        let lerpedX = p5.lerp(previousPoint.x, command.x, lerpInterval);
                        let lerpedY = p5.lerp(previousPoint.y, command.y, lerpInterval);
                        textPaths[characterIndex].commands.splice(charPathCommandIndex, 0, {
                            type: "L",
                            x: lerpedX,
                            y: lerpedY
                        });
                        newCharacterPathCommands.push({
                            type: "L",
                            x: lerpedX + p5.random(-randomUnit / 1.5, randomUnit / 1.5),
                            y: lerpedY + p5.random(-randomUnit / 1.5, randomUnit / 1.5)
                        });
                    }
                    newCharacterPathCommands.push({
                        type: "L",
                        x: command.x + p5.random(-randomUnit, randomUnit),
                        y: command.y + p5.random(-randomUnit, randomUnit)
                    });
                    charPathCommandIndex += lerpIntervals.length;
                    break;
                case "C":
                    newCharacterPathCommands.push({
                        type: "C",
                        x1: command.x1 + p5.random(-randomUnit, randomUnit),
                        y1: command.y1 + p5.random(-randomUnit, randomUnit),
                        x2: command.x2 + p5.random(-randomUnit, randomUnit),
                        y2: command.y2 + p5.random(-randomUnit, randomUnit),
                        x: command.x + p5.random(-randomUnit, randomUnit),
                        y: command.y + p5.random(-randomUnit, randomUnit)
                    });
                    break;
                case "Q":
                    newCharacterPathCommands.push({
                        type: "Q",
                        x1: command.x1 + p5.random(-randomUnit, randomUnit),
                        y1: command.y1 + p5.random(-randomUnit, randomUnit),
                        x: command.x + p5.random(-randomUnit, randomUnit),
                        y: command.y + p5.random(-randomUnit, randomUnit)
                    });
                    break;
                case "Z":
                    newCharacterPathCommands.push({
                        type: "Z"
                    });
                    break;
            }
            if (command.type !== "Z") {
                previousPoint.x = command.x;
                previousPoint.y = command.y;
            }
        }
        processedTextPaths[characterIndex].commands = newCharacterPathCommands;
    }
    return processedTextPaths;
}


/***/ }),

/***/ 496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Regular.ttf";

/***/ }),

/***/ 840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  eV: () => (/* binding */ FillStatus),
  is: () => (/* binding */ getTextPaths),
  Q1: () => (/* binding */ renderFont),
  Yc: () => (/* binding */ textBackgroundColour),
  $Q: () => (/* binding */ textForegroundColour)
});

;// ./src/renderers/otf/utils/type-counters.ts
function counterCounter(font, character) {
    if (character.length > 1) {
        console.error("type-counters.ts | PathCounterCounter accepted a character of size " + character.length);
    }
    return pathCounterCounter(font.getPath(character[0], 0, 0, 20));
}
function pathCounterCounter(characterPath) {
    let counterCounter = 0;
    for (let command of characterPath.commands) {
        if (command.type === "Z") {
            counterCounter += 1;
        }
    }
    return counterCounter === 0 ? 0 : counterCounter - 1;
}

;// ./src/renderers/otf/utils/otf-path-utils.ts
function extractShapesFromPath(path) {
    let currShapeCounter = 0;
    let currShapes = [[]];
    for (let i = 0; i < path.commands.length; i++) {
        let command = path.commands[i];
        if (command.type !== "Z") {
            currShapes[currShapeCounter].push(command);
        }
        else {
            currShapes[currShapeCounter].push(command);
            currShapeCounter++;
            if (i !== path.commands.length - 1)
                currShapes.push([]);
        }
    }
    return currShapes;
}
function getFirstStartPointInPath(pathCommands) {
    for (let command of pathCommands) {
        if (command.type === "C" ||
            command.type === "L" ||
            command.type === "Q") {
            return { x: command.x, y: command.y };
        }
    }
    return null;
}
function pathCommandsToPathData(pathCommands, decimalPlaces) {
    let pathData = "";
    for (let command of pathCommands) {
        pathData += command.type + " ";
        switch (command.type) {
            case "M":
            case "L":
                pathData += command.x.toFixed(decimalPlaces) + "," + command.y.toFixed(decimalPlaces);
                break;
            case "C":
                pathData += command.x1.toFixed(decimalPlaces) + "," + command.y1.toFixed(decimalPlaces) + " " +
                    command.x2.toFixed(decimalPlaces) + "," + command.y2.toFixed(decimalPlaces) + " " +
                    command.x.toFixed(decimalPlaces) + "," + command.y.toFixed(decimalPlaces);
                break;
            case "Q":
                pathData += command.x1.toFixed(decimalPlaces) + "," + command.y1.toFixed(decimalPlaces) + " " +
                    command.x.toFixed(decimalPlaces) + "," + command.y.toFixed(decimalPlaces);
                break;
        }
    }
    return pathData;
}

;// ./src/renderers/otf/render-font.ts


var FillStatus;
(function (FillStatus) {
    FillStatus["FILLED"] = "filled";
    FillStatus["OPEN"] = "open";
})(FillStatus || (FillStatus = {}));
const textForegroundColour = 0;
const textBackgroundColour = 255;
function getTextPaths(p5, font, text, typeSize, fontPreprocessor, fontPreprocessorOptions, layoutOptions) {
    const lines = text.split(/\r?\n/);
    const align = layoutOptions?.align ?? "center";
    const lineHeightMultiplier = layoutOptions?.lineHeight ?? 1.2;
    const marginX = layoutOptions?.marginX ?? 0;
    const marginY = layoutOptions?.marginY ?? 0;
    const scale = typeSize / font.unitsPerEm;
    const ascent = font.ascender * scale;
    const descent = Math.abs(font.descender) * scale;
    const baselineGap = (ascent + descent) * lineHeightMultiplier;
    const lineBBoxes = lines.map(line => {
        const path = font.getPath(line, 0, 0, typeSize, { kerning: true });
        return path.getBoundingBox();
    });
    const lineWidths = lineBBoxes.map(bb => bb.x2 - bb.x1);
    const blockHeight = (ascent + descent) + (lines.length - 1) * baselineGap;
    const top = (p5.windowHeight - blockHeight) / 2 + marginY;
    const baseline0 = top + ascent;
    let textPaths = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const bb = lineBBoxes[i];
        const lineWidth = lineWidths[i];
        let desiredLeft;
        switch (align) {
            case "left":
                desiredLeft = marginX;
                break;
            case "right":
                desiredLeft = p5.windowWidth - lineWidth - marginX;
                break;
            case "center":
            default:
                desiredLeft = (p5.windowWidth - lineWidth) / 2;
                break;
        }
        const baselineY = baseline0 + i * baselineGap;
        const x = desiredLeft - bb.x1;
        const linePaths = font.getPaths(line, x, baselineY, typeSize, { kerning: true });
        textPaths.push(...linePaths);
    }
    const processedTextPaths = fontPreprocessor(p5, textPaths, fontPreprocessorOptions);
    if (textPaths.length !== processedTextPaths.length)
        console.error("render-font.ts | something has gone wrong in otf\\render-font.ts#getTextPaths" +
            " regarding the lengths of the outputted otf.Path[]");
    return { originalTextPath: textPaths, processedTextPath: processedTextPaths };
}
function renderFont(p5, textPaths, fontRenderer, fontRendererOptions, unprocessedTextPaths) {
    const textFillStatuses = unprocessedTextPaths === undefined ?
        getTextFillStatuses(p5, textPaths) : getTextFillStatuses(p5, unprocessedTextPaths);
    if (fontRendererOptions !== undefined && unprocessedTextPaths !== undefined) {
        fontRendererOptions["unprocessedTextPaths"] = unprocessedTextPaths;
    }
    fontRenderer(p5, textPaths, textFillStatuses, fontRendererOptions);
    return textPaths;
}
function generateSampleOffsetGrid(sideLength, sampleUnit) {
    if (sideLength % 2 === 0) {
        sideLength += 1;
        console.error("render-font-otf.ts | generateSampleOffsetGrid received an even side length of " + (sideLength - 1)
            + ". The actual side length of the grid generated will be odd: " + sideLength);
    }
    let sampleOffsetGrid = [];
    let maxSampleUnitScale = Math.floor(sideLength / 2);
    for (let i = maxSampleUnitScale; i >= -maxSampleUnitScale; i--) {
        for (let j = -maxSampleUnitScale; j <= maxSampleUnitScale; j++) {
            sampleOffsetGrid.push([j * sampleUnit, -i * sampleUnit]);
        }
    }
    return sampleOffsetGrid;
}
function getTextFillStatuses(p5, textPaths) {
    const toPathDataResolution = 3;
    const sampleUnit = 2;
    const sampleOffsetKernel = generateSampleOffsetGrid(5, sampleUnit);
    const ctx = p5.drawingContext;
    let textFillStatuses = [];
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++) {
        const entireLetterformPath = textPaths[characterIndex];
        const counterCount = pathCounterCounter(entireLetterformPath);
        textFillStatuses.push([]);
        if (counterCount <= 0) {
            textFillStatuses[characterIndex].push(FillStatus.FILLED);
            continue;
        }
        let letterformComponentShapes = extractShapesFromPath(entireLetterformPath);
        for (let letterformComponentShape of letterformComponentShapes) {
            let samplePoint = getFirstStartPointInPath(letterformComponentShape);
            if (samplePoint === null || samplePoint === undefined) {
                console.error("render-font-otf.ts | samplePoint.x and samplePoint.y was null");
                break;
            }
            let samplePointOffset = { x: samplePoint.x, y: samplePoint.y };
            let wasFillStatusAssigned = false;
            for (let sampleOffset of sampleOffsetKernel) {
                samplePointOffset.x = samplePoint.x + sampleOffset[0];
                samplePointOffset.y = samplePoint.y + sampleOffset[1];
                const characterPath2D = new Path2D(pathCommandsToPathData(letterformComponentShape, toPathDataResolution));
                const isInPath = ctx.isPointInPath(characterPath2D, p5.pixelDensity() * samplePointOffset.x, p5.pixelDensity() * samplePointOffset.y);
                const isInStroke = ctx.isPointInStroke(characterPath2D, p5.pixelDensity() * samplePointOffset.x, p5.pixelDensity() * samplePointOffset.y);
                if (isInPath && !isInStroke) {
                    wasFillStatusAssigned = true;
                    let characterShapePath2D = new Path2D(entireLetterformPath.toPathData(toPathDataResolution));
                    const isInPath = ctx.isPointInPath(characterShapePath2D, p5.pixelDensity() * samplePointOffset.x, p5.pixelDensity() * samplePointOffset.y);
                    const isInStroke = ctx.isPointInStroke(characterShapePath2D, p5.pixelDensity() * samplePointOffset.x, p5.pixelDensity() * samplePointOffset.y);
                    if (isInPath || isInStroke) {
                        textFillStatuses[characterIndex].push(FillStatus.FILLED);
                    }
                    else {
                        textFillStatuses[characterIndex].push(FillStatus.OPEN);
                    }
                    break;
                }
            }
            if (!wasFillStatusAssigned) {
                console.error("render-font-otf.ts | getTextFillStatuses could not find a suitable sample point " +
                    "(at character index " + characterIndex + ") for calculating text fill status");
            }
        }
    }
    return textFillStatuses;
}


/***/ }),

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ erode)
/* harmony export */ });
/* unused harmony export filled */
/* harmony import */ var _render_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(840);

function filled(p5, textPaths, textFillStatuses) {
    p5.push();
    p5.noStroke();
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++) {
        const characterPath = textPaths[characterIndex];
        const characterFillStatus = textFillStatuses[characterIndex];
        let textFillStatusCounter = 0;
        if (characterFillStatus[textFillStatusCounter] === FillStatus.FILLED) {
            p5.fill(textForegroundColour);
        }
        else if (characterFillStatus[textFillStatusCounter] === FillStatus.OPEN) {
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
                    }
                    else if (characterFillStatus[textFillStatusCounter] === FillStatus.OPEN) {
                        p5.fill(textBackgroundColour);
                    }
                    break;
            }
        }
    }
    p5.pop();
}
function isNumberArray(x) {
    return Array.isArray(x) && x.every(v => typeof v === 'number');
}
function erode(p5, textPaths, textFillStatuses, options) {
    let unprocessedTextPaths;
    if (options === undefined || !("erosionStrength" in options) || !("unprocessedTextPaths" in options)) {
        console.error("render-strategy.ts | freakToEroded received malformed options parameter.");
        return;
    }
    else {
        unprocessedTextPaths = options["unprocessedTextPaths"];
    }
    const rawErosion = options["erosionStrength"];
    const isRawErosionNumberArray = isNumberArray(rawErosion);
    if (!isRawErosionNumberArray && typeof rawErosion !== "number") {
        console.error("render-strategy.ts | erosionStrength must be a number or number[]");
        return;
    }
    if (isRawErosionNumberArray && rawErosion.length !== textPaths.length) {
        console.error("render-strategy.ts | if erosionStrength is a number[], then it must be length of textPaths" +
            "currently rawErosion is length " + rawErosion.length + " " +
            "and textPaths.length is " + textPaths.length);
        return;
    }
    p5.push();
    p5.noStroke();
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++) {
        const nudgeFactor = typeof rawErosion === "number" ? rawErosion : rawErosion[characterIndex];
        const characterPath = textPaths[characterIndex];
        const unprocessedCharacterPath = unprocessedTextPaths[characterIndex];
        const characterFillStatus = textFillStatuses[characterIndex];
        let textFillStatusCounter = 0;
        if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.FILLED) {
            p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textForegroundColour */ .$Q);
        }
        else if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.OPEN) {
            p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textBackgroundColour */ .Yc);
        }
        let previousPoint = { x: 0, y: 0 };
        for (let i = 0; i < characterPath.commands.length; i++) {
            let command = characterPath.commands[i];
            let unprocessedCommand = unprocessedCharacterPath.commands[i];
            let dx;
            let dy;
            let magnitude;
            let offsetX;
            let offsetY;
            if (command.type !== unprocessedCommand.type) {
                console.error("render-strategy.ts | something has gone wrong in otf\render-font.ts#getTextPaths" +
                    " regarding the lengths of the outputted otf.Path[]");
            }
            if (command.type === "M" && unprocessedCommand.type === "M") {
                p5.beginShape();
                dx = unprocessedCommand.y - previousPoint.y;
                dy = previousPoint.x - unprocessedCommand.x;
                magnitude = Math.sqrt(dx ** 2 + dy ** 2);
                offsetX = (dx / magnitude) * nudgeFactor;
                offsetY = (dy / magnitude) * nudgeFactor;
                p5.vertex(command.x + offsetX, command.y + offsetY);
                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            }
            else if (command.type === "L" && unprocessedCommand.type === "L") {
                dx = unprocessedCommand.y - previousPoint.y;
                dy = previousPoint.x - unprocessedCommand.x;
                magnitude = Math.sqrt(dx ** 2 + dy ** 2);
                offsetX = (dx / magnitude) * nudgeFactor / 1.5;
                offsetY = (dy / magnitude) * nudgeFactor / 1.5;
                p5.vertex(command.x + offsetX, command.y + offsetY);
                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            }
            else if (command.type === "C" && unprocessedCommand.type === "C") {
                console.error("render-strategy.ts | a cubic bezier was drawn! This is really bad.");
                p5.bezierVertex(command.x1, command.y1, command.x2, command.y2, command.x, command.y);
                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            }
            else if (command.type === "Q" && unprocessedCommand.type === "Q") {
                dx = unprocessedCommand.y - unprocessedCommand.y1;
                dy = unprocessedCommand.x1 - unprocessedCommand.x;
                magnitude = Math.sqrt(dx ** 2 + dy ** 2);
                offsetX = (dx / magnitude) * nudgeFactor;
                offsetY = (dy / magnitude) * nudgeFactor;
                p5.quadraticVertex(command.x1 + offsetX, command.y1 + offsetY, command.x + offsetX, command.y + offsetY);
                previousPoint.x = unprocessedCommand.x;
                previousPoint.y = unprocessedCommand.y;
            }
            else if (command.type === "Z" && unprocessedCommand.type === "Z") {
                p5.endShape(p5.CLOSE);
                textFillStatusCounter++;
                if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.FILLED) {
                    p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textForegroundColour */ .$Q);
                }
                else if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.OPEN) {
                    p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textBackgroundColour */ .Yc);
                }
            }
        }
    }
    p5.pop();
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxlQUFlLENBQ2QsT0FBTyxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQ3BCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUNwQixPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFDbkIsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQ3RCLENBQUM7Z0JBRUYsYUFBYSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUM7aUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2pFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV0QixxQkFBcUIsRUFBRSxDQUFDO2dCQUN4QixJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssOERBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbkUsRUFBRSxDQUFDLElBQUksQ0FBQyx3RUFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO3FCQUFNLElBQUksbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyw4REFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4RSxFQUFFLENBQUMsSUFBSSxDQUFDLHdFQUFvQixDQUFDLENBQUM7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuZG9tZm9udC9pZ25vcmVkfEQ6XFxSZXBvc1xcQU5VXFxERVNOMjAwOVxccmFuZG9tZm9udFxcbm9kZV9tb2R1bGVzXFwucG5wbVxcb3BlbnR5cGUuanNAMS4zLjRcXG5vZGVfbW9kdWxlc1xcb3BlbnR5cGUuanNcXGRpc3R8ZnMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3BhdGgtcHJlcHJvY2Vzc29yLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi91dGlscy90eXBlLWNvdW50ZXJzLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi91dGlscy9vdGYtcGF0aC11dGlscy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLWZvbnQudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1zdHJhdGVneS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgcDUgZnJvbSBcInA1XCI7XHJcbmltcG9ydCBvdGYgZnJvbSBcIm9wZW50eXBlLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9QcmVwcm9jZXNzKF9wNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSk6IG90Zi5QYXRoW10ge1xyXG4gICAgcmV0dXJuIHRleHRQYXRocztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyZWFrVG8ocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogb3RmLlBhdGhbXSB7XHJcbiAgICBsZXQgcmFuZG9tVW5pdDogbnVtYmVyO1xyXG5cclxuICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCAhKFwiY3JhemluZXNzXCIgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicGF0aC1wcmVwcm9jZXNzb3IudHMgfCBmcmVha1RvIHJlY2VpdmVkIG1hbGZvcm1lZCBvcHRpb25zIHBhcmFtZXRlci5cIik7XHJcbiAgICAgICAgcmFuZG9tVW5pdCA9IDM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJhbmRvbVVuaXQgPSBvcHRpb25zW1wiY3JhemluZXNzXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW10gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRleHRQYXRocykpO1xyXG5cclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICAvLyBnZXQgb3RmLlBhdGggb2JqZWN0IGZvciBjdXJyZW50IGNoYXJhY3RlclxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgYWNjdW11bGF0ZSBhbGwgdGhlIG5ldyByYW5kb21pemVkIHBhdGggY29tbWFuZHMgdGhhdCB3ZSB3YW50XHJcbiAgICAgICAgbGV0IG5ld0NoYXJhY3RlclBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUG9pbnQ6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgICAgIC8vIHByb2Nlc3MgYWxsIHBhdGggY29tbWFuZHMgZm9yIHRoaXMgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgICAgICBmb3IgKGxldCBjaGFyUGF0aENvbW1hbmRJbmRleCA9IDA7IGNoYXJQYXRoQ29tbWFuZEluZGV4IDwgY2hhcmFjdGVyUGF0aC5jb21tYW5kcy5sZW5ndGg7IGNoYXJQYXRoQ29tbWFuZEluZGV4Kyspe1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZCA9IGNoYXJhY3RlclBhdGguY29tbWFuZHNbY2hhclBhdGhDb21tYW5kSW5kZXhdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVycEludGVydmFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHA1LnJhbmRvbSgwLCByYW5kb21Vbml0IC0gMSk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXJwSW50ZXJ2YWxzLnB1c2gocDUucmFuZG9tKDAsIDAuOSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXJwSW50ZXJ2YWxzLnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhIC0gYik7IC8vIHNvcnQgaW4gYXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGVycEludGVydmFsIG9mIGxlcnBJbnRlcnZhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBlZFg6IG51bWJlciA9IHA1LmxlcnAocHJldmlvdXNQb2ludC54LCBjb21tYW5kLngsIGxlcnBJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXJwZWRZOiBudW1iZXIgPSBwNS5sZXJwKHByZXZpb3VzUG9pbnQueSwgY29tbWFuZC55LCBsZXJwSW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byB1cGRhdGUgdGhlIG9yaWdpbmFsIHRleHRQYXRocyBhcyB3ZSBhcmUgYWRkaW5nIGNvbW1hbmRzIHRoYXQgbmVlZCB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSByZWZsZWN0ZWQgaW4gdGhlIG9yaWdpbmFsIHRleHRQYXRocyAoY2F1c2Ugd2UgbWlnaHQgbmVlZCB0byB1c2UgdGhlIG9yaWdpbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHRQYXRocyBvdXRzaWRlIG9mIGhlcmUpIC0tIHRoaXMgd29ya3MgZmluZSBjYXVzZSBhcnJheXMgYXJlIHBhc3NlZCBieSByZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XS5jb21tYW5kcy5zcGxpY2UoY2hhclBhdGhDb21tYW5kSW5kZXgsIDAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVycGVkWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxlcnBlZFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZXJwZWRYICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LzEuNSwgcmFuZG9tVW5pdC8xLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbGVycGVkWSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdC8xLjUsIHJhbmRvbVVuaXQvMS41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhcyB3ZSBoYXZlIHVwZGF0ZWQgdGhlIHRleHRQYXRocyBieSByZWZlcmVuY2Ugd2UgbmVlZCB0byBhZGp1c3QgdGhlIGNoYXJQYXRoQ29tbWFuZEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYmUgYWZ0ZXIgdGhlIG9yaWdpbmFsIFwiTFwiIGNvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBjaGFyUGF0aENvbW1hbmRJbmRleCArPSBsZXJwSW50ZXJ2YWxzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxOiBjb21tYW5kLngxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE6IGNvbW1hbmQueTEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MjogY29tbWFuZC54MiArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyOiBjb21tYW5kLnkyICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJRXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxOiBjb21tYW5kLngxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE6IGNvbW1hbmQueTEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJaXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gXCJaXCIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IGNvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IGNvbW1hbmQueTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFmdGVyIHByb2Nlc3NpbmcgcGF0aHMgYW5kIGFkZGluZyBzb21lIHJhbmRvbWl6YXRpb24gbGV0J3MgYXNzaWduIGFsbCB0aGVcclxuICAgICAgICAvLyBuZXcgcGF0aCBjb21tYW5kcyB0byB0aGUgb3JpZ2luYWwgb3RmLlBhdGhbXSBvYmplY3QgcGFyYW1ldGVyXHJcbiAgICAgICAgcHJvY2Vzc2VkVGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XS5jb21tYW5kcyA9IG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvY2Vzc2VkVGV4dFBhdGhzO1xyXG59IiwiaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlckNvdW50ZXIoZm9udDogb3RmLkZvbnQsIGNoYXJhY3Rlcjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmIChjaGFyYWN0ZXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0eXBlLWNvdW50ZXJzLnRzIHwgUGF0aENvdW50ZXJDb3VudGVyIGFjY2VwdGVkIGEgY2hhcmFjdGVyIG9mIHNpemUgXCIgKyBjaGFyYWN0ZXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb250IHNpemUgYW5kIHggYW5kIHkgY29vcmRzIHVzZWQgaGVyZSBhcmUgZHVtbWllc1xyXG4gICAgcmV0dXJuIHBhdGhDb3VudGVyQ291bnRlcihmb250LmdldFBhdGgoY2hhcmFjdGVyWzBdLCAwLCAwLCAyMCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0aENvdW50ZXJDb3VudGVyKGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoKTogbnVtYmVyIHtcclxuXHJcbiAgICBsZXQgY291bnRlckNvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzKSB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJaXCIpIHtcclxuICAgICAgICAgICAgY291bnRlckNvdW50ZXIgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgb3RmLlBhdGggU1ZHIGRyYXdpbmcgY29tbWFuZHMgYXJlIHN0cnVjdHVyZWQgd2l0aCB0aGUgYmFzZSBsZXR0ZXJmb3JtIHNoYXBlXHJcbiAgICAvLyBmb2xsb3dlZCBieSBjb3VudGVyc1xyXG4gICAgcmV0dXJuIGNvdW50ZXJDb3VudGVyID09PSAwID8gMCA6IGNvdW50ZXJDb3VudGVyIC0gMTtcclxufVxyXG5cclxuIiwiaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNoYXBlc0Zyb21QYXRoKHBhdGg6IG90Zi5QYXRoKSA6IG90Zi5QYXRoQ29tbWFuZFtdW10ge1xyXG4gICAgbGV0IGN1cnJTaGFwZUNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgY3VyclNoYXBlczogb3RmLlBhdGhDb21tYW5kW11bXSA9IFtbXV07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGguY29tbWFuZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gcGF0aC5jb21tYW5kc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gXCJaXCIpIHsgLy8gaWYgd2UgYXJlbid0IGF0IGEgY2xvc2Ugc2hhcGUgY29tbWFuZFxyXG4gICAgICAgICAgICBjdXJyU2hhcGVzW2N1cnJTaGFwZUNvdW50ZXJdLnB1c2goY29tbWFuZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgYXQgYSBjbG9zZSBzaGFwZSBjb21tYW5kXHJcbiAgICAgICAgICAgIC8vIHB1c2ggXCJaXCJcclxuICAgICAgICAgICAgY3VyclNoYXBlc1tjdXJyU2hhcGVDb3VudGVyXS5wdXNoKGNvbW1hbmQpXHJcbiAgICAgICAgICAgIC8vIGluY3JlbWVudCB0aGUgY3VyclNoYXBlQ291bnRlclxyXG4gICAgICAgICAgICBjdXJyU2hhcGVDb3VudGVyKys7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZW4ndCBhdCB0aGUgbGFzdCBcIlpcIiB0aGVuIGtlZXAgZXhwYW5kaW5nIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmIChpICE9PSBwYXRoLmNvbW1hbmRzLmxlbmd0aCAtIDEpIGN1cnJTaGFwZXMucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyU2hhcGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RTdGFydFBvaW50SW5QYXRoKHBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10pIDogKFBvaW50IHwgbnVsbCkge1xyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBwYXRoQ29tbWFuZHMpIHtcclxuICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIkNcIiB8fCAgLy8gY3ViaWMgYmV6aWVyXHJcbiAgICAgICAgICAgIGNvbW1hbmQudHlwZSA9PT0gXCJMXCIgfHwgIC8vIGxpbmUgdG9cclxuICAgICAgICAgICAgY29tbWFuZC50eXBlID09PSBcIlFcIikgeyAgLy8gcXVhZHJhdGljIGJlemllclxyXG4gICAgICAgICAgICByZXR1cm4geyB4OiBjb21tYW5kLngsIHk6IGNvbW1hbmQueSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDb21tYW5kc1RvUGF0aERhdGEocGF0aENvbW1hbmRzOiBvdGYuUGF0aENvbW1hbmRbXSwgZGVjaW1hbFBsYWNlczogbnVtYmVyKSA6IHN0cmluZyB7XHJcbiAgICBsZXQgcGF0aERhdGE6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBwYXRoQ29tbWFuZHMpIHtcclxuICAgICAgICAvLyBcIlpcIiBpcyBhcHBlbmRlZCBhdXRvbWF0aWNhbGx5IGhlcmVcclxuICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLnR5cGUgKyBcIiBcIjtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLngxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngyLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTIudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFcIjpcclxuICAgICAgICAgICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQueDEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aERhdGE7XHJcbn0iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuaW1wb3J0IHtwYXRoQ291bnRlckNvdW50ZXJ9IGZyb20gXCIuL3V0aWxzL3R5cGUtY291bnRlcnNcIjtcclxuaW1wb3J0IHtleHRyYWN0U2hhcGVzRnJvbVBhdGgsIGdldEZpcnN0U3RhcnRQb2ludEluUGF0aCwgcGF0aENvbW1hbmRzVG9QYXRoRGF0YX0gZnJvbSBcIi4vdXRpbHMvb3RmLXBhdGgtdXRpbHNcIjtcclxuXHJcbnR5cGUgRm9udFJlbmRlclN0cmF0ZWd5ID0gKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHZvaWQ7XHJcbnR5cGUgRm9udFByZXByb2Nlc3NvciA9IChwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSwgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IG90Zi5QYXRoW107XHJcblxyXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwXHJcbmV4cG9ydCB0eXBlIExheW91dE9wdGlvbnMgPSB7XHJcbiAgICAvLyBIb3Jpem9udGFsIGFsaWdubWVudCBwZXIgbGluZVxyXG4gICAgYWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcbiAgICAvLyBNdWx0aXBsaWVyIGZvciBiYXNlbGluZSBkaXN0YW5jZTogKGFzY2VuZGVyICsgZGVzY2VudCkgKiBsaW5lSGVpZ2h0XHJcbiAgICBsaW5lSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgLy8gRXh0cmEgbWFyZ2lucyBmb3IgbGVmdC9yaWdodCBhbGlnbm1lbnQgKHBpeGVscylcclxuICAgIG1hcmdpblg/OiBudW1iZXI7XHJcbiAgICAvLyBFeHRyYSB2ZXJ0aWNhbCBvZmZzZXQgZm9yIHRoZSBlbnRpcmUgYmxvY2sgKHBpeGVscywgYWRkZWQgYWZ0ZXIgY2VudGVyaW5nKVxyXG4gICAgbWFyZ2luWT86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIEZpbGxTdGF0dXMge1xyXG4gICAgRklMTEVEID0gXCJmaWxsZWRcIixcclxuICAgIE9QRU4gPSBcIm9wZW5cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dEZvcmVncm91bmRDb2xvdXIgPSAwO1xyXG5leHBvcnQgY29uc3QgdGV4dEJhY2tncm91bmRDb2xvdXIgPSAyNTU7XHJcblxyXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0UGF0aHMocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG90Zi5Gb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRQcmVwcm9jZXNzb3I6IEZvbnRQcmVwcm9jZXNzb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFByZXByb2Nlc3Nvck9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dE9wdGlvbnM/OiBMYXlvdXRPcHRpb25zKTpcclxuICAgIHsgb3JpZ2luYWxUZXh0UGF0aDogb3RmLlBhdGhbXSwgcHJvY2Vzc2VkVGV4dFBhdGg6IG90Zi5QYXRoW10gfSB7XHJcblxyXG4gICAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gdGV4dC5zcGxpdCgvXFxyP1xcbi8pO1xyXG5cclxuICAgIC8vIERlZmF1bHRzXHJcbiAgICBjb25zdCBhbGlnbjogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiID0gbGF5b3V0T3B0aW9ucz8uYWxpZ24gPz8gXCJjZW50ZXJcIjtcclxuICAgIGNvbnN0IGxpbmVIZWlnaHRNdWx0aXBsaWVyOiBudW1iZXIgPSBsYXlvdXRPcHRpb25zPy5saW5lSGVpZ2h0ID8/IDEuMjtcclxuICAgIGNvbnN0IG1hcmdpblg6IG51bWJlciA9IGxheW91dE9wdGlvbnM/Lm1hcmdpblggPz8gMDtcclxuICAgIGNvbnN0IG1hcmdpblk6IG51bWJlciA9IGxheW91dE9wdGlvbnM/Lm1hcmdpblkgPz8gMDtcclxuXHJcbiAgICAvLyBGb250IG1ldHJpY3MgKGluIHBpeGVscyBhdCBnaXZlbiB0eXBlU2l6ZSlcclxuICAgIGNvbnN0IHNjYWxlID0gdHlwZVNpemUgLyBmb250LnVuaXRzUGVyRW07XHJcbiAgICBjb25zdCBhc2NlbnQgPSBmb250LmFzY2VuZGVyICogc2NhbGU7ICAgICAgICAgICAvLyBwb3NpdGl2ZVxyXG4gICAgY29uc3QgZGVzY2VudCA9IE1hdGguYWJzKGZvbnQuZGVzY2VuZGVyKSAqIHNjYWxlOyAvLyBwb3NpdGl2ZVxyXG4gICAgY29uc3QgYmFzZWxpbmVHYXAgPSAoYXNjZW50ICsgZGVzY2VudCkgKiBsaW5lSGVpZ2h0TXVsdGlwbGllcjtcclxuXHJcbiAgICAvLyBQcmVjb21wdXRlIHBlci1saW5lIGJib3hlcyBhdCAoMCwgMCkgYmFzZWxpbmUgdG8gbWVhc3VyZSB3aWR0aHNcclxuICAgIGNvbnN0IGxpbmVCQm94ZXM6IG90Zi5Cb3VuZGluZ0JveFtdID0gbGluZXMubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSBmb250LmdldFBhdGgobGluZSwgMCwgMCwgdHlwZVNpemUsIHsga2VybmluZzogdHJ1ZSB9KTtcclxuICAgICAgICByZXR1cm4gcGF0aC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBsaW5lV2lkdGhzOiBudW1iZXJbXSA9IGxpbmVCQm94ZXMubWFwKGJiID0+IGJiLngyIC0gYmIueDEpO1xyXG5cclxuICAgIC8vIE92ZXJhbGwgYmxvY2sgaGVpZ2h0IGZvciBjZW50ZXJpbmc6IGZpcnN0IGxpbmUgdG9wIHRvIGxhc3QgbGluZSBib3R0b21cclxuICAgIGNvbnN0IGJsb2NrSGVpZ2h0ID0gKGFzY2VudCArIGRlc2NlbnQpICsgKGxpbmVzLmxlbmd0aCAtIDEpICogYmFzZWxpbmVHYXA7XHJcblxyXG4gICAgLy8gVG9wIG9mIHRoZSB2aXN1YWwgYmxvY2sgYW5kIGJhc2VsaW5lIGZvciB0aGUgZmlyc3QgbGluZVxyXG4gICAgY29uc3QgdG9wID0gKHA1LndpbmRvd0hlaWdodCAtIGJsb2NrSGVpZ2h0KSAvIDIgKyBtYXJnaW5ZO1xyXG4gICAgY29uc3QgYmFzZWxpbmUwID0gdG9wICsgYXNjZW50O1xyXG5cclxuICAgIC8vIEJ1aWxkIGFsbCBwYXRocyB3aXRoIHBlci1saW5lIHBvc2l0aW9uaW5nXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgIGNvbnN0IGJiID0gbGluZUJCb3hlc1tpXTtcclxuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBsaW5lV2lkdGhzW2ldO1xyXG5cclxuICAgICAgICAvLyBEZXNpcmVkIGxlZnQgYmFzZWQgb24gYWxpZ25tZW50XHJcbiAgICAgICAgbGV0IGRlc2lyZWRMZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgc3dpdGNoIChhbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgZGVzaXJlZExlZnQgPSBtYXJnaW5YO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgZGVzaXJlZExlZnQgPSBwNS53aW5kb3dXaWR0aCAtIGxpbmVXaWR0aCAtIG1hcmdpblg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZGVzaXJlZExlZnQgPSAocDUud2luZG93V2lkdGggLSBsaW5lV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmFzZWxpbmVZID0gYmFzZWxpbmUwICsgaSAqIGJhc2VsaW5lR2FwO1xyXG4gICAgICAgIC8vIEFkanVzdCB4IGJ5IC1iYi54MSBzbyB0aGF0IHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIGJib3ggbGFuZHMgYXQgZGVzaXJlZExlZnRcclxuICAgICAgICBjb25zdCB4ID0gZGVzaXJlZExlZnQgLSBiYi54MTtcclxuXHJcbiAgICAgICAgY29uc3QgbGluZVBhdGhzOiBvdGYuUGF0aFtdID0gZm9udC5nZXRQYXRocyhcclxuICAgICAgICAgICAgbGluZSxcclxuICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgYmFzZWxpbmVZLFxyXG4gICAgICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAgICAgeyBrZXJuaW5nOiB0cnVlIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0ZXh0UGF0aHMucHVzaCguLi5saW5lUGF0aHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXSA9IGZvbnRQcmVwcm9jZXNzb3IocDUsIHRleHRQYXRocywgZm9udFByZXByb2Nlc3Nvck9wdGlvbnMpO1xyXG5cclxuICAgIGlmICh0ZXh0UGF0aHMubGVuZ3RoICE9PSBwcm9jZXNzZWRUZXh0UGF0aHMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItZm9udC50cyB8IHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZyBpbiBvdGZcXFxccmVuZGVyLWZvbnQudHMjZ2V0VGV4dFBhdGhzXCIgK1xyXG4gICAgICAgICAgICBcIiByZWdhcmRpbmcgdGhlIGxlbmd0aHMgb2YgdGhlIG91dHB1dHRlZCBvdGYuUGF0aFtdXCIpO1xyXG5cclxuICAgIHJldHVybiB7IG9yaWdpbmFsVGV4dFBhdGg6IHRleHRQYXRocywgcHJvY2Vzc2VkVGV4dFBhdGg6IHByb2Nlc3NlZFRleHRQYXRocyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udChwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoczogb3RmLlBhdGhbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFJlbmRlcmVyOiBGb250UmVuZGVyU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRSZW5kZXJlck9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocz86IG90Zi5QYXRoW10pIDogb3RmLlBhdGhbXSB7XHJcblxyXG4gICAgLy8gc29ydGluZyBvdXQgcmVuZGVyaW5nIGhvbGVzIGluIGZvbnRzXHJcbiAgICAvLyB1bnByb2Nlc3NlZFRleHRQYXRocyBjYW4gYmUgdXNlZCBoZXJlIGlmIHRoZSBwcm9jZXNzaW5nIHlvdSBkbyBvbiB5b3VyIHRleHQgaXMgc28gZXh0cmVtZSB0aGF0IGl0IGRlc3Ryb3lzXHJcbiAgICAvLyBteSB2ZXJ5IGZpY2tsZSBhbGdvcml0aG0gZm9yIGRldGVybWluaW5nIHRoZSBudW1iZXIgYW5kIG9yZGVyIG9mIGhvbGVzIGluIGEgbGV0dGVyZm9ybSA6KVxyXG4gICAgY29uc3QgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10gPSB1bnByb2Nlc3NlZFRleHRQYXRocyA9PT0gdW5kZWZpbmVkID9cclxuICAgICAgICBnZXRUZXh0RmlsbFN0YXR1c2VzKHA1LCB0ZXh0UGF0aHMpIDogZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNSwgdW5wcm9jZXNzZWRUZXh0UGF0aHMpO1xyXG5cclxuICAgIC8vIHVucHJvY2Vzc2VkVGV4dFBhdGhzIHRlbmQgdG8gYmUgdXNlZnVsIGluIEZvbnRSZW5kZXJTdHJhdGVneSBhcyB0aGV5IHByZXNlcnZlIHRoZSBvcmlnaW5hbCBnZW9tZXRyeVxyXG4gICAgLy8gYW5kIGN1cnZlcyBvZiB0aGUgZm9udCBiZWZvcmUgdGhleSBhcmUgcHJvY2Vzc2VkIGNyYXppbHlcclxuICAgIGlmIChmb250UmVuZGVyZXJPcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdW5wcm9jZXNzZWRUZXh0UGF0aHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvbnRSZW5kZXJlck9wdGlvbnNbXCJ1bnByb2Nlc3NlZFRleHRQYXRoc1wiXSA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdHVhbGx5IHJlbmRlcmluZyBmb250XHJcbiAgICBmb250UmVuZGVyZXIocDUsIHRleHRQYXRocywgdGV4dEZpbGxTdGF0dXNlcywgZm9udFJlbmRlcmVyT3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRleHRQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKHNpZGVMZW5ndGg6IG51bWJlciwgc2FtcGxlVW5pdDogbnVtYmVyKTogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdIHtcclxuICAgIGlmIChzaWRlTGVuZ3RoICUgMiA9PT0gMCApIHtcclxuICAgICAgICBzaWRlTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgXCJyZW5kZXItZm9udC1vdGYudHMgfCBnZW5lcmF0ZVNhbXBsZU9mZnNldEdyaWQgcmVjZWl2ZWQgYW4gZXZlbiBzaWRlIGxlbmd0aCBvZiBcIiArIChzaWRlTGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgKyBcIi4gVGhlIGFjdHVhbCBzaWRlIGxlbmd0aCBvZiB0aGUgZ3JpZCBnZW5lcmF0ZWQgd2lsbCBiZSBvZGQ6IFwiICsgc2lkZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNhbXBsZU9mZnNldEdyaWQ6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSA9IFtdO1xyXG4gICAgbGV0IG1heFNhbXBsZVVuaXRTY2FsZTogbnVtYmVyID0gTWF0aC5mbG9vcihzaWRlTGVuZ3RoIC8gMik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IG1heFNhbXBsZVVuaXRTY2FsZTsgaSA+PSAtbWF4U2FtcGxlVW5pdFNjYWxlOyBpLS0pIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gLW1heFNhbXBsZVVuaXRTY2FsZTsgaiA8PSBtYXhTYW1wbGVVbml0U2NhbGU7IGorKykge1xyXG4gICAgICAgICAgICBzYW1wbGVPZmZzZXRHcmlkLnB1c2goW2ogKiBzYW1wbGVVbml0LCAtaSAqIHNhbXBsZVVuaXRdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2FtcGxlT2Zmc2V0R3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSk6IEZpbGxTdGF0dXNbXVtdIHtcclxuICAgIGNvbnN0IHRvUGF0aERhdGFSZXNvbHV0aW9uOiBudW1iZXIgPSAzO1xyXG4gICAgY29uc3Qgc2FtcGxlVW5pdDogbnVtYmVyID0gMjtcclxuICAgIGNvbnN0IHNhbXBsZU9mZnNldEtlcm5lbDogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdID0gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKDUsIHNhbXBsZVVuaXQpO1xyXG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBwNS5kcmF3aW5nQ29udGV4dDtcclxuXHJcbiAgICBsZXQgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgY29uc3QgZW50aXJlTGV0dGVyZm9ybVBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJDb3VudDogbnVtYmVyID0gcGF0aENvdW50ZXJDb3VudGVyKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgdGV4dEZpbGxTdGF0dXNlcy5wdXNoKFtdKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gd2lsbCBpbmNyZW1lbnQgY2hhcmFjdGVySW5kZXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGVzOiBvdGYuUGF0aENvbW1hbmRbXVtdID0gZXh0cmFjdFNoYXBlc0Zyb21QYXRoKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlIG9mIGxldHRlcmZvcm1Db21wb25lbnRTaGFwZXMpIHtcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50OiBQb2ludCB8IG51bGwgPSBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzYW1wbGVQb2ludCA9PT0gbnVsbCB8fCBzYW1wbGVQb2ludCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgc2FtcGxlUG9pbnQueCBhbmQgc2FtcGxlUG9pbnQueSB3YXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBzYW1wbGUgYXJvdW5kIHRoZSAoc2FtcGxlWCwgc2FtcGxlWSkgY29vcmRpbmF0ZSB3ZSBoYXZlIGFuZCB0ZXN0IGFnYWluc3RcclxuICAgICAgICAgICAgLy8gY3R4LmlzUG9pbnRJblBhdGggd2l0aCB0aGUgcmVsZXZhbnQgZW50aXJlTGV0dGVyZm9ybVBhdGggYXMgdGhlIHBhdGhcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50T2Zmc2V0OiBQb2ludCA9IHt4OiBzYW1wbGVQb2ludC54LCB5OiBzYW1wbGVQb2ludC55fTtcclxuICAgICAgICAgICAgbGV0IHdhc0ZpbGxTdGF0dXNBc3NpZ25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgc2FtcGxlT2Zmc2V0IG9mIHNhbXBsZU9mZnNldEtlcm5lbCkge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlUG9pbnRPZmZzZXQueCA9IHNhbXBsZVBvaW50LnggKyBzYW1wbGVPZmZzZXRbMF07XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVQb2ludE9mZnNldC55ID0gc2FtcGxlUG9pbnQueSArIHNhbXBsZU9mZnNldFsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2hpbmcgdG8gc2VlIGlmIHdlJ3JlIGluc2lkZSB0aGUgY3VycmVudCBzaGFwZVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHA1LnBpeGVsRGVuc2l0eSgpIHBhcnQgaXMgQ1JVQ0lBTCFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGgyRDogUGF0aDJEID1cclxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aDJEKHBhdGhDb21tYW5kc1RvUGF0aERhdGEobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlLCB0b1BhdGhEYXRhUmVzb2x1dGlvbikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblBhdGg6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluUGF0aChcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHN0b3Agc2VhcmNoaW5nIGlmIHdlJ3ZlIGZvdW5kIGEgcG9pbnQgd2l0aGluIHRoZSBwYXRoIGFuZCBub3Qgb24gdGhlIHN0cm9rZSBhcyB0aGlzIHdvbid0XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHVwIGluIGZ1dHVyZSBpc1BvaW50SW5QYXRoIGNhbGN1bGF0aW9ucyB3aXRoIHRoZSBlbnRpcmUgbGV0dGVyZm9ybVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzSW5QYXRoICYmICFpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzRmlsbFN0YXR1c0Fzc2lnbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlclNoYXBlUGF0aDJEOiBQYXRoMkQgPSBuZXcgUGF0aDJEKGVudGlyZUxldHRlcmZvcm1QYXRoLnRvUGF0aERhdGEodG9QYXRoRGF0YVJlc29sdXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiBzYW1wbGUgdGhpcyBwb2ludCBpbiB0aGUgdGV4dFBhdGggdXNpbmcgY3R4LmlzUG9pbnRJblBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0luUGF0aDogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5QYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJTaGFwZVBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclNoYXBlUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBvbmx5IE5PVCBpbiBhIGNvdW50ZXIvc29tZXRoaW5nIHRoYXQgc2hvdWxkbid0IGJlIGZpbGxlZCB3aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXNJblBhdGggPT09IEZBTFNFICYmIGlzSW5TdHJva2UgPT09IEZBTFNFO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luUGF0aCB8fCBpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5PUEVOKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPIG5lZWQgdG8gZG8gZXJyb3IgaGFuZGxpbmcgZm9yIHdoYXQgaGFwcGVucyB3aGVuIHdlIGZhbGwgdGhyb3VnaCBoZXJlIHdpdGhvdXQgYSBzdGF0dXNcclxuICAgICAgICAgICAgaWYgKCF3YXNGaWxsU3RhdHVzQXNzaWduZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1mb250LW90Zi50cyB8IGdldFRleHRGaWxsU3RhdHVzZXMgY291bGQgbm90IGZpbmQgYSBzdWl0YWJsZSBzYW1wbGUgcG9pbnQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiKGF0IGNoYXJhY3RlciBpbmRleCBcIiArIGNoYXJhY3RlckluZGV4ICsgXCIpIGZvciBjYWxjdWxhdGluZyB0ZXh0IGZpbGwgc3RhdHVzXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHRGaWxsU3RhdHVzZXM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBwNSBmcm9tICdwNSc7XHJcbmltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5pbXBvcnQgeyBGaWxsU3RhdHVzLCB0ZXh0QmFja2dyb3VuZENvbG91ciwgdGV4dEZvcmVncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9yZW5kZXItZm9udFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxlZChwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSwgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10pIHtcclxuXHJcbiAgICBwNS5wdXNoKCk7XHJcbiAgICBwNS5ub1N0cm9rZSgpO1xyXG4gICAgZm9yIChsZXQgY2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHRleHRQYXRocy5sZW5ndGg7IGNoYXJhY3RlckluZGV4Kyspe1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJGaWxsU3RhdHVzOiBGaWxsU3RhdHVzW10gPSB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBsZXQgdGV4dEZpbGxTdGF0dXNDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLkZJTExFRCkge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5PUEVOKSB7XHJcbiAgICAgICAgICAgIHA1LmZpbGwodGV4dEJhY2tncm91bmRDb2xvdXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29tbWFuZCBvZiBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHA1LmJlZ2luU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBwNS52ZXJ0ZXgoY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS52ZXJ0ZXgoY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5iZXppZXJWZXJ0ZXgoY29tbWFuZC54MSwgY29tbWFuZC55MSwgY29tbWFuZC54MiwgY29tbWFuZC55MiwgY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlFcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5xdWFkcmF0aWNWZXJ0ZXgoY29tbWFuZC54MSwgY29tbWFuZC55MSwgY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5lbmRTaGFwZShwNS5DTE9TRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwNS5wb3AoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXJBcnJheSh4OiB1bmtub3duKTogeCBpcyBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSAmJiB4LmV2ZXJ5KHYgPT4gdHlwZW9mIHYgPT09ICdudW1iZXInKTtcclxufVxyXG5cclxuLy8gb3B0aW9ucyBsb29rcyBsaWtlXHJcbmV4cG9ydCBmdW5jdGlvbiBlcm9kZShwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSxcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcblxyXG4gICAgbGV0IHVucHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG5cclxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgIShcImVyb3Npb25TdHJlbmd0aFwiIGluIG9wdGlvbnMpIHx8ICEoXCJ1bnByb2Nlc3NlZFRleHRQYXRoc1wiIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IGZyZWFrVG9Fcm9kZWQgcmVjZWl2ZWQgbWFsZm9ybWVkIG9wdGlvbnMgcGFyYW1ldGVyLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzID0gb3B0aW9uc1tcInVucHJvY2Vzc2VkVGV4dFBhdGhzXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgYWxsb3dzIGZvciB0aGUgbnVkZ2UgZmFjdG9yIHRvIGJlIHBhc3NlZCBpbiBhcyBhIHNpbmdsZSBudW1iZXIgb3IgYW4gYXJyYXkgb2YgbnVtYmVycyAob25lIG51ZGdlIGZhY3RvciBmb3JcclxuICAgIC8vIGVhY2ggY2hhcmFjdGVyIGluIHRleHRQYXRocy5cclxuICAgIGNvbnN0IHJhd0Vyb3Npb249IG9wdGlvbnNbXCJlcm9zaW9uU3RyZW5ndGhcIl07IC8vLTcuNjsvLy04LjM7XHJcbiAgICBjb25zdCBpc1Jhd0Vyb3Npb25OdW1iZXJBcnJheTogYm9vbGVhbiA9IGlzTnVtYmVyQXJyYXkocmF3RXJvc2lvbik7XHJcbiAgICBpZiAoIWlzUmF3RXJvc2lvbk51bWJlckFycmF5ICYmIHR5cGVvZiByYXdFcm9zaW9uICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IGVyb3Npb25TdHJlbmd0aCBtdXN0IGJlIGEgbnVtYmVyIG9yIG51bWJlcltdXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc1Jhd0Vyb3Npb25OdW1iZXJBcnJheSAmJiAocmF3RXJvc2lvbiBhcyBudW1iZXJbXSkubGVuZ3RoICE9PSB0ZXh0UGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IGlmIGVyb3Npb25TdHJlbmd0aCBpcyBhIG51bWJlcltdLCB0aGVuIGl0IG11c3QgYmUgbGVuZ3RoIG9mIHRleHRQYXRoc1wiICtcclxuICAgICAgICAgICAgXCJjdXJyZW50bHkgcmF3RXJvc2lvbiBpcyBsZW5ndGggXCIgKyAocmF3RXJvc2lvbiBhcyBudW1iZXJbXSkubGVuZ3RoICsgXCIgXCIgK1xyXG4gICAgICAgICAgICBcImFuZCB0ZXh0UGF0aHMubGVuZ3RoIGlzIFwiICsgdGV4dFBhdGhzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LnB1c2goKTtcclxuICAgIHA1Lm5vU3Ryb2tlKCk7XHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgLy8gbnVkZ2UgZmFjdG9yIG9mIDctOC4zIGlzIGlkZWFsIGZvciBhIGxldHRlcmZvcm0gdGhhdCBpcyBhbG1vc3Qgbm9uLWV4aXN0ZW50IC8vLTcuNjsvLy04LjM7XHJcbiAgICAgICAgY29uc3QgbnVkZ2VGYWN0b3I6IG51bWJlciA9IHR5cGVvZiByYXdFcm9zaW9uID09PSBcIm51bWJlclwiID8gcmF3RXJvc2lvbiA6IHJhd0Vyb3Npb25bY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCB1bnByb2Nlc3NlZENoYXJhY3RlclBhdGg6IG90Zi5QYXRoID0gdW5wcm9jZXNzZWRUZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlckZpbGxTdGF0dXM6IEZpbGxTdGF0dXNbXSA9IHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGxldCB0ZXh0RmlsbFN0YXR1c0NvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuRklMTEVEKSB7XHJcbiAgICAgICAgICAgIHA1LmZpbGwodGV4dEZvcmVncm91bmRDb2xvdXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0QmFja2dyb3VuZENvbG91cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJldmlvdXNQb2ludDogUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGNvbW1hbmQ6IG90Zi5QYXRoQ29tbWFuZCA9IGNoYXJhY3RlclBhdGguY29tbWFuZHNbaV07XHJcbiAgICAgICAgICAgIGxldCB1bnByb2Nlc3NlZENvbW1hbmQ6IG90Zi5QYXRoQ29tbWFuZCA9IHVucHJvY2Vzc2VkQ2hhcmFjdGVyUGF0aC5jb21tYW5kc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkeDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgZHk6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IG1hZ25pdHVkZTogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WDogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WTogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItc3RyYXRlZ3kudHMgfCBzb21ldGhpbmcgaGFzIGdvbmUgd3JvbmcgaW4gb3RmXFxyZW5kZXItZm9udC50cyNnZXRUZXh0UGF0aHNcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgcmVnYXJkaW5nIHRoZSBsZW5ndGhzIG9mIHRoZSBvdXRwdXR0ZWQgb3RmLlBhdGhbXVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJNXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiTVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwNS5iZWdpblNoYXBlKCk7XHJcbiAgICAgICAgICAgICAgICBkeCA9IHVucHJvY2Vzc2VkQ29tbWFuZC55IC0gcHJldmlvdXNQb2ludC55O1xyXG4gICAgICAgICAgICAgICAgZHkgPSBwcmV2aW91c1BvaW50LnggLSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gKGR4IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IChkeSAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHA1LnZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnggKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueSArIG9mZnNldFlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiTFwiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIkxcIikge1xyXG4gICAgICAgICAgICAgICAgZHggPSB1bnByb2Nlc3NlZENvbW1hbmQueSAtIHByZXZpb3VzUG9pbnQueTtcclxuICAgICAgICAgICAgICAgIGR5ID0gcHJldmlvdXNQb2ludC54IC0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQoZHggKiogMiArIGR5ICoqIDIpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IChkeCAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3Rvci8xLjU7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gKGR5IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yLzEuNTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHRoaXMgbWFrZXMgZm9udCBvdXRsaW5lcyBzcGlreSBhbmQgbm90IHRoaW4gd2hpY2ggaXMgYmFkXHJcbiAgICAgICAgICAgICAgICBwNS52ZXJ0ZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54ICsgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwcmV2aW91cyBwb2ludCBjb25zaXN0ZW50bHlcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gdW5wcm9jZXNzZWRDb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC50eXBlID09PSBcIkNcIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJDXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItc3RyYXRlZ3kudHMgfCBhIGN1YmljIGJlemllciB3YXMgZHJhd24hIFRoaXMgaXMgcmVhbGx5IGJhZC5cIilcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gaSBoYXZlbid0IHNlZW4gYSBzaW5nbGUgY3VydmUgaW52b2tlIHRoaXMsIHNvIEkndmUganVzdCBpZ25vcmVkIHRoaXNcclxuICAgICAgICAgICAgICAgIHA1LmJlemllclZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueTEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54MixcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiUVwiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIlFcIikge1xyXG4gICAgICAgICAgICAgICAgZHggPSB1bnByb2Nlc3NlZENvbW1hbmQueSAtIHVucHJvY2Vzc2VkQ29tbWFuZC55MTtcclxuICAgICAgICAgICAgICAgIGR5ID0gdW5wcm9jZXNzZWRDb21tYW5kLngxIC0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQoZHggKiogMiArIGR5ICoqIDIpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IChkeCAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSAoZHkgLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBwNS5xdWFkcmF0aWNWZXJ0ZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54MSArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55MSArIG9mZnNldFksXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54ICsgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gdW5wcm9jZXNzZWRDb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC50eXBlID09PSBcIlpcIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJaXCIpIHtcclxuICAgICAgICAgICAgICAgIHA1LmVuZFNoYXBlKHA1LkNMT1NFKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c0NvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuRklMTEVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5PUEVOKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuZmlsbCh0ZXh0QmFja2dyb3VuZENvbG91cik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwNS5wb3AoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=