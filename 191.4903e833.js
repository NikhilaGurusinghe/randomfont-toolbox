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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxPQUFPLEVBQ25CLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUN0QixDQUFDO2dCQUVGLGFBQWEsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNqRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdEIscUJBQXFCLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLDhEQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ25FLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0VBQW9CLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztxQkFBTSxJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssOERBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEUsRUFBRSxDQUFDLElBQUksQ0FBQyx3RUFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvaWdub3JlZHxDOlxcVXNlcnNcXE5pa2hpbGEgR3VydXNpbmdoZVxcUmVwb3NcXEFOVVxcREVTTjIwMDlcXHJhbmRvbWZvbnQtdG9vbGJveFxcbm9kZV9tb2R1bGVzXFwucG5wbVxcb3BlbnR5cGUuanNAMS4zLjRcXG5vZGVfbW9kdWxlc1xcb3BlbnR5cGUuanNcXGRpc3R8ZnMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3BhdGgtcHJlcHJvY2Vzc29yLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi91dGlscy90eXBlLWNvdW50ZXJzLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi91dGlscy9vdGYtcGF0aC11dGlscy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLWZvbnQudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1zdHJhdGVneS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgcDUgZnJvbSBcInA1XCI7XHJcbmltcG9ydCBvdGYgZnJvbSBcIm9wZW50eXBlLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9QcmVwcm9jZXNzKF9wNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSk6IG90Zi5QYXRoW10ge1xyXG4gICAgcmV0dXJuIHRleHRQYXRocztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyZWFrVG8ocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogb3RmLlBhdGhbXSB7XHJcbiAgICBsZXQgcmFuZG9tVW5pdDogbnVtYmVyO1xyXG5cclxuICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCAhKFwiY3JhemluZXNzXCIgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicGF0aC1wcmVwcm9jZXNzb3IudHMgfCBmcmVha1RvIHJlY2VpdmVkIG1hbGZvcm1lZCBvcHRpb25zIHBhcmFtZXRlci5cIik7XHJcbiAgICAgICAgcmFuZG9tVW5pdCA9IDM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJhbmRvbVVuaXQgPSBvcHRpb25zW1wiY3JhemluZXNzXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW10gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRleHRQYXRocykpO1xyXG5cclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICAvLyBnZXQgb3RmLlBhdGggb2JqZWN0IGZvciBjdXJyZW50IGNoYXJhY3RlclxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgYWNjdW11bGF0ZSBhbGwgdGhlIG5ldyByYW5kb21pemVkIHBhdGggY29tbWFuZHMgdGhhdCB3ZSB3YW50XHJcbiAgICAgICAgbGV0IG5ld0NoYXJhY3RlclBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUG9pbnQ6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgICAgIC8vIHByb2Nlc3MgYWxsIHBhdGggY29tbWFuZHMgZm9yIHRoaXMgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgICAgICBmb3IgKGxldCBjaGFyUGF0aENvbW1hbmRJbmRleCA9IDA7IGNoYXJQYXRoQ29tbWFuZEluZGV4IDwgY2hhcmFjdGVyUGF0aC5jb21tYW5kcy5sZW5ndGg7IGNoYXJQYXRoQ29tbWFuZEluZGV4Kyspe1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZCA9IGNoYXJhY3RlclBhdGguY29tbWFuZHNbY2hhclBhdGhDb21tYW5kSW5kZXhdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVycEludGVydmFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHA1LnJhbmRvbSgwLCByYW5kb21Vbml0IC0gMSk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXJwSW50ZXJ2YWxzLnB1c2gocDUucmFuZG9tKDAsIDAuOSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXJwSW50ZXJ2YWxzLnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhIC0gYik7IC8vIHNvcnQgaW4gYXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGVycEludGVydmFsIG9mIGxlcnBJbnRlcnZhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBlZFg6IG51bWJlciA9IHA1LmxlcnAocHJldmlvdXNQb2ludC54LCBjb21tYW5kLngsIGxlcnBJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXJwZWRZOiBudW1iZXIgPSBwNS5sZXJwKHByZXZpb3VzUG9pbnQueSwgY29tbWFuZC55LCBsZXJwSW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byB1cGRhdGUgdGhlIG9yaWdpbmFsIHRleHRQYXRocyBhcyB3ZSBhcmUgYWRkaW5nIGNvbW1hbmRzIHRoYXQgbmVlZCB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSByZWZsZWN0ZWQgaW4gdGhlIG9yaWdpbmFsIHRleHRQYXRocyAoY2F1c2Ugd2UgbWlnaHQgbmVlZCB0byB1c2UgdGhlIG9yaWdpbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHRQYXRocyBvdXRzaWRlIG9mIGhlcmUpIC0tIHRoaXMgd29ya3MgZmluZSBjYXVzZSBhcnJheXMgYXJlIHBhc3NlZCBieSByZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XS5jb21tYW5kcy5zcGxpY2UoY2hhclBhdGhDb21tYW5kSW5kZXgsIDAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVycGVkWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxlcnBlZFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZXJwZWRYICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LzEuNSwgcmFuZG9tVW5pdC8xLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbGVycGVkWSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdC8xLjUsIHJhbmRvbVVuaXQvMS41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhcyB3ZSBoYXZlIHVwZGF0ZWQgdGhlIHRleHRQYXRocyBieSByZWZlcmVuY2Ugd2UgbmVlZCB0byBhZGp1c3QgdGhlIGNoYXJQYXRoQ29tbWFuZEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYmUgYWZ0ZXIgdGhlIG9yaWdpbmFsIFwiTFwiIGNvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBjaGFyUGF0aENvbW1hbmRJbmRleCArPSBsZXJwSW50ZXJ2YWxzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxOiBjb21tYW5kLngxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE6IGNvbW1hbmQueTEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MjogY29tbWFuZC54MiArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyOiBjb21tYW5kLnkyICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJRXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxOiBjb21tYW5kLngxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE6IGNvbW1hbmQueTEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJaXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gXCJaXCIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IGNvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IGNvbW1hbmQueTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFmdGVyIHByb2Nlc3NpbmcgcGF0aHMgYW5kIGFkZGluZyBzb21lIHJhbmRvbWl6YXRpb24gbGV0J3MgYXNzaWduIGFsbCB0aGVcclxuICAgICAgICAvLyBuZXcgcGF0aCBjb21tYW5kcyB0byB0aGUgb3JpZ2luYWwgb3RmLlBhdGhbXSBvYmplY3QgcGFyYW1ldGVyXHJcbiAgICAgICAgcHJvY2Vzc2VkVGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XS5jb21tYW5kcyA9IG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvY2Vzc2VkVGV4dFBhdGhzO1xyXG59IiwiaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlckNvdW50ZXIoZm9udDogb3RmLkZvbnQsIGNoYXJhY3Rlcjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmIChjaGFyYWN0ZXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0eXBlLWNvdW50ZXJzLnRzIHwgUGF0aENvdW50ZXJDb3VudGVyIGFjY2VwdGVkIGEgY2hhcmFjdGVyIG9mIHNpemUgXCIgKyBjaGFyYWN0ZXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb250IHNpemUgYW5kIHggYW5kIHkgY29vcmRzIHVzZWQgaGVyZSBhcmUgZHVtbWllc1xyXG4gICAgcmV0dXJuIHBhdGhDb3VudGVyQ291bnRlcihmb250LmdldFBhdGgoY2hhcmFjdGVyWzBdLCAwLCAwLCAyMCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0aENvdW50ZXJDb3VudGVyKGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoKTogbnVtYmVyIHtcclxuXHJcbiAgICBsZXQgY291bnRlckNvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzKSB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJaXCIpIHtcclxuICAgICAgICAgICAgY291bnRlckNvdW50ZXIgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgb3RmLlBhdGggU1ZHIGRyYXdpbmcgY29tbWFuZHMgYXJlIHN0cnVjdHVyZWQgd2l0aCB0aGUgYmFzZSBsZXR0ZXJmb3JtIHNoYXBlXHJcbiAgICAvLyBmb2xsb3dlZCBieSBjb3VudGVyc1xyXG4gICAgcmV0dXJuIGNvdW50ZXJDb3VudGVyID09PSAwID8gMCA6IGNvdW50ZXJDb3VudGVyIC0gMTtcclxufVxyXG5cclxuIiwiaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNoYXBlc0Zyb21QYXRoKHBhdGg6IG90Zi5QYXRoKSA6IG90Zi5QYXRoQ29tbWFuZFtdW10ge1xyXG4gICAgbGV0IGN1cnJTaGFwZUNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgY3VyclNoYXBlczogb3RmLlBhdGhDb21tYW5kW11bXSA9IFtbXV07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGguY29tbWFuZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gcGF0aC5jb21tYW5kc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gXCJaXCIpIHsgLy8gaWYgd2UgYXJlbid0IGF0IGEgY2xvc2Ugc2hhcGUgY29tbWFuZFxyXG4gICAgICAgICAgICBjdXJyU2hhcGVzW2N1cnJTaGFwZUNvdW50ZXJdLnB1c2goY29tbWFuZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgYXQgYSBjbG9zZSBzaGFwZSBjb21tYW5kXHJcbiAgICAgICAgICAgIC8vIHB1c2ggXCJaXCJcclxuICAgICAgICAgICAgY3VyclNoYXBlc1tjdXJyU2hhcGVDb3VudGVyXS5wdXNoKGNvbW1hbmQpXHJcbiAgICAgICAgICAgIC8vIGluY3JlbWVudCB0aGUgY3VyclNoYXBlQ291bnRlclxyXG4gICAgICAgICAgICBjdXJyU2hhcGVDb3VudGVyKys7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZW4ndCBhdCB0aGUgbGFzdCBcIlpcIiB0aGVuIGtlZXAgZXhwYW5kaW5nIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmIChpICE9PSBwYXRoLmNvbW1hbmRzLmxlbmd0aCAtIDEpIGN1cnJTaGFwZXMucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyU2hhcGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RTdGFydFBvaW50SW5QYXRoKHBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10pIDogKFBvaW50IHwgbnVsbCkge1xyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBwYXRoQ29tbWFuZHMpIHtcclxuICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIkNcIiB8fCAgLy8gY3ViaWMgYmV6aWVyXHJcbiAgICAgICAgICAgIGNvbW1hbmQudHlwZSA9PT0gXCJMXCIgfHwgIC8vIGxpbmUgdG9cclxuICAgICAgICAgICAgY29tbWFuZC50eXBlID09PSBcIlFcIikgeyAgLy8gcXVhZHJhdGljIGJlemllclxyXG4gICAgICAgICAgICByZXR1cm4geyB4OiBjb21tYW5kLngsIHk6IGNvbW1hbmQueSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDb21tYW5kc1RvUGF0aERhdGEocGF0aENvbW1hbmRzOiBvdGYuUGF0aENvbW1hbmRbXSwgZGVjaW1hbFBsYWNlczogbnVtYmVyKSA6IHN0cmluZyB7XHJcbiAgICBsZXQgcGF0aERhdGE6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBwYXRoQ29tbWFuZHMpIHtcclxuICAgICAgICAvLyBcIlpcIiBpcyBhcHBlbmRlZCBhdXRvbWF0aWNhbGx5IGhlcmVcclxuICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLnR5cGUgKyBcIiBcIjtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLngxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngyLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTIudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFcIjpcclxuICAgICAgICAgICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQueDEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aERhdGE7XHJcbn0iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuaW1wb3J0IHtwYXRoQ291bnRlckNvdW50ZXJ9IGZyb20gXCIuL3V0aWxzL3R5cGUtY291bnRlcnNcIjtcclxuaW1wb3J0IHtleHRyYWN0U2hhcGVzRnJvbVBhdGgsIGdldEZpcnN0U3RhcnRQb2ludEluUGF0aCwgcGF0aENvbW1hbmRzVG9QYXRoRGF0YX0gZnJvbSBcIi4vdXRpbHMvb3RmLXBhdGgtdXRpbHNcIjtcclxuXHJcbnR5cGUgRm9udFJlbmRlclN0cmF0ZWd5ID0gKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHZvaWQ7XHJcbnR5cGUgRm9udFByZXByb2Nlc3NvciA9IChwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSwgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IG90Zi5QYXRoW107XHJcblxyXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwXHJcbmV4cG9ydCB0eXBlIExheW91dE9wdGlvbnMgPSB7XHJcbiAgICAvLyBIb3Jpem9udGFsIGFsaWdubWVudCBwZXIgbGluZVxyXG4gICAgYWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcbiAgICAvLyBNdWx0aXBsaWVyIGZvciBiYXNlbGluZSBkaXN0YW5jZTogKGFzY2VuZGVyICsgZGVzY2VudCkgKiBsaW5lSGVpZ2h0XHJcbiAgICBsaW5lSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgLy8gRXh0cmEgbWFyZ2lucyBmb3IgbGVmdC9yaWdodCBhbGlnbm1lbnQgKHBpeGVscylcclxuICAgIG1hcmdpblg/OiBudW1iZXI7XHJcbiAgICAvLyBFeHRyYSB2ZXJ0aWNhbCBvZmZzZXQgZm9yIHRoZSBlbnRpcmUgYmxvY2sgKHBpeGVscywgYWRkZWQgYWZ0ZXIgY2VudGVyaW5nKVxyXG4gICAgbWFyZ2luWT86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIEZpbGxTdGF0dXMge1xyXG4gICAgRklMTEVEID0gXCJmaWxsZWRcIixcclxuICAgIE9QRU4gPSBcIm9wZW5cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dEZvcmVncm91bmRDb2xvdXIgPSAwO1xyXG5leHBvcnQgY29uc3QgdGV4dEJhY2tncm91bmRDb2xvdXIgPSAyNTU7XHJcblxyXG4vLyBUT0RPOiBjbGVhbiB0aGlzIHVwXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0UGF0aHMocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG90Zi5Gb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRQcmVwcm9jZXNzb3I6IEZvbnRQcmVwcm9jZXNzb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFByZXByb2Nlc3Nvck9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dE9wdGlvbnM/OiBMYXlvdXRPcHRpb25zKTpcclxuICAgIHsgb3JpZ2luYWxUZXh0UGF0aDogb3RmLlBhdGhbXSwgcHJvY2Vzc2VkVGV4dFBhdGg6IG90Zi5QYXRoW10gfSB7XHJcblxyXG4gICAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gdGV4dC5zcGxpdCgvXFxyP1xcbi8pO1xyXG5cclxuICAgIC8vIERlZmF1bHRzXHJcbiAgICBjb25zdCBhbGlnbjogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiID0gbGF5b3V0T3B0aW9ucz8uYWxpZ24gPz8gXCJjZW50ZXJcIjtcclxuICAgIGNvbnN0IGxpbmVIZWlnaHRNdWx0aXBsaWVyOiBudW1iZXIgPSBsYXlvdXRPcHRpb25zPy5saW5lSGVpZ2h0ID8/IDEuMjtcclxuICAgIGNvbnN0IG1hcmdpblg6IG51bWJlciA9IGxheW91dE9wdGlvbnM/Lm1hcmdpblggPz8gMDtcclxuICAgIGNvbnN0IG1hcmdpblk6IG51bWJlciA9IGxheW91dE9wdGlvbnM/Lm1hcmdpblkgPz8gMDtcclxuXHJcbiAgICAvLyBGb250IG1ldHJpY3MgKGluIHBpeGVscyBhdCBnaXZlbiB0eXBlU2l6ZSlcclxuICAgIGNvbnN0IHNjYWxlID0gdHlwZVNpemUgLyBmb250LnVuaXRzUGVyRW07XHJcbiAgICBjb25zdCBhc2NlbnQgPSBmb250LmFzY2VuZGVyICogc2NhbGU7ICAgICAgICAgICAvLyBwb3NpdGl2ZVxyXG4gICAgY29uc3QgZGVzY2VudCA9IE1hdGguYWJzKGZvbnQuZGVzY2VuZGVyKSAqIHNjYWxlOyAvLyBwb3NpdGl2ZVxyXG4gICAgY29uc3QgYmFzZWxpbmVHYXAgPSAoYXNjZW50ICsgZGVzY2VudCkgKiBsaW5lSGVpZ2h0TXVsdGlwbGllcjtcclxuXHJcbiAgICAvLyBQcmVjb21wdXRlIHBlci1saW5lIGJib3hlcyBhdCAoMCwgMCkgYmFzZWxpbmUgdG8gbWVhc3VyZSB3aWR0aHNcclxuICAgIGNvbnN0IGxpbmVCQm94ZXM6IG90Zi5Cb3VuZGluZ0JveFtdID0gbGluZXMubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSBmb250LmdldFBhdGgobGluZSwgMCwgMCwgdHlwZVNpemUsIHsga2VybmluZzogdHJ1ZSB9KTtcclxuICAgICAgICByZXR1cm4gcGF0aC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBsaW5lV2lkdGhzOiBudW1iZXJbXSA9IGxpbmVCQm94ZXMubWFwKGJiID0+IGJiLngyIC0gYmIueDEpO1xyXG5cclxuICAgIC8vIE92ZXJhbGwgYmxvY2sgaGVpZ2h0IGZvciBjZW50ZXJpbmc6IGZpcnN0IGxpbmUgdG9wIHRvIGxhc3QgbGluZSBib3R0b21cclxuICAgIGNvbnN0IGJsb2NrSGVpZ2h0ID0gKGFzY2VudCArIGRlc2NlbnQpICsgKGxpbmVzLmxlbmd0aCAtIDEpICogYmFzZWxpbmVHYXA7XHJcblxyXG4gICAgLy8gVG9wIG9mIHRoZSB2aXN1YWwgYmxvY2sgYW5kIGJhc2VsaW5lIGZvciB0aGUgZmlyc3QgbGluZVxyXG4gICAgY29uc3QgdG9wID0gKHA1LndpbmRvd0hlaWdodCAtIGJsb2NrSGVpZ2h0KSAvIDIgKyBtYXJnaW5ZO1xyXG4gICAgY29uc3QgYmFzZWxpbmUwID0gdG9wICsgYXNjZW50O1xyXG5cclxuICAgIC8vIEJ1aWxkIGFsbCBwYXRocyB3aXRoIHBlci1saW5lIHBvc2l0aW9uaW5nXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgICAgIGNvbnN0IGJiID0gbGluZUJCb3hlc1tpXTtcclxuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSBsaW5lV2lkdGhzW2ldO1xyXG5cclxuICAgICAgICAvLyBEZXNpcmVkIGxlZnQgYmFzZWQgb24gYWxpZ25tZW50XHJcbiAgICAgICAgbGV0IGRlc2lyZWRMZWZ0OiBudW1iZXI7XHJcbiAgICAgICAgc3dpdGNoIChhbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgZGVzaXJlZExlZnQgPSBtYXJnaW5YO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgZGVzaXJlZExlZnQgPSBwNS53aW5kb3dXaWR0aCAtIGxpbmVXaWR0aCAtIG1hcmdpblg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZGVzaXJlZExlZnQgPSAocDUud2luZG93V2lkdGggLSBsaW5lV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmFzZWxpbmVZID0gYmFzZWxpbmUwICsgaSAqIGJhc2VsaW5lR2FwO1xyXG4gICAgICAgIC8vIEFkanVzdCB4IGJ5IC1iYi54MSBzbyB0aGF0IHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIGJib3ggbGFuZHMgYXQgZGVzaXJlZExlZnRcclxuICAgICAgICBjb25zdCB4ID0gZGVzaXJlZExlZnQgLSBiYi54MTtcclxuXHJcbiAgICAgICAgY29uc3QgbGluZVBhdGhzOiBvdGYuUGF0aFtdID0gZm9udC5nZXRQYXRocyhcclxuICAgICAgICAgICAgbGluZSxcclxuICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgYmFzZWxpbmVZLFxyXG4gICAgICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAgICAgeyBrZXJuaW5nOiB0cnVlIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0ZXh0UGF0aHMucHVzaCguLi5saW5lUGF0aHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXSA9IGZvbnRQcmVwcm9jZXNzb3IocDUsIHRleHRQYXRocywgZm9udFByZXByb2Nlc3Nvck9wdGlvbnMpO1xyXG5cclxuICAgIGlmICh0ZXh0UGF0aHMubGVuZ3RoICE9PSBwcm9jZXNzZWRUZXh0UGF0aHMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItZm9udC50cyB8IHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZyBpbiBvdGZcXFxccmVuZGVyLWZvbnQudHMjZ2V0VGV4dFBhdGhzXCIgK1xyXG4gICAgICAgICAgICBcIiByZWdhcmRpbmcgdGhlIGxlbmd0aHMgb2YgdGhlIG91dHB1dHRlZCBvdGYuUGF0aFtdXCIpO1xyXG5cclxuICAgIHJldHVybiB7IG9yaWdpbmFsVGV4dFBhdGg6IHRleHRQYXRocywgcHJvY2Vzc2VkVGV4dFBhdGg6IHByb2Nlc3NlZFRleHRQYXRocyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udChwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoczogb3RmLlBhdGhbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRSZW5kZXJlcjogRm9udFJlbmRlclN0cmF0ZWd5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UmVuZGVyZXJPcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHM/OiBvdGYuUGF0aFtdKSA6IG90Zi5QYXRoW10ge1xyXG5cclxuICAgIC8vIHVucHJvY2Vzc2VkVGV4dFBhdGhzIHRlbmQgdG8gYmUgdXNlZnVsIGluIEZvbnRSZW5kZXJTdHJhdGVneSBhcyB0aGV5IHByZXNlcnZlIHRoZSBvcmlnaW5hbCBnZW9tZXRyeVxyXG4gICAgLy8gYW5kIGN1cnZlcyBvZiB0aGUgZm9udCBiZWZvcmUgdGhleSBhcmUgcHJvY2Vzc2VkIGNyYXppbHlcclxuICAgIGlmIChmb250UmVuZGVyZXJPcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdW5wcm9jZXNzZWRUZXh0UGF0aHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvbnRSZW5kZXJlck9wdGlvbnNbXCJ1bnByb2Nlc3NlZFRleHRQYXRoc1wiXSA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdHVhbGx5IHJlbmRlcmluZyBmb250XHJcbiAgICBmb250UmVuZGVyZXIocDUsIHRleHRQYXRocywgdGV4dEZpbGxTdGF0dXNlcywgZm9udFJlbmRlcmVyT3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRleHRQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKHNpZGVMZW5ndGg6IG51bWJlciwgc2FtcGxlVW5pdDogbnVtYmVyKTogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdIHtcclxuICAgIGlmIChzaWRlTGVuZ3RoICUgMiA9PT0gMCApIHtcclxuICAgICAgICBzaWRlTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgXCJyZW5kZXItZm9udC1vdGYudHMgfCBnZW5lcmF0ZVNhbXBsZU9mZnNldEdyaWQgcmVjZWl2ZWQgYW4gZXZlbiBzaWRlIGxlbmd0aCBvZiBcIiArIChzaWRlTGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgKyBcIi4gVGhlIGFjdHVhbCBzaWRlIGxlbmd0aCBvZiB0aGUgZ3JpZCBnZW5lcmF0ZWQgd2lsbCBiZSBvZGQ6IFwiICsgc2lkZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNhbXBsZU9mZnNldEdyaWQ6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSA9IFtdO1xyXG4gICAgbGV0IG1heFNhbXBsZVVuaXRTY2FsZTogbnVtYmVyID0gTWF0aC5mbG9vcihzaWRlTGVuZ3RoIC8gMik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IG1heFNhbXBsZVVuaXRTY2FsZTsgaSA+PSAtbWF4U2FtcGxlVW5pdFNjYWxlOyBpLS0pIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gLW1heFNhbXBsZVVuaXRTY2FsZTsgaiA8PSBtYXhTYW1wbGVVbml0U2NhbGU7IGorKykge1xyXG4gICAgICAgICAgICBzYW1wbGVPZmZzZXRHcmlkLnB1c2goW2ogKiBzYW1wbGVVbml0LCAtaSAqIHNhbXBsZVVuaXRdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2FtcGxlT2Zmc2V0R3JpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRGaWxsU3RhdHVzZXMocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIHNhbXBsZVVuaXQ6IG51bWJlciA9IDIpOiBGaWxsU3RhdHVzW11bXSB7XHJcbiAgICBjb25zdCB0b1BhdGhEYXRhUmVzb2x1dGlvbjogbnVtYmVyID0gMztcclxuICAgIGNvbnN0IHNhbXBsZU9mZnNldEtlcm5lbDogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdID0gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKDUsIHNhbXBsZVVuaXQpO1xyXG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBwNS5kcmF3aW5nQ29udGV4dDtcclxuXHJcbiAgICBsZXQgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgY29uc3QgZW50aXJlTGV0dGVyZm9ybVBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJDb3VudDogbnVtYmVyID0gcGF0aENvdW50ZXJDb3VudGVyKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgdGV4dEZpbGxTdGF0dXNlcy5wdXNoKFtdKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gd2lsbCBpbmNyZW1lbnQgY2hhcmFjdGVySW5kZXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGVzOiBvdGYuUGF0aENvbW1hbmRbXVtdID0gZXh0cmFjdFNoYXBlc0Zyb21QYXRoKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlIG9mIGxldHRlcmZvcm1Db21wb25lbnRTaGFwZXMpIHtcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50OiBQb2ludCB8IG51bGwgPSBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzYW1wbGVQb2ludCA9PT0gbnVsbCB8fCBzYW1wbGVQb2ludCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgc2FtcGxlUG9pbnQueCBhbmQgc2FtcGxlUG9pbnQueSB3YXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBzYW1wbGUgYXJvdW5kIHRoZSAoc2FtcGxlWCwgc2FtcGxlWSkgY29vcmRpbmF0ZSB3ZSBoYXZlIGFuZCB0ZXN0IGFnYWluc3RcclxuICAgICAgICAgICAgLy8gY3R4LmlzUG9pbnRJblBhdGggd2l0aCB0aGUgcmVsZXZhbnQgZW50aXJlTGV0dGVyZm9ybVBhdGggYXMgdGhlIHBhdGhcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50T2Zmc2V0OiBQb2ludCA9IHt4OiBzYW1wbGVQb2ludC54LCB5OiBzYW1wbGVQb2ludC55fTtcclxuICAgICAgICAgICAgbGV0IHdhc0ZpbGxTdGF0dXNBc3NpZ25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgc2FtcGxlT2Zmc2V0IG9mIHNhbXBsZU9mZnNldEtlcm5lbCkge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlUG9pbnRPZmZzZXQueCA9IHNhbXBsZVBvaW50LnggKyBzYW1wbGVPZmZzZXRbMF07XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVQb2ludE9mZnNldC55ID0gc2FtcGxlUG9pbnQueSArIHNhbXBsZU9mZnNldFsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2hpbmcgdG8gc2VlIGlmIHdlJ3JlIGluc2lkZSB0aGUgY3VycmVudCBzaGFwZVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHA1LnBpeGVsRGVuc2l0eSgpIHBhcnQgaXMgQ1JVQ0lBTCFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGgyRDogUGF0aDJEID1cclxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aDJEKHBhdGhDb21tYW5kc1RvUGF0aERhdGEobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlLCB0b1BhdGhEYXRhUmVzb2x1dGlvbikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblBhdGg6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluUGF0aChcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHN0b3Agc2VhcmNoaW5nIGlmIHdlJ3ZlIGZvdW5kIGEgcG9pbnQgd2l0aGluIHRoZSBwYXRoIGFuZCBub3Qgb24gdGhlIHN0cm9rZSBhcyB0aGlzIHdvbid0XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHVwIGluIGZ1dHVyZSBpc1BvaW50SW5QYXRoIGNhbGN1bGF0aW9ucyB3aXRoIHRoZSBlbnRpcmUgbGV0dGVyZm9ybVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzSW5QYXRoICYmICFpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzRmlsbFN0YXR1c0Fzc2lnbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlclNoYXBlUGF0aDJEOiBQYXRoMkQgPSBuZXcgUGF0aDJEKGVudGlyZUxldHRlcmZvcm1QYXRoLnRvUGF0aERhdGEodG9QYXRoRGF0YVJlc29sdXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiBzYW1wbGUgdGhpcyBwb2ludCBpbiB0aGUgdGV4dFBhdGggdXNpbmcgY3R4LmlzUG9pbnRJblBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0luUGF0aDogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5QYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJTaGFwZVBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclNoYXBlUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBvbmx5IE5PVCBpbiBhIGNvdW50ZXIvc29tZXRoaW5nIHRoYXQgc2hvdWxkbid0IGJlIGZpbGxlZCB3aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXNJblBhdGggPT09IEZBTFNFICYmIGlzSW5TdHJva2UgPT09IEZBTFNFO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luUGF0aCB8fCBpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5PUEVOKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPIG5lZWQgdG8gZG8gZXJyb3IgaGFuZGxpbmcgZm9yIHdoYXQgaGFwcGVucyB3aGVuIHdlIGZhbGwgdGhyb3VnaCBoZXJlIHdpdGhvdXQgYSBzdGF0dXNcclxuICAgICAgICAgICAgaWYgKCF3YXNGaWxsU3RhdHVzQXNzaWduZWQpIHtcclxuICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5PUEVOKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItZm9udC1vdGYudHMgfCBnZXRUZXh0RmlsbFN0YXR1c2VzIGNvdWxkIG5vdCBmaW5kIGEgc3VpdGFibGUgc2FtcGxlIHBvaW50IFwiICtcclxuICAgICAgICAgICAgICAgIC8vICAgICBcIihhdCBjaGFyYWN0ZXIgaW5kZXggXCIgKyBjaGFyYWN0ZXJJbmRleCArIFwiKSBmb3IgY2FsY3VsYXRpbmcgdGV4dCBmaWxsIHN0YXR1c1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0RmlsbFN0YXR1c2VzO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuaW1wb3J0IHsgRmlsbFN0YXR1cywgdGV4dEJhY2tncm91bmRDb2xvdXIsIHRleHRGb3JlZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vcmVuZGVyLWZvbnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsZWQocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdKSB7XHJcblxyXG4gICAgcDUucHVzaCgpO1xyXG4gICAgcDUubm9TdHJva2UoKTtcclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRmlsbFN0YXR1czogRmlsbFN0YXR1c1tdID0gdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgbGV0IHRleHRGaWxsU3RhdHVzQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY2hhcmFjdGVyUGF0aC5jb21tYW5kcykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5iZWdpblNoYXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcDUudmVydGV4KGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUudmVydGV4KGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuYmV6aWVyVmVydGV4KGNvbW1hbmQueDEsIGNvbW1hbmQueTEsIGNvbW1hbmQueDIsIGNvbW1hbmQueTIsIGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJRXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUucXVhZHJhdGljVmVydGV4KGNvbW1hbmQueDEsIGNvbW1hbmQueTEsIGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJaXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuRklMTEVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEZvcmVncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUuZmlsbCh0ZXh0QmFja2dyb3VuZENvbG91cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcDUucG9wKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyQXJyYXkoeDogdW5rbm93bik6IHggaXMgbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCkgJiYgeC5ldmVyeSh2ID0+IHR5cGVvZiB2ID09PSAnbnVtYmVyJyk7XHJcbn1cclxuXHJcbi8vIG9wdGlvbnMgbG9va3MgbGlrZVxyXG5leHBvcnQgZnVuY3Rpb24gZXJvZGUocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG5cclxuICAgIGxldCB1bnByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8ICEoXCJlcm9zaW9uU3RyZW5ndGhcIiBpbiBvcHRpb25zKSB8fCAhKFwidW5wcm9jZXNzZWRUZXh0UGF0aHNcIiBpbiBvcHRpb25zKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItc3RyYXRlZ3kudHMgfCBmcmVha1RvRXJvZGVkIHJlY2VpdmVkIG1hbGZvcm1lZCBvcHRpb25zIHBhcmFtZXRlci5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocyA9IG9wdGlvbnNbXCJ1bnByb2Nlc3NlZFRleHRQYXRoc1wiXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGFsbG93cyBmb3IgdGhlIG51ZGdlIGZhY3RvciB0byBiZSBwYXNzZWQgaW4gYXMgYSBzaW5nbGUgbnVtYmVyIG9yIGFuIGFycmF5IG9mIG51bWJlcnMgKG9uZSBudWRnZSBmYWN0b3IgZm9yXHJcbiAgICAvLyBlYWNoIGNoYXJhY3RlciBpbiB0ZXh0UGF0aHMuXHJcbiAgICBjb25zdCByYXdFcm9zaW9uPSBvcHRpb25zW1wiZXJvc2lvblN0cmVuZ3RoXCJdOyAvLy03LjY7Ly8tOC4zO1xyXG4gICAgY29uc3QgaXNSYXdFcm9zaW9uTnVtYmVyQXJyYXk6IGJvb2xlYW4gPSBpc051bWJlckFycmF5KHJhd0Vyb3Npb24pO1xyXG4gICAgaWYgKCFpc1Jhd0Vyb3Npb25OdW1iZXJBcnJheSAmJiB0eXBlb2YgcmF3RXJvc2lvbiAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItc3RyYXRlZ3kudHMgfCBlcm9zaW9uU3RyZW5ndGggbXVzdCBiZSBhIG51bWJlciBvciBudW1iZXJbXVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaXNSYXdFcm9zaW9uTnVtYmVyQXJyYXkgJiYgKHJhd0Vyb3Npb24gYXMgbnVtYmVyW10pLmxlbmd0aCAhPT0gdGV4dFBhdGhzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItc3RyYXRlZ3kudHMgfCBpZiBlcm9zaW9uU3RyZW5ndGggaXMgYSBudW1iZXJbXSwgdGhlbiBpdCBtdXN0IGJlIGxlbmd0aCBvZiB0ZXh0UGF0aHNcIiArXHJcbiAgICAgICAgICAgIFwiY3VycmVudGx5IHJhd0Vyb3Npb24gaXMgbGVuZ3RoIFwiICsgKHJhd0Vyb3Npb24gYXMgbnVtYmVyW10pLmxlbmd0aCArIFwiIFwiICtcclxuICAgICAgICAgICAgXCJhbmQgdGV4dFBhdGhzLmxlbmd0aCBpcyBcIiArIHRleHRQYXRocy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwNS5wdXNoKCk7XHJcbiAgICBwNS5ub1N0cm9rZSgpO1xyXG4gICAgZm9yIChsZXQgY2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHRleHRQYXRocy5sZW5ndGg7IGNoYXJhY3RlckluZGV4Kyspe1xyXG4gICAgICAgIC8vIG51ZGdlIGZhY3RvciBvZiA3LTguMyBpcyBpZGVhbCBmb3IgYSBsZXR0ZXJmb3JtIHRoYXQgaXMgYWxtb3N0IG5vbi1leGlzdGVudCAvLy03LjY7Ly8tOC4zO1xyXG4gICAgICAgIGNvbnN0IG51ZGdlRmFjdG9yOiBudW1iZXIgPSB0eXBlb2YgcmF3RXJvc2lvbiA9PT0gXCJudW1iZXJcIiA/IHJhd0Vyb3Npb24gOiByYXdFcm9zaW9uW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRDaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJGaWxsU3RhdHVzOiBGaWxsU3RhdHVzW10gPSB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBsZXQgdGV4dEZpbGxTdGF0dXNDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLkZJTExFRCkge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5PUEVOKSB7XHJcbiAgICAgICAgICAgIHA1LmZpbGwodGV4dEJhY2tncm91bmRDb2xvdXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUG9pbnQ6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVyUGF0aC5jb21tYW5kcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kOiBvdGYuUGF0aENvbW1hbmQgPSBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgdW5wcm9jZXNzZWRDb21tYW5kOiBvdGYuUGF0aENvbW1hbmQgPSB1bnByb2Nlc3NlZENoYXJhY3RlclBhdGguY29tbWFuZHNbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgZHg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGR5OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBtYWduaXR1ZGU6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kLnR5cGUgIT09IHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgc29tZXRoaW5nIGhhcyBnb25lIHdyb25nIGluIG90ZlxccmVuZGVyLWZvbnQudHMjZ2V0VGV4dFBhdGhzXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHJlZ2FyZGluZyB0aGUgbGVuZ3RocyBvZiB0aGUgb3V0cHV0dGVkIG90Zi5QYXRoW11cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kLnR5cGUgPT09IFwiTVwiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIk1cIikge1xyXG4gICAgICAgICAgICAgICAgcDUuYmVnaW5TaGFwZSgpO1xyXG4gICAgICAgICAgICAgICAgZHggPSB1bnByb2Nlc3NlZENvbW1hbmQueSAtIHByZXZpb3VzUG9pbnQueTtcclxuICAgICAgICAgICAgICAgIGR5ID0gcHJldmlvdXNQb2ludC54IC0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQoZHggKiogMiArIGR5ICoqIDIpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IChkeCAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSAoZHkgLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBwNS52ZXJ0ZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54ICsgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gdW5wcm9jZXNzZWRDb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC50eXBlID09PSBcIkxcIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJMXCIpIHtcclxuICAgICAgICAgICAgICAgIGR4ID0gdW5wcm9jZXNzZWRDb21tYW5kLnkgLSBwcmV2aW91c1BvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBkeSA9IHByZXZpb3VzUG9pbnQueCAtIHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoZHggLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3IvMS41O1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IChkeSAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3Rvci8xLjU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyB0aGlzIG1ha2VzIGZvbnQgb3V0bGluZXMgc3Bpa3kgYW5kIG5vdCB0aGluIHdoaWNoIGlzIGJhZFxyXG4gICAgICAgICAgICAgICAgcDUudmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55ICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJldmlvdXMgcG9pbnQgY29uc2lzdGVudGx5XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJDXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgYSBjdWJpYyBiZXppZXIgd2FzIGRyYXduISBUaGlzIGlzIHJlYWxseSBiYWQuXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIGkgaGF2ZW4ndCBzZWVuIGEgc2luZ2xlIGN1cnZlIGludm9rZSB0aGlzLCBzbyBJJ3ZlIGp1c3QgaWdub3JlZCB0aGlzXHJcbiAgICAgICAgICAgICAgICBwNS5iZXppZXJWZXJ0ZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54MSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55MixcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gdW5wcm9jZXNzZWRDb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC50eXBlID09PSBcIlFcIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJRXCIpIHtcclxuICAgICAgICAgICAgICAgIGR4ID0gdW5wcm9jZXNzZWRDb21tYW5kLnkgLSB1bnByb2Nlc3NlZENvbW1hbmQueTE7XHJcbiAgICAgICAgICAgICAgICBkeSA9IHVucHJvY2Vzc2VkQ29tbWFuZC54MSAtIHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoZHggLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gKGR5IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgcDUucXVhZHJhdGljVmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDEgKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueTEgKyBvZmZzZXRZLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55ICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJaXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiWlwiKSB7XHJcbiAgICAgICAgICAgICAgICBwNS5lbmRTaGFwZShwNS5DTE9TRSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLkZJTExFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEZvcmVncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEJhY2tncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcDUucG9wKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9