"use strict";
(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[882],{

/***/ 863:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(996);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(652);
/* harmony import */ var _src_assets_fonts_Libre_Baskerville_LibreBaskerville_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(496);
/* harmony import */ var _src_renderers_otf_render_font__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(840);
/* harmony import */ var _src_renderers_otf_render_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(922);
/* harmony import */ var _src_renderers_otf_path_preprocessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(386);







function sketch(p5) {
    let libreBaskervilleRegOTF;
    let text = "We’re destroying words — scores of them, \n" +
        "hundreds of them, every day. We’re cutting\n" +
        "the language down to the bone";
    const typeSize = 64;
    let textPaths;
    let unprocessedTextPaths;
    const lines = text.split(/\r?\n/);
    let erosionStrengthSlider;
    let erosionStrengthValueText;
    let freakToCrazinessStrengthSlider;
    let freakToCrazinessValueText;
    function redrawFont(immediatelyRedraw = true) {
        p5.background(255);
        const maxLineWidth = Math.max(...lines.map(line => {
            const bb = libreBaskervilleRegOTF
                .getPath(line, 0, 0, typeSize, { kerning: true })
                .getBoundingBox();
            return bb.x2 - bb.x1;
        }));
        if (immediatelyRedraw) {
            let paths = _src_renderers_otf_render_font__WEBPACK_IMPORTED_MODULE_3__/* .getTextPaths */ .is(p5, libreBaskervilleRegOTF, text, typeSize, _src_renderers_otf_path_preprocessor__WEBPACK_IMPORTED_MODULE_5__/* .freakTo */ .H, { craziness: freakToCrazinessStrengthSlider.value() }, { align: "left", lineHeight: 1, marginX: (p5.windowWidth - maxLineWidth) / 2, marginY: 0 });
            textPaths = paths.processedTextPath;
            unprocessedTextPaths = paths.originalTextPath;
        }
        _src_renderers_otf_render_font__WEBPACK_IMPORTED_MODULE_3__/* .renderFont */ .Q1(p5, textPaths, _src_renderers_otf_render_strategy__WEBPACK_IMPORTED_MODULE_4__/* .erode */ .s, { erosionStrength: -erosionStrengthSlider.value() }, unprocessedTextPaths);
    }
    p5.setup = () => {
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
        redrawFont();
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [652,191], () => (__webpack_exec__(863)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBd0IsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRCx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLHFCQUE2QixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDeEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0lBRUYsRUFBRSxDQUFDLGFBQWEsR0FBRyxHQUFVLEVBQUU7UUFDM0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqRCxVQUFVLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRSxDQUFDLFVBQVUsR0FBRyxHQUFVLEVBQUU7UUFDeEIsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFDO1FBRWpDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxJQUFJLFdBQVc7WUFBRSxVQUFVLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0FBQ0wsQ0FBQztBQUVELElBQUksMkNBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvbWVkaXVtL3NrZXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmltcG9ydCAnQHNyYy9zdHlsZXMvc2tldGNoLmNzcyc7XHJcblxyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0Zic7XHJcblxyXG5pbXBvcnQgKiBhcyBPVEZGb250UmVuZGVyZXIgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250JztcclxuaW1wb3J0ICogYXMgT1RGRm9udFJlbmRlclN0cmF0ZWd5IGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItc3RyYXRlZ3knO1xyXG5pbXBvcnQgKiBhcyBPVEZQYXRoUHJlcHJvY2Vzc29yIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9wYXRoLXByZXByb2Nlc3Nvcic7XHJcblxyXG5mdW5jdGlvbiBza2V0Y2gocDU6IHA1KTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdPVEYgOiBvdGYuRm9udDtcclxuXHJcbiAgICBsZXQgdGV4dDogc3RyaW5nID0gXCJXZeKAmXJlIGRlc3Ryb3lpbmcgd29yZHMg4oCUIHNjb3JlcyBvZiB0aGVtLCBcXG5cIiArXHJcbiAgICAgICAgXCJodW5kcmVkcyBvZiB0aGVtLCBldmVyeSBkYXkuIFdl4oCZcmUgY3V0dGluZ1xcblwiICtcclxuICAgICAgICBcInRoZSBsYW5ndWFnZSBkb3duIHRvIHRoZSBib25lXCI7XHJcbiAgICBjb25zdCB0eXBlU2l6ZTogbnVtYmVyID0gNjQ7XHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgbGV0IHVucHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KC9cXHI/XFxuLyk7XHJcblxyXG4gICAgbGV0IGVyb3Npb25TdHJlbmd0aFNsaWRlcjogcDUuRWxlbWVudDtcclxuICAgIGxldCBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQ6IHA1LkVsZW1lbnQ7XHJcbiAgICBsZXQgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyOiBwNS5FbGVtZW50O1xyXG4gICAgbGV0IGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQ6IHA1LkVsZW1lbnQ7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHJhd0ZvbnQoaW1tZWRpYXRlbHlSZWRyYXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgcDUuYmFja2dyb3VuZCgyNTUpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBjbGVhbiB0aGlzIHVwXHJcbiAgICAgICAgLy8gTWVhc3VyZSB0aGUgd2lkZXN0IGxpbmUgKGF0ICgwLDApKSBmb3IgdGhlIGdpdmVuIHR5cGVTaXplXHJcbiAgICAgICAgY29uc3QgbWF4TGluZVdpZHRoID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIC4uLmxpbmVzLm1hcChsaW5lID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJiID0gbGlicmVCYXNrZXJ2aWxsZVJlZ09URlxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRQYXRoKGxpbmUsIDAsIDAsIHR5cGVTaXplLCB7IGtlcm5pbmc6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYi54MiAtIGJiLngxO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChpbW1lZGlhdGVseVJlZHJhdykgeyAvLyB0aGlzIGNvbmRpdGlvbiBpcyBmb3Igd2hlbiB0aGUgdGV4dCBpcyB1cGRhdGVkIChmb3IgZGVidWdnaW5nKVxyXG4gICAgICAgICAgICBsZXQgcGF0aHM6IHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGV4dFBhdGg6IG90Zi5QYXRoW11cclxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFRleHRQYXRoOiBvdGYuUGF0aFtdXHJcbiAgICAgICAgICAgIH0gPSBPVEZGb250UmVuZGVyZXIuZ2V0VGV4dFBhdGhzKFxyXG4gICAgICAgICAgICAgICAgcDUsXHJcbiAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGLFxyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgIHR5cGVTaXplLFxyXG4gICAgICAgICAgICAgICAgT1RGUGF0aFByZXByb2Nlc3Nvci5mcmVha1RvLFxyXG4gICAgICAgICAgICAgICAgeyBjcmF6aW5lc3M6IGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlci52YWx1ZSgpIH0sXHJcbiAgICAgICAgICAgICAgICB7IGFsaWduOiBcImxlZnRcIiwgbGluZUhlaWdodDogMSwgbWFyZ2luWDogKHA1LndpbmRvd1dpZHRoIC0gbWF4TGluZVdpZHRoKSAvIDIsIG1hcmdpblk6IDAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0UGF0aHMgPSBwYXRocy5wcm9jZXNzZWRUZXh0UGF0aDtcclxuICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHMgPSBwYXRocy5vcmlnaW5hbFRleHRQYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT1RGRm9udFJlbmRlcmVyLnJlbmRlckZvbnQoXHJcbiAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICB0ZXh0UGF0aHMsXHJcbiAgICAgICAgICAgIE9URkZvbnRSZW5kZXJTdHJhdGVneS5lcm9kZSxcclxuICAgICAgICAgICAgeyBlcm9zaW9uU3RyZW5ndGg6IC1lcm9zaW9uU3RyZW5ndGhTbGlkZXIudmFsdWUoKSB9LFxyXG4gICAgICAgICAgICB1bnByb2Nlc3NlZFRleHRQYXRoc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUuc2V0dXAgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgcDUuY3JlYXRlQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBvcGVudHlwZS5qcyBmb250IGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgb3RmLmxvYWQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgsIChlcnJvciwgZm9udCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW50eXBlLmpzIHwgXCIgKyBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCArIFwiIGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGlmIChmb250ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdPVEYgPSBmb250O1xyXG4gICAgICAgICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBsb2FkZWQuXCIpO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBpdCB3YXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIHVwIHNsaWRlcnMgZm9yIGRlYnVnZ2luZ1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlciA9IHA1LmNyZWF0ZVNsaWRlcigwLCAxMCwgMy41NiwgMC4wMSk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnBvc2l0aW9uKDY1LCAxMCk7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnNpemUoMjAwKTtcclxuICAgICAgICBsZXQgZnJlYWtUb0NyYXppbmVzc0xhYmVsOiBwNS5FbGVtZW50ID0gcDUuY3JlYXRlUChcImNyYXp5XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcInBvc2l0aW9uOiBhYnNvbHV0ZVwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcImZvbnQtc2l6ZTogMTVweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzTGFiZWwuc3R5bGUoXCJsZWZ0OiAxMHB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NMYWJlbC5zdHlsZShcInRvcDogLTNweFwiKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0ID0gcDUuY3JlYXRlUChTdHJpbmcoZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICBmcmVha1RvQ3JhemluZXNzVmFsdWVUZXh0LnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZnJlYWtUb0NyYXppbmVzc1ZhbHVlVGV4dC5zdHlsZShcImxlZnQ6IDI4NXB4XCIpO1xyXG4gICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuc3R5bGUoXCJ0b3A6IC0zcHhcIik7XHJcbiAgICAgICAgKGZyZWFrVG9DcmF6aW5lc3NTdHJlbmd0aFNsaWRlciBhcyBhbnkpLmNoYW5nZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICByZWRyYXdGb250KCk7XHJcbiAgICAgICAgICAgIGZyZWFrVG9DcmF6aW5lc3NWYWx1ZVRleHQuaHRtbChTdHJpbmcoZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZnJlYWtUb0NyYXppbmVzc1N0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFNsaWRlciA9IHA1LmNyZWF0ZVNsaWRlcigwLCAxMCwgNC40NCwgMC4wMSk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnBvc2l0aW9uKDY1LCA1MCk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnNpemUoMjAwKTtcclxuICAgICAgICBsZXQgZXJvc2lvblN0cmVuZ3RoTGFiZWw6IHA1LkVsZW1lbnQgPSBwNS5jcmVhdGVQKFwiZXJvZGVcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJmb250LWZhbWlseTogbW9ub3NwYWNlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwiZm9udC13ZWlnaHQ6IGJvbGRcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJmb250LXNpemU6IDE1cHhcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoTGFiZWwuc3R5bGUoXCJsZWZ0OiAxMHB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aExhYmVsLnN0eWxlKFwidG9wOiAzN3B4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dCA9IHA1LmNyZWF0ZVAoU3RyaW5nKGVyb3Npb25TdHJlbmd0aFNsaWRlci52YWx1ZSgpKSk7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwicG9zaXRpb246IGFic29sdXRlXCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImZvbnQtZmFtaWx5OiBtb25vc3BhY2VcIik7XHJcbiAgICAgICAgZXJvc2lvblN0cmVuZ3RoVmFsdWVUZXh0LnN0eWxlKFwiZm9udC1zaXplOiAxNXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcImxlZnQ6IDI4NXB4XCIpO1xyXG4gICAgICAgIGVyb3Npb25TdHJlbmd0aFZhbHVlVGV4dC5zdHlsZShcInRvcDogMzdweFwiKTtcclxuICAgICAgICAoZXJvc2lvblN0cmVuZ3RoU2xpZGVyIGFzIGFueSkuY2hhbmdlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlZHJhd0ZvbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBlcm9zaW9uU3RyZW5ndGhWYWx1ZVRleHQuaHRtbChTdHJpbmcoZXJvc2lvblN0cmVuZ3RoU2xpZGVyLnZhbHVlKCkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcDUud2luZG93UmVzaXplZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgcDUucmVzaXplQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICAgICByZWRyYXdGb250KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcDUua2V5UHJlc3NlZCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5lZWRzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChwNS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZWVkc1VwZGF0ZSkgcmVkcmF3Rm9udCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgcDUoc2tldGNoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9