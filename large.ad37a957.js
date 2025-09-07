(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[660],{

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Bold.ttf";

/***/ }),

/***/ 134:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Italic.ttf";

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

/***/ 387:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(996);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(652);
/* harmony import */ var _src_assets_fonts_Libre_Baskerville_LibreBaskerville_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(496);
/* harmony import */ var _src_assets_fonts_Libre_Baskerville_LibreBaskerville_Italic_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(164);
/* harmony import */ var _src_assets_fonts_Libre_Baskerville_LibreBaskerville_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
/* harmony import */ var _src_renderers_otf_render_font__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(840);
/* harmony import */ var _src_renderers_otf_render_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(922);
/* harmony import */ var _src_renderers_otf_path_preprocessor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(386);









function sketch(p5) {
    let libreBaskervilleRegP5;
    let libreBaskervilleRegOTF;
    let libreBaskervilleItalicP5;
    let libreBaskervilleBoldP5;
    let sampleTexts = ["Archaeopteryx", "The “Big Five”", "End-Ordovician", "Late Devonian", "End-Permian",
        "End-Triassic", "End-Cretaceous"];
    let text = sampleTexts[Math.round(p5.random(0, sampleTexts.length - 1))];
    let typeSize = 148;
    let textPaths;
    let unprocessedTextPaths;
    let erosionStrengthSlider;
    let erosionStrengthValueText;
    let freakToCrazinessStrengthSlider;
    let freakToCrazinessValueText;
    function redrawFont(immediatelyRedraw = true) {
        p5.background(255);
        if (immediatelyRedraw) {
            let paths = _src_renderers_otf_render_font__WEBPACK_IMPORTED_MODULE_5__/* .getTextPaths */ .is(p5, libreBaskervilleRegOTF, text, typeSize, _src_renderers_otf_path_preprocessor__WEBPACK_IMPORTED_MODULE_7__/* .freakTo */ .H, { craziness: freakToCrazinessStrengthSlider.value() });
            textPaths = paths.processedTextPath;
            unprocessedTextPaths = paths.originalTextPath;
        }
        _src_renderers_otf_render_font__WEBPACK_IMPORTED_MODULE_5__/* .renderFont */ .Q1(p5, textPaths, _src_renderers_otf_render_strategy__WEBPACK_IMPORTED_MODULE_6__/* .erode */ .s, { erosionStrength: -erosionStrengthSlider.value() }, unprocessedTextPaths);
    }
    p5.preload = () => {
        libreBaskervilleRegP5 = p5.loadFont(_src_assets_fonts_Libre_Baskerville_LibreBaskerville_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__);
        libreBaskervilleItalicP5 = p5.loadFont(_src_assets_fonts_Libre_Baskerville_LibreBaskerville_Italic_ttf__WEBPACK_IMPORTED_MODULE_3__);
        libreBaskervilleBoldP5 = p5.loadFont(_src_assets_fonts_Libre_Baskerville_LibreBaskerville_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__);
    };
    p5.setup = () => {
        window.addEventListener("afterprint", () => {
            redrawFont(false);
            erosionStrengthSlider.value(parseFloat(String(erosionStrengthSlider.value())) + 2);
            erosionStrengthValueText.html(String(erosionStrengthSlider.value()));
        });
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        opentype_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].load */ .Ay.load(_src_assets_fonts_Libre_Baskerville_LibreBaskerville_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__, (error, font) => {
            if (error) {
                console.log("opentype.js | " + _src_assets_fonts_Libre_Baskerville_LibreBaskerville_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ + " could not be loaded: " + error);
            }
            else {
                if (font !== undefined) {
                    libreBaskervilleRegOTF = font;
                    redrawFont();
                    console.log("opentype.js | " + _src_assets_fonts_Libre_Baskerville_LibreBaskerville_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ + " loaded.");
                }
                else {
                    console.log("opentype.js | " + _src_assets_fonts_Libre_Baskerville_LibreBaskerville_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ + " could not be loaded: it was undefined");
                }
            }
        });
        freakToCrazinessStrengthSlider = p5.createSlider(0, 10, 3.56, 0.01);
        freakToCrazinessStrengthSlider.position(65, 10);
        freakToCrazinessStrengthSlider.size(200);
        let freakToCrazinessLabel = p5.createP("crazy");
        freakToCrazinessLabel.style("position: absolute");
        freakToCrazinessLabel.style("font-family: monospace");
        freakToCrazinessLabel.style("font-weight: bold");
        freakToCrazinessLabel.style("font-size: 15px");
        freakToCrazinessLabel.style("left: 10px");
        freakToCrazinessLabel.style("top: -3px");
        freakToCrazinessValueText = p5.createP(String(freakToCrazinessStrengthSlider.value()));
        freakToCrazinessValueText.style("position: absolute");
        freakToCrazinessValueText.style("font-family: monospace");
        freakToCrazinessValueText.style("font-size: 15px");
        freakToCrazinessValueText.style("left: 285px");
        freakToCrazinessValueText.style("top: -3px");
        freakToCrazinessStrengthSlider.changed(() => {
            redrawFont();
            freakToCrazinessValueText.html(String(freakToCrazinessStrengthSlider.value()));
            console.log(freakToCrazinessStrengthSlider.value());
        });
        erosionStrengthSlider = p5.createSlider(0, 10, 4.44, 0.01);
        erosionStrengthSlider.position(65, 50);
        erosionStrengthSlider.size(200);
        let erosionStrengthLabel = p5.createP("erode");
        erosionStrengthLabel.style("position: absolute");
        erosionStrengthLabel.style("font-family: monospace");
        erosionStrengthLabel.style("font-weight: bold");
        erosionStrengthLabel.style("font-size: 15px");
        erosionStrengthLabel.style("left: 10px");
        erosionStrengthLabel.style("top: 37px");
        erosionStrengthValueText = p5.createP(String(erosionStrengthSlider.value()));
        erosionStrengthValueText.style("position: absolute");
        erosionStrengthValueText.style("font-family: monospace");
        erosionStrengthValueText.style("font-size: 15px");
        erosionStrengthValueText.style("left: 285px");
        erosionStrengthValueText.style("top: 37px");
        erosionStrengthSlider.changed(() => {
            redrawFont(false);
            erosionStrengthValueText.html(String(erosionStrengthSlider.value()));
        });
    };
    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        redrawFont(false);
    };
    p5.keyPressed = () => {
        let needsUpdate = false;
        if (p5.key.length === 1) {
            switch (p5.key) {
                default:
                    text += p5.key;
                    break;
            }
            needsUpdate = true;
        }
        else if (p5.key === "Backspace") {
            text = text.slice(0, text.length - 1);
            needsUpdate = true;
        }
        else if (p5.key === "Enter") {
            text += "\n";
        }
        else if (p5.key === "ArrowUp") {
            needsUpdate = true;
        }
        if (needsUpdate)
            redrawFont();
    };
}
new (p5__WEBPACK_IMPORTED_MODULE_0___default())(sketch);


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
function getTextPaths(p5, font, text, typeSize, fontPreprocessor, fontPreprocessorOptions) {
    const textPath = font.getPath(text, 0, 0, typeSize, { kerning: true });
    const textBoundingBox = textPath.getBoundingBox();
    const textHeight = textBoundingBox.y2 - textBoundingBox.y1;
    const textWidth = textBoundingBox.x2 - textBoundingBox.x1;
    let textPaths = font.getPaths(text, (p5.windowWidth - textWidth) / 2, (p5.windowHeight - textHeight + typeSize) / 2, typeSize, { kerning: true });
    let processedTextPaths = fontPreprocessor(p5, textPaths, fontPreprocessorOptions);
    if (textPaths.length !== processedTextPaths.length)
        console.error("render-font.ts | something has gone wrong in otf\render-font.ts#getTextPaths" +
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
function erode(p5, textPaths, textFillStatuses, options) {
    let nudgeFactor;
    let unprocessedTextPaths;
    if (options === undefined || !("erosionStrength" in options) || !("unprocessedTextPaths" in options)) {
        console.error("render-strategy.ts | freakToEroded received malformed options parameter.");
        return;
    }
    else {
        nudgeFactor = options["erosionStrength"];
        unprocessedTextPaths = options["unprocessedTextPaths"];
    }
    p5.push();
    p5.noStroke();
    for (let characterIndex = 0; characterIndex < textPaths.length; characterIndex++) {
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [652], () => (__webpack_exec__(387)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyZ2UuYWQzN2E5NTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR08sU0FBUyxZQUFZLENBQUMsR0FBTyxFQUFFLFNBQXFCO0lBQ3ZELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUM7QUFFTSxTQUFTLE9BQU8sQ0FBQyxFQUFNLEVBQUUsU0FBcUIsRUFBRSxPQUFtQztJQUN0RixJQUFJLFVBQWtCLENBQUM7SUFFdkIsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQztRQUN0RixVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7U0FBTSxDQUFDO1FBQ0osVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxrQkFBa0IsR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUUzRSxLQUFLLElBQUksY0FBYyxHQUFHLENBQUMsRUFBRSxjQUFjLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsRUFBQyxDQUFDO1FBRTlFLE1BQU0sYUFBYSxHQUFhLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUxRCxJQUFJLHdCQUF3QixHQUFzQixFQUFFLENBQUM7UUFFckQsSUFBSSxhQUFhLEdBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUcxQyxLQUFLLElBQUksb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLG9CQUFvQixHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLG9CQUFvQixFQUFFLEVBQUMsQ0FBQztZQUM3RyxJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDM0QsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEtBQUssR0FBRztvQkFDSix3QkFBd0IsQ0FBQyxJQUFJLENBQUM7d0JBQzFCLElBQUksRUFBRSxHQUFHO3dCQUNULENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO3dCQUNqRCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztxQkFDakMsQ0FBQyxDQUFDO29CQUN0QixNQUFNO2dCQUNWLEtBQUssR0FBRztvQkFDSixJQUFJLGFBQWEsR0FBYSxFQUFFLENBQUM7b0JBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDcEQsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDO29CQUNELGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELEtBQUssSUFBSSxZQUFZLElBQUksYUFBYSxFQUFFLENBQUM7d0JBQ3JDLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO3dCQUN4RSxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFLeEUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFOzRCQUMvRCxJQUFJLEVBQUUsR0FBRzs0QkFDVCxDQUFDLEVBQUUsT0FBTzs0QkFDVixDQUFDLEVBQUUsT0FBTzt5QkFDTSxDQUFDLENBQUM7d0JBRXRCLHdCQUF3QixDQUFDLElBQUksQ0FBQzs0QkFDMUIsSUFBSSxFQUFFLEdBQUc7NEJBQ1QsQ0FBQyxFQUFFLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxHQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUMsR0FBRyxDQUFDOzRCQUN2RCxDQUFDLEVBQUUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEdBQUMsR0FBRyxFQUFFLFVBQVUsR0FBQyxHQUFHLENBQUM7eUJBQ3ZDLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztvQkFFRCx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7d0JBQzFCLElBQUksRUFBRSxHQUFHO3dCQUNULENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO3dCQUNqRCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztxQkFDakMsQ0FBQyxDQUFDO29CQUl0QixvQkFBb0IsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDO29CQUU3QyxNQUFNO2dCQUNWLEtBQUssR0FBRztvQkFDSix3QkFBd0IsQ0FBQyxJQUFJLENBQUM7d0JBQzFCLElBQUksRUFBRSxHQUFHO3dCQUNULEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO3dCQUNuRCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQzt3QkFDbkQsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7d0JBQ25ELEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO3dCQUNuRCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQzt3QkFDbkQsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7cUJBQ25DLENBQUMsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLEdBQUc7b0JBQ0osd0JBQXdCLENBQUMsSUFBSSxDQUFDO3dCQUMxQixJQUFJLEVBQUUsR0FBRzt3QkFDVCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQzt3QkFDbkQsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7d0JBQ25ELENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO3dCQUNuRCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztxQkFDbkMsQ0FBQyxDQUFDO29CQUN0QixNQUFNO2dCQUNWLEtBQUssR0FBRztvQkFDSix3QkFBd0IsQ0FBQyxJQUFJLENBQUM7d0JBQzFCLElBQUksRUFBRSxHQUFHO3FCQUNPLENBQUMsQ0FBQztvQkFDdEIsTUFBTTtZQUNkLENBQUM7WUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsYUFBYSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFFTCxDQUFDO1FBSUQsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxHQUFHLHdCQUF3QixDQUFDO0lBQzNFLENBQUM7SUFFRCxPQUFPLGtCQUFrQixDQUFDO0FBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IbUI7QUFDVTtBQUVFO0FBRXVFO0FBQ0U7QUFDSjtBQUtuQztBQUVVO0FBRUE7QUFFNUUsU0FBUyxNQUFNLENBQUMsRUFBTTtJQUdsQixJQUFJLHFCQUErQixDQUFDO0lBRXBDLElBQUksc0JBQWlDLENBQUM7SUFFdEMsSUFBSSx3QkFBa0MsQ0FBQztJQUV2QyxJQUFJLHNCQUFnQyxDQUFDO0lBRXJDLElBQUksV0FBVyxHQUFhLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxhQUFhO1FBQ25GLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRS9ELElBQUksSUFBSSxHQUFXLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLElBQUksUUFBUSxHQUFXLEdBQUcsQ0FBQztJQUUzQixJQUFJLFNBQXFCLENBQUM7SUFFMUIsSUFBSSxvQkFBZ0MsQ0FBQztJQUVyQyxJQUFJLHFCQUFpQyxDQUFDO0lBQ3RDLElBQUksd0JBQW9DLENBQUM7SUFDekMsSUFBSSw4QkFBMEMsQ0FBQztJQUMvQyxJQUFJLHlCQUFxQyxDQUFDO0lBRTFDLFNBQVMsVUFBVSxDQUFDLG9CQUE2QixJQUFJO1FBQ2pELEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkIsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLElBQUksS0FBSyxHQUdMLGtGQUE0QixDQUM1QixFQUFFLEVBQ0Ysc0JBQXNCLEVBQ3RCLElBQUksRUFDSixRQUFRLEVBQ1Isa0ZBQTJCLEVBQzNCLEVBQUUsU0FBUyxFQUFFLDhCQUE4QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3hELENBQUM7WUFDRixTQUFTLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ3BDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCxDQUFDO1FBRUQsZ0ZBQTBCLENBQ3RCLEVBQUUsRUFDRixTQUFTLEVBQ1QsOEVBQTJCLEVBQzNCLEVBQUUsZUFBZSxFQUFFLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFDbkQsb0JBQW9CLENBQ3ZCLENBQUM7SUFZTixDQUFDO0lBR0QsRUFBRSxDQUFDLE9BQU8sR0FBRyxHQUFTLEVBQUU7UUFDcEIscUJBQXFCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyw2RkFBdUIsQ0FBQyxDQUFDO1FBQzdELHdCQUF3QixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsNEZBQTBCLENBQUMsQ0FBQztRQUNuRSxzQkFBc0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLDBGQUF3QixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBUyxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1lBQ3ZDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixxQkFBcUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkYsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBR2pELHVFQUFRLENBQUMsNkZBQXVCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFRLEVBQUU7WUFDckQsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLDZGQUF1QixHQUFHLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQy9GLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDckIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO29CQUM5QixVQUFVLEVBQUUsQ0FBQztvQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLDZGQUF1QixHQUFHLFVBQVUsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDO3FCQUFNLENBQUM7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyw2RkFBdUIsR0FBRyx3Q0FBd0MsQ0FBQyxDQUFDO2dCQUN2RyxDQUFDO1lBQ0wsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBR0gsOEJBQThCLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSw4QkFBOEIsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELDhCQUE4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLHFCQUFxQixHQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQscUJBQXFCLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEQscUJBQXFCLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEQscUJBQXFCLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakQscUJBQXFCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0MscUJBQXFCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6Qyx5QkFBeUIsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkYseUJBQXlCLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEQseUJBQXlCLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUQseUJBQXlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkQseUJBQXlCLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1Qyw4QkFBc0MsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2pELFVBQVUsRUFBRSxDQUFDO1lBQ2IseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUVILHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QscUJBQXFCLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxvQkFBb0IsR0FBZSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELG9CQUFvQixDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pELG9CQUFvQixDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JELG9CQUFvQixDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELG9CQUFvQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsd0JBQXdCLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdFLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JELHdCQUF3QixDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3pELHdCQUF3QixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xELHdCQUF3QixDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5Qyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MscUJBQTZCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUN4QyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7SUFFRixFQUFFLENBQUMsYUFBYSxHQUFHLEdBQVUsRUFBRTtRQUMzQixFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWpELFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsRUFBRSxDQUFDLFVBQVUsR0FBRyxHQUFVLEVBQUU7UUFDeEIsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFDO1FBRWpDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdEIsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2I7b0JBQ0ksSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ2YsTUFBTTtZQUNkLENBQUM7WUFDRCxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxJQUFJLENBQUM7UUFDakIsQ0FBQzthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM5QixXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxJQUFJLFdBQVc7WUFBRSxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUVELElBQUksMkNBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMUixTQUFTLGNBQWMsQ0FBQyxJQUFjLEVBQUUsU0FBaUI7SUFDNUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUVBQXFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFHRCxPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FBQyxhQUF1QjtJQUV0RCxJQUFJLGNBQWMsR0FBVyxDQUFDLENBQUM7SUFFL0IsS0FBSyxJQUFJLE9BQU8sSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFJRCxPQUFPLGNBQWMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6RCxDQUFDOzs7QUN0Qk0sU0FBUyxxQkFBcUIsQ0FBQyxJQUFjO0lBQ2hELElBQUksZ0JBQWdCLEdBQVcsQ0FBQyxDQUFDO0lBQ2pDLElBQUksVUFBVSxHQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUMsQ0FBQzthQUFNLENBQUM7WUFHSixVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRTFDLGdCQUFnQixFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUVNLFNBQVMsd0JBQXdCLENBQUMsWUFBK0I7SUFDcEUsS0FBSyxJQUFJLE9BQU8sSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssR0FBRztZQUNwQixPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUc7WUFDcEIsT0FBTyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFTSxTQUFTLHNCQUFzQixDQUFDLFlBQStCLEVBQUUsYUFBcUI7SUFDekYsSUFBSSxRQUFRLEdBQVcsRUFBRSxDQUFDO0lBRTFCLEtBQUssSUFBSSxPQUFPLElBQUksWUFBWSxFQUFFLENBQUM7UUFFL0IsUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQy9CLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNKLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3RGLE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osUUFBUSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHO29CQUM3RSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRztvQkFDakYsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRixNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLFFBQVEsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRztvQkFDN0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRixNQUFNO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDOzs7QUMxRHdEO0FBQ3NEO0FBUS9HLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNsQiwrQkFBaUI7SUFDakIsMkJBQWE7QUFDakIsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCO0FBRU0sTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUM7QUFFakMsU0FBUyxZQUFZLENBQUMsRUFBTSxFQUNOLElBQWMsRUFDZCxJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsZ0JBQWtDLEVBQ2xDLHVCQUFnRDtJQUV6RSxNQUFNLFFBQVEsR0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sZUFBZSxHQUFvQixRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkUsTUFBTSxVQUFVLEdBQVcsZUFBZSxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDO0lBQ25FLE1BQU0sU0FBUyxHQUFXLGVBQWUsQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQztJQUVsRSxJQUFJLFNBQVMsR0FBZSxJQUFJLENBQUMsUUFBUSxDQUNyQyxJQUFJLEVBQ0osQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDaEMsQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQzdDLFFBQVEsRUFDUixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FDcEIsQ0FBQztJQUVGLElBQUksa0JBQWtCLEdBQWUsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBRTlGLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxrQkFBa0IsQ0FBQyxNQUFNO1FBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEVBQThFO1lBQ3hGLG9EQUFvRCxDQUFDLENBQUM7SUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0FBQ2xGLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxFQUFNLEVBQ04sU0FBcUIsRUFDckIsWUFBZ0MsRUFDaEMsbUJBQTRDLEVBQzVDLG9CQUFpQztJQUt4RCxNQUFNLGdCQUFnQixHQUFtQixvQkFBb0IsS0FBSyxTQUFTLENBQUMsQ0FBQztRQUN6RSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBSXZGLElBQUksbUJBQW1CLEtBQUssU0FBUyxJQUFJLG9CQUFvQixLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQzFFLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUM7SUFDdkUsQ0FBQztJQUdELFlBQVksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFbkUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQUVELFNBQVMsd0JBQXdCLENBQUMsVUFBa0IsRUFBRSxVQUFrQjtJQUNwRSxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFHLENBQUM7UUFDeEIsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUNULGdGQUFnRixHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztjQUNqRyw4REFBOEQsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsSUFBSSxnQkFBZ0IsR0FBNkIsRUFBRSxDQUFDO0lBQ3BELElBQUksa0JBQWtCLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUQsS0FBSyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQztBQUM1QixDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxFQUFNLEVBQUUsU0FBcUI7SUFDdEQsTUFBTSxvQkFBb0IsR0FBVyxDQUFDLENBQUM7SUFDdkMsTUFBTSxVQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sa0JBQWtCLEdBQTZCLHdCQUF3QixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3RixNQUFNLEdBQUcsR0FBNkIsRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUV4RCxJQUFJLGdCQUFnQixHQUFtQixFQUFFLENBQUM7SUFFMUMsS0FBSyxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUUsY0FBYyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEVBQUMsQ0FBQztRQUM5RSxNQUFNLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RCxNQUFNLFlBQVksR0FBVyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXRFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQixJQUFJLFlBQVksSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNwQixnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pELFNBQVM7UUFDYixDQUFDO1FBRUQsSUFBSSx5QkFBeUIsR0FBd0IscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVqRyxLQUFLLElBQUksd0JBQXdCLElBQUkseUJBQXlCLEVBQUUsQ0FBQztZQUM3RCxJQUFJLFdBQVcsR0FBaUIsd0JBQXdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUVuRixJQUFJLFdBQVcsS0FBSyxJQUFJLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7Z0JBQy9FLE1BQU07WUFDVixDQUFDO1lBSUQsSUFBSSxpQkFBaUIsR0FBVSxFQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDcEUsSUFBSSxxQkFBcUIsR0FBWSxLQUFLLENBQUM7WUFFM0MsS0FBSyxJQUFJLFlBQVksSUFBSSxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELGlCQUFpQixDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFJdEQsTUFBTSxlQUFlLEdBQ2pCLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDdkYsTUFBTSxRQUFRLEdBQVksR0FBRyxDQUFDLGFBQWEsQ0FDdkMsZUFBZSxFQUNmLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEVBQ3ZDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQzFDLENBQUM7Z0JBRUYsTUFBTSxVQUFVLEdBQVksR0FBRyxDQUFDLGVBQWUsQ0FDM0MsZUFBZSxFQUNmLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEVBQ3ZDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQzFDLENBQUM7Z0JBSUYsSUFBSSxRQUFRLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDMUIscUJBQXFCLEdBQUcsSUFBSSxDQUFDO29CQUU3QixJQUFJLG9CQUFvQixHQUFXLElBQUksTUFBTSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7b0JBR3JHLE1BQU0sUUFBUSxHQUFZLEdBQUcsQ0FBQyxhQUFhLENBQ3ZDLG9CQUFvQixFQUNwQixFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxFQUN2QyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUMxQyxDQUFDO29CQUVGLE1BQU0sVUFBVSxHQUFZLEdBQUcsQ0FBQyxlQUFlLENBQzNDLG9CQUFvQixFQUNwQixFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxFQUN2QyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUMxQyxDQUFDO29CQUlGLElBQUksUUFBUSxJQUFJLFVBQVUsRUFBRSxDQUFDO3dCQUN6QixnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3RCxDQUFDO3lCQUFNLENBQUM7d0JBQ0osZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0QsQ0FBQztvQkFFRCxNQUFNO2dCQUNWLENBQUM7WUFDTCxDQUFDO1lBR0QsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBRXpCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0ZBQWtGO29CQUM1RixzQkFBc0IsR0FBRyxjQUFjLEdBQUcsb0NBQW9DLENBQUM7WUFDdkYsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxnQkFBZ0IsQ0FBQztBQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQzFMc0Y7QUFFaEYsU0FBUyxNQUFNLENBQUMsRUFBTSxFQUFFLFNBQXFCLEVBQUUsZ0JBQWdDO0lBRWxGLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNWLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNkLEtBQUssSUFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxFQUFDLENBQUM7UUFDOUUsTUFBTSxhQUFhLEdBQWEsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sbUJBQW1CLEdBQWlCLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNFLElBQUkscUJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FBRXRDLElBQUksbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7YUFBTSxJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hFLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsS0FBSyxJQUFJLE9BQU8sSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekMsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEtBQUssR0FBRztvQkFDSixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEYsTUFBTTtnQkFDVixLQUFLLEdBQUc7b0JBQ0osRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixxQkFBcUIsRUFBRSxDQUFDO29CQUN4QixJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUNuRSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQ2xDLENBQUM7eUJBQU0sSUFBSSxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDeEUsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNsQyxDQUFDO29CQUNELE1BQU07WUFDZCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDYixDQUFDO0FBR00sU0FBUyxLQUFLLENBQUMsRUFBTSxFQUNOLFNBQXFCLEVBQ3JCLGdCQUFnQyxFQUNoQyxPQUFnQztJQUdsRCxJQUFJLFdBQW1CLENBQUM7SUFDeEIsSUFBSSxvQkFBZ0MsQ0FBQztJQUVyQyxJQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ25HLE9BQU8sQ0FBQyxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztRQUMxRixPQUFPO0lBQ1gsQ0FBQztTQUFNLENBQUM7UUFDSixXQUFXLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNWLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNkLEtBQUssSUFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxFQUFDLENBQUM7UUFDOUUsTUFBTSxhQUFhLEdBQWEsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sd0JBQXdCLEdBQWEsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEYsTUFBTSxtQkFBbUIsR0FBaUIsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0UsSUFBSSxxQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFFdEMsSUFBSSxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLDhEQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkUsRUFBRSxDQUFDLElBQUksQ0FBQyx3RUFBb0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7YUFBTSxJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssOERBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4RSxFQUFFLENBQUMsSUFBSSxDQUFDLHdFQUFvQixDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELElBQUksYUFBYSxHQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDcEQsSUFBSSxPQUFPLEdBQW9CLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxrQkFBa0IsR0FBb0Isd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9FLElBQUksRUFBVSxDQUFDO1lBQ2YsSUFBSSxFQUFVLENBQUM7WUFDZixJQUFJLFNBQWlCLENBQUM7WUFDdEIsSUFBSSxPQUFlLENBQUM7WUFDcEIsSUFBSSxPQUFlLENBQUM7WUFFcEIsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLGtGQUFrRjtvQkFDNUYsb0RBQW9ELENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzFELEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDaEIsRUFBRSxHQUFHLGtCQUFrQixDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDO2dCQUN6QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDO2dCQUN6QyxFQUFFLENBQUMsTUFBTSxDQUNMLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUNuQixPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FDdEIsQ0FBQztnQkFFRixhQUFhLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDdkMsYUFBYSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQztpQkFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDakUsRUFBRSxHQUFHLGtCQUFrQixDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEdBQUcsV0FBVyxHQUFDLEdBQUcsQ0FBQztnQkFDN0MsT0FBTyxHQUFHLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLFdBQVcsR0FBQyxHQUFHLENBQUM7Z0JBRzdDLEVBQUUsQ0FBQyxNQUFNLENBQ0wsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQ25CLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUN0QixDQUFDO2dCQUdGLGFBQWEsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNqRSxPQUFPLENBQUMsS0FBSyxDQUFDLG9FQUFvRSxDQUFDO2dCQUVuRixFQUFFLENBQUMsWUFBWSxDQUNYLE9BQU8sQ0FBQyxFQUFFLEVBQ1YsT0FBTyxDQUFDLEVBQUUsRUFDVixPQUFPLENBQUMsRUFBRSxFQUNWLE9BQU8sQ0FBQyxFQUFFLEVBQ1YsT0FBTyxDQUFDLENBQUMsRUFDVCxPQUFPLENBQUMsQ0FBQyxDQUNaLENBQUM7Z0JBRUYsYUFBYSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUM7aUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2pFLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2dCQUNsRCxFQUFFLEdBQUcsa0JBQWtCLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7Z0JBQ3pDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxlQUFlLENBQ2QsT0FBTyxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQ3BCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUNwQixPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFDbkIsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQ3RCLENBQUM7Z0JBRUYsYUFBYSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUM7aUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2pFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV0QixxQkFBcUIsRUFBRSxDQUFDO2dCQUN4QixJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssOERBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbkUsRUFBRSxDQUFDLElBQUksQ0FBQyx3RUFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO3FCQUFNLElBQUksbUJBQW1CLENBQUMscUJBQXFCLENBQUMsS0FBSyw4REFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4RSxFQUFFLENBQUMsSUFBSSxDQUFDLHdFQUFvQixDQUFDLENBQUM7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDRCxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuZG9tZm9udC9pZ25vcmVkfEQ6XFxSZXBvc1xcQU5VXFxERVNOMjAwOVxccmFuZG9tZm9udFxcbm9kZV9tb2R1bGVzXFwucG5wbVxcb3BlbnR5cGUuanNAMS4zLjRcXG5vZGVfbW9kdWxlc1xcb3BlbnR5cGUuanNcXGRpc3R8ZnMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3BhdGgtcHJlcHJvY2Vzc29yLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvbGFyZ2Uvc2tldGNoLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi91dGlscy90eXBlLWNvdW50ZXJzLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi91dGlscy9vdGYtcGF0aC11dGlscy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLWZvbnQudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1zdHJhdGVneS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgcDUgZnJvbSBcInA1XCI7XHJcbmltcG9ydCBvdGYgZnJvbSBcIm9wZW50eXBlLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9QcmVwcm9jZXNzKF9wNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSk6IG90Zi5QYXRoW10ge1xyXG4gICAgcmV0dXJuIHRleHRQYXRocztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyZWFrVG8ocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogb3RmLlBhdGhbXSB7XHJcbiAgICBsZXQgcmFuZG9tVW5pdDogbnVtYmVyO1xyXG5cclxuICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCAhKFwiY3JhemluZXNzXCIgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicGF0aC1wcmVwcm9jZXNzb3IudHMgfCBmcmVha1RvIHJlY2VpdmVkIG1hbGZvcm1lZCBvcHRpb25zIHBhcmFtZXRlci5cIik7XHJcbiAgICAgICAgcmFuZG9tVW5pdCA9IDM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJhbmRvbVVuaXQgPSBvcHRpb25zW1wiY3JhemluZXNzXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW10gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRleHRQYXRocykpO1xyXG5cclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICAvLyBnZXQgb3RmLlBhdGggb2JqZWN0IGZvciBjdXJyZW50IGNoYXJhY3RlclxyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgYWNjdW11bGF0ZSBhbGwgdGhlIG5ldyByYW5kb21pemVkIHBhdGggY29tbWFuZHMgdGhhdCB3ZSB3YW50XHJcbiAgICAgICAgbGV0IG5ld0NoYXJhY3RlclBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUG9pbnQ6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgICAgIC8vIHByb2Nlc3MgYWxsIHBhdGggY29tbWFuZHMgZm9yIHRoaXMgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgICAgICBmb3IgKGxldCBjaGFyUGF0aENvbW1hbmRJbmRleCA9IDA7IGNoYXJQYXRoQ29tbWFuZEluZGV4IDwgY2hhcmFjdGVyUGF0aC5jb21tYW5kcy5sZW5ndGg7IGNoYXJQYXRoQ29tbWFuZEluZGV4Kyspe1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZCA9IGNoYXJhY3RlclBhdGguY29tbWFuZHNbY2hhclBhdGhDb21tYW5kSW5kZXhdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGVycEludGVydmFsczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHA1LnJhbmRvbSgwLCByYW5kb21Vbml0IC0gMSk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXJwSW50ZXJ2YWxzLnB1c2gocDUucmFuZG9tKDAsIDAuOSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXJwSW50ZXJ2YWxzLnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhIC0gYik7IC8vIHNvcnQgaW4gYXNjZW5kaW5nIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGVycEludGVydmFsIG9mIGxlcnBJbnRlcnZhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBlZFg6IG51bWJlciA9IHA1LmxlcnAocHJldmlvdXNQb2ludC54LCBjb21tYW5kLngsIGxlcnBJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXJwZWRZOiBudW1iZXIgPSBwNS5sZXJwKHByZXZpb3VzUG9pbnQueSwgY29tbWFuZC55LCBsZXJwSW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byB1cGRhdGUgdGhlIG9yaWdpbmFsIHRleHRQYXRocyBhcyB3ZSBhcmUgYWRkaW5nIGNvbW1hbmRzIHRoYXQgbmVlZCB0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSByZWZsZWN0ZWQgaW4gdGhlIG9yaWdpbmFsIHRleHRQYXRocyAoY2F1c2Ugd2UgbWlnaHQgbmVlZCB0byB1c2UgdGhlIG9yaWdpbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHRQYXRocyBvdXRzaWRlIG9mIGhlcmUpIC0tIHRoaXMgd29ya3MgZmluZSBjYXVzZSBhcnJheXMgYXJlIHBhc3NlZCBieSByZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XS5jb21tYW5kcy5zcGxpY2UoY2hhclBhdGhDb21tYW5kSW5kZXgsIDAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVycGVkWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxlcnBlZFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZXJwZWRYICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LzEuNSwgcmFuZG9tVW5pdC8xLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbGVycGVkWSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdC8xLjUsIHJhbmRvbVVuaXQvMS41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhcyB3ZSBoYXZlIHVwZGF0ZWQgdGhlIHRleHRQYXRocyBieSByZWZlcmVuY2Ugd2UgbmVlZCB0byBhZGp1c3QgdGhlIGNoYXJQYXRoQ29tbWFuZEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYmUgYWZ0ZXIgdGhlIG9yaWdpbmFsIFwiTFwiIGNvbW1hbmRcclxuICAgICAgICAgICAgICAgICAgICBjaGFyUGF0aENvbW1hbmRJbmRleCArPSBsZXJwSW50ZXJ2YWxzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxOiBjb21tYW5kLngxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE6IGNvbW1hbmQueTEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MjogY29tbWFuZC54MiArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyOiBjb21tYW5kLnkyICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJRXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxOiBjb21tYW5kLngxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE6IGNvbW1hbmQueTEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJaXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gXCJaXCIpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IGNvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IGNvbW1hbmQueTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFmdGVyIHByb2Nlc3NpbmcgcGF0aHMgYW5kIGFkZGluZyBzb21lIHJhbmRvbWl6YXRpb24gbGV0J3MgYXNzaWduIGFsbCB0aGVcclxuICAgICAgICAvLyBuZXcgcGF0aCBjb21tYW5kcyB0byB0aGUgb3JpZ2luYWwgb3RmLlBhdGhbXSBvYmplY3QgcGFyYW1ldGVyXHJcbiAgICAgICAgcHJvY2Vzc2VkVGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XS5jb21tYW5kcyA9IG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvY2Vzc2VkVGV4dFBhdGhzO1xyXG59IiwiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5pbXBvcnQgJ0BzcmMvc3R5bGVzL3NrZXRjaC5jc3MnO1xyXG5cclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVSZWdQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtUmVndWxhci50dGYnO1xyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZUl0YWxpY1BhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1JdGFsaWMudHRmJztcclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVCb2xkUGF0aCBmcm9tICdAc3JjL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgUDVGb250UmVuZGVyZXIgZnJvbSAnQHNyYy9yZW5kZXJlcnMvcDUvcmVuZGVyLWZvbnQnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URkZvbnRSZW5kZXJlciBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLWZvbnQnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URkZvbnRSZW5kZXJTdHJhdGVneSBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLXN0cmF0ZWd5JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBPVEZQYXRoUHJlcHJvY2Vzc29yIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9wYXRoLXByZXByb2Nlc3Nvcic7XHJcblxyXG5mdW5jdGlvbiBza2V0Y2gocDU6IHA1KTogdm9pZCB7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZVJlZ09URiA6IG90Zi5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZUJvbGRQNSA6IHA1LkZvbnQ7XHJcblxyXG4gICAgbGV0IHNhbXBsZVRleHRzOiBzdHJpbmdbXSA9IFtcIkFyY2hhZW9wdGVyeXhcIiwgXCJUaGUg4oCcQmlnIEZpdmXigJ1cIiwgXCJFbmQtT3Jkb3ZpY2lhblwiLCBcIkxhdGUgRGV2b25pYW5cIiwgXCJFbmQtUGVybWlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVuZC1Ucmlhc3NpY1wiLCBcIkVuZC1DcmV0YWNlb3VzXCJdO1xyXG5cclxuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSBzYW1wbGVUZXh0c1tNYXRoLnJvdW5kKHA1LnJhbmRvbSgwLCBzYW1wbGVUZXh0cy5sZW5ndGggLSAxKSldO1xyXG4gICAgbGV0IHR5cGVTaXplOiBudW1iZXIgPSAxNDg7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHVucHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG5cclxuICAgIGxldCBlcm9zaW9uU3RyZW5ndGhTbGlkZXI6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlcjogcDUuRWxlbWVudDtcclxuICAgIGxldCBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHJhd0ZvbnQoaW1tZWRpYXRlbHlSZWRyYXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgcDUuYmFja2dyb3VuZCgyNTUpO1xyXG5cclxuICAgICAgICBpZiAoaW1tZWRpYXRlbHlSZWRyYXcpIHsgLy8gdGhpcyBjb25kaXRpb24gaXMgZm9yIHdoZW4gdGhlIHRleHQgaXMgdXBkYXRlZCAoZm9yIGRlYnVnZ2luZylcclxuICAgICAgICAgICAgbGV0IHBhdGhzOiB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRQYXRoOiBvdGYuUGF0aFtdXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRUZXh0UGF0aDogb3RmLlBhdGhbXVxyXG4gICAgICAgICAgICB9ID0gT1RGRm9udFJlbmRlcmVyLmdldFRleHRQYXRocyhcclxuICAgICAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ09URixcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAgICAgICAgIE9URlBhdGhQcmVwcm9jZXNzb3IuZnJlYWtUbyxcclxuICAgICAgICAgICAgICAgIHsgY3JhemluZXNzOiBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIudmFsdWUoKSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRleHRQYXRocyA9IHBhdGhzLnByb2Nlc3NlZFRleHRQYXRoO1xyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocyA9IHBhdGhzLm9yaWdpbmFsVGV4dFBhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPVEZGb250UmVuZGVyZXIucmVuZGVyRm9udChcclxuICAgICAgICAgICAgcDUsXHJcbiAgICAgICAgICAgIHRleHRQYXRocyxcclxuICAgICAgICAgICAgT1RGRm9udFJlbmRlclN0cmF0ZWd5LmVyb2RlLFxyXG4gICAgICAgICAgICB7IGVyb3Npb25TdHJlbmd0aDogLWVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpIH0sXHJcbiAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gUDVGb250UmVuZGVyZXIucmVuZGVyKFxyXG4gICAgICAgIC8vICAgICBwNSxcclxuICAgICAgICAvLyAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1LFxyXG4gICAgICAgIC8vICAgICB0ZXh0LFxyXG4gICAgICAgIC8vICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAvLyAgICAgMC4xMyxcclxuICAgICAgICAvLyAgICAgUDVGb250UmVuZGVyZXIucmVuZGVyU3RyYXRlZ3lCZW93dWxmXHJcbiAgICAgICAgLy8gKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHA1IGZvbnQgaW5pdGlhbGl6YXRpb25cclxuICAgIHA1LnByZWxvYWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgpO1xyXG4gICAgICAgIGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA9IHA1LmxvYWRGb250KGxpYnJlQmFza2VydmlsbGVJdGFsaWNQYXRoKTtcclxuICAgICAgICBsaWJyZUJhc2tlcnZpbGxlQm9sZFA1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZUJvbGRQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5zZXR1cCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFmdGVycHJpbnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKHBhcnNlRmxvYXQoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSkgKyAyKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHA1LmNyZWF0ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gb3BlbnR5cGUuanMgZm9udCBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIG90Zi5sb2FkKGxpYnJlQmFza2VydmlsbGVSZWdQYXRoLCAoZXJyb3IsIGZvbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBpZiAoZm9udCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGID0gZm9udDtcclxuICAgICAgICAgICAgICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgbG9hZGVkLlwiKTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgY291bGQgbm90IGJlIGxvYWRlZDogaXQgd2FzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0dGluZyB1cCBzbGlkZXJzIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDMuNTYsIDAuMDEpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgMTApO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NMYWJlbDogcDUuRWxlbWVudCA9IHA1LmNyZWF0ZVAoXCJjcmF6eVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXdlaWdodDogYm9sZFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJ0b3A6IC0zcHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dCA9IHA1LmNyZWF0ZVAoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwidG9wOiAtM3B4XCIpO1xyXG4gICAgICAgIChmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgYXMgYW55KS5jaGFuZ2VkKCgpID0+IHtcclxuICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDQuNDQsIDAuMDEpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgNTApO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGVyb3Npb25TdHJlbmd0aExhYmVsOiBwNS5FbGVtZW50ID0gcDUuY3JlYXRlUChcImVyb2RlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcInRvcDogMzdweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQgPSBwNS5jcmVhdGVQKFN0cmluZyhlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJ0b3A6IDM3cHhcIik7XHJcbiAgICAgICAgKGVyb3Npb25TdHJlbmd0aFNsaWRlciBhcyBhbnkpLmNoYW5nZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHA1LndpbmRvd1Jlc2l6ZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmVkcmF3Rm9udChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUua2V5UHJlc3NlZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5lZWRzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChwNS5rZXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocDUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gcDUua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCB0ZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBuZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZWVkc1VwZGF0ZSkgcmVkcmF3Rm9udCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgcDUoc2tldGNoKTtcclxuIiwiaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlckNvdW50ZXIoZm9udDogb3RmLkZvbnQsIGNoYXJhY3Rlcjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmIChjaGFyYWN0ZXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0eXBlLWNvdW50ZXJzLnRzIHwgUGF0aENvdW50ZXJDb3VudGVyIGFjY2VwdGVkIGEgY2hhcmFjdGVyIG9mIHNpemUgXCIgKyBjaGFyYWN0ZXIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb250IHNpemUgYW5kIHggYW5kIHkgY29vcmRzIHVzZWQgaGVyZSBhcmUgZHVtbWllc1xyXG4gICAgcmV0dXJuIHBhdGhDb3VudGVyQ291bnRlcihmb250LmdldFBhdGgoY2hhcmFjdGVyWzBdLCAwLCAwLCAyMCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0aENvdW50ZXJDb3VudGVyKGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoKTogbnVtYmVyIHtcclxuXHJcbiAgICBsZXQgY291bnRlckNvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzKSB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJaXCIpIHtcclxuICAgICAgICAgICAgY291bnRlckNvdW50ZXIgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgb3RmLlBhdGggU1ZHIGRyYXdpbmcgY29tbWFuZHMgYXJlIHN0cnVjdHVyZWQgd2l0aCB0aGUgYmFzZSBsZXR0ZXJmb3JtIHNoYXBlXHJcbiAgICAvLyBmb2xsb3dlZCBieSBjb3VudGVyc1xyXG4gICAgcmV0dXJuIGNvdW50ZXJDb3VudGVyID09PSAwID8gMCA6IGNvdW50ZXJDb3VudGVyIC0gMTtcclxufVxyXG5cclxuIiwiaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFNoYXBlc0Zyb21QYXRoKHBhdGg6IG90Zi5QYXRoKSA6IG90Zi5QYXRoQ29tbWFuZFtdW10ge1xyXG4gICAgbGV0IGN1cnJTaGFwZUNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgICBsZXQgY3VyclNoYXBlczogb3RmLlBhdGhDb21tYW5kW11bXSA9IFtbXV07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGguY29tbWFuZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb21tYW5kID0gcGF0aC5jb21tYW5kc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSAhPT0gXCJaXCIpIHsgLy8gaWYgd2UgYXJlbid0IGF0IGEgY2xvc2Ugc2hhcGUgY29tbWFuZFxyXG4gICAgICAgICAgICBjdXJyU2hhcGVzW2N1cnJTaGFwZUNvdW50ZXJdLnB1c2goY29tbWFuZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmUgYXQgYSBjbG9zZSBzaGFwZSBjb21tYW5kXHJcbiAgICAgICAgICAgIC8vIHB1c2ggXCJaXCJcclxuICAgICAgICAgICAgY3VyclNoYXBlc1tjdXJyU2hhcGVDb3VudGVyXS5wdXNoKGNvbW1hbmQpXHJcbiAgICAgICAgICAgIC8vIGluY3JlbWVudCB0aGUgY3VyclNoYXBlQ291bnRlclxyXG4gICAgICAgICAgICBjdXJyU2hhcGVDb3VudGVyKys7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZW4ndCBhdCB0aGUgbGFzdCBcIlpcIiB0aGVuIGtlZXAgZXhwYW5kaW5nIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmIChpICE9PSBwYXRoLmNvbW1hbmRzLmxlbmd0aCAtIDEpIGN1cnJTaGFwZXMucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyU2hhcGVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RTdGFydFBvaW50SW5QYXRoKHBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10pIDogKFBvaW50IHwgbnVsbCkge1xyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBwYXRoQ29tbWFuZHMpIHtcclxuICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIkNcIiB8fCAgLy8gY3ViaWMgYmV6aWVyXHJcbiAgICAgICAgICAgIGNvbW1hbmQudHlwZSA9PT0gXCJMXCIgfHwgIC8vIGxpbmUgdG9cclxuICAgICAgICAgICAgY29tbWFuZC50eXBlID09PSBcIlFcIikgeyAgLy8gcXVhZHJhdGljIGJlemllclxyXG4gICAgICAgICAgICByZXR1cm4geyB4OiBjb21tYW5kLngsIHk6IGNvbW1hbmQueSB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDb21tYW5kc1RvUGF0aERhdGEocGF0aENvbW1hbmRzOiBvdGYuUGF0aENvbW1hbmRbXSwgZGVjaW1hbFBsYWNlczogbnVtYmVyKSA6IHN0cmluZyB7XHJcbiAgICBsZXQgcGF0aERhdGE6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgY29tbWFuZCBvZiBwYXRoQ29tbWFuZHMpIHtcclxuICAgICAgICAvLyBcIlpcIiBpcyBhcHBlbmRlZCBhdXRvbWF0aWNhbGx5IGhlcmVcclxuICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLnR5cGUgKyBcIiBcIjtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLngxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngyLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTIudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlFcIjpcclxuICAgICAgICAgICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQueDEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aERhdGE7XHJcbn0iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuaW1wb3J0IHtwYXRoQ291bnRlckNvdW50ZXJ9IGZyb20gXCIuL3V0aWxzL3R5cGUtY291bnRlcnNcIjtcclxuaW1wb3J0IHtleHRyYWN0U2hhcGVzRnJvbVBhdGgsIGdldEZpcnN0U3RhcnRQb2ludEluUGF0aCwgcGF0aENvbW1hbmRzVG9QYXRoRGF0YX0gZnJvbSBcIi4vdXRpbHMvb3RmLXBhdGgtdXRpbHNcIjtcclxuXHJcbnR5cGUgRm9udFJlbmRlclN0cmF0ZWd5ID0gKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IHZvaWQ7XHJcbnR5cGUgRm9udFByZXByb2Nlc3NvciA9IChwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSwgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pID0+IG90Zi5QYXRoW107XHJcblxyXG5leHBvcnQgZW51bSBGaWxsU3RhdHVzIHtcclxuICAgIEZJTExFRCA9IFwiZmlsbGVkXCIsXHJcbiAgICBPUEVOID0gXCJvcGVuXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRleHRGb3JlZ3JvdW5kQ29sb3VyID0gMDtcclxuZXhwb3J0IGNvbnN0IHRleHRCYWNrZ3JvdW5kQ29sb3VyID0gMjU1O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHRQYXRocyhwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogb3RmLkZvbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVTaXplOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFByZXByb2Nlc3NvcjogRm9udFByZXByb2Nlc3NvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UHJlcHJvY2Vzc29yT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOlxyXG4gICAgeyBvcmlnaW5hbFRleHRQYXRoOiBvdGYuUGF0aFtdLCBwcm9jZXNzZWRUZXh0UGF0aDogb3RmLlBhdGhbXSB9IHtcclxuICAgIGNvbnN0IHRleHRQYXRoOiBvdGYuUGF0aCA9IGZvbnQuZ2V0UGF0aCh0ZXh0LCAwLCAwLCB0eXBlU2l6ZSwgeyBrZXJuaW5nOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgdGV4dEJvdW5kaW5nQm94OiBvdGYuQm91bmRpbmdCb3ggPSB0ZXh0UGF0aC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgY29uc3QgdGV4dEhlaWdodDogbnVtYmVyID0gdGV4dEJvdW5kaW5nQm94LnkyIC0gdGV4dEJvdW5kaW5nQm94LnkxO1xyXG4gICAgY29uc3QgdGV4dFdpZHRoOiBudW1iZXIgPSB0ZXh0Qm91bmRpbmdCb3gueDIgLSB0ZXh0Qm91bmRpbmdCb3gueDE7XHJcblxyXG4gICAgbGV0IHRleHRQYXRoczogb3RmLlBhdGhbXSA9IGZvbnQuZ2V0UGF0aHMoXHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICAocDUud2luZG93V2lkdGggLSB0ZXh0V2lkdGgpIC8gMixcclxuICAgICAgICAocDUud2luZG93SGVpZ2h0IC0gdGV4dEhlaWdodCArIHR5cGVTaXplKSAvIDIsXHJcbiAgICAgICAgdHlwZVNpemUsXHJcbiAgICAgICAgeyBrZXJuaW5nOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXSA9IGZvbnRQcmVwcm9jZXNzb3IocDUsIHRleHRQYXRocywgZm9udFByZXByb2Nlc3Nvck9wdGlvbnMpO1xyXG5cclxuICAgIGlmICh0ZXh0UGF0aHMubGVuZ3RoICE9PSBwcm9jZXNzZWRUZXh0UGF0aHMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItZm9udC50cyB8IHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZyBpbiBvdGZcXHJlbmRlci1mb250LnRzI2dldFRleHRQYXRoc1wiICtcclxuICAgICAgICAgICAgXCIgcmVnYXJkaW5nIHRoZSBsZW5ndGhzIG9mIHRoZSBvdXRwdXR0ZWQgb3RmLlBhdGhbXVwiKTtcclxuXHJcbiAgICByZXR1cm4geyBvcmlnaW5hbFRleHRQYXRoOiB0ZXh0UGF0aHMsIHByb2Nlc3NlZFRleHRQYXRoOiBwcm9jZXNzZWRUZXh0UGF0aHMgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvbnQocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRSZW5kZXJlcjogRm9udFJlbmRlclN0cmF0ZWd5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UmVuZGVyZXJPcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHM/OiBvdGYuUGF0aFtdKSA6IG90Zi5QYXRoW10ge1xyXG5cclxuICAgIC8vIHNvcnRpbmcgb3V0IHJlbmRlcmluZyBob2xlcyBpbiBmb250c1xyXG4gICAgLy8gdW5wcm9jZXNzZWRUZXh0UGF0aHMgY2FuIGJlIHVzZWQgaGVyZSBpZiB0aGUgcHJvY2Vzc2luZyB5b3UgZG8gb24geW91ciB0ZXh0IGlzIHNvIGV4dHJlbWUgdGhhdCBpdCBkZXN0cm95c1xyXG4gICAgLy8gbXkgdmVyeSBmaWNrbGUgYWxnb3JpdGhtIGZvciBkZXRlcm1pbmluZyB0aGUgbnVtYmVyIGFuZCBvcmRlciBvZiBob2xlcyBpbiBhIGxldHRlcmZvcm0gOilcclxuICAgIGNvbnN0IHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdID0gdW5wcm9jZXNzZWRUZXh0UGF0aHMgPT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNSwgdGV4dFBhdGhzKSA6IGdldFRleHRGaWxsU3RhdHVzZXMocDUsIHVucHJvY2Vzc2VkVGV4dFBhdGhzKTtcclxuXHJcbiAgICAvLyB1bnByb2Nlc3NlZFRleHRQYXRocyB0ZW5kIHRvIGJlIHVzZWZ1bCBpbiBGb250UmVuZGVyU3RyYXRlZ3kgYXMgdGhleSBwcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgZ2VvbWV0cnlcclxuICAgIC8vIGFuZCBjdXJ2ZXMgb2YgdGhlIGZvbnQgYmVmb3JlIHRoZXkgYXJlIHByb2Nlc3NlZCBjcmF6aWx5XHJcbiAgICBpZiAoZm9udFJlbmRlcmVyT3B0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHVucHJvY2Vzc2VkVGV4dFBhdGhzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb250UmVuZGVyZXJPcHRpb25zW1widW5wcm9jZXNzZWRUZXh0UGF0aHNcIl0gPSB1bnByb2Nlc3NlZFRleHRQYXRocztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3R1YWxseSByZW5kZXJpbmcgZm9udFxyXG4gICAgZm9udFJlbmRlcmVyKHA1LCB0ZXh0UGF0aHMsIHRleHRGaWxsU3RhdHVzZXMsIGZvbnRSZW5kZXJlck9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiB0ZXh0UGF0aHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2FtcGxlT2Zmc2V0R3JpZChzaWRlTGVuZ3RoOiBudW1iZXIsIHNhbXBsZVVuaXQ6IG51bWJlcik6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSB7XHJcbiAgICBpZiAoc2lkZUxlbmd0aCAlIDIgPT09IDAgKSB7XHJcbiAgICAgICAgc2lkZUxlbmd0aCArPSAxO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgIFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkIHJlY2VpdmVkIGFuIGV2ZW4gc2lkZSBsZW5ndGggb2YgXCIgKyAoc2lkZUxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICsgXCIuIFRoZSBhY3R1YWwgc2lkZSBsZW5ndGggb2YgdGhlIGdyaWQgZ2VuZXJhdGVkIHdpbGwgYmUgb2RkOiBcIiArIHNpZGVMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzYW1wbGVPZmZzZXRHcmlkOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdW10gPSBbXTtcclxuICAgIGxldCBtYXhTYW1wbGVVbml0U2NhbGU6IG51bWJlciA9IE1hdGguZmxvb3Ioc2lkZUxlbmd0aCAvIDIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBtYXhTYW1wbGVVbml0U2NhbGU7IGkgPj0gLW1heFNhbXBsZVVuaXRTY2FsZTsgaS0tKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IC1tYXhTYW1wbGVVbml0U2NhbGU7IGogPD0gbWF4U2FtcGxlVW5pdFNjYWxlOyBqKyspIHtcclxuICAgICAgICAgICAgc2FtcGxlT2Zmc2V0R3JpZC5wdXNoKFtqICogc2FtcGxlVW5pdCwgLWkgKiBzYW1wbGVVbml0XSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbXBsZU9mZnNldEdyaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRleHRGaWxsU3RhdHVzZXMocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10pOiBGaWxsU3RhdHVzW11bXSB7XHJcbiAgICBjb25zdCB0b1BhdGhEYXRhUmVzb2x1dGlvbjogbnVtYmVyID0gMztcclxuICAgIGNvbnN0IHNhbXBsZVVuaXQ6IG51bWJlciA9IDI7XHJcbiAgICBjb25zdCBzYW1wbGVPZmZzZXRLZXJuZWw6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSA9IGdlbmVyYXRlU2FtcGxlT2Zmc2V0R3JpZCg1LCBzYW1wbGVVbml0KTtcclxuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gcDUuZHJhd2luZ0NvbnRleHQ7XHJcblxyXG4gICAgbGV0IHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgY2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHRleHRQYXRocy5sZW5ndGg7IGNoYXJhY3RlckluZGV4Kyspe1xyXG4gICAgICAgIGNvbnN0IGVudGlyZUxldHRlcmZvcm1QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCBjb3VudGVyQ291bnQ6IG51bWJlciA9IHBhdGhDb3VudGVyQ291bnRlcihlbnRpcmVMZXR0ZXJmb3JtUGF0aCk7XHJcblxyXG4gICAgICAgIHRleHRGaWxsU3RhdHVzZXMucHVzaChbXSk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuRklMTEVEKTtcclxuICAgICAgICAgICAgY29udGludWU7IC8vIHdpbGwgaW5jcmVtZW50IGNoYXJhY3RlckluZGV4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlczogb3RmLlBhdGhDb21tYW5kW11bXSA9IGV4dHJhY3RTaGFwZXNGcm9tUGF0aChlbnRpcmVMZXR0ZXJmb3JtUGF0aCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGxldHRlcmZvcm1Db21wb25lbnRTaGFwZSBvZiBsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBzYW1wbGVQb2ludDogUG9pbnQgfCBudWxsID0gZ2V0Rmlyc3RTdGFydFBvaW50SW5QYXRoKGxldHRlcmZvcm1Db21wb25lbnRTaGFwZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2FtcGxlUG9pbnQgPT09IG51bGwgfHwgc2FtcGxlUG9pbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1mb250LW90Zi50cyB8IHNhbXBsZVBvaW50LnggYW5kIHNhbXBsZVBvaW50Lnkgd2FzIG51bGxcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbm93IHdlIG5lZWQgdG8gc2FtcGxlIGFyb3VuZCB0aGUgKHNhbXBsZVgsIHNhbXBsZVkpIGNvb3JkaW5hdGUgd2UgaGF2ZSBhbmQgdGVzdCBhZ2FpbnN0XHJcbiAgICAgICAgICAgIC8vIGN0eC5pc1BvaW50SW5QYXRoIHdpdGggdGhlIHJlbGV2YW50IGVudGlyZUxldHRlcmZvcm1QYXRoIGFzIHRoZSBwYXRoXHJcbiAgICAgICAgICAgIGxldCBzYW1wbGVQb2ludE9mZnNldDogUG9pbnQgPSB7eDogc2FtcGxlUG9pbnQueCwgeTogc2FtcGxlUG9pbnQueX07XHJcbiAgICAgICAgICAgIGxldCB3YXNGaWxsU3RhdHVzQXNzaWduZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHNhbXBsZU9mZnNldCBvZiBzYW1wbGVPZmZzZXRLZXJuZWwpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVBvaW50T2Zmc2V0LnggPSBzYW1wbGVQb2ludC54ICsgc2FtcGxlT2Zmc2V0WzBdO1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlUG9pbnRPZmZzZXQueSA9IHNhbXBsZVBvaW50LnkgKyBzYW1wbGVPZmZzZXRbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2VhcmNoaW5nIHRvIHNlZSBpZiB3ZSdyZSBpbnNpZGUgdGhlIGN1cnJlbnQgc2hhcGVcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBwNS5waXhlbERlbnNpdHkoKSBwYXJ0IGlzIENSVUNJQUwhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoMkQ6IFBhdGgyRCA9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBhdGgyRChwYXRoQ29tbWFuZHNUb1BhdGhEYXRhKGxldHRlcmZvcm1Db21wb25lbnRTaGFwZSwgdG9QYXRoRGF0YVJlc29sdXRpb24pKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5QYXRoOiBib29sZWFuID0gY3R4LmlzUG9pbnRJblBhdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5TdHJva2U6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluU3Ryb2tlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC55LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzdG9wIHNlYXJjaGluZyBpZiB3ZSd2ZSBmb3VuZCBhIHBvaW50IHdpdGhpbiB0aGUgcGF0aCBhbmQgbm90IG9uIHRoZSBzdHJva2UgYXMgdGhpcyB3b24ndFxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyB1cCBpbiBmdXR1cmUgaXNQb2ludEluUGF0aCBjYWxjdWxhdGlvbnMgd2l0aCB0aGUgZW50aXJlIGxldHRlcmZvcm1cclxuICAgICAgICAgICAgICAgIGlmIChpc0luUGF0aCAmJiAhaXNJblN0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdhc0ZpbGxTdGF0dXNBc3NpZ25lZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJTaGFwZVBhdGgyRDogUGF0aDJEID0gbmV3IFBhdGgyRChlbnRpcmVMZXR0ZXJmb3JtUGF0aC50b1BhdGhEYXRhKHRvUGF0aERhdGFSZXNvbHV0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gc2FtcGxlIHRoaXMgcG9pbnQgaW4gdGhlIHRleHRQYXRoIHVzaW5nIGN0eC5pc1BvaW50SW5QYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJblBhdGg6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluUGF0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyU2hhcGVQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC55LFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5TdHJva2U6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluU3Ryb2tlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJTaGFwZVBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UncmUgb25seSBOT1QgaW4gYSBjb3VudGVyL3NvbWV0aGluZyB0aGF0IHNob3VsZG4ndCBiZSBmaWxsZWQgd2hlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzSW5QYXRoID09PSBGQUxTRSAmJiBpc0luU3Ryb2tlID09PSBGQUxTRTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblBhdGggfHwgaXNJblN0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuRklMTEVEKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuT1BFTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETyBuZWVkIHRvIGRvIGVycm9yIGhhbmRsaW5nIGZvciB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBmYWxsIHRocm91Z2ggaGVyZSB3aXRob3V0IGEgc3RhdHVzXHJcbiAgICAgICAgICAgIGlmICghd2FzRmlsbFN0YXR1c0Fzc2lnbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XS5wdXNoKEZpbGxTdGF0dXMuRklMTEVEKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItZm9udC1vdGYudHMgfCBnZXRUZXh0RmlsbFN0YXR1c2VzIGNvdWxkIG5vdCBmaW5kIGEgc3VpdGFibGUgc2FtcGxlIHBvaW50IFwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIihhdCBjaGFyYWN0ZXIgaW5kZXggXCIgKyBjaGFyYWN0ZXJJbmRleCArIFwiKSBmb3IgY2FsY3VsYXRpbmcgdGV4dCBmaWxsIHN0YXR1c1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXh0RmlsbFN0YXR1c2VzO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuaW1wb3J0IHsgRmlsbFN0YXR1cywgdGV4dEJhY2tncm91bmRDb2xvdXIsIHRleHRGb3JlZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vcmVuZGVyLWZvbnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsZWQocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdKSB7XHJcblxyXG4gICAgcDUucHVzaCgpO1xyXG4gICAgcDUubm9TdHJva2UoKTtcclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRmlsbFN0YXR1czogRmlsbFN0YXR1c1tdID0gdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgbGV0IHRleHRGaWxsU3RhdHVzQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY2hhcmFjdGVyUGF0aC5jb21tYW5kcykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5iZWdpblNoYXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcDUudmVydGV4KGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUudmVydGV4KGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuYmV6aWVyVmVydGV4KGNvbW1hbmQueDEsIGNvbW1hbmQueTEsIGNvbW1hbmQueDIsIGNvbW1hbmQueTIsIGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJRXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUucXVhZHJhdGljVmVydGV4KGNvbW1hbmQueDEsIGNvbW1hbmQueTEsIGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJaXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuRklMTEVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEZvcmVncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUuZmlsbCh0ZXh0QmFja2dyb3VuZENvbG91cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcDUucG9wKCk7XHJcbn1cclxuXHJcbi8vIG9wdGlvbnMgbG9va3MgbGlrZVxyXG5leHBvcnQgZnVuY3Rpb24gZXJvZGUocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG5cclxuICAgIC8vIG51ZGdlIGZhY3RvciBvZiA3LTguMyBpcyBpZGVhbCBmb3IgYSBsZXR0ZXJmb3JtIHRoYXQgaXMgYWxtb3N0IG5vbi1leGlzdGVudFxyXG4gICAgbGV0IG51ZGdlRmFjdG9yOiBudW1iZXI7IC8vLTcuNjsvLy04LjM7XHJcbiAgICBsZXQgdW5wcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW107XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCAhKFwiZXJvc2lvblN0cmVuZ3RoXCIgaW4gb3B0aW9ucykgfHwgIShcInVucHJvY2Vzc2VkVGV4dFBhdGhzXCIgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgZnJlYWtUb0Vyb2RlZCByZWNlaXZlZCBtYWxmb3JtZWQgb3B0aW9ucyBwYXJhbWV0ZXIuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbnVkZ2VGYWN0b3IgPSBvcHRpb25zW1wiZXJvc2lvblN0cmVuZ3RoXCJdO1xyXG4gICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzID0gb3B0aW9uc1tcInVucHJvY2Vzc2VkVGV4dFBhdGhzXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LnB1c2goKTtcclxuICAgIHA1Lm5vU3Ryb2tlKCk7XHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkQ2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB1bnByb2Nlc3NlZFRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRmlsbFN0YXR1czogRmlsbFN0YXR1c1tdID0gdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgbGV0IHRleHRGaWxsU3RhdHVzQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2aW91c1BvaW50OiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJhY3RlclBhdGguY29tbWFuZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZDogb3RmLlBhdGhDb21tYW5kID0gY2hhcmFjdGVyUGF0aC5jb21tYW5kc1tpXTtcclxuICAgICAgICAgICAgbGV0IHVucHJvY2Vzc2VkQ29tbWFuZDogb3RmLlBhdGhDb21tYW5kID0gdW5wcm9jZXNzZWRDaGFyYWN0ZXJQYXRoLmNvbW1hbmRzW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGR4OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBkeTogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgbWFnbml0dWRlOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRZOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlICE9PSB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZyBpbiBvdGZcXHJlbmRlci1mb250LnRzI2dldFRleHRQYXRoc1wiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiByZWdhcmRpbmcgdGhlIGxlbmd0aHMgb2YgdGhlIG91dHB1dHRlZCBvdGYuUGF0aFtdXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIk1cIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJNXCIpIHtcclxuICAgICAgICAgICAgICAgIHA1LmJlZ2luU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgIGR4ID0gdW5wcm9jZXNzZWRDb21tYW5kLnkgLSBwcmV2aW91c1BvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBkeSA9IHByZXZpb3VzUG9pbnQueCAtIHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoZHggLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gKGR5IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgcDUudmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55ICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJMXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiTFwiKSB7XHJcbiAgICAgICAgICAgICAgICBkeCA9IHVucHJvY2Vzc2VkQ29tbWFuZC55IC0gcHJldmlvdXNQb2ludC55O1xyXG4gICAgICAgICAgICAgICAgZHkgPSBwcmV2aW91c1BvaW50LnggLSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gKGR4IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yLzEuNTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSAoZHkgLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3IvMS41O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdGhpcyBtYWtlcyBmb250IG91dGxpbmVzIHNwaWt5IGFuZCBub3QgdGhpbiB3aGljaCBpcyBiYWRcclxuICAgICAgICAgICAgICAgIHA1LnZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnggKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueSArIG9mZnNldFlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHByZXZpb3VzIHBvaW50IGNvbnNpc3RlbnRseVxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiQ1wiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIkNcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IGEgY3ViaWMgYmV6aWVyIHdhcyBkcmF3biEgVGhpcyBpcyByZWFsbHkgYmFkLlwiKVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBpIGhhdmVuJ3Qgc2VlbiBhIHNpbmdsZSBjdXJ2ZSBpbnZva2UgdGhpcywgc28gSSd2ZSBqdXN0IGlnbm9yZWQgdGhpc1xyXG4gICAgICAgICAgICAgICAgcDUuYmV6aWVyVmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55MSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJRXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiUVwiKSB7XHJcbiAgICAgICAgICAgICAgICBkeCA9IHVucHJvY2Vzc2VkQ29tbWFuZC55IC0gdW5wcm9jZXNzZWRDb21tYW5kLnkxO1xyXG4gICAgICAgICAgICAgICAgZHkgPSB1bnByb2Nlc3NlZENvbW1hbmQueDEgLSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gKGR4IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IChkeSAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHA1LnF1YWRyYXRpY1ZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngxICsgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkxICsgb2Zmc2V0WSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnggKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueSArIG9mZnNldFlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiWlwiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIlpcIikge1xyXG4gICAgICAgICAgICAgICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHA1LnBvcCgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==