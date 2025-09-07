(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[882],{

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

/***/ 863:
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
        if (p5.key === "ArrowUp") {
            needsUpdate = true;
        }
        if (needsUpdate)
            redrawFont();
    };
}
new (p5__WEBPACK_IMPORTED_MODULE_0___default())(sketch);


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
/******/ __webpack_require__.O(0, [652], () => (__webpack_exec__(863)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNqRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdEIscUJBQXFCLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLDhEQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ25FLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0VBQW9CLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztxQkFBTSxJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEtBQUssOERBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEUsRUFBRSxDQUFDLElBQUksQ0FBQyx3RUFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvaWdub3JlZHxEOlxcUmVwb3NcXEFOVVxcREVTTjIwMDlcXHJhbmRvbWZvbnRcXG5vZGVfbW9kdWxlc1xcLnBucG1cXG9wZW50eXBlLmpzQDEuMy40XFxub2RlX21vZHVsZXNcXG9wZW50eXBlLmpzXFxkaXN0fGZzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi9wYXRoLXByZXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvdXRpbHMvdHlwZS1jb3VudGVycy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvdXRpbHMvb3RmLXBhdGgtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250LnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvbWVkaXVtL3NrZXRjaC50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLXN0cmF0ZWd5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIChpZ25vcmVkKSAqLyIsImltcG9ydCBwNSBmcm9tIFwicDVcIjtcclxuaW1wb3J0IG90ZiBmcm9tIFwib3BlbnR5cGUuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub1ByZXByb2Nlc3MoX3A1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdKTogb3RmLlBhdGhbXSB7XHJcbiAgICByZXR1cm4gdGV4dFBhdGhzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnJlYWtUbyhwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSwgb3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pOiBvdGYuUGF0aFtdIHtcclxuICAgIGxldCByYW5kb21Vbml0OiBudW1iZXI7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8ICEoXCJjcmF6aW5lc3NcIiBpbiBvcHRpb25zKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJwYXRoLXByZXByb2Nlc3Nvci50cyB8IGZyZWFrVG8gcmVjZWl2ZWQgbWFsZm9ybWVkIG9wdGlvbnMgcGFyYW1ldGVyLlwiKTtcclxuICAgICAgICByYW5kb21Vbml0ID0gMztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmFuZG9tVW5pdCA9IG9wdGlvbnNbXCJjcmF6aW5lc3NcIl07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGV4dFBhdGhzKSk7XHJcblxyXG4gICAgZm9yIChsZXQgY2hhcmFjdGVySW5kZXggPSAwOyBjaGFyYWN0ZXJJbmRleCA8IHRleHRQYXRocy5sZW5ndGg7IGNoYXJhY3RlckluZGV4Kyspe1xyXG4gICAgICAgIC8vIGdldCBvdGYuUGF0aCBvYmplY3QgZm9yIGN1cnJlbnQgY2hhcmFjdGVyXHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCBhY2N1bXVsYXRlIGFsbCB0aGUgbmV3IHJhbmRvbWl6ZWQgcGF0aCBjb21tYW5kcyB0aGF0IHdlIHdhbnRcclxuICAgICAgICBsZXQgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzOiBvdGYuUGF0aENvbW1hbmRbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgcHJldmlvdXNQb2ludDogUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcclxuXHJcbiAgICAgICAgLy8gcHJvY2VzcyBhbGwgcGF0aCBjb21tYW5kcyBmb3IgdGhpcyBjdXJyZW50IGNoYXJhY3RlclxyXG4gICAgICAgIGZvciAobGV0IGNoYXJQYXRoQ29tbWFuZEluZGV4ID0gMDsgY2hhclBhdGhDb21tYW5kSW5kZXggPCBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzLmxlbmd0aDsgY2hhclBhdGhDb21tYW5kSW5kZXgrKyl7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kID0gY2hhcmFjdGVyUGF0aC5jb21tYW5kc1tjaGFyUGF0aENvbW1hbmRJbmRleF07XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJNXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZXJwSW50ZXJ2YWxzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcDUucmFuZG9tKDAsIHJhbmRvbVVuaXQgLSAxKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlcnBJbnRlcnZhbHMucHVzaChwNS5yYW5kb20oMCwgMC45KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxlcnBJbnRlcnZhbHMuc29ydCgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgLSBiKTsgLy8gc29ydCBpbiBhc2NlbmRpbmcgb3JkZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsZXJwSW50ZXJ2YWwgb2YgbGVycEludGVydmFscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVycGVkWDogbnVtYmVyID0gcDUubGVycChwcmV2aW91c1BvaW50LngsIGNvbW1hbmQueCwgbGVycEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBlZFk6IG51bWJlciA9IHA1LmxlcnAocHJldmlvdXNQb2ludC55LCBjb21tYW5kLnksIGxlcnBJbnRlcnZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb3JpZ2luYWwgdGV4dFBhdGhzIGFzIHdlIGFyZSBhZGRpbmcgY29tbWFuZHMgdGhhdCBuZWVkIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlIHJlZmxlY3RlZCBpbiB0aGUgb3JpZ2luYWwgdGV4dFBhdGhzIChjYXVzZSB3ZSBtaWdodCBuZWVkIHRvIHVzZSB0aGUgb3JpZ2luYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dFBhdGhzIG91dHNpZGUgb2YgaGVyZSkgLS0gdGhpcyB3b3JrcyBmaW5lIGNhdXNlIGFycmF5cyBhcmUgcGFzc2VkIGJ5IHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdLmNvbW1hbmRzLnNwbGljZShjaGFyUGF0aENvbW1hbmRJbmRleCwgMCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZXJwZWRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbGVycGVkWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlcnBlZFggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQvMS41LCByYW5kb21Vbml0LzEuNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBsZXJwZWRZICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LzEuNSwgcmFuZG9tVW5pdC8xLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIHdlIGhhdmUgdXBkYXRlZCB0aGUgdGV4dFBhdGhzIGJ5IHJlZmVyZW5jZSB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgY2hhclBhdGhDb21tYW5kSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAvLyB0byBiZSBhZnRlciB0aGUgb3JpZ2luYWwgXCJMXCIgY29tbWFuZFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJQYXRoQ29tbWFuZEluZGV4ICs9IGxlcnBJbnRlcnZhbHMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE6IGNvbW1hbmQueDEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MTogY29tbWFuZC55MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyOiBjb21tYW5kLngyICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTI6IGNvbW1hbmQueTIgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjb21tYW5kLnggICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvbW1hbmQueSAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJRXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE6IGNvbW1hbmQueDEgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MTogY29tbWFuZC55MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlpcIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlICE9PSBcIlpcIikge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gY29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC55ID0gY29tbWFuZC55O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWZ0ZXIgcHJvY2Vzc2luZyBwYXRocyBhbmQgYWRkaW5nIHNvbWUgcmFuZG9taXphdGlvbiBsZXQncyBhc3NpZ24gYWxsIHRoZVxyXG4gICAgICAgIC8vIG5ldyBwYXRoIGNvbW1hbmRzIHRvIHRoZSBvcmlnaW5hbCBvdGYuUGF0aFtdIG9iamVjdCBwYXJhbWV0ZXJcclxuICAgICAgICBwcm9jZXNzZWRUZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdLmNvbW1hbmRzID0gbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9jZXNzZWRUZXh0UGF0aHM7XHJcbn0iLCJpbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVyQ291bnRlcihmb250OiBvdGYuRm9udCwgY2hhcmFjdGVyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKGNoYXJhY3Rlci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInR5cGUtY291bnRlcnMudHMgfCBQYXRoQ291bnRlckNvdW50ZXIgYWNjZXB0ZWQgYSBjaGFyYWN0ZXIgb2Ygc2l6ZSBcIiArIGNoYXJhY3Rlci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvbnQgc2l6ZSBhbmQgeCBhbmQgeSBjb29yZHMgdXNlZCBoZXJlIGFyZSBkdW1taWVzXHJcbiAgICByZXR1cm4gcGF0aENvdW50ZXJDb3VudGVyKGZvbnQuZ2V0UGF0aChjaGFyYWN0ZXJbMF0sIDAsIDAsIDIwKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoQ291bnRlckNvdW50ZXIoY2hhcmFjdGVyUGF0aDogb3RmLlBhdGgpOiBudW1iZXIge1xyXG5cclxuICAgIGxldCBjb3VudGVyQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBjb21tYW5kIG9mIGNoYXJhY3RlclBhdGguY29tbWFuZHMpIHtcclxuICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIlpcIikge1xyXG4gICAgICAgICAgICBjb3VudGVyQ291bnRlciArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGFzc3VtZXMgdGhhdCBvdGYuUGF0aCBTVkcgZHJhd2luZyBjb21tYW5kcyBhcmUgc3RydWN0dXJlZCB3aXRoIHRoZSBiYXNlIGxldHRlcmZvcm0gc2hhcGVcclxuICAgIC8vIGZvbGxvd2VkIGJ5IGNvdW50ZXJzXHJcbiAgICByZXR1cm4gY291bnRlckNvdW50ZXIgPT09IDAgPyAwIDogY291bnRlckNvdW50ZXIgLSAxO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U2hhcGVzRnJvbVBhdGgocGF0aDogb3RmLlBhdGgpIDogb3RmLlBhdGhDb21tYW5kW11bXSB7XHJcbiAgICBsZXQgY3VyclNoYXBlQ291bnRlcjogbnVtYmVyID0gMDtcclxuICAgIGxldCBjdXJyU2hhcGVzOiBvdGYuUGF0aENvbW1hbmRbXVtdID0gW1tdXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5jb21tYW5kcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBwYXRoLmNvbW1hbmRzW2ldO1xyXG5cclxuICAgICAgICBpZiAoY29tbWFuZC50eXBlICE9PSBcIlpcIikgeyAvLyBpZiB3ZSBhcmVuJ3QgYXQgYSBjbG9zZSBzaGFwZSBjb21tYW5kXHJcbiAgICAgICAgICAgIGN1cnJTaGFwZXNbY3VyclNoYXBlQ291bnRlcl0ucHVzaChjb21tYW5kKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBhdCBhIGNsb3NlIHNoYXBlIGNvbW1hbmRcclxuICAgICAgICAgICAgLy8gcHVzaCBcIlpcIlxyXG4gICAgICAgICAgICBjdXJyU2hhcGVzW2N1cnJTaGFwZUNvdW50ZXJdLnB1c2goY29tbWFuZClcclxuICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBjdXJyU2hhcGVDb3VudGVyXHJcbiAgICAgICAgICAgIGN1cnJTaGFwZUNvdW50ZXIrKztcclxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlbid0IGF0IHRoZSBsYXN0IFwiWlwiIHRoZW4ga2VlcCBleHBhbmRpbmcgdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYgKGkgIT09IHBhdGguY29tbWFuZHMubGVuZ3RoIC0gMSkgY3VyclNoYXBlcy5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJTaGFwZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgocGF0aENvbW1hbmRzOiBvdGYuUGF0aENvbW1hbmRbXSkgOiAoUG9pbnQgfCBudWxsKSB7XHJcbiAgICBmb3IgKGxldCBjb21tYW5kIG9mIHBhdGhDb21tYW5kcykge1xyXG4gICAgICAgIGlmIChjb21tYW5kLnR5cGUgPT09IFwiQ1wiIHx8ICAvLyBjdWJpYyBiZXppZXJcclxuICAgICAgICAgICAgY29tbWFuZC50eXBlID09PSBcIkxcIiB8fCAgLy8gbGluZSB0b1xyXG4gICAgICAgICAgICBjb21tYW5kLnR5cGUgPT09IFwiUVwiKSB7ICAvLyBxdWFkcmF0aWMgYmV6aWVyXHJcbiAgICAgICAgICAgIHJldHVybiB7IHg6IGNvbW1hbmQueCwgeTogY29tbWFuZC55IH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0aENvbW1hbmRzVG9QYXRoRGF0YShwYXRoQ29tbWFuZHM6IG90Zi5QYXRoQ29tbWFuZFtdLCBkZWNpbWFsUGxhY2VzOiBudW1iZXIpIDogc3RyaW5nIHtcclxuICAgIGxldCBwYXRoRGF0YTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBjb21tYW5kIG9mIHBhdGhDb21tYW5kcykge1xyXG4gICAgICAgIC8vIFwiWlwiIGlzIGFwcGVuZGVkIGF1dG9tYXRpY2FsbHkgaGVyZVxyXG4gICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQudHlwZSArIFwiIFwiO1xyXG4gICAgICAgIHN3aXRjaCAoY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLngudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQueDEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDIudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55Mi50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUVwiOlxyXG4gICAgICAgICAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC54MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRoRGF0YTtcclxufSIsImltcG9ydCBwNSBmcm9tICdwNSc7XHJcbmltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5pbXBvcnQge3BhdGhDb3VudGVyQ291bnRlcn0gZnJvbSBcIi4vdXRpbHMvdHlwZS1jb3VudGVyc1wiO1xyXG5pbXBvcnQge2V4dHJhY3RTaGFwZXNGcm9tUGF0aCwgZ2V0Rmlyc3RTdGFydFBvaW50SW5QYXRoLCBwYXRoQ29tbWFuZHNUb1BhdGhEYXRhfSBmcm9tIFwiLi91dGlscy9vdGYtcGF0aC11dGlsc1wiO1xyXG5cclxudHlwZSBGb250UmVuZGVyU3RyYXRlZ3kgPSAocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gdm9pZDtcclxudHlwZSBGb250UHJlcHJvY2Vzc29yID0gKHA1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLCBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkgPT4gb3RmLlBhdGhbXTtcclxuXHJcbmV4cG9ydCBlbnVtIEZpbGxTdGF0dXMge1xyXG4gICAgRklMTEVEID0gXCJmaWxsZWRcIixcclxuICAgIE9QRU4gPSBcIm9wZW5cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dEZvcmVncm91bmRDb2xvdXIgPSAwO1xyXG5leHBvcnQgY29uc3QgdGV4dEJhY2tncm91bmRDb2xvdXIgPSAyNTU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dFBhdGhzKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBvdGYuRm9udCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNpemU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UHJlcHJvY2Vzc29yOiBGb250UHJlcHJvY2Vzc29yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRQcmVwcm9jZXNzb3JPcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6XHJcbiAgICB7IG9yaWdpbmFsVGV4dFBhdGg6IG90Zi5QYXRoW10sIHByb2Nlc3NlZFRleHRQYXRoOiBvdGYuUGF0aFtdIH0ge1xyXG4gICAgY29uc3QgdGV4dFBhdGg6IG90Zi5QYXRoID0gZm9udC5nZXRQYXRoKHRleHQsIDAsIDAsIHR5cGVTaXplLCB7IGtlcm5pbmc6IHRydWUgfSk7XHJcbiAgICBjb25zdCB0ZXh0Qm91bmRpbmdCb3g6IG90Zi5Cb3VuZGluZ0JveCA9IHRleHRQYXRoLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBjb25zdCB0ZXh0SGVpZ2h0OiBudW1iZXIgPSB0ZXh0Qm91bmRpbmdCb3gueTIgLSB0ZXh0Qm91bmRpbmdCb3gueTE7XHJcbiAgICBjb25zdCB0ZXh0V2lkdGg6IG51bWJlciA9IHRleHRCb3VuZGluZ0JveC54MiAtIHRleHRCb3VuZGluZ0JveC54MTtcclxuXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gZm9udC5nZXRQYXRocyhcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIChwNS53aW5kb3dXaWR0aCAtIHRleHRXaWR0aCkgLyAyLFxyXG4gICAgICAgIChwNS53aW5kb3dIZWlnaHQgLSB0ZXh0SGVpZ2h0ICsgdHlwZVNpemUpIC8gMixcclxuICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICB7IGtlcm5pbmc6IHRydWUgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gZm9udFByZXByb2Nlc3NvcihwNSwgdGV4dFBhdGhzLCBmb250UHJlcHJvY2Vzc29yT3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKHRleHRQYXRocy5sZW5ndGggIT09IHByb2Nlc3NlZFRleHRQYXRocy5sZW5ndGgpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1mb250LnRzIHwgc29tZXRoaW5nIGhhcyBnb25lIHdyb25nIGluIG90ZlxccmVuZGVyLWZvbnQudHMjZ2V0VGV4dFBhdGhzXCIgK1xyXG4gICAgICAgICAgICBcIiByZWdhcmRpbmcgdGhlIGxlbmd0aHMgb2YgdGhlIG91dHB1dHRlZCBvdGYuUGF0aFtdXCIpO1xyXG5cclxuICAgIHJldHVybiB7IG9yaWdpbmFsVGV4dFBhdGg6IHRleHRQYXRocywgcHJvY2Vzc2VkVGV4dFBhdGg6IHByb2Nlc3NlZFRleHRQYXRocyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9udChwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoczogb3RmLlBhdGhbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFJlbmRlcmVyOiBGb250UmVuZGVyU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRSZW5kZXJlck9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocz86IG90Zi5QYXRoW10pIDogb3RmLlBhdGhbXSB7XHJcblxyXG4gICAgLy8gc29ydGluZyBvdXQgcmVuZGVyaW5nIGhvbGVzIGluIGZvbnRzXHJcbiAgICAvLyB1bnByb2Nlc3NlZFRleHRQYXRocyBjYW4gYmUgdXNlZCBoZXJlIGlmIHRoZSBwcm9jZXNzaW5nIHlvdSBkbyBvbiB5b3VyIHRleHQgaXMgc28gZXh0cmVtZSB0aGF0IGl0IGRlc3Ryb3lzXHJcbiAgICAvLyBteSB2ZXJ5IGZpY2tsZSBhbGdvcml0aG0gZm9yIGRldGVybWluaW5nIHRoZSBudW1iZXIgYW5kIG9yZGVyIG9mIGhvbGVzIGluIGEgbGV0dGVyZm9ybSA6KVxyXG4gICAgY29uc3QgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10gPSB1bnByb2Nlc3NlZFRleHRQYXRocyA9PT0gdW5kZWZpbmVkID9cclxuICAgICAgICBnZXRUZXh0RmlsbFN0YXR1c2VzKHA1LCB0ZXh0UGF0aHMpIDogZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNSwgdW5wcm9jZXNzZWRUZXh0UGF0aHMpO1xyXG5cclxuICAgIC8vIHVucHJvY2Vzc2VkVGV4dFBhdGhzIHRlbmQgdG8gYmUgdXNlZnVsIGluIEZvbnRSZW5kZXJTdHJhdGVneSBhcyB0aGV5IHByZXNlcnZlIHRoZSBvcmlnaW5hbCBnZW9tZXRyeVxyXG4gICAgLy8gYW5kIGN1cnZlcyBvZiB0aGUgZm9udCBiZWZvcmUgdGhleSBhcmUgcHJvY2Vzc2VkIGNyYXppbHlcclxuICAgIGlmIChmb250UmVuZGVyZXJPcHRpb25zICE9PSB1bmRlZmluZWQgJiYgdW5wcm9jZXNzZWRUZXh0UGF0aHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvbnRSZW5kZXJlck9wdGlvbnNbXCJ1bnByb2Nlc3NlZFRleHRQYXRoc1wiXSA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdHVhbGx5IHJlbmRlcmluZyBmb250XHJcbiAgICBmb250UmVuZGVyZXIocDUsIHRleHRQYXRocywgdGV4dEZpbGxTdGF0dXNlcywgZm9udFJlbmRlcmVyT3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHRleHRQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKHNpZGVMZW5ndGg6IG51bWJlciwgc2FtcGxlVW5pdDogbnVtYmVyKTogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdIHtcclxuICAgIGlmIChzaWRlTGVuZ3RoICUgMiA9PT0gMCApIHtcclxuICAgICAgICBzaWRlTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgXCJyZW5kZXItZm9udC1vdGYudHMgfCBnZW5lcmF0ZVNhbXBsZU9mZnNldEdyaWQgcmVjZWl2ZWQgYW4gZXZlbiBzaWRlIGxlbmd0aCBvZiBcIiArIChzaWRlTGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgKyBcIi4gVGhlIGFjdHVhbCBzaWRlIGxlbmd0aCBvZiB0aGUgZ3JpZCBnZW5lcmF0ZWQgd2lsbCBiZSBvZGQ6IFwiICsgc2lkZUxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNhbXBsZU9mZnNldEdyaWQ6IFt4OiBudW1iZXIsIHk6IG51bWJlcl1bXSA9IFtdO1xyXG4gICAgbGV0IG1heFNhbXBsZVVuaXRTY2FsZTogbnVtYmVyID0gTWF0aC5mbG9vcihzaWRlTGVuZ3RoIC8gMik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IG1heFNhbXBsZVVuaXRTY2FsZTsgaSA+PSAtbWF4U2FtcGxlVW5pdFNjYWxlOyBpLS0pIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gLW1heFNhbXBsZVVuaXRTY2FsZTsgaiA8PSBtYXhTYW1wbGVVbml0U2NhbGU7IGorKykge1xyXG4gICAgICAgICAgICBzYW1wbGVPZmZzZXRHcmlkLnB1c2goW2ogKiBzYW1wbGVVbml0LCAtaSAqIHNhbXBsZVVuaXRdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2FtcGxlT2Zmc2V0R3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNTogcDUsIHRleHRQYXRoczogb3RmLlBhdGhbXSk6IEZpbGxTdGF0dXNbXVtdIHtcclxuICAgIGNvbnN0IHRvUGF0aERhdGFSZXNvbHV0aW9uOiBudW1iZXIgPSAzO1xyXG4gICAgY29uc3Qgc2FtcGxlVW5pdDogbnVtYmVyID0gMjtcclxuICAgIGNvbnN0IHNhbXBsZU9mZnNldEtlcm5lbDogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdID0gZ2VuZXJhdGVTYW1wbGVPZmZzZXRHcmlkKDUsIHNhbXBsZVVuaXQpO1xyXG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBwNS5kcmF3aW5nQ29udGV4dDtcclxuXHJcbiAgICBsZXQgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgY29uc3QgZW50aXJlTGV0dGVyZm9ybVBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ZXJDb3VudDogbnVtYmVyID0gcGF0aENvdW50ZXJDb3VudGVyKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgdGV4dEZpbGxTdGF0dXNlcy5wdXNoKFtdKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50ZXJDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICBjb250aW51ZTsgLy8gd2lsbCBpbmNyZW1lbnQgY2hhcmFjdGVySW5kZXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGVzOiBvdGYuUGF0aENvbW1hbmRbXVtdID0gZXh0cmFjdFNoYXBlc0Zyb21QYXRoKGVudGlyZUxldHRlcmZvcm1QYXRoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlIG9mIGxldHRlcmZvcm1Db21wb25lbnRTaGFwZXMpIHtcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50OiBQb2ludCB8IG51bGwgPSBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzYW1wbGVQb2ludCA9PT0gbnVsbCB8fCBzYW1wbGVQb2ludCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgc2FtcGxlUG9pbnQueCBhbmQgc2FtcGxlUG9pbnQueSB3YXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBzYW1wbGUgYXJvdW5kIHRoZSAoc2FtcGxlWCwgc2FtcGxlWSkgY29vcmRpbmF0ZSB3ZSBoYXZlIGFuZCB0ZXN0IGFnYWluc3RcclxuICAgICAgICAgICAgLy8gY3R4LmlzUG9pbnRJblBhdGggd2l0aCB0aGUgcmVsZXZhbnQgZW50aXJlTGV0dGVyZm9ybVBhdGggYXMgdGhlIHBhdGhcclxuICAgICAgICAgICAgbGV0IHNhbXBsZVBvaW50T2Zmc2V0OiBQb2ludCA9IHt4OiBzYW1wbGVQb2ludC54LCB5OiBzYW1wbGVQb2ludC55fTtcclxuICAgICAgICAgICAgbGV0IHdhc0ZpbGxTdGF0dXNBc3NpZ25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgc2FtcGxlT2Zmc2V0IG9mIHNhbXBsZU9mZnNldEtlcm5lbCkge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlUG9pbnRPZmZzZXQueCA9IHNhbXBsZVBvaW50LnggKyBzYW1wbGVPZmZzZXRbMF07XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVQb2ludE9mZnNldC55ID0gc2FtcGxlUG9pbnQueSArIHNhbXBsZU9mZnNldFsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWFyY2hpbmcgdG8gc2VlIGlmIHdlJ3JlIGluc2lkZSB0aGUgY3VycmVudCBzaGFwZVxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHA1LnBpeGVsRGVuc2l0eSgpIHBhcnQgaXMgQ1JVQ0lBTCFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlclBhdGgyRDogUGF0aDJEID1cclxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aDJEKHBhdGhDb21tYW5kc1RvUGF0aERhdGEobGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlLCB0b1BhdGhEYXRhUmVzb2x1dGlvbikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblBhdGg6IGJvb2xlYW4gPSBjdHguaXNQb2ludEluUGF0aChcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHN0b3Agc2VhcmNoaW5nIGlmIHdlJ3ZlIGZvdW5kIGEgcG9pbnQgd2l0aGluIHRoZSBwYXRoIGFuZCBub3Qgb24gdGhlIHN0cm9rZSBhcyB0aGlzIHdvbid0XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHVwIGluIGZ1dHVyZSBpc1BvaW50SW5QYXRoIGNhbGN1bGF0aW9ucyB3aXRoIHRoZSBlbnRpcmUgbGV0dGVyZm9ybVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzSW5QYXRoICYmICFpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FzRmlsbFN0YXR1c0Fzc2lnbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYXJhY3RlclNoYXBlUGF0aDJEOiBQYXRoMkQgPSBuZXcgUGF0aDJEKGVudGlyZUxldHRlcmZvcm1QYXRoLnRvUGF0aERhdGEodG9QYXRoRGF0YVJlc29sdXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiBzYW1wbGUgdGhpcyBwb2ludCBpbiB0aGUgdGV4dFBhdGggdXNpbmcgY3R4LmlzUG9pbnRJblBhdGhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0luUGF0aDogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5QYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJTaGFwZVBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LnksXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNJblN0cm9rZTogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5TdHJva2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclNoYXBlUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBvbmx5IE5PVCBpbiBhIGNvdW50ZXIvc29tZXRoaW5nIHRoYXQgc2hvdWxkbid0IGJlIGZpbGxlZCB3aGVuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXNJblBhdGggPT09IEZBTFNFICYmIGlzSW5TdHJva2UgPT09IEZBTFNFO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luUGF0aCB8fCBpc0luU3Ryb2tlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5PUEVOKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPIG5lZWQgdG8gZG8gZXJyb3IgaGFuZGxpbmcgZm9yIHdoYXQgaGFwcGVucyB3aGVuIHdlIGZhbGwgdGhyb3VnaCBoZXJlIHdpdGhvdXQgYSBzdGF0dXNcclxuICAgICAgICAgICAgaWYgKCF3YXNGaWxsU3RhdHVzQXNzaWduZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRleHRGaWxsU3RhdHVzZXNbY2hhcmFjdGVySW5kZXhdLnB1c2goRmlsbFN0YXR1cy5GSUxMRUQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1mb250LW90Zi50cyB8IGdldFRleHRGaWxsU3RhdHVzZXMgY291bGQgbm90IGZpbmQgYSBzdWl0YWJsZSBzYW1wbGUgcG9pbnQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiKGF0IGNoYXJhY3RlciBpbmRleCBcIiArIGNoYXJhY3RlckluZGV4ICsgXCIpIGZvciBjYWxjdWxhdGluZyB0ZXh0IGZpbGwgc3RhdHVzXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHRGaWxsU3RhdHVzZXM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBwNSBmcm9tICdwNSc7XHJcbmltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5cclxuaW1wb3J0ICdAc3JjL3N0eWxlcy9za2V0Y2guY3NzJztcclxuXHJcbmltcG9ydCBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCBmcm9tICdAc3JjL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmJztcclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVJdGFsaWNQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtSXRhbGljLnR0Zic7XHJcbmltcG9ydCBsaWJyZUJhc2tlcnZpbGxlQm9sZFBhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1Cb2xkLnR0Zic7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIFA1Rm9udFJlbmRlcmVyIGZyb20gJ0BzcmMvcmVuZGVyZXJzL3A1L3JlbmRlci1mb250JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBPVEZGb250UmVuZGVyZXIgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBPVEZGb250UmVuZGVyU3RyYXRlZ3kgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1zdHJhdGVneSc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgT1RGUGF0aFByZXByb2Nlc3NvciBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcGF0aC1wcmVwcm9jZXNzb3InO1xyXG5cclxuZnVuY3Rpb24gc2tldGNoKHA1OiBwNSk6IHZvaWQge1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCBsaWJyZUJhc2tlcnZpbGxlUmVnUDUgOiBwNS5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdPVEYgOiBvdGYuRm9udDtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCBsaWJyZUJhc2tlcnZpbGxlSXRhbGljUDUgOiBwNS5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVCb2xkUDUgOiBwNS5Gb250O1xyXG5cclxuICAgIGxldCBzYW1wbGVUZXh0czogc3RyaW5nW10gPSBbXCJBcmNoYWVvcHRlcnl4XCIsIFwiVGhlIOKAnEJpZyBGaXZl4oCdXCIsIFwiRW5kLU9yZG92aWNpYW5cIiwgXCJMYXRlIERldm9uaWFuXCIsIFwiRW5kLVBlcm1pYW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbmQtVHJpYXNzaWNcIiwgXCJFbmQtQ3JldGFjZW91c1wiXTtcclxuXHJcbiAgICBsZXQgdGV4dDogc3RyaW5nID0gc2FtcGxlVGV4dHNbTWF0aC5yb3VuZChwNS5yYW5kb20oMCwgc2FtcGxlVGV4dHMubGVuZ3RoIC0gMSkpXTtcclxuICAgIGxldCB0eXBlU2l6ZTogbnVtYmVyID0gMTQ4O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCB1bnByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuXHJcbiAgICBsZXQgZXJvc2lvblN0cmVuZ3RoU2xpZGVyOiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dDogcDUuRWxlbWVudDtcclxuICAgIGxldCBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXI6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dDogcDUuRWxlbWVudDtcclxuXHJcbiAgICBmdW5jdGlvbiByZWRyYXdGb250KGltbWVkaWF0ZWx5UmVkcmF3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHA1LmJhY2tncm91bmQoMjU1KTtcclxuXHJcbiAgICAgICAgaWYgKGltbWVkaWF0ZWx5UmVkcmF3KSB7IC8vIHRoaXMgY29uZGl0aW9uIGlzIGZvciB3aGVuIHRoZSB0ZXh0IGlzIHVwZGF0ZWQgKGZvciBkZWJ1Z2dpbmcpXHJcbiAgICAgICAgICAgIGxldCBwYXRoczoge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0UGF0aDogb3RmLlBhdGhbXVxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkVGV4dFBhdGg6IG90Zi5QYXRoW11cclxuICAgICAgICAgICAgfSA9IE9URkZvbnRSZW5kZXJlci5nZXRUZXh0UGF0aHMoXHJcbiAgICAgICAgICAgICAgICBwNSxcclxuICAgICAgICAgICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdPVEYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgdHlwZVNpemUsXHJcbiAgICAgICAgICAgICAgICBPVEZQYXRoUHJlcHJvY2Vzc29yLmZyZWFrVG8sXHJcbiAgICAgICAgICAgICAgICB7IGNyYXppbmVzczogZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0UGF0aHMgPSBwYXRocy5wcm9jZXNzZWRUZXh0UGF0aDtcclxuICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHMgPSBwYXRocy5vcmlnaW5hbFRleHRQYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT1RGRm9udFJlbmRlcmVyLnJlbmRlckZvbnQoXHJcbiAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICB0ZXh0UGF0aHMsXHJcbiAgICAgICAgICAgIE9URkZvbnRSZW5kZXJTdHJhdGVneS5lcm9kZSxcclxuICAgICAgICAgICAgeyBlcm9zaW9uU3RyZW5ndGg6IC1lcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSB9LFxyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRoc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcDUgZm9udCBpbml0aWFsaXphdGlvblxyXG4gICAgcDUucHJlbG9hZCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnUDUgPSBwNS5sb2FkRm9udChsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCk7XHJcbiAgICAgICAgbGlicmVCYXNrZXJ2aWxsZUl0YWxpY1A1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZUl0YWxpY1BhdGgpO1xyXG4gICAgICAgIGxpYnJlQmFza2VydmlsbGVCb2xkUDUgPSBwNS5sb2FkRm9udChsaWJyZUJhc2tlcnZpbGxlQm9sZFBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LnNldHVwID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYWZ0ZXJwcmludFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZHJhd0ZvbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUocGFyc2VGbG9hdChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKSArIDIpO1xyXG4gICAgICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuaHRtbChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcDUuY3JlYXRlQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBvcGVudHlwZS5qcyBmb250IGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgb3RmLmxvYWQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgsIChlcnJvciwgZm9udCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW50eXBlLmpzIHwgXCIgKyBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCArIFwiIGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGlmIChmb250ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdPVEYgPSBmb250O1xyXG4gICAgICAgICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBsb2FkZWQuXCIpO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBpdCB3YXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIHVwIHNsaWRlcnMgZm9yIGRlYnVnZ2luZ1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlciA9IHA1LmNyZWF0ZVNsaWRlcigwLCAxMCwgMy41NiwgMC4wMSk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnBvc2l0aW9uKDY1LCAxMCk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnNpemUoMjAwKTtcclxuICAgICAgICBsZXQgZnJlYWtUb0NyYXppbmVzc0xhYmVsOiBwNS5FbGVtZW50ID0gcDUuY3JlYXRlUChcImNyYXp5XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJsZWZ0OiAxMHB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcInRvcDogLTNweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0ID0gcDUuY3JlYXRlUChTdHJpbmcoZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcImxlZnQ6IDI4NXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJ0b3A6IC0zcHhcIik7XHJcbiAgICAgICAgKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlciBhcyBhbnkpLmNoYW5nZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KCk7XHJcbiAgICAgICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuaHRtbChTdHJpbmcoZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlciA9IHA1LmNyZWF0ZVNsaWRlcigwLCAxMCwgNC40NCwgMC4wMSk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnBvc2l0aW9uKDY1LCA1MCk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnNpemUoMjAwKTtcclxuICAgICAgICBsZXQgZXJvc2lvblN0cmVuZ3RoTGFiZWw6IHA1LkVsZW1lbnQgPSBwNS5jcmVhdGVQKFwiZXJvZGVcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC13ZWlnaHQ6IGJvbGRcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJsZWZ0OiAxMHB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwidG9wOiAzN3B4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dCA9IHA1LmNyZWF0ZVAoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImZvbnQtZmFtaWx5OiBtb25vc3BhY2VcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImxlZnQ6IDI4NXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcInRvcDogMzdweFwiKTtcclxuICAgICAgICAoZXJvc2lvblN0cmVuZ3RoU2xpZGVyIGFzIGFueSkuY2hhbmdlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZHJhd0ZvbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuaHRtbChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcDUud2luZG93UmVzaXplZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgcDUucmVzaXplQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5rZXlQcmVzc2VkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgbmVlZHNVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHA1LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICAgICAgbmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5lZWRzVXBkYXRlKSByZWRyYXdGb250KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBwNShza2V0Y2gpO1xyXG4iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuaW1wb3J0IHsgRmlsbFN0YXR1cywgdGV4dEJhY2tncm91bmRDb2xvdXIsIHRleHRGb3JlZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4vcmVuZGVyLWZvbnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsZWQocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdKSB7XHJcblxyXG4gICAgcDUucHVzaCgpO1xyXG4gICAgcDUubm9TdHJva2UoKTtcclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRmlsbFN0YXR1czogRmlsbFN0YXR1c1tdID0gdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgbGV0IHRleHRGaWxsU3RhdHVzQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY2hhcmFjdGVyUGF0aC5jb21tYW5kcykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgICAgICAgICBwNS5iZWdpblNoYXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcDUudmVydGV4KGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUudmVydGV4KGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuYmV6aWVyVmVydGV4KGNvbW1hbmQueDEsIGNvbW1hbmQueTEsIGNvbW1hbmQueDIsIGNvbW1hbmQueTIsIGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJRXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUucXVhZHJhdGljVmVydGV4KGNvbW1hbmQueDEsIGNvbW1hbmQueTEsIGNvbW1hbmQueCwgY29tbWFuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJaXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuRklMTEVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LmZpbGwodGV4dEZvcmVncm91bmRDb2xvdXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUuZmlsbCh0ZXh0QmFja2dyb3VuZENvbG91cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcDUucG9wKCk7XHJcbn1cclxuXHJcbi8vIG9wdGlvbnMgbG9va3MgbGlrZVxyXG5leHBvcnQgZnVuY3Rpb24gZXJvZGUocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xyXG5cclxuICAgIC8vIG51ZGdlIGZhY3RvciBvZiA3LTguMyBpcyBpZGVhbCBmb3IgYSBsZXR0ZXJmb3JtIHRoYXQgaXMgYWxtb3N0IG5vbi1leGlzdGVudFxyXG4gICAgbGV0IG51ZGdlRmFjdG9yOiBudW1iZXI7IC8vLTcuNjsvLy04LjM7XHJcbiAgICBsZXQgdW5wcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW107XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCAhKFwiZXJvc2lvblN0cmVuZ3RoXCIgaW4gb3B0aW9ucykgfHwgIShcInVucHJvY2Vzc2VkVGV4dFBhdGhzXCIgaW4gb3B0aW9ucykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLXN0cmF0ZWd5LnRzIHwgZnJlYWtUb0Vyb2RlZCByZWNlaXZlZCBtYWxmb3JtZWQgb3B0aW9ucyBwYXJhbWV0ZXIuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbnVkZ2VGYWN0b3IgPSBvcHRpb25zW1wiZXJvc2lvblN0cmVuZ3RoXCJdO1xyXG4gICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzID0gb3B0aW9uc1tcInVucHJvY2Vzc2VkVGV4dFBhdGhzXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LnB1c2goKTtcclxuICAgIHA1Lm5vU3Ryb2tlKCk7XHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB0ZXh0UGF0aHNbY2hhcmFjdGVySW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IHVucHJvY2Vzc2VkQ2hhcmFjdGVyUGF0aDogb3RmLlBhdGggPSB1bnByb2Nlc3NlZFRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyRmlsbFN0YXR1czogRmlsbFN0YXR1c1tdID0gdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgbGV0IHRleHRGaWxsU3RhdHVzQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgcDUuZmlsbCh0ZXh0Rm9yZWdyb3VuZENvbG91cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJGaWxsU3RhdHVzW3RleHRGaWxsU3RhdHVzQ291bnRlcl0gPT09IEZpbGxTdGF0dXMuT1BFTikge1xyXG4gICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2aW91c1BvaW50OiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYXJhY3RlclBhdGguY29tbWFuZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY29tbWFuZDogb3RmLlBhdGhDb21tYW5kID0gY2hhcmFjdGVyUGF0aC5jb21tYW5kc1tpXTtcclxuICAgICAgICAgICAgbGV0IHVucHJvY2Vzc2VkQ29tbWFuZDogb3RmLlBhdGhDb21tYW5kID0gdW5wcm9jZXNzZWRDaGFyYWN0ZXJQYXRoLmNvbW1hbmRzW2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGR4OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBkeTogbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgbWFnbml0dWRlOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRZOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlICE9PSB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IHNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZyBpbiBvdGZcXHJlbmRlci1mb250LnRzI2dldFRleHRQYXRoc1wiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiByZWdhcmRpbmcgdGhlIGxlbmd0aHMgb2YgdGhlIG91dHB1dHRlZCBvdGYuUGF0aFtdXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZC50eXBlID09PSBcIk1cIiAmJiB1bnByb2Nlc3NlZENvbW1hbmQudHlwZSA9PT0gXCJNXCIpIHtcclxuICAgICAgICAgICAgICAgIHA1LmJlZ2luU2hhcGUoKTtcclxuICAgICAgICAgICAgICAgIGR4ID0gdW5wcm9jZXNzZWRDb21tYW5kLnkgLSBwcmV2aW91c1BvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBkeSA9IHByZXZpb3VzUG9pbnQueCAtIHVucHJvY2Vzc2VkQ29tbWFuZC54O1xyXG4gICAgICAgICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAoZHggLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gKGR5IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgcDUudmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueCArIG9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55ICsgb2Zmc2V0WVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJMXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiTFwiKSB7XHJcbiAgICAgICAgICAgICAgICBkeCA9IHVucHJvY2Vzc2VkQ29tbWFuZC55IC0gcHJldmlvdXNQb2ludC55O1xyXG4gICAgICAgICAgICAgICAgZHkgPSBwcmV2aW91c1BvaW50LnggLSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gKGR4IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yLzEuNTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSAoZHkgLyBtYWduaXR1ZGUpICogbnVkZ2VGYWN0b3IvMS41O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdGhpcyBtYWtlcyBmb250IG91dGxpbmVzIHNwaWt5IGFuZCBub3QgdGhpbiB3aGljaCBpcyBiYWRcclxuICAgICAgICAgICAgICAgIHA1LnZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnggKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueSArIG9mZnNldFlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHByZXZpb3VzIHBvaW50IGNvbnNpc3RlbnRseVxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiQ1wiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIkNcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInJlbmRlci1zdHJhdGVneS50cyB8IGEgY3ViaWMgYmV6aWVyIHdhcyBkcmF3biEgVGhpcyBpcyByZWFsbHkgYmFkLlwiKVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBpIGhhdmVuJ3Qgc2VlbiBhIHNpbmdsZSBjdXJ2ZSBpbnZva2UgdGhpcywgc28gSSd2ZSBqdXN0IGlnbm9yZWQgdGhpc1xyXG4gICAgICAgICAgICAgICAgcDUuYmV6aWVyVmVydGV4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC55MSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueTIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUG9pbnQueSA9IHVucHJvY2Vzc2VkQ29tbWFuZC55O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJRXCIgJiYgdW5wcm9jZXNzZWRDb21tYW5kLnR5cGUgPT09IFwiUVwiKSB7XHJcbiAgICAgICAgICAgICAgICBkeCA9IHVucHJvY2Vzc2VkQ29tbWFuZC55IC0gdW5wcm9jZXNzZWRDb21tYW5kLnkxO1xyXG4gICAgICAgICAgICAgICAgZHkgPSB1bnByb2Nlc3NlZENvbW1hbmQueDEgLSB1bnByb2Nlc3NlZENvbW1hbmQueDtcclxuICAgICAgICAgICAgICAgIG1hZ25pdHVkZSA9IE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gKGR4IC8gbWFnbml0dWRlKSAqIG51ZGdlRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IChkeSAvIG1hZ25pdHVkZSkgKiBudWRnZUZhY3RvcjtcclxuICAgICAgICAgICAgICAgIHA1LnF1YWRyYXRpY1ZlcnRleChcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngxICsgb2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnkxICsgb2Zmc2V0WSxcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kLnggKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQueSArIG9mZnNldFlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQb2ludC54ID0gdW5wcm9jZXNzZWRDb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSB1bnByb2Nlc3NlZENvbW1hbmQueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLnR5cGUgPT09IFwiWlwiICYmIHVucHJvY2Vzc2VkQ29tbWFuZC50eXBlID09PSBcIlpcIikge1xyXG4gICAgICAgICAgICAgICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlckZpbGxTdGF0dXNbdGV4dEZpbGxTdGF0dXNDb3VudGVyXSA9PT0gRmlsbFN0YXR1cy5GSUxMRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRGb3JlZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyRmlsbFN0YXR1c1t0ZXh0RmlsbFN0YXR1c0NvdW50ZXJdID09PSBGaWxsU3RhdHVzLk9QRU4pIHtcclxuICAgICAgICAgICAgICAgICAgICBwNS5maWxsKHRleHRCYWNrZ3JvdW5kQ29sb3VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHA1LnBvcCgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==