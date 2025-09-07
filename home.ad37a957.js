(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[962],{

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

/***/ 496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Regular.ttf";

/***/ }),

/***/ 670:
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
/******/ __webpack_require__.O(0, [652], () => (__webpack_exec__(670)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsd0VBQW9CLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5kb21mb250L2lnbm9yZWR8RDpcXFJlcG9zXFxBTlVcXERFU04yMDA5XFxyYW5kb21mb250XFxub2RlX21vZHVsZXNcXC5wbnBtXFxvcGVudHlwZS5qc0AxLjMuNFxcbm9kZV9tb2R1bGVzXFxvcGVudHlwZS5qc1xcZGlzdHxmcyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvcGF0aC1wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9za2V0Y2gudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3V0aWxzL3R5cGUtY291bnRlcnMudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3V0aWxzL290Zi1wYXRoLXV0aWxzLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItZm9udC50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLXN0cmF0ZWd5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIChpZ25vcmVkKSAqLyIsImltcG9ydCBwNSBmcm9tIFwicDVcIjtcclxuaW1wb3J0IG90ZiBmcm9tIFwib3BlbnR5cGUuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub1ByZXByb2Nlc3MoX3A1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdKTogb3RmLlBhdGhbXSB7XHJcbiAgICByZXR1cm4gdGV4dFBhdGhzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJlYWtUbyhwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSwgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pOiBvdGYuUGF0aFtdIHtcclxuICAgIGxldCByYW5kb21Vbml0OiBudW1iZXI7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8ICEoXCJjcmF6aW5lc3NcIiBpbiBvcHRpb25zKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJwYXRoLXByZXByb2Nlc3Nvci50cyB8IGZyZWFrVG8gcmVjZWl2ZWQgbWFsZm9ybWVkIG9wdGlvbnMgcGFyYW1ldGVyLlwiKTtcclxuICAgICAgICByYW5kb21Vbml0ID0gMztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmFuZG9tVW5pdCA9IG9wdGlvbnNbXCJjcmF6aW5lc3NcIl07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGV4dFBhdGhzKSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHRleHRQYXRocy5sZW5ndGg7IGNoYXJhY3RlckluZGV4Kyspe1xyXG4gICAgICAgIC8vIGdldCBvdGYuUGF0aCBvYmplY3QgZm9yIGN1cnJlbnQgY2hhcmFjdGVyXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBhY2N1bXVsYXRlIGFsbCB0aGUgbmV3IHJhbmRvbWl6ZWQgcGF0aCBjb21tYW5kcyB0aGF0IHdlIHdhbnRcclxuICAgICAgICBsZXQgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzOiBvdGYuUGF0aENvbW1hbmRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgcHJldmlvdXNQb2ludDogUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICAgICAgLy8gcHJvY2VzcyBhbGwgcGF0aCBjb21tYW5kcyBmb3IgdGhpcyBjdXJyZW50IGNoYXJhY3RlclxyXG4gICAgICAgIGZvciAobGV0IGNoYXJQYXRoQ29tbWFuZEluZGV4ID0gMDsgY2hhclBhdGhDb21tYW5kSW5kZXggPCBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzLmxlbmd0aDsgY2hhclBhdGhDb21tYW5kSW5kZXgrKyl7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gY2hhcmFjdGVyUGF0aC5jb21tYW5kc1tjaGFyUGF0aENvbW1hbmRJbmRleF07XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZXJwSW50ZXJ2YWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcDUucmFuZG9tKDAsIHJhbmRvbVVuaXQgLSAxKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlcnBJbnRlcnZhbHMucHVzaChwNS5yYW5kb20oMCwgMC45KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxlcnBJbnRlcnZhbHMuc29ydCgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgLSBiKTsgLy8gc29ydCBpbiBhc2NlbmRpbmcgb3JkZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsZXJwSW50ZXJ2YWwgb2YgbGVycEludGVydmFscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVycGVkWDogbnVtYmVyID0gcDUubGVycChwcmV2aW91c1BvaW50LngsIGNvbW1hbmQueCwgbGVycEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBlZFk6IG51bWJlciA9IHA1LmxlcnAocHJldmlvdXNQb2ludC55LCBjb21tYW5kLnksIGxlcnBJbnRlcnZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb3JpZ2luYWwgdGV4dFBhdGhzIGFzIHdlIGFyZSBhZGRpbmcgY29tbWFuZHMgdGhhdCBuZWVkIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlIHJlZmxlY3RlZCBpbiB0aGUgb3JpZ2luYWwgdGV4dFBhdGhzIChjYXVzZSB3ZSBtaWdodCBuZWVkIHRvIHVzZSB0aGUgb3JpZ2luYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dFBhdGhzIG91dHNpZGUgb2YgaGVyZSkgLS0gdGhpcyB3b3JrcyBmaW5lIGNhdXNlIGFycmF5cyBhcmUgcGFzc2VkIGJ5IHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdLmNvbW1hbmRzLnNwbGljZShjaGFyUGF0aENvbW1hbmRJbmRleCwgMCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZXJwZWRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbGVycGVkWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlcnBlZFggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQvMS41LCByYW5kb21Vbml0LzEuNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBsZXJwZWRZICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LzEuNSwgcmFuZG9tVW5pdC8xLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIHdlIGhhdmUgdXBkYXRlZCB0aGUgdGV4dFBhdGhzIGJ5IHJlZmVyZW5jZSB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgY2hhclBhdGhDb21tYW5kSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAvLyB0byBiZSBhZnRlciB0aGUgb3JpZ2luYWwgXCJMXCIgY29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJQYXRoQ29tbWFuZEluZGV4ICs9IGxlcnBJbnRlcnZhbHMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE6IGNvbW1hbmQueDEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MTogY29tbWFuZC55MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyOiBjb21tYW5kLngyICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTI6IGNvbW1hbmQueTIgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJRXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE6IGNvbW1hbmQueDEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MTogY29tbWFuZC55MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlICE9PSBcIlpcIikge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gY29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gY29tbWFuZC55O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWZ0ZXIgcHJvY2Vzc2luZyBwYXRocyBhbmQgYWRkaW5nIHNvbWUgcmFuZG9taXphdGlvbiBsZXQncyBhc3NpZ24gYWxsIHRoZVxyXG4gICAgICAgIC8vIG5ldyBwYXRoIGNvbW1hbmRzIHRvIHRoZSBvcmlnaW5hbCBvdGYuUGF0aFtdIG9iamVjdCBwYXJhbWV0ZXJcclxuICAgICAgICBwcm9jZXNzZWRUZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdLmNvbW1hbmRzID0gbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9jZXNzZWRUZXh0UGF0aHM7XHJcbn0iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmltcG9ydCAnQHNyYy9zdHlsZXMvc2tldGNoLmNzcyc7XHJcblxyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0Zic7XHJcbmltcG9ydCBsaWJyZUJhc2tlcnZpbGxlSXRhbGljUGF0aCBmcm9tICdAc3JjL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUl0YWxpYy50dGYnO1xyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZUJvbGRQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtQm9sZC50dGYnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBQNUZvbnRSZW5kZXJlciBmcm9tICdAc3JjL3JlbmRlcmVycy9wNS9yZW5kZXItZm9udCc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgT1RGRm9udFJlbmRlcmVyIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItZm9udCc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgT1RGRm9udFJlbmRlclN0cmF0ZWd5IGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItc3RyYXRlZ3knO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URlBhdGhQcmVwcm9jZXNzb3IgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3BhdGgtcHJlcHJvY2Vzc29yJztcclxuXHJcbmZ1bmN0aW9uIHNrZXRjaChwNTogcDUpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1IDogcDUuRm9udDtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGIDogb3RmLkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZUl0YWxpY1A1IDogcDUuRm9udDtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCBsaWJyZUJhc2tlcnZpbGxlQm9sZFA1IDogcDUuRm9udDtcclxuXHJcbiAgICBsZXQgc2FtcGxlVGV4dHM6IHN0cmluZ1tdID0gW1wiQXJjaGFlb3B0ZXJ5eFwiLCBcIlRoZSDigJxCaWcgRml2ZeKAnVwiLCBcIkVuZC1PcmRvdmljaWFuXCIsIFwiTGF0ZSBEZXZvbmlhblwiLCBcIkVuZC1QZXJtaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW5kLVRyaWFzc2ljXCIsIFwiRW5kLUNyZXRhY2VvdXNcIl07XHJcblxyXG4gICAgbGV0IHRleHQ6IHN0cmluZyA9IHNhbXBsZVRleHRzW01hdGgucm91bmQocDUucmFuZG9tKDAsIHNhbXBsZVRleHRzLmxlbmd0aCAtIDEpKV07XHJcbiAgICBsZXQgdHlwZVNpemU6IG51bWJlciA9IDE0ODtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCB0ZXh0UGF0aHM6IG90Zi5QYXRoW107XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgdW5wcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW107XHJcblxyXG4gICAgbGV0IGVyb3Npb25TdHJlbmd0aFNsaWRlcjogcDUuRWxlbWVudDtcclxuICAgIGxldCBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQ6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyOiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQ6IHA1LkVsZW1lbnQ7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkcmF3Rm9udChpbW1lZGlhdGVseVJlZHJhdzogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBwNS5iYWNrZ3JvdW5kKDI1NSk7XHJcblxyXG4gICAgICAgIGlmIChpbW1lZGlhdGVseVJlZHJhdykgeyAvLyB0aGlzIGNvbmRpdGlvbiBpcyBmb3Igd2hlbiB0aGUgdGV4dCBpcyB1cGRhdGVkIChmb3IgZGVidWdnaW5nKVxyXG4gICAgICAgICAgICBsZXQgcGF0aHM6IHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGV4dFBhdGg6IG90Zi5QYXRoW11cclxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFRleHRQYXRoOiBvdGYuUGF0aFtdXHJcbiAgICAgICAgICAgIH0gPSBPVEZGb250UmVuZGVyZXIuZ2V0VGV4dFBhdGhzKFxyXG4gICAgICAgICAgICAgICAgcDUsXHJcbiAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGLFxyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgIHR5cGVTaXplLFxyXG4gICAgICAgICAgICAgICAgT1RGUGF0aFByZXByb2Nlc3Nvci5mcmVha1RvLFxyXG4gICAgICAgICAgICAgICAgeyBjcmF6aW5lc3M6IGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGV4dFBhdGhzID0gcGF0aHMucHJvY2Vzc2VkVGV4dFBhdGg7XHJcbiAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzID0gcGF0aHMub3JpZ2luYWxUZXh0UGF0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9URkZvbnRSZW5kZXJlci5yZW5kZXJGb250KFxyXG4gICAgICAgICAgICBwNSxcclxuICAgICAgICAgICAgdGV4dFBhdGhzLFxyXG4gICAgICAgICAgICBPVEZGb250UmVuZGVyU3RyYXRlZ3kuZXJvZGUsXHJcbiAgICAgICAgICAgIHsgZXJvc2lvblN0cmVuZ3RoOiAtZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkgfSxcclxuICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBQNUZvbnRSZW5kZXJlci5yZW5kZXIoXHJcbiAgICAgICAgLy8gICAgIHA1LFxyXG4gICAgICAgIC8vICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnUDUsXHJcbiAgICAgICAgLy8gICAgIHRleHQsXHJcbiAgICAgICAgLy8gICAgIHR5cGVTaXplLFxyXG4gICAgICAgIC8vICAgICAwLjEzLFxyXG4gICAgICAgIC8vICAgICBQNUZvbnRSZW5kZXJlci5yZW5kZXJTdHJhdGVneUJlb3d1bGZcclxuICAgICAgICAvLyApO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcDUgZm9udCBpbml0aWFsaXphdGlvblxyXG4gICAgcDUucHJlbG9hZCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnUDUgPSBwNS5sb2FkRm9udChsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCk7XHJcbiAgICAgICAgbGlicmVCYXNrZXJ2aWxsZUl0YWxpY1A1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZUl0YWxpY1BhdGgpO1xyXG4gICAgICAgIGxpYnJlQmFza2VydmlsbGVCb2xkUDUgPSBwNS5sb2FkRm9udChsaWJyZUJhc2tlcnZpbGxlQm9sZFBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LnNldHVwID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYWZ0ZXJwcmludFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZHJhd0ZvbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUocGFyc2VGbG9hdChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKSArIDIpO1xyXG4gICAgICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuaHRtbChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcDUuY3JlYXRlQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBvcGVudHlwZS5qcyBmb250IGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgb3RmLmxvYWQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgsIChlcnJvciwgZm9udCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW50eXBlLmpzIHwgXCIgKyBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCArIFwiIGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGlmIChmb250ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdPVEYgPSBmb250O1xyXG4gICAgICAgICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBsb2FkZWQuXCIpO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBpdCB3YXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIHVwIHNsaWRlcnMgZm9yIGRlYnVnZ2luZ1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlciA9IHA1LmNyZWF0ZVNsaWRlcigwLCAxMCwgMy41NiwgMC4wMSk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnBvc2l0aW9uKDY1LCAxMCk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnNpemUoMjAwKTtcclxuICAgICAgICBsZXQgZnJlYWtUb0NyYXppbmVzc0xhYmVsOiBwNS5FbGVtZW50ID0gcDUuY3JlYXRlUChcImNyYXp5XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJsZWZ0OiAxMHB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcInRvcDogLTNweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0ID0gcDUuY3JlYXRlUChTdHJpbmcoZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcImxlZnQ6IDI4NXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJ0b3A6IC0zcHhcIik7XHJcbiAgICAgICAgKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlciBhcyBhbnkpLmNoYW5nZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KCk7XHJcbiAgICAgICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuaHRtbChTdHJpbmcoZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlciA9IHA1LmNyZWF0ZVNsaWRlcigwLCAxMCwgNC40NCwgMC4wMSk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnBvc2l0aW9uKDY1LCA1MCk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnNpemUoMjAwKTtcclxuICAgICAgICBsZXQgZXJvc2lvblN0cmVuZ3RoTGFiZWw6IHA1LkVsZW1lbnQgPSBwNS5jcmVhdGVQKFwiZXJvZGVcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC13ZWlnaHQ6IGJvbGRcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJsZWZ0OiAxMHB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwidG9wOiAzN3B4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dCA9IHA1LmNyZWF0ZVAoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImZvbnQtZmFtaWx5OiBtb25vc3BhY2VcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImxlZnQ6IDI4NXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcInRvcDogMzdweFwiKTtcclxuICAgICAgICAoZXJvc2lvblN0cmVuZ3RoU2xpZGVyIGFzIGFueSkuY2hhbmdlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZHJhd0ZvbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuaHRtbChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcDUud2luZG93UmVzaXplZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgcDUucmVzaXplQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5rZXlQcmVzc2VkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgbmVlZHNVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHA1LmtleS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChwNS5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBwNS5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocDUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnNsaWNlKDAsIHRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gXCJcXG5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgbmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5lZWRzVXBkYXRlKSByZWRyYXdGb250KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBwNShza2V0Y2gpO1xyXG4iLCJpbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVyQ291bnRlcihmb250OiBvdGYuRm9udCwgY2hhcmFjdGVyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKGNoYXJhY3Rlci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInR5cGUtY291bnRlcnMudHMgfCBQYXRoQ291bnRlckNvdW50ZXIgYWNjZXB0ZWQgYSBjaGFyYWN0ZXIgb2Ygc2l6ZSBcIiArIGNoYXJhY3Rlci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvbnQgc2l6ZSBhbmQgeCBhbmQgeSBjb29yZHMgdXNlZCBoZXJlIGFyZSBkdW1taWVzXHJcbiAgICByZXR1cm4gcGF0aENvdW50ZXJDb3VudGVyKGZvbnQuZ2V0UGF0aChjaGFyYWN0ZXJbMF0sIDAsIDAsIDIwKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoQ291bnRlckNvdW50ZXIoY2hhcmFjdGVyUGF0aDogb3RmLlBhdGgpOiBudW1iZXIge1xyXG5cclxuICAgIGxldCBjb3VudGVyQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBjb21tYW5kIG9mIGNoYXJhY3RlclBhdGguY29tbWFuZHMpIHtcclxuICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIlpcIikge1xyXG4gICAgICAgICAgICBjb3VudGVyQ291bnRlciArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGFzc3VtZXMgdGhhdCBvdGYuUGF0aCBTVkcgZHJhd2luZyBjb21tYW5kcyBhcmUgc3RydWN0dXJlZCB3aXRoIHRoZSBiYXNlIGxldHRlcmZvcm0gc2hhcGVcclxuICAgIC8vIGZvbGxvd2VkIGJ5IGNvdW50ZXJzXHJcbiAgICByZXR1cm4gY291bnRlckNvdW50ZXIgPT09IDAgPyAwIDogY291bnRlckNvdW50ZXIgLSAxO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U2hhcGVzRnJvbVBhdGgocGF0aDogb3RmLlBhdGgpIDogb3RmLlBhdGhDb21tYW5kW11bXSB7XHJcbiAgICBsZXQgY3VyclNoYXBlQ291bnRlcjogbnVtYmVyID0gMDtcclxuICAgIGxldCBjdXJyU2hhcGVzOiBvdGYuUGF0aENvbW1hbmRbXVtdID0gW1tdXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5jb21tYW5kcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBwYXRoLmNvbW1hbmRzW2ldO1xyXG5cclxuICAgICAgICBpZiAoY29tbWFuZC50eXBlICE9PSBcIlpcIikgeyAvLyBpZiB3ZSBhcmVuJ3QgYXQgYSBjbG9zZSBzaGFwZSBjb21tYW5kXHJcbiAgICAgICAgICAgIGN1cnJTaGFwZXNbY3VyclNoYXBlQ291bnRlcl0ucHVzaChjb21tYW5kKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBhdCBhIGNsb3NlIHNoYXBlIGNvbW1hbmRcclxuICAgICAgICAgICAgLy8gcHVzaCBcIlpcIlxyXG4gICAgICAgICAgICBjdXJyU2hhcGVzW2N1cnJTaGFwZUNvdW50ZXJdLnB1c2goY29tbWFuZClcclxuICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjdXJyU2hhcGVDb3VudGVyXHJcbiAgICAgICAgICAgIGN1cnJTaGFwZUNvdW50ZXIrKztcclxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlbid0IGF0IHRoZSBsYXN0IFwiWlwiIHRoZW4ga2VlcCBleHBhbmRpbmcgdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYgKGkgIT09IHBhdGguY29tbWFuZHMubGVuZ3RoIC0gMSkgY3VyclNoYXBlcy5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJTaGFwZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgocGF0aENvbW1hbmRzOiBvdGYuUGF0aENvbW1hbmRbXSkgOiAoUG9pbnQgfCBudWxsKSB7XHJcbiAgICBmb3IgKGxldCBjb21tYW5kIG9mIHBhdGhDb21tYW5kcykge1xyXG4gICAgICAgIGlmIChjb21tYW5kLnR5cGUgPT09IFwiQ1wiIHx8ICAvLyBjdWJpYyBiZXppZXJcclxuICAgICAgICAgICAgY29tbWFuZC50eXBlID09PSBcIkxcIiB8fCAgLy8gbGluZSB0b1xyXG4gICAgICAgICAgICBjb21tYW5kLnR5cGUgPT09IFwiUVwiKSB7ICAvLyBxdWFkcmF0aWMgYmV6aWVyXHJcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGNvbW1hbmQueCwgeTogY29tbWFuZC55IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0aENvbW1hbmRzVG9QYXRoRGF0YShwYXRoQ29tbWFuZHM6IG90Zi5QYXRoQ29tbWFuZFtdLCBkZWNpbWFsUGxhY2VzOiBudW1iZXIpIDogc3RyaW5nIHtcclxuICAgIGxldCBwYXRoRGF0YTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBjb21tYW5kIG9mIHBhdGhDb21tYW5kcykge1xyXG4gICAgICAgIC8vIFwiWlwiIGlzIGFwcGVuZGVkIGF1dG9tYXRpY2FsbHkgaGVyZVxyXG4gICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQudHlwZSArIFwiIFwiO1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLngudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQueDEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDIudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55Mi50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUVwiOlxyXG4gICAgICAgICAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC54MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRoRGF0YTtcclxufSIsImltcG9ydCBwNSBmcm9tICdwNSc7XHJcbmltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5pbXBvcnQge3BhdGhDb3VudGVyQ291bnRlcn0gZnJvbSBcIi4vdXRpbHMvdHlwZS1jb3VudGVyc1wiO1xyXG5pbXBvcnQge2V4dHJhY3RTaGFwZXNGcm9tUGF0aCwgZ2V0Rmlyc3RTdGFydFBvaW50SW5QYXRoLCBwYXRoQ29tbWFuZHNUb1BhdGhEYXRhfSBmcm9tIFwiLi91dGlscy9vdGYtcGF0aC11dGlsc1wiO1xyXG5cclxudHlwZSBGb250UmVuZGVyU3RyYXRlZ3kgPSAocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gdm9pZDtcclxudHlwZSBGb250UHJlcHJvY2Vzc29yID0gKHA1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLCBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gb3RmLlBhdGhbXTtcclxuXHJcbmV4cG9ydCBlbnVtIEZpbGxTdGF0dXMge1xyXG4gICAgRklMTEVEID0gXCJmaWxsZWRcIixcclxuICAgIE9QRU4gPSBcIm9wZW5cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dEZvcmVncm91bmRDb2xvdXIgPSAwO1xyXG5leHBvcnQgY29uc3QgdGV4dEJhY2tncm91bmRDb2xvdXIgPSAyNTU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dFBhdGhzKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBvdGYuRm9udCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNpemU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UHJlcHJvY2Vzc29yOiBGb250UHJlcHJvY2Vzc29yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRQcmVwcm9jZXNzb3JPcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6XHJcbiAgICB7IG9yaWdpbmFsVGV4dFBhdGg6IG90Zi5QYXRoW10sIHByb2Nlc3NlZFRleHRQYXRoOiBvdGYuUGF0aFtdIH0ge1xyXG4gICAgY29uc3QgdGV4dFBhdGg6IG90Zi5QYXRoID0gZm9udC5nZXRQYXRoKHRleHQsIDAsIDAsIHR5cGVTaXplLCB7IGtlcm5pbmc6IHRydWUgfSk7XHJcbiAgICBjb25zdCB0ZXh0Qm91bmRpbmdCb3g6IG90Zi5Cb3VuZGluZ0JveCA9IHRleHRQYXRoLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBjb25zdCB0ZXh0SGVpZ2h0OiBudW1iZXIgPSB0ZXh0Qm91bmRpbmdCb3gueTIgLSB0ZXh0Qm91bmRpbmdCb3gueTE7XHJcbiAgICBjb25zdCB0ZXh0V2lkdGg6IG51bWJlciA9IHRleHRCb3VuZGluZ0JveC54MiAtIHRleHRCb3VuZGluZ0JveC54MTtcclxuXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gZm9udC5nZXRQYXRocyhcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIChwNS53aW5kb3dXaWR0aCAtIHRleHRXaWR0aCkgLyAyLFxyXG4gICAgICAgIChwNS53aW5kb3dIZWlnaHQgLSB0ZXh0SGVpZ2h0ICsgdHlwZVNpemUpIC8gMixcclxuICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICB7IGtlcm5pbmc6IHRydWUgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gZm9udFByZXByb2Nlc3NvcihwNSwgdGV4dFBhdGhzLCBmb250UHJlcHJvY2Vzc29yT3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKHRleHRQYXRocy5sZW5ndGggIT09IHByb2Nlc3NlZFRleHRQYXRocy5sZW5ndGgpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1mb250LnRzIHwgc29tZXRoaW5nIGhhcyBnb25lIHdyb25nIGluIG90ZlxccmVuZGVyLWZvbnQudHMjZ2V0VGV4dFBhdGhzXCIgK1xyXG4gICAgICAgICAgICBcIiByZWdhcmRpbmcgdGhlIGxlbmd0aHMgb2YgdGhlIG91dHB1dHRlZCBvdGYuUGF0aFtdXCIpO1xyXG5cclxuICAgIHJldHVybiB7IG9yaWdpbmFsVGV4dFBhdGg6IHRleHRQYXRocywgcHJvY2Vzc2VkVGV4dFBhdGg6IHByb2Nlc3NlZFRleHRQYXRocyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udChwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoczogb3RmLlBhdGhbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFJlbmRlcmVyOiBGb250UmVuZGVyU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRSZW5kZXJlck9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocz86IG90Zi5QYXRoW10pIDogb3RmLlBhdGhbXSB7XHJcblxyXG4gICAgLy8gc29ydGluZyBvdXQgcmVuZGVyaW5nIGhvbGVzIGluIGZvbnRzXHJcbiAgICAvLyB1bnByb2Nlc3NlZFRleHRQYXRocyBjYW4gYmUgdXNlZCBoZXJlIGlmIHRoZSBwcm9jZXNzaW5nIHlvdSBkbyBvbiB5b3VyIHRleHQgaXMgc28gZXh0cmVtZSB0aGF0IGl0IGRlc3Ryb3lzXHJcbiAgICAvLyBteSB2ZXJ5IGZpY2tsZSBhbGdvcml0aG0gZm9yIGRldGVybWluaW5nIHRoZSBudW1iZXIgYW5kIG9yZGVyIG9mIGhvbGVzIGluIGEgbGV0dGVyZm9ybSA6KVxyXG4gICAgY29uc3QgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10gPSB1bnByb2Nlc3NlZFRleHRQYXRocyA9PT0gdW5kZWZpbmVkID9cclxuICAgICAgICBnZXRUZXh0RmlsbFN0YXR1c2VzKHA1LCB0ZXh0UGF0aHMpIDogZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNSwgdW5wcm9jZXNzZWRUZXh0UGF0aHMpO1xyXG5cclxuICAgIC8vIHVucHJvY2Vzc2VkVGV4dFBhdGhzIHRlbmQgdG8gYmUgdXNlZnVsIGluIEZvbnRSZW5kZXJTdHJhdGVneSBhcyB0aGV5IHByZXNlcnZlIHRoZSBvcmlnaW5hbCBnZW9tZXRyeVxyXG4gICAgLy8gYW5kIGN1cnZlcyBvZiB0aGUgZm9udCBiZWZvcmUgdGhleSBhcmUgcHJvY2Vzc2VkIGNyYXppbHlcclxuICAgIGlmIChmb250UmVuZGVyZXJPcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdW5wcm9jZXNzZWRUZXh0UGF0aHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvbnRSZW5kZXJlck9wdGlvbnNbXCJ1bnByb2Nlc3NlZFRleHRQYXRoc1wiXSA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdHVhbGx5IHJlbmRlcmluZyBmb250XHJcbiAgICBmb250UmVuZGVyZXIocDUsIHRleHRQYXRocywgdGV4dEZpbGxTdGF0dXNlcywgZm9udFJlbmRlcmVyT3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRleHRQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKHNpZGVMZW5ndGg6IG51bWJlciwgc2FtcGxlVW5pdDogbnVtYmVyKTogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdIHtcclxuICAgIGlmIChzaWRlTGVuZ3RoICUgMiA9PT0gMCApIHtcclxuICAgICAgICBzaWRlTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgXCJyZW5kZXItZm9udC1vdGYudHMgfCBnZW5lcmF0ZVNhbXBsZU9mZnNldEdyaWQgcmVjZWl2ZWQgYW4gZXZlbiBzaWRlIGxlbmd0aCBvZiBcIiArIChzaWRlTGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgKyBcIi4gVGhlIGFjdHVhbCBzaWRlIGxlbmd0aCBvZiB0aGUgZ3JpZCBnZW5lcmF0ZWQgd2lsbCBiZSBvZGQ6IFwiICsgc2lkZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNhbXBsZU9mZnNldEdyaWQ6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSA9IFtdO1xyXG4gICAgbGV0IG1heFNhbXBsZVVuaXRTY2FsZTogbnVtYmVyID0gTWF0aC5mbG9vcihzaWRlTGVuZ3RoIC8gMik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IG1heFNhbXBsZVVuaXRTY2FsZTsgaSA+PSAtbWF4U2FtcGxlVW5pdFNjYWxlOyBpLS0pIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gLW1heFNhbXBsZVVuaXRTY2FsZTsgaiA8PSBtYXhTYW1wbGVVbml0U2NhbGU7IGorKykge1xyXG4gICAgICAgICAgICBzYW1wbGVPZmZzZXRHcmlkLnB1c2goW2ogKiBzYW1wbGVVbml0LCAtaSAqIHNhbXBsZVVuaXRdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2FtcGxlT2Zmc2V0R3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSk6IEZpbGxTdGF0dXNbXVtdIHtcclxuICAgIGNvbnN0IHRvUGF0aERhdGFSZXNvbHV0aW9uOiBudW1iZXIgPSAzO1xyXG4gICAgY29uc3Qgc2FtcGxlVW5pdDogbnVtYmVyID0gMjtcclxuICAgIGNvbnN0IHNhbXBsZU9mZnNldEtlcm5lbDogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdID0gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKDUsIHNhbXBsZVVuaXQpO1xyXG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBwNS5kcmF3aW5nQ29udGV4dDtcclxuXHJcbiAgICBsZXQgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgY29uc3QgZW50aXJlTGV0dGVyZm9ybVBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJDb3VudDogbnVtYmVyID0gcGF0aENvdW50ZXJDb3VudGVyKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgdGV4dEZpbGxTdGF0dXNlcy5wdXNoKFtdKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gd2lsbCBpbmNyZW1lbnQgY2hhcmFjdGVySW5kZXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGVzOiBvdGYuUGF0aENvbW1hbmRbXVtdID0gZXh0cmFjdFNoYXBlc0Zyb21QYXRoKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlIG9mIGxldHRlcmZvcm1Db21wb25lbnRTaGFwZXMpIHtcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50OiBQb2ludCB8IG51bGwgPSBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzYW1wbGVQb2ludCA9PT0gbnVsbCB8fCBzYW1wbGVQb2ludCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgc2FtcGxlUG9pbnQueCBhbmQgc2FtcGxlUG9pbnQueSB3YXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBzYW1wbGUgYXJvdW5kIHRoZSAoc2FtcGxlWCwgc2FtcGxlWSkgY29vcmRpbmF0ZSB3ZSBoYXZlIGFuZCB0ZXN0IGFnYWluc3RcclxuICAgICAgICAgICAgLy8gY3R4LmlzUG9pbnRJblBhdGggd2l0aCB0aGUgcmVsZXZhbnQgZW50aXJlTGV0dGVyZm9ybVBhdGggYXMgdGhlIHBhdGhcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50T2Zmc2V0OiBQb2ludCA9IHt4OiBzYW1wbGVQb2ludC54LCB5OiBzYW1wbGVQb2ludC55fTtcclxuICAgICAgICAgICAgbGV0IHdhc0ZpbGxTdGF0dXNBc3NpZ25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgc2FtcGxlT2Zmc2V0IG9mIHNhbXBsZU9mZnNldEtlcm5lbCkge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlUG9pbnRPZmZzZXQueCA9IHNhbXBsZVBvaW50LnggKyBzYW1wbGVPZmZzZXRbMF07XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVQb2ludE9mZnNldC55ID0gc2FtcGxlUG9pbnQueSArIHNhbXBsZU9mZnNldFsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2hpbmcgdG8gc2VlIGlmIHdlJ3JlIGluc2lkZSB0aGUgY3VycmVudCBzaGFwZVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHA1LnBpeGVsRGVuc2l0eSgpIHBhcnQgaXMgQ1JVQ0lBTCFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGgyRDogUGF0aDJEID1cclxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aDJEKHBhdGhDb21tYW5kc1RvUGF0aERhdGEobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlLCB0b1BhdGhEYXRhUmVzb2x1dGlvbikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblBhdGg6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluUGF0aChcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHN0b3Agc2VhcmNoaW5nIGlmIHdlJ3ZlIGZvdW5kIGEgcG9pbnQgd2l0aGluIHRoZSBwYXRoIGFuZCBub3Qgb24gdGhlIHN0cm9rZSBhcyB0aGlzIHdvbid0XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHVwIGluIGZ1dHVyZSBpc1BvaW50SW5QYXRoIGNhbGN1bGF0aW9ucyB3aXRoIHRoZSBlbnRpcmUgbGV0dGVyZm9ybVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzSW5QYXRoICYmICFpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzRmlsbFN0YXR1c0Fzc2lnbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlclNoYXBlUGF0aDJEOiBQYXRoMkQgPSBuZXcgUGF0aDJEKGVudGlyZUxldHRlcmZvcm1QYXRoLnRvUGF0aERhdGEodG9QYXRoRGF0YVJlc29sdXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiBzYW1wbGUgdGhpcyBwb2ludCBpbiB0aGUgdGV4dFBhdGggdXNpbmcgY3R4LmlzUG9pbnRJblBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0luUGF0aDogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5QYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJTaGFwZVBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclNoYXBlUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBvbmx5IE5PVCBpbiBhIGNvdW50ZXIvc29tZXRoaW5nIHRoYXQgc2hvdWxkbid0IGJlIGZpbGxlZCB3aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXNJblBhdGggPT09IEZBTFNFICYmIGlzSW5TdHJva2UgPT09IEZBTFNFO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luUGF0aCB8fCBpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5PUEVOKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPIG5lZWQgdG8gZG8gZXJyb3IgaGFuZGxpbmcgZm9yIHdoYXQgaGFwcGVucyB3aGVuIHdlIGZhbGwgdGhyb3VnaCBoZXJlIHdpdGhvdXQgYSBzdGF0dXNcclxuICAgICAgICAgICAgaWYgKCF3YXNGaWxsU3RhdHVzQXNzaWduZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1mb250LW90Zi50cyB8IGdldFRleHRGaWxsU3RhdHVzZXMgY291bGQgbm90IGZpbmQgYSBzdWl0YWJsZSBzYW1wbGUgcG9pbnQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiKGF0IGNoYXJhY3RlciBpbmRleCBcIiArIGNoYXJhY3RlckluZGV4ICsgXCIpIGZvciBjYWxjdWxhdGluZyB0ZXh0IGZpbGwgc3RhdHVzXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHRGaWxsU3RhdHVzZXM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBwNSBmcm9tICdwNSc7XHJcbmltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5pbXBvcnQgeyBGaWxsU3RhdHVzLCB0ZXh0QmFja2dyb3VuZENvbG91ciwgdGV4dEZvcmVncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9yZW5kZXItZm9udFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxlZChwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSwgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10pIHtcclxuXHJcbiAgICBwNS5wdXNoKCk7XHJcbiAgICBwNS5ub1N0cm9rZSgpO1xyXG4gICAgZm9yIChsZXQgY2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHRleHRQYXRocy5sZW5ndGg7IGNoYXJhY3RlckluZGV4Kyspe1xyXG4gICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGg6IG90Zi5QYXRoID0gdGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJGaWxsU3RhdHVzOiBGaWxsU3RhdHVzW10gPSB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBsZXQgdGV4dEZpbGxTdGF0dXNDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLkZJTExFRCkge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5PUEVOKSB7XHJcbiAgICAgICAgICAgIHA1LmZpbGwodGV4dEJhY2tncm91bmRDb2xvdXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29tbWFuZCBvZiBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHA1LmJlZ2luU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBwNS52ZXJ0ZXgoY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS52ZXJ0ZXgoY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5iZXppZXJWZXJ0ZXgoY29tbWFuZC54MSwgY29tbWFuZC55MSwgY29tbWFuZC54MiwgY29tbWFuZC55MiwgY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlFcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5xdWFkcmF0aWNWZXJ0ZXgoY29tbWFuZC54MSwgY29tbWFuZC55MSwgY29tbWFuZC54LCBjb21tYW5kLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5lbmRTaGFwZShwNS5DTE9TRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwNS5wb3AoKTtcclxufVxyXG5cclxuLy8gb3B0aW9ucyBsb29rcyBsaWtlXHJcbmV4cG9ydCBmdW5jdGlvbiBlcm9kZShwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSxcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XHJcblxyXG4gICAgLy8gbnVkZ2UgZmFjdG9yIG9mIDctOC4zIGlzIGlkZWFsIGZvciBhIGxldHRlcmZvcm0gdGhhdCBpcyBhbG1vc3Qgbm9uLWV4aXN0ZW50XHJcbiAgICBsZXQgbnVkZ2VGYWN0b3I6IG51bWJlcjsgLy8tNy42Oy8vLTguMztcclxuICAgIGxldCB1bnByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8ICEoXCJlcm9zaW9uU3RyZW5ndGhcIiBpbiBvcHRpb25zKSB8fCAhKFwidW5wcm9jZXNzZWRUZXh0UGF0aHNcIiBpbiBvcHRpb25zKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItc3RyYXRlZ3kudHMgfCBmcmVha1RvRXJvZGVkIHJlY2VpdmVkIG1hbGZvcm1lZCBvcHRpb25zIHBhcmFtZXRlci5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBudWRnZUZhY3RvciA9IG9wdGlvbnNbXCJlcm9zaW9uU3RyZW5ndGhcIl07XHJcbiAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHMgPSBvcHRpb25zW1widW5wcm9jZXNzZWRUZXh0UGF0aHNcIl07XHJcbiAgICB9XHJcblxyXG4gICAgcDUucHVzaCgpO1xyXG4gICAgcDUubm9TdHJva2UoKTtcclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgdW5wcm9jZXNzZWRDaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJGaWxsU3RhdHVzOiBGaWxsU3RhdHVzW10gPSB0ZXh0RmlsbFN0YXR1c2VzW2NoYXJhY3RlckluZGV4XTtcclxuICAgICAgICBsZXQgdGV4dEZpbGxTdGF0dXNDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLkZJTExFRCkge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5PUEVOKSB7XHJcbiAgICAgICAgICAgIHA1LmZpbGwodGV4dEJhY2tncm91bmRDb2xvdXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUG9pbnQ6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVyUGF0aC5jb21tYW5kcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kOiBvdGYuUGF0aENvbW1hbmQgPSBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgdW5wcm9jZXNzZWRDb21tYW5kOiBvdGYuUGF0aENvbW1hbmQgPSB1bnByb2Nlc3NlZENoYXJhY3RlclBhdGguY29tbWFuZHNbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgZHg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGR5OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBtYWduaXR1ZGU6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFg6IG51bWJlcjtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kLnR5cGUgIT09IHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgc29tZXRoaW5nIGhhcyBnb25lIHdyb25nIGluIG90ZlxccmVuZGVyLWZvbnQudHMjZ2V0VGV4dFBhdGhzXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHJlZ2FyZGluZyB0aGUgbGVuZ3RocyBvZiB0aGUgb3V0cHV0dGVkIG90Zi5QYXRoW11cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kLnR5cGUgPT09IFwiTVwiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIk1cIikge1xyXG4gICAgICAgICAgICAgICAgcDUuYmVnaW5TaGFwZSgpO1xyXG4gICAgICAgICAgICAgICAgZHggPSB1bnByb2Nlc3NlZENvbW1hbmQueSAtIHByZXZpb3VzUG9pbnQueTtcclxuICAgICAgICAgICAgICAgIGR5ID0gcHJldmlvdXNQb2ludC54IC0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQoZHggKiogMiArIGR5ICoqIDIpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IChkeCAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSAoZHkgLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBwNS52ZXJ0ZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54ICsgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gdW5wcm9jZXNzZWRDb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC50eXBlID09PSBcIkxcIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJMXCIpIHtcclxuICAgICAgICAgICAgICAgIGR4ID0gdW5wcm9jZXNzZWRDb21tYW5kLnkgLSBwcmV2aW91c1BvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBkeSA9IHByZXZpb3VzUG9pbnQueCAtIHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoZHggLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3IvMS41O1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IChkeSAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3Rvci8xLjU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyB0aGlzIG1ha2VzIGZvbnQgb3V0bGluZXMgc3Bpa3kgYW5kIG5vdCB0aGluIHdoaWNoIGlzIGJhZFxyXG4gICAgICAgICAgICAgICAgcDUudmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55ICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJldmlvdXMgcG9pbnQgY29uc2lzdGVudGx5XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJDXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgYSBjdWJpYyBiZXppZXIgd2FzIGRyYXduISBUaGlzIGlzIHJlYWxseSBiYWQuXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIGkgaGF2ZW4ndCBzZWVuIGEgc2luZ2xlIGN1cnZlIGludm9rZSB0aGlzLCBzbyBJJ3ZlIGp1c3QgaWdub3JlZCB0aGlzXHJcbiAgICAgICAgICAgICAgICBwNS5iZXppZXJWZXJ0ZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54MSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55MixcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueCA9IHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gdW5wcm9jZXNzZWRDb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC50eXBlID09PSBcIlFcIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJRXCIpIHtcclxuICAgICAgICAgICAgICAgIGR4ID0gdW5wcm9jZXNzZWRDb21tYW5kLnkgLSB1bnByb2Nlc3NlZENvbW1hbmQueTE7XHJcbiAgICAgICAgICAgICAgICBkeSA9IHVucHJvY2Vzc2VkQ29tbWFuZC54MSAtIHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoZHggLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gKGR5IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgcDUucXVhZHJhdGljVmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDEgKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueTEgKyBvZmZzZXRZLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55ICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJaXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiWlwiKSB7XHJcbiAgICAgICAgICAgICAgICBwNS5lbmRTaGFwZShwNS5DTE9TRSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLkZJTExFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEZvcmVncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEJhY2tncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcDUucG9wKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9