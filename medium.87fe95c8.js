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

/***/ 331:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/.pnpm/p5@1.11.10/node_modules/p5/lib/p5.min.js
var p5_min = __webpack_require__(996);
var p5_min_default = /*#__PURE__*/__webpack_require__.n(p5_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/opentype.js@1.3.4/node_modules/opentype.js/dist/opentype.module.js
var opentype_module = __webpack_require__(652);
// EXTERNAL MODULE: ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf
var LibreBaskerville_Regular = __webpack_require__(496);
// EXTERNAL MODULE: ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf
var LibreBaskerville_Italic = __webpack_require__(164);
// EXTERNAL MODULE: ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf
var LibreBaskerville_Bold = __webpack_require__(97);
;// ./src/renderers/p5/render-font.ts
function render(p5, font, text, fontSize, fontSampleFactor, fontRenderer) {
    const numberOfLines = text.split("\n").length;
    p5.textFont(font);
    p5.textSize(fontSize);
    let points = font.textToPoints(text, (p5.windowWidth - p5.textWidth(text)) / 2, (p5.windowHeight + -numberOfLines * (p5.textAscent() - p5.textDescent())) / 2, fontSize, { sampleFactor: fontSampleFactor });
    fontRenderer(p5, points);
}
function renderStrategyRandomPoints(p5, points) {
    p5.strokeWeight(1.75);
    for (let p of points) {
        p5.point(p.x + p5.random(0, 15), p.y + p5.random(0, 5));
    }
}
function renderStrategyPoints(p5, points) {
    p5.strokeWeight(2);
    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        p5.point(p.x, p.y);
    }
}
function renderStrategyOutlined(p5, points) {
    let maxJumpDistance = 7;
    for (let i = 0; i < points.length; i++) {
        let point1 = points[i];
        if (i + 1 >= points.length)
            break;
        let point2 = points[i + 1];
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        if (Math.sqrt(dx ** 2 + dy ** 2) > maxJumpDistance)
            continue;
        p5.line(point1.x, point1.y, point2.x, point2.y);
    }
}
function renderStrategyRandomOutlined(p5, points) {
    let maxJumpDistance = 7;
    for (let i = 0; i < points.length; i++) {
        let point1 = points[i];
        if (i + 1 >= points.length)
            break;
        let point2 = points[i + 1];
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        if (Math.sqrt(dx ** 2 + dy ** 2) > maxJumpDistance)
            continue;
        let randomUnit = p5.random(0, 100);
        if (randomUnit > 45) {
            let point3X = point1.x + dx + p5.random(-randomUnit / 10, randomUnit / 20);
            let point3Y = point1.y + dy + p5.random(-randomUnit / 10, randomUnit / 20);
            p5.line(point1.x, point1.y, point3X, point3Y);
            p5.line(point3X, point3Y, point2.x, point2.y);
        }
        else {
            p5.line(point1.x, point1.y, point2.x, point2.y);
        }
    }
}
function renderStrategyFilled(p5, points) {
    let maxJumpDistance = 20;
    p5.push();
    p5.strokeWeight(0);
    p5.beginShape();
    for (let i = 0; i < points.length; i++) {
        let point1 = points[i];
        if (i + 1 >= points.length)
            break;
        let point2 = points[i + 1];
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        if (Math.sqrt(dx ** 2 + dy ** 2) > maxJumpDistance) {
            p5.endShape(p5.CLOSE);
            p5.beginShape();
            continue;
        }
        p5.vertex(point1.x, point1.y);
    }
    p5.endShape(p5.CLOSE);
    p5.pop();
}
function renderStrategyBeowulf(p5, points) {
    let maxJumpDistance = 20;
    let randomUnitModifier = 0.0000000000000000000000005;
    console.log("Random Unit Modifier is: " + randomUnitModifier);
    let randomUnit = 2;
    console.log("Random Unit: " + randomUnit);
    points[0] = {
        x: points[0].x + p5.random(-randomUnit, randomUnit),
        y: points[0].y + p5.random(-randomUnit, randomUnit),
    };
    p5.push();
    p5.strokeWeight(0);
    p5.fill(12.5);
    p5.beginShape();
    for (let i = 0; i < points.length; i++) {
        let point1 = points[i];
        if (i + 1 >= points.length)
            break;
        let point2 = points[i + 1];
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        if (Math.sqrt(dx ** 2 + dy ** 2) > maxJumpDistance) {
            p5.endShape(p5.CLOSE);
            p5.beginShape();
            continue;
        }
        points[i + 1] = {
            x: point2.x + p5.random(-randomUnit, randomUnit),
            y: point2.y + p5.random(-randomUnit, randomUnit),
        };
        p5.vertex(point1.x, point1.y);
    }
    p5.endShape(p5.CLOSE);
    p5.pop();
}

