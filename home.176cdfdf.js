"use strict";
(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[962],{

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Bold.ttf";

/***/ }),

/***/ 164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fonts/LibreBaskerville-Italic.ttf";

/***/ }),

/***/ 670:
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
/******/ __webpack_require__.O(0, [652,191], () => (__webpack_exec__(670)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDZixNQUFNO1lBQ2QsQ0FBQztZQUNELFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQzthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0QyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7YUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDNUIsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNqQixDQUFDO2FBQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQzlCLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUVELElBQUksV0FBVztZQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7QUFDTCxDQUFDO0FBRUQsSUFBSSwyQ0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9za2V0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5pbXBvcnQgJ0BzcmMvc3R5bGVzL3NrZXRjaC5jc3MnO1xyXG5cclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVSZWdQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtUmVndWxhci50dGYnO1xyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZUl0YWxpY1BhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1JdGFsaWMudHRmJztcclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVCb2xkUGF0aCBmcm9tICdAc3JjL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0ICogYXMgUDVGb250UmVuZGVyZXIgZnJvbSAnQHNyYy9yZW5kZXJlcnMvcDUvcmVuZGVyLWZvbnQnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URkZvbnRSZW5kZXJlciBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLWZvbnQnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCAqIGFzIE9URkZvbnRSZW5kZXJTdHJhdGVneSBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLXN0cmF0ZWd5JztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgKiBhcyBPVEZQYXRoUHJlcHJvY2Vzc29yIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9wYXRoLXByZXByb2Nlc3Nvcic7XHJcblxyXG5mdW5jdGlvbiBza2V0Y2gocDU6IHA1KTogdm9pZCB7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZVJlZ09URiA6IG90Zi5Gb250O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA6IHA1LkZvbnQ7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZUJvbGRQNSA6IHA1LkZvbnQ7XHJcblxyXG4gICAgbGV0IHNhbXBsZVRleHRzOiBzdHJpbmdbXSA9IFtcIkFyY2hhZW9wdGVyeXhcIiwgXCJUaGUg4oCcQmlnIEZpdmXigJ1cIiwgXCJFbmQtT3Jkb3ZpY2lhblwiLCBcIkxhdGUgRGV2b25pYW5cIiwgXCJFbmQtUGVybWlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVuZC1Ucmlhc3NpY1wiLCBcIkVuZC1DcmV0YWNlb3VzXCJdO1xyXG5cclxuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSBzYW1wbGVUZXh0c1tNYXRoLnJvdW5kKHA1LnJhbmRvbSgwLCBzYW1wbGVUZXh0cy5sZW5ndGggLSAxKSldO1xyXG4gICAgbGV0IHR5cGVTaXplOiBudW1iZXIgPSAxNDg7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgbGV0IHVucHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG5cclxuICAgIGxldCBlcm9zaW9uU3RyZW5ndGhTbGlkZXI6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlcjogcDUuRWxlbWVudDtcclxuICAgIGxldCBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0OiBwNS5FbGVtZW50O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHJhd0ZvbnQoaW1tZWRpYXRlbHlSZWRyYXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgcDUuYmFja2dyb3VuZCgyNTUpO1xyXG5cclxuICAgICAgICBpZiAoaW1tZWRpYXRlbHlSZWRyYXcpIHsgLy8gdGhpcyBjb25kaXRpb24gaXMgZm9yIHdoZW4gdGhlIHRleHQgaXMgdXBkYXRlZCAoZm9yIGRlYnVnZ2luZylcclxuICAgICAgICAgICAgbGV0IHBhdGhzOiB7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFRleHRQYXRoOiBvdGYuUGF0aFtdXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRUZXh0UGF0aDogb3RmLlBhdGhbXVxyXG4gICAgICAgICAgICB9ID0gT1RGRm9udFJlbmRlcmVyLmdldFRleHRQYXRocyhcclxuICAgICAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ09URixcclxuICAgICAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAgICAgICAgIE9URlBhdGhQcmVwcm9jZXNzb3IuZnJlYWtUbyxcclxuICAgICAgICAgICAgICAgIHsgY3JhemluZXNzOiBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIudmFsdWUoKSB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRleHRQYXRocyA9IHBhdGhzLnByb2Nlc3NlZFRleHRQYXRoO1xyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRocyA9IHBhdGhzLm9yaWdpbmFsVGV4dFBhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPVEZGb250UmVuZGVyZXIucmVuZGVyRm9udChcclxuICAgICAgICAgICAgcDUsXHJcbiAgICAgICAgICAgIHRleHRQYXRocyxcclxuICAgICAgICAgICAgT1RGRm9udFJlbmRlclN0cmF0ZWd5LmVyb2RlLFxyXG4gICAgICAgICAgICB7IGVyb3Npb25TdHJlbmd0aDogLWVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpIH0sXHJcbiAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gUDVGb250UmVuZGVyZXIucmVuZGVyKFxyXG4gICAgICAgIC8vICAgICBwNSxcclxuICAgICAgICAvLyAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1LFxyXG4gICAgICAgIC8vICAgICB0ZXh0LFxyXG4gICAgICAgIC8vICAgICB0eXBlU2l6ZSxcclxuICAgICAgICAvLyAgICAgMC4xMyxcclxuICAgICAgICAvLyAgICAgUDVGb250UmVuZGVyZXIucmVuZGVyU3RyYXRlZ3lCZW93dWxmXHJcbiAgICAgICAgLy8gKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHA1IGZvbnQgaW5pdGlhbGl6YXRpb25cclxuICAgIHA1LnByZWxvYWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGlicmVCYXNrZXJ2aWxsZVJlZ1A1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgpO1xyXG4gICAgICAgIGxpYnJlQmFza2VydmlsbGVJdGFsaWNQNSA9IHA1LmxvYWRGb250KGxpYnJlQmFza2VydmlsbGVJdGFsaWNQYXRoKTtcclxuICAgICAgICBsaWJyZUJhc2tlcnZpbGxlQm9sZFA1ID0gcDUubG9hZEZvbnQobGlicmVCYXNrZXJ2aWxsZUJvbGRQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5zZXR1cCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFmdGVycHJpbnRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKHBhcnNlRmxvYXQoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSkgKyAyKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHA1LmNyZWF0ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gb3BlbnR5cGUuanMgZm9udCBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIG90Zi5sb2FkKGxpYnJlQmFza2VydmlsbGVSZWdQYXRoLCAoZXJyb3IsIGZvbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBpZiAoZm9udCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGID0gZm9udDtcclxuICAgICAgICAgICAgICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgbG9hZGVkLlwiKTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgY291bGQgbm90IGJlIGxvYWRlZDogaXQgd2FzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0dGluZyB1cCBzbGlkZXJzIGZvciBkZWJ1Z2dpbmdcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDMuNTYsIDAuMDEpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgMTApO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NMYWJlbDogcDUuRWxlbWVudCA9IHA1LmNyZWF0ZVAoXCJjcmF6eVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXdlaWdodDogYm9sZFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc0xhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJ0b3A6IC0zcHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dCA9IHA1LmNyZWF0ZVAoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwidG9wOiAtM3B4XCIpO1xyXG4gICAgICAgIChmcmVha1RvQ3JhemluZXNzU3RyZW5ndGhTbGlkZXIgYXMgYW55KS5jaGFuZ2VkKCgpID0+IHtcclxuICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhTbGlkZXIgPSBwNS5jcmVhdGVTbGlkZXIoMCwgMTAsIDQuNDQsIDAuMDEpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5wb3NpdGlvbig2NSwgNTApO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlci5zaXplKDIwMCk7XHJcbiAgICAgICAgbGV0IGVyb3Npb25TdHJlbmd0aExhYmVsOiBwNS5FbGVtZW50ID0gcDUuY3JlYXRlUChcImVyb2RlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwibGVmdDogMTBweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhMYWJlbC5zdHlsZShcInRvcDogMzdweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQgPSBwNS5jcmVhdGVQKFN0cmluZyhlcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSkpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJsZWZ0OiAyODVweFwiKTtcclxuICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuc3R5bGUoXCJ0b3A6IDM3cHhcIik7XHJcbiAgICAgICAgKGVyb3Npb25TdHJlbmd0aFNsaWRlciBhcyBhbnkpLmNoYW5nZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KGZhbHNlKTtcclxuICAgICAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0Lmh0bWwoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHA1LndpbmRvd1Jlc2l6ZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmVkcmF3Rm9udChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUua2V5UHJlc3NlZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5lZWRzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChwNS5rZXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocDUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gcDUua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHA1LmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCB0ZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBuZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwNS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZWVkc1VwZGF0ZSkgcmVkcmF3Rm9udCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgcDUoc2tldGNoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9