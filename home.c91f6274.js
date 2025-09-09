"use strict";
(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[962],{

/***/ 617:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/.pnpm/p5@1.11.10/node_modules/p5/lib/p5.min.js
var p5_min = __webpack_require__(996);
var p5_min_default = /*#__PURE__*/__webpack_require__.n(p5_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/opentype.js@1.3.4/node_modules/opentype.js/dist/opentype.module.js
var opentype_module = __webpack_require__(652);
// EXTERNAL MODULE: ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf
var LibreBaskerville_Regular = __webpack_require__(496);
;// ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf
const LibreBaskerville_Italic_namespaceObject = __webpack_require__.p + "assets/fonts/LibreBaskerville-Italic.ttf";
;// ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf
const LibreBaskerville_Bold_namespaceObject = __webpack_require__.p + "assets/fonts/LibreBaskerville-Bold.ttf";
// EXTERNAL MODULE: ./src/renderers/otf/render-font.ts + 2 modules
var render_font = __webpack_require__(840);
// EXTERNAL MODULE: ./src/renderers/otf/render-strategy.ts
var render_strategy = __webpack_require__(922);
// EXTERNAL MODULE: ./src/renderers/otf/path-preprocessor.ts
var path_preprocessor = __webpack_require__(386);
;// ./src/sketch.ts









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
        const textFillStatuses = unprocessedTextPaths === undefined ?
            render_font/* getTextFillStatuses */.DI(p5, textPaths) : render_font/* getTextFillStatuses */.DI(p5, unprocessedTextPaths);
        render_font/* renderFont */.Q1(p5, textPaths, textFillStatuses, render_strategy/* erode */.s, { erosionStrength: -erosionStrengthSlider.value() }, unprocessedTextPaths);
    }
    p5.preload = () => {
        libreBaskervilleRegP5 = p5.loadFont(LibreBaskerville_Regular);
        libreBaskervilleItalicP5 = p5.loadFont(LibreBaskerville_Italic_namespaceObject);
        libreBaskervilleBoldP5 = p5.loadFont(LibreBaskerville_Bold_namespaceObject);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [652,191], () => (__webpack_exec__(617)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBVSxFQUFFO1FBQ3hCLElBQUksV0FBVyxHQUFZLEtBQUssQ0FBQztRQUVqQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNiO29CQUNJLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO29CQUNmLE1BQU07WUFDZCxDQUFDO1lBQ0QsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQzthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLElBQUksSUFBSSxDQUFDO1FBQ2pCLENBQUM7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDOUIsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBRUQsSUFBSSxXQUFXO1lBQUUsVUFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQztBQUNMLENBQUM7QUFFRCxJQUFJLGtCQUFFLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL3NrZXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmltcG9ydCAnQHNyYy9zdHlsZXMvc2tldGNoLmNzcyc7XHJcblxyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0Zic7XHJcbmltcG9ydCBsaWJyZUJhc2tlcnZpbGxlSXRhbGljUGF0aCBmcm9tICdAc3JjL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUl0YWxpYy50dGYnO1xyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZUJvbGRQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtQm9sZC50dGYnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBQNUZvbnRSZW5kZXJlciBmcm9tICdAc3JjL3JlbmRlcmVycy9wNS9yZW5kZXItZm9udCc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgT1RGRm9udFJlbmRlcmVyIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItZm9udCc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgT1RGRm9udFJlbmRlclN0cmF0ZWd5IGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItc3RyYXRlZ3knO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URlBhdGhQcmVwcm9jZXNzb3IgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3BhdGgtcHJlcHJvY2Vzc29yJztcclxuaW1wb3J0IHtGaWxsU3RhdHVzfSBmcm9tIFwiQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250XCI7XHJcblxyXG5mdW5jdGlvbiBza2V0Y2gocDU6IHA1KTogdm9pZCB7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZVJlZ09URiA6IG90Zi5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZUJvbGRQNSA6IHA1LkZvbnQ7XHJcblxyXG4gICAgbGV0IHNhbXBsZVRleHRzOiBzdHJpbmdbXSA9IFtcIkFyY2hhZW9wdGVyeXhcIiwgXCJUaGUg4oCcQmlnIEZpdmXigJ1cIiwgXCJFbmQtT3Jkb3ZpY2lhblwiLCBcIkxhdGUgRGV2b25pYW5cIiwgXCJFbmQtUGVybWlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVuZC1Ucmlhc3NpY1wiLCBcIkVuZC1DcmV0YWNlb3VzXCJdO1xyXG5cclxuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSBzYW1wbGVUZXh0c1tNYXRoLnJvdW5kKHA1LnJhbmRvbSgwLCBzYW1wbGVUZXh0cy5sZW5ndGggLSAxKSldO1xyXG4gICAgbGV0IHR5cGVTaXplOiBudW1iZXIgPSAxNDg7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHVucHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG5cclxuICAgIGxldCBlcm9zaW9uU3RyZW5ndGhTbGlkZXI6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlcjogcDUuRWxlbWVudDtcclxuICAgIGxldCBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHJhd0ZvbnQoaW1tZWRpYXRlbHlSZWRyYXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgcDUuYmFja2dyb3VuZCgyNTUpO1xyXG5cclxuICAgICAgICBpZiAoaW1tZWRpYXRlbHlSZWRyYXcpIHsgLy8gdGhpcyBjb25kaXRpb24gaXMgZm9yIHdoZW4gdGhlIHRleHQgaXMgdXBkYXRlZCAoZm9yIGRlYnVnZ2luZylcclxuICAgICAgICAgICAgbGV0IHBhdGhzOiB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRQYXRoOiBvdGYuUGF0aFtdXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRUZXh0UGF0aDogb3RmLlBhdGhbXVxyXG4gICAgICAgICAgICB9ID0gT1RGRm9udFJlbmRlcmVyLmdldFRleHRQYXRocyhcclxuICAgICAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ09URixcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAgICAgICAgIE9URlBhdGhQcmVwcm9jZXNzb3IuZnJlYWtUbyxcclxuICAgICAgICAgICAgICAgIHsgY3JhemluZXNzOiBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIudmFsdWUoKSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRleHRQYXRocyA9IHBhdGhzLnByb2Nlc3NlZFRleHRQYXRoO1xyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocyA9IHBhdGhzLm9yaWdpbmFsVGV4dFBhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzb3J0aW5nIG91dCByZW5kZXJpbmcgaG9sZXMgaW4gZm9udHNcclxuICAgICAgICAvLyB1bnByb2Nlc3NlZFRleHRQYXRocyBjYW4gYmUgdXNlZCBoZXJlIGlmIHRoZSBwcm9jZXNzaW5nIHlvdSBkbyBvbiB5b3VyIHRleHQgaXMgc28gZXh0cmVtZSB0aGF0IGl0IGRlc3Ryb3lzXHJcbiAgICAgICAgLy8gbXkgdmVyeSBmaWNrbGUgYWxnb3JpdGhtIGZvciBkZXRlcm1pbmluZyB0aGUgbnVtYmVyIGFuZCBvcmRlciBvZiBob2xlcyBpbiBhIGxldHRlcmZvcm0gOilcclxuICAgICAgICBjb25zdCB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXSA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzID09PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICBPVEZGb250UmVuZGVyZXIuZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNSwgdGV4dFBhdGhzKSA6IE9URkZvbnRSZW5kZXJlci5nZXRUZXh0RmlsbFN0YXR1c2VzKHA1LCB1bnByb2Nlc3NlZFRleHRQYXRocyk7XHJcblxyXG5cclxuICAgICAgICBPVEZGb250UmVuZGVyZXIucmVuZGVyRm9udChcclxuICAgICAgICAgICAgcDUsXHJcbiAgICAgICAgICAgIHRleHRQYXRocyxcclxuICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlcyxcclxuICAgICAgICAgICAgT1RGRm9udFJlbmRlclN0cmF0ZWd5LmVyb2RlLFxyXG4gICAgICAgICAgICB7IGVyb3Npb25TdHJlbmd0aDogLWVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpIH0sXHJcbiAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gUDVGb250UmVuZGVyZXIucmVuZGVyKFxyXG4gICAgICAgIC8vICAgICBwNSxcclxuICAgICAgICAvLyAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1LFxyXG4gICAgICAgIC8vICAgICB0ZXh0LFxyXG4gICAgICAgIC8vICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAvLyAgICAgMC4xMyxcclxuICAgICAgICAvLyAgICAgUDVGb250UmVuZGVyZXIucmVuZGVyU3RyYXRlZ3lCZW93dWxmXHJcbiAgICAgICAgLy8gKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHA1IGZvbnQgaW5pdGlhbGl6YXRpb25cclxuICAgIHA1LnByZWxvYWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgpO1xyXG4gICAgICAgIGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA9IHA1LmxvYWRGb250KGxpYnJlQmFza2VydmlsbGVJdGFsaWNQYXRoKTtcclxuICAgICAgICBsaWJyZUJhc2tlcnZpbGxlQm9sZFA1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZUJvbGRQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5zZXR1cCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFmdGVycHJpbnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKHBhcnNlRmxvYXQoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSkgKyAyKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHA1LmNyZWF0ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gb3BlbnR5cGUuanMgZm9udCBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIG90Zi5sb2FkKGxpYnJlQmFza2VydmlsbGVSZWdQYXRoLCAoZXJyb3IsIGZvbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBpZiAoZm9udCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGID0gZm9udDtcclxuICAgICAgICAgICAgICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgbG9hZGVkLlwiKTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgY291bGQgbm90IGJlIGxvYWRlZDogaXQgd2FzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0dGluZyB1cCBzbGlkZXJzIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDMuNTYsIDAuMDEpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgMTApO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NMYWJlbDogcDUuRWxlbWVudCA9IHA1LmNyZWF0ZVAoXCJjcmF6eVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXdlaWdodDogYm9sZFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJ0b3A6IC0zcHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dCA9IHA1LmNyZWF0ZVAoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwidG9wOiAtM3B4XCIpO1xyXG4gICAgICAgIChmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgYXMgYW55KS5jaGFuZ2VkKCgpID0+IHtcclxuICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDQuNDQsIDAuMDEpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgNTApO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGVyb3Npb25TdHJlbmd0aExhYmVsOiBwNS5FbGVtZW50ID0gcDUuY3JlYXRlUChcImVyb2RlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcInRvcDogMzdweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQgPSBwNS5jcmVhdGVQKFN0cmluZyhlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJ0b3A6IDM3cHhcIik7XHJcbiAgICAgICAgKGVyb3Npb25TdHJlbmd0aFNsaWRlciBhcyBhbnkpLmNoYW5nZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHA1LndpbmRvd1Jlc2l6ZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmVkcmF3Rm9udChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUua2V5UHJlc3NlZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5lZWRzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChwNS5rZXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocDUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gcDUua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCB0ZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBuZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZWVkc1VwZGF0ZSkgcmVkcmF3Rm9udCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgcDUoc2tldGNoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9