// EXTERNAL MODULE: ./src/renderers/otf/render-font.ts + 2 modules
var render_font = __webpack_require__(840);
// EXTERNAL MODULE: ./src/renderers/otf/path-preprocessor.ts
var path_preprocessor = __webpack_require__(386);
;// ./src/experiments/medium/sketch.ts









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
            let paths = render_font/* getTextPaths */.is(p5, libreBaskervilleRegOTF, text, typeSize, path_preprocessor/* freakTo */.H, { craziness: freakToCrazinessStrengthSlider.value() });
            textPaths = paths.processedTextPath;
            unprocessedTextPaths = paths.originalTextPath;
        }
        render(p5, libreBaskervilleRegP5, text, typeSize, 0.13, renderStrategyBeowulf);
    }
    p5.preload = () => {
        libreBaskervilleRegP5 = p5.loadFont(LibreBaskerville_Regular);
        libreBaskervilleItalicP5 = p5.loadFont(LibreBaskerville_Italic);
        libreBaskervilleBoldP5 = p5.loadFont(LibreBaskerville_Bold);
    };
    p5.setup = () => {
        window.addEventListener("afterprint", () => {
            redrawFont(false);
            erosionStrengthSlider.value(parseFloat(String(erosionStrengthSlider.value())) + 2);
            erosionStrengthValueText.html(String(erosionStrengthSlider.value()));
        });
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        opentype_module/* default.load */.Ay.load(LibreBaskerville_Regular, (error, font) => {
            if (error) {
                console.log("opentype.js | " + LibreBaskerville_Regular + " could not be loaded: " + error);
            }
            else {
                if (font !== undefined) {
                    libreBaskervilleRegOTF = font;
                    redrawFont();
                    console.log("opentype.js | " + LibreBaskerville_Regular + " loaded.");
                }
                else {
                    console.log("opentype.js | " + LibreBaskerville_Regular + " could not be loaded: it was undefined");
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
new (p5_min_default())(sketch);


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [652], () => (__webpack_exec__(331)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixDQUFDLENBQUMsRUFDdkMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FDMUMsQ0FBQztvQkFFRixNQUFNLFVBQVUsR0FBWSxHQUFHLENBQUMsZUFBZSxDQUMzQyxvQkFBb0IsRUFDcEIsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsRUFDdkMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FDMUMsQ0FBQztvQkFJRixJQUFJLFFBQVEsSUFBSSxVQUFVLEVBQUUsQ0FBQzt3QkFDekIsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0QsQ0FBQzt5QkFBTSxDQUFDO3dCQUNKLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNELENBQUM7b0JBRUQsTUFBTTtnQkFDVixDQUFDO1lBQ0wsQ0FBQztZQUdELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUV6QixPQUFPLENBQUMsS0FBSyxDQUFDLGtGQUFrRjtvQkFDNUYsc0JBQXNCLEdBQUcsY0FBYyxHQUFHLG9DQUFvQyxDQUFDO1lBQ3ZGLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sZ0JBQWdCLENBQUM7QUFDNUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvaWdub3JlZHxEOlxcUmVwb3NcXEFOVVxcREVTTjIwMDlcXHJhbmRvbWZvbnRcXG5vZGVfbW9kdWxlc1xcLnBucG1cXG9wZW50eXBlLmpzQDEuMy40XFxub2RlX21vZHVsZXNcXG9wZW50eXBlLmpzXFxkaXN0fGZzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL3A1L3JlbmRlci1mb250LnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvbWVkaXVtL3NrZXRjaC50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3JlbmRlcmVycy9vdGYvcGF0aC1wcmVwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3V0aWxzL3R5cGUtY291bnRlcnMudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9yZW5kZXJlcnMvb3RmL3V0aWxzL290Zi1wYXRoLXV0aWxzLnRzIiwid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItZm9udC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiAoaWdub3JlZCkgKi8iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5cclxudHlwZSBGb250UmVuZGVyU3RyYXRlZ3kgPSAocDU6IHA1LCBwb2ludHM6IFBvaW50W10pID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250OiBwNS5Gb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnRTYW1wbGVGYWN0b3I6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250UmVuZGVyZXI6IEZvbnRSZW5kZXJTdHJhdGVneSkgOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCBudW1iZXJPZkxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKS5sZW5ndGg7XHJcblxyXG4gICAgcDUudGV4dEZvbnQoZm9udCk7XHJcbiAgICBwNS50ZXh0U2l6ZShmb250U2l6ZSk7XHJcbiAgICBsZXQgcG9pbnRzOiBQb2ludFtdID0gZm9udC50ZXh0VG9Qb2ludHMoXHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICAocDUud2luZG93V2lkdGggLSBwNS50ZXh0V2lkdGgodGV4dCkpIC8gMixcclxuICAgICAgICAocDUud2luZG93SGVpZ2h0ICsgLW51bWJlck9mTGluZXMgKiAocDUudGV4dEFzY2VudCgpIC0gcDUudGV4dERlc2NlbnQoKSkpIC8gMixcclxuICAgICAgICBmb250U2l6ZSxcclxuICAgICAgICB7IHNhbXBsZUZhY3RvcjogZm9udFNhbXBsZUZhY3RvciB9XHJcbiAgICApO1xyXG5cclxuICAgIGZvbnRSZW5kZXJlcihwNSwgcG9pbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0cmF0ZWd5UmFuZG9tUG9pbnRzKHA1OiBwNSwgcG9pbnRzOiBQb2ludFtdKSA6IHZvaWQge1xyXG4gICAgcDUuc3Ryb2tlV2VpZ2h0KDEuNzUpO1xyXG5cclxuICAgIGZvciAobGV0IHAgb2YgcG9pbnRzKSB7XHJcbiAgICAgICAgcDUucG9pbnQocC54ICsgcDUucmFuZG9tKDAsIDE1KSwgcC55ICsgcDUucmFuZG9tKDAsIDUpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0cmF0ZWd5UG9pbnRzKHA1OiBwNSwgcG9pbnRzOiBQb2ludFtdKSA6IHZvaWQge1xyXG4gICAgcDUuc3Ryb2tlV2VpZ2h0KDIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgcCA9IHBvaW50c1tpXTtcclxuICAgICAgICBwNS5wb2ludChwLngsIHAueSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdHJhdGVneU91dGxpbmVkKHA1OiBwNSwgcG9pbnRzOlBvaW50W10pIDogdm9pZCB7XHJcbiAgICBsZXQgbWF4SnVtcERpc3RhbmNlID0gNztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBwb2ludDE6IFBvaW50ICA9IHBvaW50c1tpXTtcclxuICAgICAgICBpZiAoaSArIDEgPj0gcG9pbnRzLmxlbmd0aCkgYnJlYWs7XHJcbiAgICAgICAgbGV0IHBvaW50MjogUG9pbnQgPSBwb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAvLyBTdG9wcGluZyBcImp1bXAgc3RpdGNoZXNcIiBpbnRyYSBhbmQgaW50ZXIgbGV0dGVyc1xyXG4gICAgICAgIGxldCBkeCA9IHBvaW50Mi54IC0gcG9pbnQxLng7XHJcbiAgICAgICAgbGV0IGR5ID0gcG9pbnQyLnkgLSBwb2ludDEueTtcclxuICAgICAgICBpZiAoTWF0aC5zcXJ0KGR4ICoqIDIgKyBkeSAqKiAyKSA+IG1heEp1bXBEaXN0YW5jZSkgY29udGludWU7XHJcblxyXG4gICAgICAgIHA1LmxpbmUocG9pbnQxLngsIHBvaW50MS55LCBwb2ludDIueCwgcG9pbnQyLnkpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0cmF0ZWd5UmFuZG9tT3V0bGluZWQocDU6IHA1LCBwb2ludHM6UG9pbnRbXSkgOiB2b2lkIHtcclxuICAgIGxldCBtYXhKdW1wRGlzdGFuY2UgPSA3O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHBvaW50MTogUG9pbnQgID0gcG9pbnRzW2ldO1xyXG4gICAgICAgIGlmIChpICsgMSA+PSBwb2ludHMubGVuZ3RoKSBicmVhaztcclxuICAgICAgICBsZXQgcG9pbnQyOiBQb2ludCA9IHBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgIC8vIFN0b3BwaW5nIFwianVtcCBzdGl0Y2hlc1wiIGludHJhIGFuZCBpbnRlciBsZXR0ZXJzXHJcbiAgICAgICAgbGV0IGR4ID0gcG9pbnQyLnggLSBwb2ludDEueDtcclxuICAgICAgICBsZXQgZHkgPSBwb2ludDIueSAtIHBvaW50MS55O1xyXG4gICAgICAgIGlmIChNYXRoLnNxcnQoZHggKiogMiArIGR5ICoqIDIpID4gbWF4SnVtcERpc3RhbmNlKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGludGVybWVkaWFyeSBwb2ludFxyXG4gICAgICAgIGxldCByYW5kb21Vbml0ID0gcDUucmFuZG9tKDAsIDEwMCk7XHJcbiAgICAgICAgaWYgKHJhbmRvbVVuaXQgPiA0NSkge1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQzWCA9IHBvaW50MS54ICsgZHggKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQvMTAsIHJhbmRvbVVuaXQvMjApO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQzWSA9IHBvaW50MS55ICsgZHkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQvMTAsIHJhbmRvbVVuaXQvMjApO1xyXG5cclxuICAgICAgICAgICAgcDUubGluZShwb2ludDEueCwgcG9pbnQxLnksIHBvaW50M1gsIHBvaW50M1kpO1xyXG4gICAgICAgICAgICBwNS5saW5lKHBvaW50M1gsIHBvaW50M1ksIHBvaW50Mi54LCBwb2ludDIueSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcDUubGluZShwb2ludDEueCwgcG9pbnQxLnksIHBvaW50Mi54LCBwb2ludDIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RyYXRlZ3lGaWxsZWQocDU6IHA1LCBwb2ludHM6IFBvaW50W10pIDogdm9pZCB7XHJcbiAgICBsZXQgbWF4SnVtcERpc3RhbmNlID0gMjA7XHJcblxyXG4gICAgcDUucHVzaCgpO1xyXG4gICAgcDUuc3Ryb2tlV2VpZ2h0KDApO1xyXG4gICAgcDUuYmVnaW5TaGFwZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyB0aGlzIHdhcyBjaGFuZ2VkIGJ5IHRoZSBwcmV2aW91cyBpdGVyYXRpb25cclxuICAgICAgICBsZXQgcG9pbnQxOiBQb2ludCA9IHBvaW50c1tpXTtcclxuICAgICAgICBpZiAoaSArIDEgPj0gcG9pbnRzLmxlbmd0aCkgYnJlYWs7XHJcbiAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHJhbmRvbWl6ZWQgb24gdGhpcyBpdGVyYXRpb25cclxuICAgICAgICBsZXQgcG9pbnQyOiBQb2ludCA9IHBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgIC8vIFN0b3BwaW5nIFwianVtcCBzdGl0Y2hlc1wiIGludHJhIGFuZCBpbnRlciBsZXR0ZXJzXHJcbiAgICAgICAgbGV0IGR4ID0gcG9pbnQyLnggLSBwb2ludDEueDtcclxuICAgICAgICBsZXQgZHkgPSBwb2ludDIueSAtIHBvaW50MS55O1xyXG4gICAgICAgIGlmIChNYXRoLnNxcnQoZHggKiogMiArIGR5ICoqIDIpID4gbWF4SnVtcERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHA1LmVuZFNoYXBlKHA1LkNMT1NFKTtcclxuICAgICAgICAgICAgcDUuYmVnaW5TaGFwZSgpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmluZyB0aGUgd2luZGluZyBkaXJlY3Rpb24gb2YgdGhlIHBvaW50c1xyXG4gICAgICAgIC8vIHRoaXMgaXMgc28gY291bnRlcnMgc2hvdyBhcyBob2xlcyBpbiB0aGUgdHlwZS5cclxuICAgICAgICAvLyB0ZXh0VG9Qb2ludHMgd2luZHMgY291bnRlcnMgYXMgY2xvY2t3aXNlIHdoaWxzdCBvdGhlciBwYXJ0cyBvZiB0aGUgdHlwZSBhcmUgd291bmQgYW50aWNsb2Nrd2lzZSA6KVxyXG4gICAgICAgIC8vIGkgaGF0ZSBob3cgbGluZWFyIGFsZ2VicmEgaXMgdGhlIGFuc3dlciB0byB0aGlzOlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0N1cnZlX29yaWVudGF0aW9uI09yaWVudGF0aW9uX29mX2Ffc2ltcGxlX3BvbHlnb25cclxuICAgICAgICAvLyBpZiAoaSArIDIgPCBwb2ludHMubGVuZ3RoKSB7IC8vIHdlIG5lZWQgMyBwb2ludHMgdG8gY2FsY3VsYXRlIHRoZSB3aW5kaW5nIGRpcmVjdGlvblxyXG4gICAgICAgIC8vICAgICBsZXQgcG9pbnQzOiBQb2ludCA9IHBvaW50c1tpICsgMl07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IGRldGVybWluYW50T2ZQb2ludHMgPSAoKHBvaW50Mi54ICogcG9pbnQzLnkpICsgKHBvaW50MS54ICogcG9pbnQyLnkpICsgKHBvaW50MS55ICogcG9pbnQzLngpKVxyXG4gICAgICAgIC8vICAgICAgICAgLSAoKHBvaW50MS55ICogcG9pbnQyLngpICsgKHBvaW50Mi55ICogcG9pbnQzLngpICsgKHBvaW50MS54ICogcG9pbnQzLnkpKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgY3VycldpbmRpbmdEaXJlY3Rpb24gPSBkZXRlcm1pbmFudE9mUG9pbnRzIDwgMCA/XHJcbiAgICAgICAgLy8gICAgICAgICBXaW5kaW5nRGlyZWN0aW9uLkNMT0NLV0lTRSA6IFdpbmRpbmdEaXJlY3Rpb24uQU5USUNMT0NLV0lTRTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBpZiAoY3VycldpbmRpbmdEaXJlY3Rpb24gPT09IFdpbmRpbmdEaXJlY3Rpb24uQ0xPQ0tXSVNFKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBwNS5maWxsKDEyLjUpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgcDUuZmlsbCgyNTUpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgaWYgKGRldGVybWluYW50T2ZQb2ludHMgPT09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHA1LmZpbGwoMjU1KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHByZXZXaW5kaW5nRGlyZWN0aW9uID0gZGV0ZXJtaW5hbnRPZlBvaW50cyA8IDAgP1xyXG4gICAgICAgIC8vICAgICAgICAgV2luZGluZ0RpcmVjdGlvbi5DTE9DS1dJU0UgOiBXaW5kaW5nRGlyZWN0aW9uLkFOVElDTE9DS1dJU0U7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjdXJyZW50RGV0OiBcIiArIGRldGVybWluYW50T2ZQb2ludHMgKyBcIiwgb3JpZW50ZWQ6IFwiICsgcHJldldpbmRpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcDUudmVydGV4KHBvaW50MS54LCBwb2ludDEueSk7XHJcbiAgICB9XHJcbiAgICBwNS5lbmRTaGFwZShwNS5DTE9TRSk7XHJcbiAgICBwNS5wb3AoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0cmF0ZWd5QmVvd3VsZihwNTogcDUsIHBvaW50czogUG9pbnRbXSkgOiB2b2lkIHtcclxuICAgIGxldCBtYXhKdW1wRGlzdGFuY2UgPSAyMDtcclxuICAgIGxldCByYW5kb21Vbml0TW9kaWZpZXIgPSAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDU7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJhbmRvbSBVbml0IE1vZGlmaWVyIGlzOiBcIiArIHJhbmRvbVVuaXRNb2RpZmllcik7XHJcbiAgICBsZXQgcmFuZG9tVW5pdCA9IDI7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJhbmRvbSBVbml0OiBcIiArIHJhbmRvbVVuaXQpO1xyXG5cclxuICAgIHBvaW50c1swXSA9IHtcclxuICAgICAgICB4OiBwb2ludHNbMF0ueCArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgeTogcG9pbnRzWzBdLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgfVxyXG5cclxuICAgIHA1LnB1c2goKTtcclxuICAgIHA1LnN0cm9rZVdlaWdodCgwKTtcclxuICAgIHA1LmZpbGwoMTIuNSk7XHJcbiAgICBwNS5iZWdpblNoYXBlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHRoaXMgd2FzIGNoYW5nZWQgYnkgdGhlIHByZXZpb3VzIGl0ZXJhdGlvblxyXG4gICAgICAgIGxldCBwb2ludDE6IFBvaW50ID0gcG9pbnRzW2ldO1xyXG4gICAgICAgIGlmIChpICsgMSA+PSBwb2ludHMubGVuZ3RoKSBicmVhaztcclxuICAgICAgICAvLyB0aGlzIHdpbGwgYmUgcmFuZG9taXplZCBvbiB0aGlzIGl0ZXJhdGlvblxyXG4gICAgICAgIGxldCBwb2ludDI6IFBvaW50ID0gcG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgLy8gU3RvcHBpbmcgXCJqdW1wIHN0aXRjaGVzXCIgaW50cmEgYW5kIGludGVyIGxldHRlcnNcclxuICAgICAgICBsZXQgZHggPSBwb2ludDIueCAtIHBvaW50MS54O1xyXG4gICAgICAgIGxldCBkeSA9IHBvaW50Mi55IC0gcG9pbnQxLnk7XHJcbiAgICAgICAgaWYgKE1hdGguc3FydChkeCAqKiAyICsgZHkgKiogMikgPiBtYXhKdW1wRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG4gICAgICAgICAgICBwNS5iZWdpblNoYXBlKCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHJhbmRvbVVuaXQgPSBwNS5yYW5kb20oXHJcbiAgICAgICAgLy8gICAgIC0xMCAqIHA1Lm5vaXNlKHJhbmRvbVVuaXRNb2RpZmllciksXHJcbiAgICAgICAgLy8gICAgIDEwICogcDUubm9pc2UocmFuZG9tVW5pdE1vZGlmaWVyKVxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgIHBvaW50c1tpICsgMV0gPSB7XHJcbiAgICAgICAgICAgIHg6IHBvaW50Mi54ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgeTogcG9pbnQyLnkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHA1LnZlcnRleChwb2ludDEueCwgcG9pbnQxLnkpO1xyXG4gICAgfVxyXG4gICAgcDUuZW5kU2hhcGUocDUuQ0xPU0UpO1xyXG4gICAgcDUucG9wKCk7XHJcbn1cclxuIiwiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5pbXBvcnQgJ0BzcmMvc3R5bGVzL3NrZXRjaC5jc3MnO1xyXG5cclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVSZWdQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtUmVndWxhci50dGYnO1xyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZUl0YWxpY1BhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1JdGFsaWMudHRmJztcclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVCb2xkUGF0aCBmcm9tICdAc3JjL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgUDVGb250UmVuZGVyZXIgZnJvbSAnQHNyYy9yZW5kZXJlcnMvcDUvcmVuZGVyLWZvbnQnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URkZvbnRSZW5kZXJlciBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLWZvbnQnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URkZvbnRSZW5kZXJTdHJhdGVneSBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLXN0cmF0ZWd5JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBPVEZQYXRoUHJlcHJvY2Vzc29yIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9wYXRoLXByZXByb2Nlc3Nvcic7XHJcblxyXG5mdW5jdGlvbiBza2V0Y2gocDU6IHA1KTogdm9pZCB7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZVJlZ09URiA6IG90Zi5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZUJvbGRQNSA6IHA1LkZvbnQ7XHJcblxyXG4gICAgbGV0IHNhbXBsZVRleHRzOiBzdHJpbmdbXSA9IFtcIkFyY2hhZW9wdGVyeXhcIiwgXCJUaGUg4oCcQmlnIEZpdmXigJ1cIiwgXCJFbmQtT3Jkb3ZpY2lhblwiLCBcIkxhdGUgRGV2b25pYW5cIiwgXCJFbmQtUGVybWlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVuZC1Ucmlhc3NpY1wiLCBcIkVuZC1DcmV0YWNlb3VzXCJdO1xyXG5cclxuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSBzYW1wbGVUZXh0c1tNYXRoLnJvdW5kKHA1LnJhbmRvbSgwLCBzYW1wbGVUZXh0cy5sZW5ndGggLSAxKSldO1xyXG4gICAgbGV0IHR5cGVTaXplOiBudW1iZXIgPSAxNDg7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHVucHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG5cclxuICAgIGxldCBlcm9zaW9uU3RyZW5ndGhTbGlkZXI6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlcjogcDUuRWxlbWVudDtcclxuICAgIGxldCBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHJhd0ZvbnQoaW1tZWRpYXRlbHlSZWRyYXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgcDUuYmFja2dyb3VuZCgyNTUpO1xyXG5cclxuICAgICAgICBpZiAoaW1tZWRpYXRlbHlSZWRyYXcpIHsgLy8gdGhpcyBjb25kaXRpb24gaXMgZm9yIHdoZW4gdGhlIHRleHQgaXMgdXBkYXRlZCAoZm9yIGRlYnVnZ2luZylcclxuICAgICAgICAgICAgbGV0IHBhdGhzOiB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRQYXRoOiBvdGYuUGF0aFtdXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRUZXh0UGF0aDogb3RmLlBhdGhbXVxyXG4gICAgICAgICAgICB9ID0gT1RGRm9udFJlbmRlcmVyLmdldFRleHRQYXRocyhcclxuICAgICAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ09URixcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAgICAgICAgIE9URlBhdGhQcmVwcm9jZXNzb3IuZnJlYWtUbyxcclxuICAgICAgICAgICAgICAgIHsgY3JhemluZXNzOiBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIudmFsdWUoKSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRleHRQYXRocyA9IHBhdGhzLnByb2Nlc3NlZFRleHRQYXRoO1xyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocyA9IHBhdGhzLm9yaWdpbmFsVGV4dFBhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPVEZGb250UmVuZGVyZXIucmVuZGVyRm9udChcclxuICAgICAgICAvLyAgICAgcDUsXHJcbiAgICAgICAgLy8gICAgIHRleHRQYXRocyxcclxuICAgICAgICAvLyAgICAgT1RGRm9udFJlbmRlclN0cmF0ZWd5LmVyb2RlLFxyXG4gICAgICAgIC8vICAgICB7IGVyb3Npb25TdHJlbmd0aDogLWVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpIH0sXHJcbiAgICAgICAgLy8gICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzXHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgUDVGb250UmVuZGVyZXIucmVuZGVyKFxyXG4gICAgICAgICAgICBwNSxcclxuICAgICAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1LFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAgICAgMC4xMyxcclxuICAgICAgICAgICAgUDVGb250UmVuZGVyZXIucmVuZGVyU3RyYXRlZ3lCZW93dWxmXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHA1IGZvbnQgaW5pdGlhbGl6YXRpb25cclxuICAgIHA1LnByZWxvYWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgpO1xyXG4gICAgICAgIGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA9IHA1LmxvYWRGb250KGxpYnJlQmFza2VydmlsbGVJdGFsaWNQYXRoKTtcclxuICAgICAgICBsaWJyZUJhc2tlcnZpbGxlQm9sZFA1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZUJvbGRQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5zZXR1cCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFmdGVycHJpbnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKHBhcnNlRmxvYXQoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSkgKyAyKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHA1LmNyZWF0ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gb3BlbnR5cGUuanMgZm9udCBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIG90Zi5sb2FkKGxpYnJlQmFza2VydmlsbGVSZWdQYXRoLCAoZXJyb3IsIGZvbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBpZiAoZm9udCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGID0gZm9udDtcclxuICAgICAgICAgICAgICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgbG9hZGVkLlwiKTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgY291bGQgbm90IGJlIGxvYWRlZDogaXQgd2FzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0dGluZyB1cCBzbGlkZXJzIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDMuNTYsIDAuMDEpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgMTApO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NMYWJlbDogcDUuRWxlbWVudCA9IHA1LmNyZWF0ZVAoXCJjcmF6eVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXdlaWdodDogYm9sZFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJ0b3A6IC0zcHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dCA9IHA1LmNyZWF0ZVAoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwidG9wOiAtM3B4XCIpO1xyXG4gICAgICAgIChmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgYXMgYW55KS5jaGFuZ2VkKCgpID0+IHtcclxuICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDQuNDQsIDAuMDEpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgNTApO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGVyb3Npb25TdHJlbmd0aExhYmVsOiBwNS5FbGVtZW50ID0gcDUuY3JlYXRlUChcImVyb2RlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcInRvcDogMzdweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQgPSBwNS5jcmVhdGVQKFN0cmluZyhlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJ0b3A6IDM3cHhcIik7XHJcbiAgICAgICAgKGVyb3Npb25TdHJlbmd0aFNsaWRlciBhcyBhbnkpLmNoYW5nZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHA1LndpbmRvd1Jlc2l6ZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmVkcmF3Rm9udChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUua2V5UHJlc3NlZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5lZWRzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChwNS5rZXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocDUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gcDUua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCB0ZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBuZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZWVkc1VwZGF0ZSkgcmVkcmF3Rm9udCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgcDUoc2tldGNoKTtcclxuIiwiaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xyXG5pbXBvcnQgb3RmIGZyb20gXCJvcGVudHlwZS5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vUHJlcHJvY2VzcyhfcDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10pOiBvdGYuUGF0aFtdIHtcclxuICAgIHJldHVybiB0ZXh0UGF0aHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcmVha1RvKHA1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLCBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IG90Zi5QYXRoW10ge1xyXG4gICAgbGV0IHJhbmRvbVVuaXQ6IG51bWJlcjtcclxuXHJcbiAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB1bmRlZmluZWQgfHwgIShcImNyYXppbmVzc1wiIGluIG9wdGlvbnMpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcInBhdGgtcHJlcHJvY2Vzc29yLnRzIHwgZnJlYWtUbyByZWNlaXZlZCBtYWxmb3JtZWQgb3B0aW9ucyBwYXJhbWV0ZXIuXCIpO1xyXG4gICAgICAgIHJhbmRvbVVuaXQgPSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByYW5kb21Vbml0ID0gb3B0aW9uc1tcImNyYXppbmVzc1wiXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0ZXh0UGF0aHMpKTtcclxuXHJcbiAgICBmb3IgKGxldCBjaGFyYWN0ZXJJbmRleCA9IDA7IGNoYXJhY3RlckluZGV4IDwgdGV4dFBhdGhzLmxlbmd0aDsgY2hhcmFjdGVySW5kZXgrKyl7XHJcbiAgICAgICAgLy8gZ2V0IG90Zi5QYXRoIG9iamVjdCBmb3IgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIGFjY3VtdWxhdGUgYWxsIHRoZSBuZXcgcmFuZG9taXplZCBwYXRoIGNvbW1hbmRzIHRoYXQgd2Ugd2FudFxyXG4gICAgICAgIGxldCBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHM6IG90Zi5QYXRoQ29tbWFuZFtdID0gW107XHJcblxyXG4gICAgICAgIGxldCBwcmV2aW91c1BvaW50OiBQb2ludCA9IHsgeDogMCwgeTogMCB9O1xyXG5cclxuICAgICAgICAvLyBwcm9jZXNzIGFsbCBwYXRoIGNvbW1hbmRzIGZvciB0aGlzIGN1cnJlbnQgY2hhcmFjdGVyXHJcbiAgICAgICAgZm9yIChsZXQgY2hhclBhdGhDb21tYW5kSW5kZXggPSAwOyBjaGFyUGF0aENvbW1hbmRJbmRleCA8IGNoYXJhY3RlclBhdGguY29tbWFuZHMubGVuZ3RoOyBjaGFyUGF0aENvbW1hbmRJbmRleCsrKXtcclxuICAgICAgICAgICAgbGV0IGNvbW1hbmQgPSBjaGFyYWN0ZXJQYXRoLmNvbW1hbmRzW2NoYXJQYXRoQ29tbWFuZEluZGV4XTtcclxuICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJNXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxlcnBJbnRlcnZhbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwNS5yYW5kb20oMCwgcmFuZG9tVW5pdCAtIDEpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVycEludGVydmFscy5wdXNoKHA1LnJhbmRvbSgwLCAwLjkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGVycEludGVydmFscy5zb3J0KChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAtIGIpOyAvLyBzb3J0IGluIGFzY2VuZGluZyBvcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxlcnBJbnRlcnZhbCBvZiBsZXJwSW50ZXJ2YWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXJwZWRYOiBudW1iZXIgPSBwNS5sZXJwKHByZXZpb3VzUG9pbnQueCwgY29tbWFuZC54LCBsZXJwSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGVycGVkWTogbnVtYmVyID0gcDUubGVycChwcmV2aW91c1BvaW50LnksIGNvbW1hbmQueSwgbGVycEludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBvcmlnaW5hbCB0ZXh0UGF0aHMgYXMgd2UgYXJlIGFkZGluZyBjb21tYW5kcyB0aGF0IG5lZWQgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmUgcmVmbGVjdGVkIGluIHRoZSBvcmlnaW5hbCB0ZXh0UGF0aHMgKGNhdXNlIHdlIG1pZ2h0IG5lZWQgdG8gdXNlIHRoZSBvcmlnaW5hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0UGF0aHMgb3V0c2lkZSBvZiBoZXJlKSAtLSB0aGlzIHdvcmtzIGZpbmUgY2F1c2UgYXJyYXlzIGFyZSBwYXNzZWQgYnkgcmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF0uY29tbWFuZHMuc3BsaWNlKGNoYXJQYXRoQ29tbWFuZEluZGV4LCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlcnBlZFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBsZXJwZWRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVycGVkWCArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdC8xLjUsIHJhbmRvbVVuaXQvMS41KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxlcnBlZFkgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQvMS41LCByYW5kb21Vbml0LzEuNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2hhcmFjdGVyUGF0aENvbW1hbmRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgb3RmLlBhdGhDb21tYW5kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgd2UgaGF2ZSB1cGRhdGVkIHRoZSB0ZXh0UGF0aHMgYnkgcmVmZXJlbmNlIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSBjaGFyUGF0aENvbW1hbmRJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGJlIGFmdGVyIHRoZSBvcmlnaW5hbCBcIkxcIiBjb21tYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhclBhdGhDb21tYW5kSW5kZXggKz0gbGVycEludGVydmFscy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNcIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MTogY29tbWFuZC54MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxOiBjb21tYW5kLnkxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDI6IGNvbW1hbmQueDIgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MjogY29tbWFuZC55MiArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbW1hbmQueCAgICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogY29tbWFuZC55ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBvdGYuUGF0aENvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlFcIjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4MTogY29tbWFuZC54MSArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxOiBjb21tYW5kLnkxICsgcDUucmFuZG9tKC1yYW5kb21Vbml0LCByYW5kb21Vbml0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY29tbWFuZC54ICAgKyBwNS5yYW5kb20oLXJhbmRvbVVuaXQsIHJhbmRvbVVuaXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjb21tYW5kLnkgICArIHA1LnJhbmRvbSgtcmFuZG9tVW5pdCwgcmFuZG9tVW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiWlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NoYXJhY3RlclBhdGhDb21tYW5kcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJaXCJcclxuICAgICAgICAgICAgICAgICAgICB9IGFzIG90Zi5QYXRoQ29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kLnR5cGUgIT09IFwiWlwiKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnggPSBjb21tYW5kLng7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BvaW50LnkgPSBjb21tYW5kLnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZnRlciBwcm9jZXNzaW5nIHBhdGhzIGFuZCBhZGRpbmcgc29tZSByYW5kb21pemF0aW9uIGxldCdzIGFzc2lnbiBhbGwgdGhlXHJcbiAgICAgICAgLy8gbmV3IHBhdGggY29tbWFuZHMgdG8gdGhlIG9yaWdpbmFsIG90Zi5QYXRoW10gb2JqZWN0IHBhcmFtZXRlclxyXG4gICAgICAgIHByb2Nlc3NlZFRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF0uY29tbWFuZHMgPSBuZXdDaGFyYWN0ZXJQYXRoQ29tbWFuZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2Nlc3NlZFRleHRQYXRocztcclxufSIsImltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXJDb3VudGVyKGZvbnQ6IG90Zi5Gb250LCBjaGFyYWN0ZXI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAoY2hhcmFjdGVyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwidHlwZS1jb3VudGVycy50cyB8IFBhdGhDb3VudGVyQ291bnRlciBhY2NlcHRlZCBhIGNoYXJhY3RlciBvZiBzaXplIFwiICsgY2hhcmFjdGVyLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9udCBzaXplIGFuZCB4IGFuZCB5IGNvb3JkcyB1c2VkIGhlcmUgYXJlIGR1bW1pZXNcclxuICAgIHJldHVybiBwYXRoQ291bnRlckNvdW50ZXIoZm9udC5nZXRQYXRoKGNoYXJhY3RlclswXSwgMCwgMCwgMjApKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDb3VudGVyQ291bnRlcihjaGFyYWN0ZXJQYXRoOiBvdGYuUGF0aCk6IG51bWJlciB7XHJcblxyXG4gICAgbGV0IGNvdW50ZXJDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgY2hhcmFjdGVyUGF0aC5jb21tYW5kcykge1xyXG4gICAgICAgIGlmIChjb21tYW5kLnR5cGUgPT09IFwiWlwiKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXJDb3VudGVyICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgYXNzdW1lcyB0aGF0IG90Zi5QYXRoIFNWRyBkcmF3aW5nIGNvbW1hbmRzIGFyZSBzdHJ1Y3R1cmVkIHdpdGggdGhlIGJhc2UgbGV0dGVyZm9ybSBzaGFwZVxyXG4gICAgLy8gZm9sbG93ZWQgYnkgY291bnRlcnNcclxuICAgIHJldHVybiBjb3VudGVyQ291bnRlciA9PT0gMCA/IDAgOiBjb3VudGVyQ291bnRlciAtIDE7XHJcbn1cclxuXHJcbiIsImltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RTaGFwZXNGcm9tUGF0aChwYXRoOiBvdGYuUGF0aCkgOiBvdGYuUGF0aENvbW1hbmRbXVtdIHtcclxuICAgIGxldCBjdXJyU2hhcGVDb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IGN1cnJTaGFwZXM6IG90Zi5QYXRoQ29tbWFuZFtdW10gPSBbW11dO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmNvbW1hbmRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IHBhdGguY29tbWFuZHNbaV07XHJcblxyXG4gICAgICAgIGlmIChjb21tYW5kLnR5cGUgIT09IFwiWlwiKSB7IC8vIGlmIHdlIGFyZW4ndCBhdCBhIGNsb3NlIHNoYXBlIGNvbW1hbmRcclxuICAgICAgICAgICAgY3VyclNoYXBlc1tjdXJyU2hhcGVDb3VudGVyXS5wdXNoKGNvbW1hbmQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIGF0IGEgY2xvc2Ugc2hhcGUgY29tbWFuZFxyXG4gICAgICAgICAgICAvLyBwdXNoIFwiWlwiXHJcbiAgICAgICAgICAgIGN1cnJTaGFwZXNbY3VyclNoYXBlQ291bnRlcl0ucHVzaChjb21tYW5kKVxyXG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGN1cnJTaGFwZUNvdW50ZXJcclxuICAgICAgICAgICAgY3VyclNoYXBlQ291bnRlcisrO1xyXG4gICAgICAgICAgICAvLyBpZiB3ZSBhcmVuJ3QgYXQgdGhlIGxhc3QgXCJaXCIgdGhlbiBrZWVwIGV4cGFuZGluZyB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZiAoaSAhPT0gcGF0aC5jb21tYW5kcy5sZW5ndGggLSAxKSBjdXJyU2hhcGVzLnB1c2goW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VyclNoYXBlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0U3RhcnRQb2ludEluUGF0aChwYXRoQ29tbWFuZHM6IG90Zi5QYXRoQ29tbWFuZFtdKSA6IChQb2ludCB8IG51bGwpIHtcclxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgcGF0aENvbW1hbmRzKSB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQudHlwZSA9PT0gXCJDXCIgfHwgIC8vIGN1YmljIGJlemllclxyXG4gICAgICAgICAgICBjb21tYW5kLnR5cGUgPT09IFwiTFwiIHx8ICAvLyBsaW5lIHRvXHJcbiAgICAgICAgICAgIGNvbW1hbmQudHlwZSA9PT0gXCJRXCIpIHsgIC8vIHF1YWRyYXRpYyBiZXppZXJcclxuICAgICAgICAgICAgcmV0dXJuIHsgeDogY29tbWFuZC54LCB5OiBjb21tYW5kLnkgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRoQ29tbWFuZHNUb1BhdGhEYXRhKHBhdGhDb21tYW5kczogb3RmLlBhdGhDb21tYW5kW10sIGRlY2ltYWxQbGFjZXM6IG51bWJlcikgOiBzdHJpbmcge1xyXG4gICAgbGV0IHBhdGhEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGNvbW1hbmQgb2YgcGF0aENvbW1hbmRzKSB7XHJcbiAgICAgICAgLy8gXCJaXCIgaXMgYXBwZW5kZWQgYXV0b21hdGljYWxseSBoZXJlXHJcbiAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC50eXBlICsgXCIgXCI7XHJcbiAgICAgICAgc3dpdGNoIChjb21tYW5kLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk1cIjpcclxuICAgICAgICAgICAgY2FzZSBcIkxcIjpcclxuICAgICAgICAgICAgICAgIHBhdGhEYXRhICs9IGNvbW1hbmQueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ1wiOlxyXG4gICAgICAgICAgICAgICAgcGF0aERhdGEgKz0gY29tbWFuZC54MS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54Mi50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpICsgXCIsXCIgKyBjb21tYW5kLnkyLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZC54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueS50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJRXCI6XHJcbiAgICAgICAgICAgICAgICBwYXRoRGF0YSArPSBjb21tYW5kLngxLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykgKyBcIixcIiArIGNvbW1hbmQueTEudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kLngudG9GaXhlZChkZWNpbWFsUGxhY2VzKSArIFwiLFwiICsgY29tbWFuZC55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhdGhEYXRhO1xyXG59IiwiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcbmltcG9ydCB7cGF0aENvdW50ZXJDb3VudGVyfSBmcm9tIFwiLi91dGlscy90eXBlLWNvdW50ZXJzXCI7XHJcbmltcG9ydCB7ZXh0cmFjdFNoYXBlc0Zyb21QYXRoLCBnZXRGaXJzdFN0YXJ0UG9pbnRJblBhdGgsIHBhdGhDb21tYW5kc1RvUGF0aERhdGF9IGZyb20gXCIuL3V0aWxzL290Zi1wYXRoLXV0aWxzXCI7XHJcblxyXG50eXBlIEZvbnRSZW5kZXJTdHJhdGVneSA9IChwNTogcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQYXRoczogb3RmLlBhdGhbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlczogRmlsbFN0YXR1c1tdW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB2b2lkO1xyXG50eXBlIEZvbnRQcmVwcm9jZXNzb3IgPSAocDU6IHA1LCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10sIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiBvdGYuUGF0aFtdO1xyXG5cclxuZXhwb3J0IGVudW0gRmlsbFN0YXR1cyB7XHJcbiAgICBGSUxMRUQgPSBcImZpbGxlZFwiLFxyXG4gICAgT1BFTiA9IFwib3BlblwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0Rm9yZWdyb3VuZENvbG91ciA9IDA7XHJcbmV4cG9ydCBjb25zdCB0ZXh0QmFja2dyb3VuZENvbG91ciA9IDI1NTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0UGF0aHMocDU6IHA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG90Zi5Gb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRQcmVwcm9jZXNzb3I6IEZvbnRQcmVwcm9jZXNzb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFByZXByb2Nlc3Nvck9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTpcclxuICAgIHsgb3JpZ2luYWxUZXh0UGF0aDogb3RmLlBhdGhbXSwgcHJvY2Vzc2VkVGV4dFBhdGg6IG90Zi5QYXRoW10gfSB7XHJcbiAgICBjb25zdCB0ZXh0UGF0aDogb3RmLlBhdGggPSBmb250LmdldFBhdGgodGV4dCwgMCwgMCwgdHlwZVNpemUsIHsga2VybmluZzogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHRleHRCb3VuZGluZ0JveDogb3RmLkJvdW5kaW5nQm94ID0gdGV4dFBhdGguZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGNvbnN0IHRleHRIZWlnaHQ6IG51bWJlciA9IHRleHRCb3VuZGluZ0JveC55MiAtIHRleHRCb3VuZGluZ0JveC55MTtcclxuICAgIGNvbnN0IHRleHRXaWR0aDogbnVtYmVyID0gdGV4dEJvdW5kaW5nQm94LngyIC0gdGV4dEJvdW5kaW5nQm94LngxO1xyXG5cclxuICAgIGxldCB0ZXh0UGF0aHM6IG90Zi5QYXRoW10gPSBmb250LmdldFBhdGhzKFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgKHA1LndpbmRvd1dpZHRoIC0gdGV4dFdpZHRoKSAvIDIsXHJcbiAgICAgICAgKHA1LndpbmRvd0hlaWdodCAtIHRleHRIZWlnaHQgKyB0eXBlU2l6ZSkgLyAyLFxyXG4gICAgICAgIHR5cGVTaXplLFxyXG4gICAgICAgIHsga2VybmluZzogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCBwcm9jZXNzZWRUZXh0UGF0aHM6IG90Zi5QYXRoW10gPSBmb250UHJlcHJvY2Vzc29yKHA1LCB0ZXh0UGF0aHMsIGZvbnRQcmVwcm9jZXNzb3JPcHRpb25zKTtcclxuXHJcbiAgICBpZiAodGV4dFBhdGhzLmxlbmd0aCAhPT0gcHJvY2Vzc2VkVGV4dFBhdGhzLmxlbmd0aClcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQudHMgfCBzb21ldGhpbmcgaGFzIGdvbmUgd3JvbmcgaW4gb3RmXFxyZW5kZXItZm9udC50cyNnZXRUZXh0UGF0aHNcIiArXHJcbiAgICAgICAgICAgIFwiIHJlZ2FyZGluZyB0aGUgbGVuZ3RocyBvZiB0aGUgb3V0cHV0dGVkIG90Zi5QYXRoW11cIik7XHJcblxyXG4gICAgcmV0dXJuIHsgb3JpZ2luYWxUZXh0UGF0aDogdGV4dFBhdGhzLCBwcm9jZXNzZWRUZXh0UGF0aDogcHJvY2Vzc2VkVGV4dFBhdGhzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb250KHA1OiBwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFBhdGhzOiBvdGYuUGF0aFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb250UmVuZGVyZXI6IEZvbnRSZW5kZXJTdHJhdGVneSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFJlbmRlcmVyT3B0aW9ucz86IHsgW2tleTogc3RyaW5nXTogYW55IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzPzogb3RmLlBhdGhbXSkgOiBvdGYuUGF0aFtdIHtcclxuXHJcbiAgICAvLyBzb3J0aW5nIG91dCByZW5kZXJpbmcgaG9sZXMgaW4gZm9udHNcclxuICAgIC8vIHVucHJvY2Vzc2VkVGV4dFBhdGhzIGNhbiBiZSB1c2VkIGhlcmUgaWYgdGhlIHByb2Nlc3NpbmcgeW91IGRvIG9uIHlvdXIgdGV4dCBpcyBzbyBleHRyZW1lIHRoYXQgaXQgZGVzdHJveXNcclxuICAgIC8vIG15IHZlcnkgZmlja2xlIGFsZ29yaXRobSBmb3IgZGV0ZXJtaW5pbmcgdGhlIG51bWJlciBhbmQgb3JkZXIgb2YgaG9sZXMgaW4gYSBsZXR0ZXJmb3JtIDopXHJcbiAgICBjb25zdCB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzID09PSB1bmRlZmluZWQgP1xyXG4gICAgICAgIGdldFRleHRGaWxsU3RhdHVzZXMocDUsIHRleHRQYXRocykgOiBnZXRUZXh0RmlsbFN0YXR1c2VzKHA1LCB1bnByb2Nlc3NlZFRleHRQYXRocyk7XHJcblxyXG4gICAgLy8gdW5wcm9jZXNzZWRUZXh0UGF0aHMgdGVuZCB0byBiZSB1c2VmdWwgaW4gRm9udFJlbmRlclN0cmF0ZWd5IGFzIHRoZXkgcHJlc2VydmUgdGhlIG9yaWdpbmFsIGdlb21ldHJ5XHJcbiAgICAvLyBhbmQgY3VydmVzIG9mIHRoZSBmb250IGJlZm9yZSB0aGV5IGFyZSBwcm9jZXNzZWQgY3JhemlseVxyXG4gICAgaWYgKGZvbnRSZW5kZXJlck9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB1bnByb2Nlc3NlZFRleHRQYXRocyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9udFJlbmRlcmVyT3B0aW9uc1tcInVucHJvY2Vzc2VkVGV4dFBhdGhzXCJdID0gdW5wcm9jZXNzZWRUZXh0UGF0aHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWN0dWFsbHkgcmVuZGVyaW5nIGZvbnRcclxuICAgIGZvbnRSZW5kZXJlcihwNSwgdGV4dFBhdGhzLCB0ZXh0RmlsbFN0YXR1c2VzLCBmb250UmVuZGVyZXJPcHRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gdGV4dFBhdGhzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNhbXBsZU9mZnNldEdyaWQoc2lkZUxlbmd0aDogbnVtYmVyLCBzYW1wbGVVbml0OiBudW1iZXIpOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdW10ge1xyXG4gICAgaWYgKHNpZGVMZW5ndGggJSAyID09PSAwICkge1xyXG4gICAgICAgIHNpZGVMZW5ndGggKz0gMTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICBcInJlbmRlci1mb250LW90Zi50cyB8IGdlbmVyYXRlU2FtcGxlT2Zmc2V0R3JpZCByZWNlaXZlZCBhbiBldmVuIHNpZGUgbGVuZ3RoIG9mIFwiICsgKHNpZGVMZW5ndGggLSAxKVxyXG4gICAgICAgICAgICArIFwiLiBUaGUgYWN0dWFsIHNpZGUgbGVuZ3RoIG9mIHRoZSBncmlkIGdlbmVyYXRlZCB3aWxsIGJlIG9kZDogXCIgKyBzaWRlTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2FtcGxlT2Zmc2V0R3JpZDogW3g6IG51bWJlciwgeTogbnVtYmVyXVtdID0gW107XHJcbiAgICBsZXQgbWF4U2FtcGxlVW5pdFNjYWxlOiBudW1iZXIgPSBNYXRoLmZsb29yKHNpZGVMZW5ndGggLyAyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWF4U2FtcGxlVW5pdFNjYWxlOyBpID49IC1tYXhTYW1wbGVVbml0U2NhbGU7IGktLSkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAtbWF4U2FtcGxlVW5pdFNjYWxlOyBqIDw9IG1heFNhbXBsZVVuaXRTY2FsZTsgaisrKSB7XHJcbiAgICAgICAgICAgIHNhbXBsZU9mZnNldEdyaWQucHVzaChbaiAqIHNhbXBsZVVuaXQsIC1pICogc2FtcGxlVW5pdF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1wbGVPZmZzZXRHcmlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUZXh0RmlsbFN0YXR1c2VzKHA1OiBwNSwgdGV4dFBhdGhzOiBvdGYuUGF0aFtdKTogRmlsbFN0YXR1c1tdW10ge1xyXG4gICAgY29uc3QgdG9QYXRoRGF0YVJlc29sdXRpb246IG51bWJlciA9IDM7XHJcbiAgICBjb25zdCBzYW1wbGVVbml0OiBudW1iZXIgPSAyO1xyXG4gICAgY29uc3Qgc2FtcGxlT2Zmc2V0S2VybmVsOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdW10gPSBnZW5lcmF0ZVNhbXBsZU9mZnNldEdyaWQoNSwgc2FtcGxlVW5pdCk7XHJcbiAgICBjb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IHA1LmRyYXdpbmdDb250ZXh0O1xyXG5cclxuICAgIGxldCB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGNoYXJhY3RlckluZGV4ID0gMDsgY2hhcmFjdGVySW5kZXggPCB0ZXh0UGF0aHMubGVuZ3RoOyBjaGFyYWN0ZXJJbmRleCsrKXtcclxuICAgICAgICBjb25zdCBlbnRpcmVMZXR0ZXJmb3JtUGF0aCA9IHRleHRQYXRoc1tjaGFyYWN0ZXJJbmRleF07XHJcbiAgICAgICAgY29uc3QgY291bnRlckNvdW50OiBudW1iZXIgPSBwYXRoQ291bnRlckNvdW50ZXIoZW50aXJlTGV0dGVyZm9ybVBhdGgpO1xyXG5cclxuICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzLnB1c2goW10pO1xyXG5cclxuICAgICAgICBpZiAoY291bnRlckNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF0ucHVzaChGaWxsU3RhdHVzLkZJTExFRCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlOyAvLyB3aWxsIGluY3JlbWVudCBjaGFyYWN0ZXJJbmRleFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxldHRlcmZvcm1Db21wb25lbnRTaGFwZXM6IG90Zi5QYXRoQ29tbWFuZFtdW10gPSBleHRyYWN0U2hhcGVzRnJvbVBhdGgoZW50aXJlTGV0dGVyZm9ybVBhdGgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGUgb2YgbGV0dGVyZm9ybUNvbXBvbmVudFNoYXBlcykge1xyXG4gICAgICAgICAgICBsZXQgc2FtcGxlUG9pbnQ6IFBvaW50IHwgbnVsbCA9IGdldEZpcnN0U3RhcnRQb2ludEluUGF0aChsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNhbXBsZVBvaW50ID09PSBudWxsIHx8IHNhbXBsZVBvaW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW5kZXItZm9udC1vdGYudHMgfCBzYW1wbGVQb2ludC54IGFuZCBzYW1wbGVQb2ludC55IHdhcyBudWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHNhbXBsZSBhcm91bmQgdGhlIChzYW1wbGVYLCBzYW1wbGVZKSBjb29yZGluYXRlIHdlIGhhdmUgYW5kIHRlc3QgYWdhaW5zdFxyXG4gICAgICAgICAgICAvLyBjdHguaXNQb2ludEluUGF0aCB3aXRoIHRoZSByZWxldmFudCBlbnRpcmVMZXR0ZXJmb3JtUGF0aCBhcyB0aGUgcGF0aFxyXG4gICAgICAgICAgICBsZXQgc2FtcGxlUG9pbnRPZmZzZXQ6IFBvaW50ID0ge3g6IHNhbXBsZVBvaW50LngsIHk6IHNhbXBsZVBvaW50Lnl9O1xyXG4gICAgICAgICAgICBsZXQgd2FzRmlsbFN0YXR1c0Fzc2lnbmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBzYW1wbGVPZmZzZXQgb2Ygc2FtcGxlT2Zmc2V0S2VybmVsKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVQb2ludE9mZnNldC54ID0gc2FtcGxlUG9pbnQueCArIHNhbXBsZU9mZnNldFswXTtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVBvaW50T2Zmc2V0LnkgPSBzYW1wbGVQb2ludC55ICsgc2FtcGxlT2Zmc2V0WzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNlYXJjaGluZyB0byBzZWUgaWYgd2UncmUgaW5zaWRlIHRoZSBjdXJyZW50IHNoYXBlXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcDUucGl4ZWxEZW5zaXR5KCkgcGFydCBpcyBDUlVDSUFMIVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyUGF0aDJEOiBQYXRoMkQgPVxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQYXRoMkQocGF0aENvbW1hbmRzVG9QYXRoRGF0YShsZXR0ZXJmb3JtQ29tcG9uZW50U2hhcGUsIHRvUGF0aERhdGFSZXNvbHV0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0luUGF0aDogYm9vbGVhbiA9IGN0eC5pc1BvaW50SW5QYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclBhdGgyRCxcclxuICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC55LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0luU3Ryb2tlOiBib29sZWFuID0gY3R4LmlzUG9pbnRJblN0cm9rZShcclxuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc3RvcCBzZWFyY2hpbmcgaWYgd2UndmUgZm91bmQgYSBwb2ludCB3aXRoaW4gdGhlIHBhdGggYW5kIG5vdCBvbiB0aGUgc3Ryb2tlIGFzIHRoaXMgd29uJ3RcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgdXAgaW4gZnV0dXJlIGlzUG9pbnRJblBhdGggY2FsY3VsYXRpb25zIHdpdGggdGhlIGVudGlyZSBsZXR0ZXJmb3JtXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJblBhdGggJiYgIWlzSW5TdHJva2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXNGaWxsU3RhdHVzQXNzaWduZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhcmFjdGVyU2hhcGVQYXRoMkQ6IFBhdGgyRCA9IG5ldyBQYXRoMkQoZW50aXJlTGV0dGVyZm9ybVBhdGgudG9QYXRoRGF0YSh0b1BhdGhEYXRhUmVzb2x1dGlvbikpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIHNhbXBsZSB0aGlzIHBvaW50IGluIHRoZSB0ZXh0UGF0aCB1c2luZyBjdHguaXNQb2ludEluUGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSW5QYXRoOiBib29sZWFuID0gY3R4LmlzUG9pbnRJblBhdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlclNoYXBlUGF0aDJELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwNS5waXhlbERlbnNpdHkoKSAqIHNhbXBsZVBvaW50T2Zmc2V0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0luU3Ryb2tlOiBib29sZWFuID0gY3R4LmlzUG9pbnRJblN0cm9rZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyU2hhcGVQYXRoMkQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHA1LnBpeGVsRGVuc2l0eSgpICogc2FtcGxlUG9pbnRPZmZzZXQueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcDUucGl4ZWxEZW5zaXR5KCkgKiBzYW1wbGVQb2ludE9mZnNldC55LFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIG9ubHkgTk9UIGluIGEgY291bnRlci9zb21ldGhpbmcgdGhhdCBzaG91bGRuJ3QgYmUgZmlsbGVkIHdoZW5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpc0luUGF0aCA9PT0gRkFMU0UgJiYgaXNJblN0cm9rZSA9PT0gRkFMU0U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5QYXRoIHx8IGlzSW5TdHJva2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF0ucHVzaChGaWxsU3RhdHVzLkZJTExFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF0ucHVzaChGaWxsU3RhdHVzLk9QRU4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE8gbmVlZCB0byBkbyBlcnJvciBoYW5kbGluZyBmb3Igd2hhdCBoYXBwZW5zIHdoZW4gd2UgZmFsbCB0aHJvdWdoIGhlcmUgd2l0aG91dCBhIHN0YXR1c1xyXG4gICAgICAgICAgICBpZiAoIXdhc0ZpbGxTdGF0dXNBc3NpZ25lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dEZpbGxTdGF0dXNlc1tjaGFyYWN0ZXJJbmRleF0ucHVzaChGaWxsU3RhdHVzLkZJTExFRCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmVuZGVyLWZvbnQtb3RmLnRzIHwgZ2V0VGV4dEZpbGxTdGF0dXNlcyBjb3VsZCBub3QgZmluZCBhIHN1aXRhYmxlIHNhbXBsZSBwb2ludCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIoYXQgY2hhcmFjdGVyIGluZGV4IFwiICsgY2hhcmFjdGVySW5kZXggKyBcIikgZm9yIGNhbGN1bGF0aW5nIHRleHQgZmlsbCBzdGF0dXNcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dEZpbGxTdGF0dXNlcztcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9