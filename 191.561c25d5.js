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
  DI: () => (/* binding */ getTextFillStatuses),
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
function renderFont(p5, textPaths, textFillStatuses, fontRenderer, fontRendererOptions, unprocessedTextPaths) {
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
function getTextFillStatuses(p5, textPaths, sampleUnit = 2) {
    const toPathDataResolution = 3;
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
                textFillStatuses[characterIndex].push(FillStatus.OPEN);
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
/* harmony export */   B: () => (/* binding */ filled),
/* harmony export */   s: () => (/* binding */ erode)
/* harmony export */ });
/* harmony import */ var _render_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(840);

function filled(p5, textPaths, textFillStatuses) {
    p5.push();
    p5.noStroke();
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++) {
        const characterPath = textPaths[characterIndex];
        const characterFillStatus = textFillStatuses[characterIndex];
        let textFillStatusCounter = 0;
        if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.FILLED) {
            p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textForegroundColour */ .$Q);
        }
        else if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.OPEN) {
            p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textBackgroundColour */ .Yc);
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
                    if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.FILLED) {
                        p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textForegroundColour */ .$Q);
                    }
                    else if (characterFillStatus[textFillStatusCounter] === _render_font__WEBPACK_IMPORTED_MODULE_0__/* .FillStatus */ .eV.OPEN) {
                        p5.fill(_render_font__WEBPACK_IMPORTED_MODULE_0__/* .textBackgroundColour */ .Yc);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxPQUFPLEVBQ25CLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUN0QixDQUFDO2dCQUVGLGFBQWEsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNqRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdEIscUJBQXFCLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLDhEQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ25FLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0VBQW9CLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztxQkFBTSxJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssOERBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEUsRUFBRSxDQUFDLElBQUksQ0FBQyx3RUFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvaWdub3JlZHxEOlxcUmVwb3NcXEFOVVxcREVTTjIwMDlcXHJhbmRvbWZvbnRcXG5vZGVfbW9kdWxlc1xcLnBucG1cXG9wZW50eXBlLmpzQDEuMy40XFxub2RlX21vZHVsZXNcXG9wZW50eXBlLmpzXFxkaXN0fGZzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi9wYXRoLXByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvdXRpbHMvdHlwZS1jb3VudGVycy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvdXRpbHMvb3RmLXBhdGgtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250LnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItc3RyYXRlZ3kudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIiwiaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xyXG5pbXBvcnQgb3RmIGZyb20gXCJvcGVudHlwZS5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vUHJlcHJvY2VzcyhfcDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10pOiBvdGYuUGF0aFtdIHtcclxuICAgIHJldHVybiB0ZXh0UGF0aHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcmVha1RvKHA1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLCBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IG90Zi5QYXRoW10ge1xyXG4gICAgbGV0IHJhbmRvbVVuaXQ6IG51bWJlcjtcclxuXHJcbiAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB1bmRlZmluZWQgfHwgIShcImNyYXppbmVzc1wiIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInBhdGgtcHJlcHJvY2Vzc29yLnRzIHwgZnJlYWtUbyByZWNlaXZlZCBtYWxmb3JtZWQgb3B0aW9ucyBwYXJhbWV0ZXIuXCIpO1xyXG4gICAgICAgIHJhbmRvbVVuaXQgPSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByYW5kb21Vbml0ID0gb3B0aW9uc1tcImNyYXppbmVzc1wiXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0ZXh0UGF0aHMpKTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgLy8gZ2V0IG90Zi5QYXRoIG9iamVjdCBmb3IgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIGFjY3VtdWxhdGUgYWxsIHRoZSBuZXcgcmFuZG9taXplZCBwYXRoIGNvbW1hbmRzIHRoYXQgd2Ugd2FudFxyXG4gICAgICAgIGxldCBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHM6IG90Zi5QYXRoQ29tbWFuZFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBwcmV2aW91c1BvaW50OiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIGFsbCBwYXRoIGNvbW1hbmRzIGZvciB0aGlzIGN1cnJlbnQgY2hhcmFjdGVyXHJcbiAgICAgICAgZm9yIChsZXQgY2hhclBhdGhDb21tYW5kSW5kZXggPSAwOyBjaGFyUGF0aENvbW1hbmRJbmRleCA8IGNoYXJhY3RlclBhdGguY29tbWFuZHMubGVuZ3RoOyBjaGFyUGF0aENvbW1hbmRJbmRleCsrKXtcclxuICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzW2NoYXJQYXRoQ29tbWFuZEluZGV4XTtcclxuICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBJbnRlcnZhbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwNS5yYW5kb20oMCwgcmFuZG9tVW5pdCAtIDEpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVycEludGVydmFscy5wdXNoKHA1LnJhbmRvbSgwLCAwLjkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGVycEludGVydmFscy5zb3J0KChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAtIGIpOyAvLyBzb3J0IGluIGFzY2VuZGluZyBvcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxlcnBJbnRlcnZhbCBvZiBsZXJwSW50ZXJ2YWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXJwZWRYOiBudW1iZXIgPSBwNS5sZXJwKHByZXZpb3VzUG9pbnQueCwgY29tbWFuZC54LCBsZXJwSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVycGVkWTogbnVtYmVyID0gcDUubGVycChwcmV2aW91c1BvaW50LnksIGNvbW1hbmQueSwgbGVycEludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBvcmlnaW5hbCB0ZXh0UGF0aHMgYXMgd2UgYXJlIGFkZGluZyBjb21tYW5kcyB0aGF0IG5lZWQgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmUgcmVmbGVjdGVkIGluIHRoZSBvcmlnaW5hbCB0ZXh0UGF0aHMgKGNhdXNlIHdlIG1pZ2h0IG5lZWQgdG8gdXNlIHRoZSBvcmlnaW5hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0UGF0aHMgb3V0c2lkZSBvZiBoZXJlKSAtLSB0aGlzIHdvcmtzIGZpbmUgY2F1c2UgYXJyYXlzIGFyZSBwYXNzZWQgYnkgcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF0uY29tbWFuZHMuc3BsaWNlKGNoYXJQYXRoQ29tbWFuZEluZGV4LCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlcnBlZFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBsZXJwZWRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVycGVkWCArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdC8xLjUsIHJhbmRvbVVuaXQvMS41KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxlcnBlZFkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQvMS41LCByYW5kb21Vbml0LzEuNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgd2UgaGF2ZSB1cGRhdGVkIHRoZSB0ZXh0UGF0aHMgYnkgcmVmZXJlbmNlIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSBjaGFyUGF0aENvbW1hbmRJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGJlIGFmdGVyIHRoZSBvcmlnaW5hbCBcIkxcIiBjb21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhclBhdGhDb21tYW5kSW5kZXggKz0gbGVycEludGVydmFscy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MTogY29tbWFuZC54MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxOiBjb21tYW5kLnkxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDI6IGNvbW1hbmQueDIgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MjogY29tbWFuZC55MiArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlFcIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MTogY29tbWFuZC54MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxOiBjb21tYW5kLnkxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiWlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJaXCJcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kLnR5cGUgIT09IFwiWlwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSBjb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSBjb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZnRlciBwcm9jZXNzaW5nIHBhdGhzIGFuZCBhZGRpbmcgc29tZSByYW5kb21pemF0aW9uIGxldCdzIGFzc2lnbiBhbGwgdGhlXHJcbiAgICAgICAgLy8gbmV3IHBhdGggY29tbWFuZHMgdG8gdGhlIG9yaWdpbmFsIG90Zi5QYXRoW10gb2JqZWN0IHBhcmFtZXRlclxyXG4gICAgICAgIHByb2Nlc3NlZFRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF0uY29tbWFuZHMgPSBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2Nlc3NlZFRleHRQYXRocztcclxufSIsImltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXJDb3VudGVyKGZvbnQ6IG90Zi5Gb250LCBjaGFyYWN0ZXI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAoY2hhcmFjdGVyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwidHlwZS1jb3VudGVycy50cyB8IFBhdGhDb3VudGVyQ291bnRlciBhY2NlcHRlZCBhIGNoYXJhY3RlciBvZiBzaXplIFwiICsgY2hhcmFjdGVyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9udCBzaXplIGFuZCB4IGFuZCB5IGNvb3JkcyB1c2VkIGhlcmUgYXJlIGR1bW1pZXNcclxuICAgIHJldHVybiBwYXRoQ291bnRlckNvdW50ZXIoZm9udC5nZXRQYXRoKGNoYXJhY3RlclswXSwgMCwgMCwgMjApKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDb3VudGVyQ291bnRlcihjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCk6IG51bWJlciB7XHJcblxyXG4gICAgbGV0IGNvdW50ZXJDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY2hhcmFjdGVyUGF0aC5jb21tYW5kcykge1xyXG4gICAgICAgIGlmIChjb21tYW5kLnR5cGUgPT09IFwiWlwiKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXJDb3VudGVyICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgYXNzdW1lcyB0aGF0IG90Zi5QYXRoIFNWRyBkcmF3aW5nIGNvbW1hbmRzIGFyZSBzdHJ1Y3R1cmVkIHdpdGggdGhlIGJhc2UgbGV0dGVyZm9ybSBzaGFwZVxyXG4gICAgLy8gZm9sbG93ZWQgYnkgY291bnRlcnNcclxuICAgIHJldHVybiBjb3VudGVyQ291bnRlciA9PT0gMCA/IDAgOiBjb3VudGVyQ291bnRlciAtIDE7XHJcbn1cclxuXHJcbiIsImltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RTaGFwZXNGcm9tUGF0aChwYXRoOiBvdGYuUGF0aCkgOiBvdGYuUGF0aENvbW1hbmRbXVtdIHtcclxuICAgIGxldCBjdXJyU2hhcGVDb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IGN1cnJTaGFwZXM6IG90Zi5QYXRoQ29tbWFuZFtdW10gPSBbW11dO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmNvbW1hbmRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IHBhdGguY29tbWFuZHNbaV07XHJcblxyXG4gICAgICAgIGlmIChjb21tYW5kLnR5cGUgIT09IFwiWlwiKSB7IC8vIGlmIHdlIGFyZW4ndCBhdCBhIGNsb3NlIHNoYXBlIGNvbW1hbmRcclxuICAgICAgICAgICAgY3VyclNoYXBlc1tjdXJyU2hhcGVDb3VudGVyXS5wdXNoKGNvbW1hbmQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIGF0IGEgY2xvc2Ugc2hhcGUgY29tbWFuZFxyXG4gICAgICAgICAgICAvLyBwdXNoIFwiWlwiXHJcbiAgICAgICAgICAgIGN1cnJTaGFwZXNbY3VyclNoYXBlQ291bnRlcl0ucHVzaChjb21tYW5kKVxyXG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGN1cnJTaGFwZUNvdW50ZXJcclxuICAgICAgICAgICAgY3VyclNoYXBlQ291bnRlcisrO1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmVuJ3QgYXQgdGhlIGxhc3QgXCJaXCIgdGhlbiBrZWVwIGV4cGFuZGluZyB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZiAoaSAhPT0gcGF0aC5jb21tYW5kcy5sZW5ndGggLSAxKSBjdXJyU2hhcGVzLnB1c2goW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VyclNoYXBlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0U3RhcnRQb2ludEluUGF0aChwYXRoQ29tbWFuZHM6IG90Zi5QYXRoQ29tbWFuZFtdKSA6IChQb2ludCB8IG51bGwpIHtcclxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgcGF0aENvbW1hbmRzKSB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJDXCIgfHwgIC8vIGN1YmljIGJlemllclxyXG4gICAgICAgICAgICBjb21tYW5kLnR5cGUgPT09IFwiTFwiIHx8ICAvLyBsaW5lIHRvXHJcbiAgICAgICAgICAgIGNvbW1hbmQudHlwZSA9PT0gXCJRXCIpIHsgIC8vIHF1YWRyYXRpYyBiZXppZXJcclxuICAgICAgICAgICAgcmV0dXJuIHsgeDogY29tbWFuZC54LCB5OiBjb21tYW5kLnkgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoQ29tbWFuZHNUb1BhdGhEYXRhKHBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10sIGRlY2ltYWxQbGFjZXM6IG51bWJlcikgOiBzdHJpbmcge1xyXG4gICAgbGV0IHBhdGhEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgcGF0aENvbW1hbmRzKSB7XHJcbiAgICAgICAgLy8gXCJaXCIgaXMgYXBwZW5kZWQgYXV0b21hdGljYWxseSBoZXJlXHJcbiAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC50eXBlICsgXCIgXCI7XHJcbiAgICAgICAgc3dpdGNoIChjb21tYW5kLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ1wiOlxyXG4gICAgICAgICAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC54MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54Mi50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkyLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJRXCI6XHJcbiAgICAgICAgICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLngxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGhEYXRhO1xyXG59IiwiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcbmltcG9ydCB7cGF0aENvdW50ZXJDb3VudGVyfSBmcm9tIFwiLi91dGlscy90eXBlLWNvdW50ZXJzXCI7XHJcbmltcG9ydCB7ZXh0cmFjdFNoYXBlc0Zyb21QYXRoLCBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgsIHBhdGhDb21tYW5kc1RvUGF0aERhdGF9IGZyb20gXCIuL3V0aWxzL290Zi1wYXRoLXV0aWxzXCI7XHJcblxyXG50eXBlIEZvbnRSZW5kZXJTdHJhdGVneSA9IChwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoczogb3RmLlBhdGhbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB2b2lkO1xyXG50eXBlIEZvbnRQcmVwcm9jZXNzb3IgPSAocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiBvdGYuUGF0aFtdO1xyXG5cclxuLy8gVE9ETzogY2xlYW4gdGhpcyB1cFxyXG5leHBvcnQgdHlwZSBMYXlvdXRPcHRpb25zID0ge1xyXG4gICAgLy8gSG9yaXpvbnRhbCBhbGlnbm1lbnQgcGVyIGxpbmVcclxuICAgIGFsaWduPzogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG4gICAgLy8gTXVsdGlwbGllciBmb3IgYmFzZWxpbmUgZGlzdGFuY2U6IChhc2NlbmRlciArIGRlc2NlbnQpICogbGluZUhlaWdodFxyXG4gICAgbGluZUhlaWdodD86IG51bWJlcjtcclxuICAgIC8vIEV4dHJhIG1hcmdpbnMgZm9yIGxlZnQvcmlnaHQgYWxpZ25tZW50IChwaXhlbHMpXHJcbiAgICBtYXJnaW5YPzogbnVtYmVyO1xyXG4gICAgLy8gRXh0cmEgdmVydGljYWwgb2Zmc2V0IGZvciB0aGUgZW50aXJlIGJsb2NrIChwaXhlbHMsIGFkZGVkIGFmdGVyIGNlbnRlcmluZylcclxuICAgIG1hcmdpblk/OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBGaWxsU3RhdHVzIHtcclxuICAgIEZJTExFRCA9IFwiZmlsbGVkXCIsXHJcbiAgICBPUEVOID0gXCJvcGVuXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRleHRGb3JlZ3JvdW5kQ29sb3VyID0gMDtcclxuZXhwb3J0IGNvbnN0IHRleHRCYWNrZ3JvdW5kQ29sb3VyID0gMjU1O1xyXG5cclxuLy8gVE9ETzogY2xlYW4gdGhpcyB1cFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dFBhdGhzKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBvdGYuRm9udCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNpemU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UHJlcHJvY2Vzc29yOiBGb250UHJlcHJvY2Vzc29yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRQcmVwcm9jZXNzb3JPcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRPcHRpb25zPzogTGF5b3V0T3B0aW9ucyk6XHJcbiAgICB7IG9yaWdpbmFsVGV4dFBhdGg6IG90Zi5QYXRoW10sIHByb2Nlc3NlZFRleHRQYXRoOiBvdGYuUGF0aFtdIH0ge1xyXG5cclxuICAgIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IHRleHQuc3BsaXQoL1xccj9cXG4vKTtcclxuXHJcbiAgICAvLyBEZWZhdWx0c1xyXG4gICAgY29uc3QgYWxpZ246IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIiA9IGxheW91dE9wdGlvbnM/LmFsaWduID8/IFwiY2VudGVyXCI7XHJcbiAgICBjb25zdCBsaW5lSGVpZ2h0TXVsdGlwbGllcjogbnVtYmVyID0gbGF5b3V0T3B0aW9ucz8ubGluZUhlaWdodCA/PyAxLjI7XHJcbiAgICBjb25zdCBtYXJnaW5YOiBudW1iZXIgPSBsYXlvdXRPcHRpb25zPy5tYXJnaW5YID8/IDA7XHJcbiAgICBjb25zdCBtYXJnaW5ZOiBudW1iZXIgPSBsYXlvdXRPcHRpb25zPy5tYXJnaW5ZID8/IDA7XHJcblxyXG4gICAgLy8gRm9udCBtZXRyaWNzIChpbiBwaXhlbHMgYXQgZ2l2ZW4gdHlwZVNpemUpXHJcbiAgICBjb25zdCBzY2FsZSA9IHR5cGVTaXplIC8gZm9udC51bml0c1BlckVtO1xyXG4gICAgY29uc3QgYXNjZW50ID0gZm9udC5hc2NlbmRlciAqIHNjYWxlOyAgICAgICAgICAgLy8gcG9zaXRpdmVcclxuICAgIGNvbnN0IGRlc2NlbnQgPSBNYXRoLmFicyhmb250LmRlc2NlbmRlcikgKiBzY2FsZTsgLy8gcG9zaXRpdmVcclxuICAgIGNvbnN0IGJhc2VsaW5lR2FwID0gKGFzY2VudCArIGRlc2NlbnQpICogbGluZUhlaWdodE11bHRpcGxpZXI7XHJcblxyXG4gICAgLy8gUHJlY29tcHV0ZSBwZXItbGluZSBiYm94ZXMgYXQgKDAsIDApIGJhc2VsaW5lIHRvIG1lYXN1cmUgd2lkdGhzXHJcbiAgICBjb25zdCBsaW5lQkJveGVzOiBvdGYuQm91bmRpbmdCb3hbXSA9IGxpbmVzLm1hcChsaW5lID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoID0gZm9udC5nZXRQYXRoKGxpbmUsIDAsIDAsIHR5cGVTaXplLCB7IGtlcm5pbmc6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHBhdGguZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbGluZVdpZHRoczogbnVtYmVyW10gPSBsaW5lQkJveGVzLm1hcChiYiA9PiBiYi54MiAtIGJiLngxKTtcclxuXHJcbiAgICAvLyBPdmVyYWxsIGJsb2NrIGhlaWdodCBmb3IgY2VudGVyaW5nOiBmaXJzdCBsaW5lIHRvcCB0byBsYXN0IGxpbmUgYm90dG9tXHJcbiAgICBjb25zdCBibG9ja0hlaWdodCA9IChhc2NlbnQgKyBkZXNjZW50KSArIChsaW5lcy5sZW5ndGggLSAxKSAqIGJhc2VsaW5lR2FwO1xyXG5cclxuICAgIC8vIFRvcCBvZiB0aGUgdmlzdWFsIGJsb2NrIGFuZCBiYXNlbGluZSBmb3IgdGhlIGZpcnN0IGxpbmVcclxuICAgIGNvbnN0IHRvcCA9IChwNS53aW5kb3dIZWlnaHQgLSBibG9ja0hlaWdodCkgLyAyICsgbWFyZ2luWTtcclxuICAgIGNvbnN0IGJhc2VsaW5lMCA9IHRvcCArIGFzY2VudDtcclxuXHJcbiAgICAvLyBCdWlsZCBhbGwgcGF0aHMgd2l0aCBwZXItbGluZSBwb3NpdGlvbmluZ1xyXG4gICAgbGV0IHRleHRQYXRoczogb3RmLlBhdGhbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcclxuICAgICAgICBjb25zdCBiYiA9IGxpbmVCQm94ZXNbaV07XHJcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gbGluZVdpZHRoc1tpXTtcclxuXHJcbiAgICAgICAgLy8gRGVzaXJlZCBsZWZ0IGJhc2VkIG9uIGFsaWdubWVudFxyXG4gICAgICAgIGxldCBkZXNpcmVkTGVmdDogbnVtYmVyO1xyXG4gICAgICAgIHN3aXRjaCAoYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRMZWZ0ID0gbWFyZ2luWDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRMZWZ0ID0gcDUud2luZG93V2lkdGggLSBsaW5lV2lkdGggLSBtYXJnaW5YO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRMZWZ0ID0gKHA1LndpbmRvd1dpZHRoIC0gbGluZVdpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2VsaW5lWSA9IGJhc2VsaW5lMCArIGkgKiBiYXNlbGluZUdhcDtcclxuICAgICAgICAvLyBBZGp1c3QgeCBieSAtYmIueDEgc28gdGhhdCB0aGUgbGVmdCBlZGdlIG9mIHRoZSBiYm94IGxhbmRzIGF0IGRlc2lyZWRMZWZ0XHJcbiAgICAgICAgY29uc3QgeCA9IGRlc2lyZWRMZWZ0IC0gYmIueDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmVQYXRoczogb3RmLlBhdGhbXSA9IGZvbnQuZ2V0UGF0aHMoXHJcbiAgICAgICAgICAgIGxpbmUsXHJcbiAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgIGJhc2VsaW5lWSxcclxuICAgICAgICAgICAgdHlwZVNpemUsXHJcbiAgICAgICAgICAgIHsga2VybmluZzogdHJ1ZSB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGV4dFBhdGhzLnB1c2goLi4ubGluZVBhdGhzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW10gPSBmb250UHJlcHJvY2Vzc29yKHA1LCB0ZXh0UGF0aHMsIGZvbnRQcmVwcm9jZXNzb3JPcHRpb25zKTtcclxuXHJcbiAgICBpZiAodGV4dFBhdGhzLmxlbmd0aCAhPT0gcHJvY2Vzc2VkVGV4dFBhdGhzLmxlbmd0aClcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQudHMgfCBzb21ldGhpbmcgaGFzIGdvbmUgd3JvbmcgaW4gb3RmXFxcXHJlbmRlci1mb250LnRzI2dldFRleHRQYXRoc1wiICtcclxuICAgICAgICAgICAgXCIgcmVnYXJkaW5nIHRoZSBsZW5ndGhzIG9mIHRoZSBvdXRwdXR0ZWQgb3RmLlBhdGhbXVwiKTtcclxuXHJcbiAgICByZXR1cm4geyBvcmlnaW5hbFRleHRQYXRoOiB0ZXh0UGF0aHMsIHByb2Nlc3NlZFRleHRQYXRoOiBwcm9jZXNzZWRUZXh0UGF0aHMgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvbnQocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UmVuZGVyZXI6IEZvbnRSZW5kZXJTdHJhdGVneSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFJlbmRlcmVyT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzPzogb3RmLlBhdGhbXSkgOiBvdGYuUGF0aFtdIHtcclxuXHJcbiAgICAvLyB1bnByb2Nlc3NlZFRleHRQYXRocyB0ZW5kIHRvIGJlIHVzZWZ1bCBpbiBGb250UmVuZGVyU3RyYXRlZ3kgYXMgdGhleSBwcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgZ2VvbWV0cnlcclxuICAgIC8vIGFuZCBjdXJ2ZXMgb2YgdGhlIGZvbnQgYmVmb3JlIHRoZXkgYXJlIHByb2Nlc3NlZCBjcmF6aWx5XHJcbiAgICBpZiAoZm9udFJlbmRlcmVyT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHVucHJvY2Vzc2VkVGV4dFBhdGhzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb250UmVuZGVyZXJPcHRpb25zW1widW5wcm9jZXNzZWRUZXh0UGF0aHNcIl0gPSB1bnByb2Nlc3NlZFRleHRQYXRocztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3R1YWxseSByZW5kZXJpbmcgZm9udFxyXG4gICAgZm9udFJlbmRlcmVyKHA1LCB0ZXh0UGF0aHMsIHRleHRGaWxsU3RhdHVzZXMsIGZvbnRSZW5kZXJlck9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0ZXh0UGF0aHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlT2Zmc2V0R3JpZChzaWRlTGVuZ3RoOiBudW1iZXIsIHNhbXBsZVVuaXQ6IG51bWJlcik6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSB7XHJcbiAgICBpZiAoc2lkZUxlbmd0aCAlIDIgPT09IDAgKSB7XHJcbiAgICAgICAgc2lkZUxlbmd0aCArPSAxO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgIFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkIHJlY2VpdmVkIGFuIGV2ZW4gc2lkZSBsZW5ndGggb2YgXCIgKyAoc2lkZUxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICsgXCIuIFRoZSBhY3R1YWwgc2lkZSBsZW5ndGggb2YgdGhlIGdyaWQgZ2VuZXJhdGVkIHdpbGwgYmUgb2RkOiBcIiArIHNpZGVMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzYW1wbGVPZmZzZXRHcmlkOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdW10gPSBbXTtcclxuICAgIGxldCBtYXhTYW1wbGVVbml0U2NhbGU6IG51bWJlciA9IE1hdGguZmxvb3Ioc2lkZUxlbmd0aCAvIDIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBtYXhTYW1wbGVVbml0U2NhbGU7IGkgPj0gLW1heFNhbXBsZVVuaXRTY2FsZTsgaS0tKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IC1tYXhTYW1wbGVVbml0U2NhbGU7IGogPD0gbWF4U2FtcGxlVW5pdFNjYWxlOyBqKyspIHtcclxuICAgICAgICAgICAgc2FtcGxlT2Zmc2V0R3JpZC5wdXNoKFtqICogc2FtcGxlVW5pdCwgLWkgKiBzYW1wbGVVbml0XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbXBsZU9mZnNldEdyaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0RmlsbFN0YXR1c2VzKHA1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLCBzYW1wbGVVbml0OiBudW1iZXIgPSAyKTogRmlsbFN0YXR1c1tdW10ge1xyXG4gICAgY29uc3QgdG9QYXRoRGF0YVJlc29sdXRpb246IG51bWJlciA9IDM7XHJcbiAgICBjb25zdCBzYW1wbGVPZmZzZXRLZXJuZWw6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSA9IGdlbmVyYXRlU2FtcGxlT2Zmc2V0R3JpZCg1LCBzYW1wbGVVbml0KTtcclxuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gcDUuZHJhd2luZ0NvbnRleHQ7XHJcblxyXG4gICAgbGV0IHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgY2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHRleHRQYXRocy5sZW5ndGg7IGNoYXJhY3RlckluZGV4Kyspe1xyXG4gICAgICAgIGNvbnN0IGVudGlyZUxldHRlcmZvcm1QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCBjb3VudGVyQ291bnQ6IG51bWJlciA9IHBhdGhDb3VudGVyQ291bnRlcihlbnRpcmVMZXR0ZXJmb3JtUGF0aCk7XHJcblxyXG4gICAgICAgIHRleHRGaWxsU3RhdHVzZXMucHVzaChbXSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuRklMTEVEKTtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIHdpbGwgaW5jcmVtZW50IGNoYXJhY3RlckluZGV4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlczogb3RmLlBhdGhDb21tYW5kW11bXSA9IGV4dHJhY3RTaGFwZXNGcm9tUGF0aChlbnRpcmVMZXR0ZXJmb3JtUGF0aCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGxldHRlcmZvcm1Db21wb25lbnRTaGFwZSBvZiBsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBzYW1wbGVQb2ludDogUG9pbnQgfCBudWxsID0gZ2V0Rmlyc3RTdGFydFBvaW50SW5QYXRoKGxldHRlcmZvcm1Db21wb25lbnRTaGFwZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2FtcGxlUG9pbnQgPT09IG51bGwgfHwgc2FtcGxlUG9pbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1mb250LW90Zi50cyB8IHNhbXBsZVBvaW50LnggYW5kIHNhbXBsZVBvaW50Lnkgd2FzIG51bGxcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gc2FtcGxlIGFyb3VuZCB0aGUgKHNhbXBsZVgsIHNhbXBsZVkpIGNvb3JkaW5hdGUgd2UgaGF2ZSBhbmQgdGVzdCBhZ2FpbnN0XHJcbiAgICAgICAgICAgIC8vIGN0eC5pc1BvaW50SW5QYXRoIHdpdGggdGhlIHJlbGV2YW50IGVudGlyZUxldHRlcmZvcm1QYXRoIGFzIHRoZSBwYXRoXHJcbiAgICAgICAgICAgIGxldCBzYW1wbGVQb2ludE9mZnNldDogUG9pbnQgPSB7eDogc2FtcGxlUG9pbnQueCwgeTogc2FtcGxlUG9pbnQueX07XHJcbiAgICAgICAgICAgIGxldCB3YXNGaWxsU3RhdHVzQXNzaWduZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHNhbXBsZU9mZnNldCBvZiBzYW1wbGVPZmZzZXRLZXJuZWwpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVBvaW50T2Zmc2V0LnggPSBzYW1wbGVQb2ludC54ICsgc2FtcGxlT2Zmc2V0WzBdO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlUG9pbnRPZmZzZXQueSA9IHNhbXBsZVBvaW50LnkgKyBzYW1wbGVPZmZzZXRbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoaW5nIHRvIHNlZSBpZiB3ZSdyZSBpbnNpZGUgdGhlIGN1cnJlbnQgc2hhcGVcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBwNS5waXhlbERlbnNpdHkoKSBwYXJ0IGlzIENSVUNJQUwhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoMkQ6IFBhdGgyRCA9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBhdGgyRChwYXRoQ29tbWFuZHNUb1BhdGhEYXRhKGxldHRlcmZvcm1Db21wb25lbnRTaGFwZSwgdG9QYXRoRGF0YVJlc29sdXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5QYXRoOiBib29sZWFuID0gY3R4LmlzUG9pbnRJblBhdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5TdHJva2U6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluU3Ryb2tlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC55LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzdG9wIHNlYXJjaGluZyBpZiB3ZSd2ZSBmb3VuZCBhIHBvaW50IHdpdGhpbiB0aGUgcGF0aCBhbmQgbm90IG9uIHRoZSBzdHJva2UgYXMgdGhpcyB3b24ndFxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyB1cCBpbiBmdXR1cmUgaXNQb2ludEluUGF0aCBjYWxjdWxhdGlvbnMgd2l0aCB0aGUgZW50aXJlIGxldHRlcmZvcm1cclxuICAgICAgICAgICAgICAgIGlmIChpc0luUGF0aCAmJiAhaXNJblN0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc0ZpbGxTdGF0dXNBc3NpZ25lZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJTaGFwZVBhdGgyRDogUGF0aDJEID0gbmV3IFBhdGgyRChlbnRpcmVMZXR0ZXJmb3JtUGF0aC50b1BhdGhEYXRhKHRvUGF0aERhdGFSZXNvbHV0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gc2FtcGxlIHRoaXMgcG9pbnQgaW4gdGhlIHRleHRQYXRoIHVzaW5nIGN0eC5pc1BvaW50SW5QYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJblBhdGg6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluUGF0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyU2hhcGVQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC55LFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5TdHJva2U6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluU3Ryb2tlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJTaGFwZVBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgb25seSBOT1QgaW4gYSBjb3VudGVyL3NvbWV0aGluZyB0aGF0IHNob3VsZG4ndCBiZSBmaWxsZWQgd2hlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzSW5QYXRoID09PSBGQUxTRSAmJiBpc0luU3Ryb2tlID09PSBGQUxTRTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblBhdGggfHwgaXNJblN0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuRklMTEVEKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuT1BFTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETyBuZWVkIHRvIGRvIGVycm9yIGhhbmRsaW5nIGZvciB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBmYWxsIHRocm91Z2ggaGVyZSB3aXRob3V0IGEgc3RhdHVzXHJcbiAgICAgICAgICAgIGlmICghd2FzRmlsbFN0YXR1c0Fzc2lnbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuT1BFTik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgZ2V0VGV4dEZpbGxTdGF0dXNlcyBjb3VsZCBub3QgZmluZCBhIHN1aXRhYmxlIHNhbXBsZSBwb2ludCBcIiArXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgXCIoYXQgY2hhcmFjdGVyIGluZGV4IFwiICsgY2hhcmFjdGVySW5kZXggKyBcIikgZm9yIGNhbGN1bGF0aW5nIHRleHQgZmlsbCBzdGF0dXNcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dEZpbGxTdGF0dXNlcztcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcbmltcG9ydCB7IEZpbGxTdGF0dXMsIHRleHRCYWNrZ3JvdW5kQ29sb3VyLCB0ZXh0Rm9yZWdyb3VuZENvbG91ciB9IGZyb20gXCIuL3JlbmRlci1mb250XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbGVkKHA1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLCB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSkge1xyXG5cclxuICAgIHA1LnB1c2goKTtcclxuICAgIHA1Lm5vU3Ryb2tlKCk7XHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlckZpbGxTdGF0dXM6IEZpbGxTdGF0dXNbXSA9IHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGxldCB0ZXh0RmlsbFN0YXR1c0NvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuRklMTEVEKSB7XHJcbiAgICAgICAgICAgIHA1LmZpbGwodGV4dEZvcmVncm91bmRDb2xvdXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0QmFja2dyb3VuZENvbG91cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjb21tYW5kIG9mIGNoYXJhY3RlclBhdGguY29tbWFuZHMpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuYmVnaW5TaGFwZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHA1LnZlcnRleChjb21tYW5kLngsIGNvbW1hbmQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnZlcnRleChjb21tYW5kLngsIGNvbW1hbmQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHA1LmJlemllclZlcnRleChjb21tYW5kLngxLCBjb21tYW5kLnkxLCBjb21tYW5kLngyLCBjb21tYW5kLnkyLCBjb21tYW5kLngsIGNvbW1hbmQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnF1YWRyYXRpY1ZlcnRleChjb21tYW5kLngxLCBjb21tYW5kLnkxLCBjb21tYW5kLngsIGNvbW1hbmQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiWlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHA1LmVuZFNoYXBlKHA1LkNMT1NFKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c0NvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLkZJTExFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5PUEVOKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEJhY2tncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHA1LnBvcCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlckFycmF5KHg6IHVua25vd24pOiB4IGlzIG51bWJlcltdIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHgpICYmIHguZXZlcnkodiA9PiB0eXBlb2YgdiA9PT0gJ251bWJlcicpO1xyXG59XHJcblxyXG4vLyBvcHRpb25zIGxvb2tzIGxpa2VcclxuZXhwb3J0IGZ1bmN0aW9uIGVyb2RlKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoczogb3RmLlBhdGhbXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcclxuXHJcbiAgICBsZXQgdW5wcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW107XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCAhKFwiZXJvc2lvblN0cmVuZ3RoXCIgaW4gb3B0aW9ucykgfHwgIShcInVucHJvY2Vzc2VkVGV4dFBhdGhzXCIgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgZnJlYWtUb0Vyb2RlZCByZWNlaXZlZCBtYWxmb3JtZWQgb3B0aW9ucyBwYXJhbWV0ZXIuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHMgPSBvcHRpb25zW1widW5wcm9jZXNzZWRUZXh0UGF0aHNcIl07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBhbGxvd3MgZm9yIHRoZSBudWRnZSBmYWN0b3IgdG8gYmUgcGFzc2VkIGluIGFzIGEgc2luZ2xlIG51bWJlciBvciBhbiBhcnJheSBvZiBudW1iZXJzIChvbmUgbnVkZ2UgZmFjdG9yIGZvclxyXG4gICAgLy8gZWFjaCBjaGFyYWN0ZXIgaW4gdGV4dFBhdGhzLlxyXG4gICAgY29uc3QgcmF3RXJvc2lvbj0gb3B0aW9uc1tcImVyb3Npb25TdHJlbmd0aFwiXTsgLy8tNy42Oy8vLTguMztcclxuICAgIGNvbnN0IGlzUmF3RXJvc2lvbk51bWJlckFycmF5OiBib29sZWFuID0gaXNOdW1iZXJBcnJheShyYXdFcm9zaW9uKTtcclxuICAgIGlmICghaXNSYXdFcm9zaW9uTnVtYmVyQXJyYXkgJiYgdHlwZW9mIHJhd0Vyb3Npb24gIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgZXJvc2lvblN0cmVuZ3RoIG11c3QgYmUgYSBudW1iZXIgb3IgbnVtYmVyW11cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUmF3RXJvc2lvbk51bWJlckFycmF5ICYmIChyYXdFcm9zaW9uIGFzIG51bWJlcltdKS5sZW5ndGggIT09IHRleHRQYXRocy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgaWYgZXJvc2lvblN0cmVuZ3RoIGlzIGEgbnVtYmVyW10sIHRoZW4gaXQgbXVzdCBiZSBsZW5ndGggb2YgdGV4dFBhdGhzXCIgK1xyXG4gICAgICAgICAgICBcImN1cnJlbnRseSByYXdFcm9zaW9uIGlzIGxlbmd0aCBcIiArIChyYXdFcm9zaW9uIGFzIG51bWJlcltdKS5sZW5ndGggKyBcIiBcIiArXHJcbiAgICAgICAgICAgIFwiYW5kIHRleHRQYXRocy5sZW5ndGggaXMgXCIgKyB0ZXh0UGF0aHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcDUucHVzaCgpO1xyXG4gICAgcDUubm9TdHJva2UoKTtcclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICAvLyBudWRnZSBmYWN0b3Igb2YgNy04LjMgaXMgaWRlYWwgZm9yIGEgbGV0dGVyZm9ybSB0aGF0IGlzIGFsbW9zdCBub24tZXhpc3RlbnQgLy8tNy42Oy8vLTguMztcclxuICAgICAgICBjb25zdCBudWRnZUZhY3RvcjogbnVtYmVyID0gdHlwZW9mIHJhd0Vyb3Npb24gPT09IFwibnVtYmVyXCIgPyByYXdFcm9zaW9uIDogcmF3RXJvc2lvbltjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkQ2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB1bnByb2Nlc3NlZFRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRmlsbFN0YXR1czogRmlsbFN0YXR1c1tdID0gdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgbGV0IHRleHRGaWxsU3RhdHVzQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2aW91c1BvaW50OiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJhY3RlclBhdGguY29tbWFuZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZDogb3RmLlBhdGhDb21tYW5kID0gY2hhcmFjdGVyUGF0aC5jb21tYW5kc1tpXTtcclxuICAgICAgICAgICAgbGV0IHVucHJvY2Vzc2VkQ29tbWFuZDogb3RmLlBhdGhDb21tYW5kID0gdW5wcm9jZXNzZWRDaGFyYWN0ZXJQYXRoLmNvbW1hbmRzW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGR4OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBkeTogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgbWFnbml0dWRlOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRZOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlICE9PSB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZyBpbiBvdGZcXHJlbmRlci1mb250LnRzI2dldFRleHRQYXRoc1wiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiByZWdhcmRpbmcgdGhlIGxlbmd0aHMgb2YgdGhlIG91dHB1dHRlZCBvdGYuUGF0aFtdXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIk1cIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJNXCIpIHtcclxuICAgICAgICAgICAgICAgIHA1LmJlZ2luU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgIGR4ID0gdW5wcm9jZXNzZWRDb21tYW5kLnkgLSBwcmV2aW91c1BvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBkeSA9IHByZXZpb3VzUG9pbnQueCAtIHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoZHggLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gKGR5IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgcDUudmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55ICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJMXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiTFwiKSB7XHJcbiAgICAgICAgICAgICAgICBkeCA9IHVucHJvY2Vzc2VkQ29tbWFuZC55IC0gcHJldmlvdXNQb2ludC55O1xyXG4gICAgICAgICAgICAgICAgZHkgPSBwcmV2aW91c1BvaW50LnggLSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gKGR4IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yLzEuNTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSAoZHkgLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3IvMS41O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdGhpcyBtYWtlcyBmb250IG91dGxpbmVzIHNwaWt5IGFuZCBub3QgdGhpbiB3aGljaCBpcyBiYWRcclxuICAgICAgICAgICAgICAgIHA1LnZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnggKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueSArIG9mZnNldFlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHByZXZpb3VzIHBvaW50IGNvbnNpc3RlbnRseVxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiQ1wiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIkNcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IGEgY3ViaWMgYmV6aWVyIHdhcyBkcmF3biEgVGhpcyBpcyByZWFsbHkgYmFkLlwiKVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBpIGhhdmVuJ3Qgc2VlbiBhIHNpbmdsZSBjdXJ2ZSBpbnZva2UgdGhpcywgc28gSSd2ZSBqdXN0IGlnbm9yZWQgdGhpc1xyXG4gICAgICAgICAgICAgICAgcDUuYmV6aWVyVmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55MSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJRXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiUVwiKSB7XHJcbiAgICAgICAgICAgICAgICBkeCA9IHVucHJvY2Vzc2VkQ29tbWFuZC55IC0gdW5wcm9jZXNzZWRDb21tYW5kLnkxO1xyXG4gICAgICAgICAgICAgICAgZHkgPSB1bnByb2Nlc3NlZENvbW1hbmQueDEgLSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gKGR4IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IChkeSAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHA1LnF1YWRyYXRpY1ZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngxICsgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkxICsgb2Zmc2V0WSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnggKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueSArIG9mZnNldFlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiWlwiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIlpcIikge1xyXG4gICAgICAgICAgICAgICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHA1LnBvcCgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==