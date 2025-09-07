"use strict";
(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[660],{

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Bold.ttf";

/***/ }),

/***/ 164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Italic.ttf";

/***/ }),

/***/ 387:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [652,191], () => (__webpack_exec__(387)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ2YsTUFBTTtZQUNkLENBQUM7WUFDRCxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksSUFBSSxJQUFJLENBQUM7UUFDakIsQ0FBQzthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM5QixXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxJQUFJLFdBQVc7WUFBRSxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUVELElBQUksMkNBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvbGFyZ2Uvc2tldGNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwNSBmcm9tICdwNSc7XHJcbmltcG9ydCBvdGYgZnJvbSAnb3BlbnR5cGUuanMnO1xyXG5cclxuaW1wb3J0ICdAc3JjL3N0eWxlcy9za2V0Y2guY3NzJztcclxuXHJcbmltcG9ydCBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCBmcm9tICdAc3JjL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmJztcclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVJdGFsaWNQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtSXRhbGljLnR0Zic7XHJcbmltcG9ydCBsaWJyZUJhc2tlcnZpbGxlQm9sZFBhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1Cb2xkLnR0Zic7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIFA1Rm9udFJlbmRlcmVyIGZyb20gJ0BzcmMvcmVuZGVyZXJzL3A1L3JlbmRlci1mb250JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBPVEZGb250UmVuZGVyZXIgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBPVEZGb250UmVuZGVyU3RyYXRlZ3kgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1zdHJhdGVneSc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgT1RGUGF0aFByZXByb2Nlc3NvciBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcGF0aC1wcmVwcm9jZXNzb3InO1xyXG5cclxuZnVuY3Rpb24gc2tldGNoKHA1OiBwNSk6IHZvaWQge1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCBsaWJyZUJhc2tlcnZpbGxlUmVnUDUgOiBwNS5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdPVEYgOiBvdGYuRm9udDtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCBsaWJyZUJhc2tlcnZpbGxlSXRhbGljUDUgOiBwNS5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVCb2xkUDUgOiBwNS5Gb250O1xyXG5cclxuICAgIGxldCBzYW1wbGVUZXh0czogc3RyaW5nW10gPSBbXCJBcmNoYWVvcHRlcnl4XCIsIFwiVGhlIOKAnEJpZyBGaXZl4oCdXCIsIFwiRW5kLU9yZG92aWNpYW5cIiwgXCJMYXRlIERldm9uaWFuXCIsIFwiRW5kLVBlcm1pYW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbmQtVHJpYXNzaWNcIiwgXCJFbmQtQ3JldGFjZW91c1wiXTtcclxuXHJcbiAgICBsZXQgdGV4dDogc3RyaW5nID0gc2FtcGxlVGV4dHNbTWF0aC5yb3VuZChwNS5yYW5kb20oMCwgc2FtcGxlVGV4dHMubGVuZ3RoIC0gMSkpXTtcclxuICAgIGxldCB0eXBlU2l6ZTogbnVtYmVyID0gMTQ4O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCB1bnByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuXHJcbiAgICBsZXQgZXJvc2lvblN0cmVuZ3RoU2xpZGVyOiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dDogcDUuRWxlbWVudDtcclxuICAgIGxldCBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXI6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dDogcDUuRWxlbWVudDtcclxuXHJcbiAgICBmdW5jdGlvbiByZWRyYXdGb250KGltbWVkaWF0ZWx5UmVkcmF3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHA1LmJhY2tncm91bmQoMjU1KTtcclxuXHJcbiAgICAgICAgaWYgKGltbWVkaWF0ZWx5UmVkcmF3KSB7IC8vIHRoaXMgY29uZGl0aW9uIGlzIGZvciB3aGVuIHRoZSB0ZXh0IGlzIHVwZGF0ZWQgKGZvciBkZWJ1Z2dpbmcpXHJcbiAgICAgICAgICAgIGxldCBwYXRoczoge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0UGF0aDogb3RmLlBhdGhbXVxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkVGV4dFBhdGg6IG90Zi5QYXRoW11cclxuICAgICAgICAgICAgfSA9IE9URkZvbnRSZW5kZXJlci5nZXRUZXh0UGF0aHMoXHJcbiAgICAgICAgICAgICAgICBwNSxcclxuICAgICAgICAgICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdPVEYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgdHlwZVNpemUsXHJcbiAgICAgICAgICAgICAgICBPVEZQYXRoUHJlcHJvY2Vzc29yLmZyZWFrVG8sXHJcbiAgICAgICAgICAgICAgICB7IGNyYXppbmVzczogZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0UGF0aHMgPSBwYXRocy5wcm9jZXNzZWRUZXh0UGF0aDtcclxuICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHMgPSBwYXRocy5vcmlnaW5hbFRleHRQYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT1RGRm9udFJlbmRlcmVyLnJlbmRlckZvbnQoXHJcbiAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICB0ZXh0UGF0aHMsXHJcbiAgICAgICAgICAgIE9URkZvbnRSZW5kZXJTdHJhdGVneS5lcm9kZSxcclxuICAgICAgICAgICAgeyBlcm9zaW9uU3RyZW5ndGg6IC1lcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSB9LFxyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRoc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFA1Rm9udFJlbmRlcmVyLnJlbmRlcihcclxuICAgICAgICAvLyAgICAgcDUsXHJcbiAgICAgICAgLy8gICAgIGxpYnJlQmFza2VydmlsbGVSZWdQNSxcclxuICAgICAgICAvLyAgICAgdGV4dCxcclxuICAgICAgICAvLyAgICAgdHlwZVNpemUsXHJcbiAgICAgICAgLy8gICAgIDAuMTMsXHJcbiAgICAgICAgLy8gICAgIFA1Rm9udFJlbmRlcmVyLnJlbmRlclN0cmF0ZWd5QmVvd3VsZlxyXG4gICAgICAgIC8vICk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBwNSBmb250IGluaXRpYWxpemF0aW9uXHJcbiAgICBwNS5wcmVsb2FkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdQNSA9IHA1LmxvYWRGb250KGxpYnJlQmFza2VydmlsbGVSZWdQYXRoKTtcclxuICAgICAgICBsaWJyZUJhc2tlcnZpbGxlSXRhbGljUDUgPSBwNS5sb2FkRm9udChsaWJyZUJhc2tlcnZpbGxlSXRhbGljUGF0aCk7XHJcbiAgICAgICAgbGlicmVCYXNrZXJ2aWxsZUJvbGRQNSA9IHA1LmxvYWRGb250KGxpYnJlQmFza2VydmlsbGVCb2xkUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUuc2V0dXAgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJhZnRlcnByaW50XCIsICgpID0+IHtcclxuICAgICAgICAgICAgcmVkcmF3Rm9udChmYWxzZSk7XHJcbiAgICAgICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZShwYXJzZUZsb2F0KFN0cmluZyhlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpICsgMik7XHJcbiAgICAgICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5odG1sKFN0cmluZyhlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwNS5jcmVhdGVDYW52YXMocDUud2luZG93V2lkdGgsIHA1LndpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIG9wZW50eXBlLmpzIGZvbnQgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICBvdGYubG9hZChsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCwgKGVycm9yLCBmb250KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgY291bGQgbm90IGJlIGxvYWRlZDogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgaWYgKGZvbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ09URiA9IGZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICByZWRyYXdGb250KCk7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW50eXBlLmpzIHwgXCIgKyBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCArIFwiIGxvYWRlZC5cIik7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW50eXBlLmpzIHwgXCIgKyBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCArIFwiIGNvdWxkIG5vdCBiZSBsb2FkZWQ6IGl0IHdhcyB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldHRpbmcgdXAgc2xpZGVycyBmb3IgZGVidWdnaW5nXHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyID0gcDUuY3JlYXRlU2xpZGVyKDAsIDEwLCAzLjU2LCAwLjAxKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIucG9zaXRpb24oNjUsIDEwKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIuc2l6ZSgyMDApO1xyXG4gICAgICAgIGxldCBmcmVha1RvQ3JhemluZXNzTGFiZWw6IHA1LkVsZW1lbnQgPSBwNS5jcmVhdGVQKFwiY3JhenlcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImZvbnQtZmFtaWx5OiBtb25vc3BhY2VcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwiZm9udC13ZWlnaHQ6IGJvbGRcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImxlZnQ6IDEwcHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwidG9wOiAtM3B4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQgPSBwNS5jcmVhdGVQKFN0cmluZyhmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcImZvbnQtZmFtaWx5OiBtb25vc3BhY2VcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwibGVmdDogMjg1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcInRvcDogLTNweFwiKTtcclxuICAgICAgICAoZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyIGFzIGFueSkuY2hhbmdlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgICAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5odG1sKFN0cmluZyhmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIudmFsdWUoKSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyID0gcDUuY3JlYXRlU2xpZGVyKDAsIDEwLCA0LjQ0LCAwLjAxKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIucG9zaXRpb24oNjUsIDUwKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIuc2l6ZSgyMDApO1xyXG4gICAgICAgIGxldCBlcm9zaW9uU3RyZW5ndGhMYWJlbDogcDUuRWxlbWVudCA9IHA1LmNyZWF0ZVAoXCJlcm9kZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcImZvbnQtZmFtaWx5OiBtb25vc3BhY2VcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJmb250LXdlaWdodDogYm9sZFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcImxlZnQ6IDEwcHhcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJ0b3A6IDM3cHhcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0ID0gcDUuY3JlYXRlUChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwibGVmdDogMjg1cHhcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwidG9wOiAzN3B4XCIpO1xyXG4gICAgICAgIChlcm9zaW9uU3RyZW5ndGhTbGlkZXIgYXMgYW55KS5jaGFuZ2VkKCgpID0+IHtcclxuICAgICAgICAgICAgcmVkcmF3Rm9udChmYWxzZSk7XHJcbiAgICAgICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5odG1sKFN0cmluZyhlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwNS53aW5kb3dSZXNpemVkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBwNS5yZXNpemVDYW52YXMocDUud2luZG93V2lkdGgsIHA1LndpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgICAgIHJlZHJhd0ZvbnQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LmtleVByZXNzZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBuZWVkc1VwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAocDUua2V5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHA1LmtleSkge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHA1LmtleTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMCwgdGV4dC5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgbmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocDUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgdGV4dCArPSBcIlxcblwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocDUua2V5ID09PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgICAgICBuZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmVlZHNVcGRhdGUpIHJlZHJhd0ZvbnQoKTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IHA1KHNrZXRjaCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==