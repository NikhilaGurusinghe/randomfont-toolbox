"use strict";
(self["webpackChunkrandomfont"] = self["webpackChunkrandomfont"] || []).push([[660],{

/***/ 94:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/.pnpm/p5@1.11.10/node_modules/p5/lib/p5.min.js
var p5_min = __webpack_require__(996);
var p5_min_default = /*#__PURE__*/__webpack_require__.n(p5_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/opentype.js@1.3.4/node_modules/opentype.js/dist/opentype.module.js
var opentype_module = __webpack_require__(652);
// EXTERNAL MODULE: ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf
var LibreBaskerville_Regular = __webpack_require__(496);
// EXTERNAL MODULE: ./src/renderers/otf/render-font.ts + 2 modules
var render_font = __webpack_require__(840);
// EXTERNAL MODULE: ./src/renderers/otf/render-strategy.ts
var render_strategy = __webpack_require__(922);
// EXTERNAL MODULE: ./src/renderers/otf/path-preprocessor.ts
var path_preprocessor = __webpack_require__(386);
;// ./src/experiments/large/large-text-string.ts
const largeTextString = "Frieze Magazine, Issue 21, 06 March ‘95\n\n" +
    "Widely considered as craftspeople rather than artists, typeface\n" +
    "designers traditionally inhabited the most cloistered of\n" +
    "environments. Since the mid-eighties, however, they have had to\n" +
    "come to terms with the outside world as new technology has\n" +
    "equipped a generation of relatively unskilled type users,\n" +
    "facilitating a proliferation of new font designs. While many\n" +
    "designers and typographers are still reeling from the shock of\n" +
    "the new, Erik van Blokland and Just van Rossum, a pair of young\n" +
    "designers collectively known as LettError, have set out to take\n" +
    "technology to its limits. Rather than simply adapting to change,\n" +
    "they are waiting impatiently for computers to catch up with\n" +
    "their ideas.\n\n" +
    "Beowolf, the first LettError typeface to be commercially\n" +
    "released, is still their best known. Originally called Random\n" +
    "Font, its starting point was the designers’ understanding that\n" +
    "PostScript fonts are sets of mathematical instructions, rather\n" +
    "than physical forms. When letters are stored as coded outline\n" +
    "information, they need not necessarily take the same form each\n" +
    "time they are printed: if a random element is introduced, the\n" +
    "same set of instructions can produce a variety of different\n" +
    "letterforms. Beowolf is available in different degrees of\n" +
    "randomness: Beowolf 23, for instance, is a great deal more\n" +
    "irregular and jagged than Beowolf 21. While no two instances of\n" +
    "a character ever come out the same, the letters of the Beowolf\n" +
    "typeface are instantly recognisable as part of the same family.\n\n" +
    "While Beowolf and their subsequent random fonts have broken\n" +
    "with current typographic convention, LettError view the\n" +
    "standardisation of letterforms that resulted from mechanical\n" +
    "typesetting not as typographic perfection, but merely as a phase\n" +
    "in a much longer history of written communication. Erik van\n" +
    "Blokland explains: ‘For a short while, maybe 300 years, there\n" +
    "was a system that meant letters had to be the same. A mechanical\n" +
    "system of producing type meant that there was one master form\n" +
    "and you made copies of that; it was all very logical. That is\n" +
    "why all the ‘A’s are the same and all of the ‘B’s are the same.\n" +
    "We have grown up expecting that to happen, but it is the result\n" +
    "of a mechanical process, not for any reason of understanding or\n" +
    "legibility.’\n\n" +
    "Van Blokland recalls that Beowolf found its name almost by\n" +
    "chance. Suggested by a friend, the title seemed suitable because\n" +
    "of its gothic feel, but it also referred to more than simply the\n" +
    "style of the face. The manuscript held in the British Museum of\n" +
    "the Anglo-Saxon poem Beowolf was probably made by scribes\n" +
    "in the year 1000. It is thought the poem reached its first literary\n" +
    "form late in the eighth century, but existed in any number of\n" +
    "oral forms for centuries before that. The surviving version of\n" +
    "the text, which is considered as the origin of English\n" +
    "literature, was simply one of many. Just as the poem Beowolf\n" +
    "resists traditional modes of literary criticism because it\n" +
    "cannot be treated as a unique, fixed document, so the typeface\n" +
    "escapes conventional typographic judgements. Discussions about\n" +
    "the finer points of spacing and ligature are irrelevant when\n" +
    "each letter is of uncertain form. Broader questions of\n" +
    "legibility do still apply; Beowolf remains a recognisable\n" +
    "alphabet when printed as part of a continuous text.\n\n" +
    "LettError’s experimentation with random fonts was prompted\n" +
    "by a desire to take full advantage of PostScript technology.\n" +
    "Historically, designers aiming to exploit technological\n" +
    "innovation have done so under the banner of function: when\n" +
    "typographers earlier this century proposed abandoning the\n" +
    "uppercase, they argued it would lead to more effective use of\n" +
    "contemporary typesetting machinery. LettError would not\n" +
    "claim that their typefaces are efficient in that sense — an article\n" +
    "set in Beowolf for Emigre magazine took an hour and a half to\n" +
    "print. LettError’s objective is ‘to use the technology for what\n" +
    "it is worth’. They point out that a laser printer is a very large\n" +
    "and expensive machine capable of responding to complex\n" +
    "sets of instructions, so why, when you ask for an ‘A’, should it\n" +
    "print the same form each time? You might have to wait three\n" +
    "quarters of an hour for your page of Beowolf to emerge, but at\n" +
    "least the printer is doing something instead of just sitting\n" +
    "around.";

;// ./src/experiments/large/sketch.ts








function sketch(p5) {
    let libreBaskervilleRegOTF;
    let text = largeTextString;
    const typeSize = 42;
    let textPaths;
    let unprocessedTextPaths;
    const maxScrollY = 1800;
    let scrollY = maxScrollY;
    const scrollSensitivity = 1;
    const lines = text.split(/\r?\n/);
    const redrawInterval = 1000;
    let redrawTimer = 0;
    let textFillStatuses;
    const fillStatusSampleUnit = 1;
    const freakToCrazinessValue = 1.3;
    function redrawFont(immediatelyRedraw = true) {
        p5.background(255);
        const maxLineWidth = Math.max(...lines.map(line => {
            const bb = libreBaskervilleRegOTF
                .getPath(line, 0, 0, typeSize, { kerning: true })
                .getBoundingBox();
            return bb.x2 - bb.x1;
        }));
        if (immediatelyRedraw) {
            let paths = render_font/* getTextPaths */.is(p5, libreBaskervilleRegOTF, text, typeSize, path_preprocessor/* freakTo */.H, { craziness: freakToCrazinessValue }, { align: "left", lineHeight: 1, marginX: (p5.windowWidth - maxLineWidth) / 2, marginY: scrollY });
            textPaths = paths.processedTextPath;
            unprocessedTextPaths = paths.originalTextPath;
        }
        if (textFillStatuses === undefined && (textPaths !== undefined || unprocessedTextPaths !== undefined)) {
            console.log("hello");
            console.log(textFillStatuses);
            textFillStatuses = unprocessedTextPaths === undefined ?
                render_font/* getTextFillStatuses */.DI(p5, textPaths, fillStatusSampleUnit) :
                render_font/* getTextFillStatuses */.DI(p5, unprocessedTextPaths, fillStatusSampleUnit);
        }
        render_font/* renderFont */.Q1(p5, textPaths, textFillStatuses, render_strategy/* filled */.B, undefined, unprocessedTextPaths);
    }
    p5.setup = () => {
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
    };
    p5.draw = () => {
        redrawTimer += p5.deltaTime;
        if (redrawTimer >= redrawInterval && libreBaskervilleRegOTF !== undefined) {
            redrawTimer = 0;
            redrawFont();
        }
    };
    p5.mouseWheel = (event) => {
        const candidate = scrollY - event.deltaY / scrollSensitivity;
        const constrainedScrollY = p5.constrain(candidate, -maxScrollY, maxScrollY);
        if (constrainedScrollY === scrollY)
            return false;
        scrollY = constrainedScrollY;
        redrawFont();
        return false;
    };
    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        redrawFont();
    };
}
new (p5_min_default())(sketch);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [652,191], () => (__webpack_exec__(94)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxHQUFHLGlCQUFpQixDQUFDO1FBQ3JFLE1BQU0sa0JBQWtCLEdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFcEYsSUFBSSxrQkFBa0IsS0FBSyxPQUFPO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFakQsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzdCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQyxDQUFDO0lBRUYsRUFBRSxDQUFDLGFBQWEsR0FBRyxHQUFVLEVBQUU7UUFDM0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqRCxVQUFVLEVBQUUsQ0FBQztJQUNqQixDQUFDO0FBRUwsQ0FBQztBQUVELElBQUksa0JBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhbmRvbWZvbnQvLi9zcmMvZXhwZXJpbWVudHMvbGFyZ2UvbGFyZ2UtdGV4dC1zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9leHBlcmltZW50cy9sYXJnZS9za2V0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxhcmdlVGV4dFN0cmluZzogc3RyaW5nID1cclxuICAgIFwiRnJpZXplIE1hZ2F6aW5lLCBJc3N1ZSAyMSwgMDYgTWFyY2gg4oCYOTVcXG5cXG5cIiArXHJcbiAgICBcIldpZGVseSBjb25zaWRlcmVkIGFzIGNyYWZ0c3Blb3BsZSByYXRoZXIgdGhhbiBhcnRpc3RzLCB0eXBlZmFjZVxcblwiICtcclxuICAgIFwiZGVzaWduZXJzIHRyYWRpdGlvbmFsbHkgaW5oYWJpdGVkIHRoZSBtb3N0IGNsb2lzdGVyZWQgb2ZcXG5cIiArXHJcbiAgICBcImVudmlyb25tZW50cy4gU2luY2UgdGhlIG1pZC1laWdodGllcywgaG93ZXZlciwgdGhleSBoYXZlIGhhZCB0b1xcblwiICtcclxuICAgIFwiY29tZSB0byB0ZXJtcyB3aXRoIHRoZSBvdXRzaWRlIHdvcmxkIGFzIG5ldyB0ZWNobm9sb2d5IGhhc1xcblwiICtcclxuICAgIFwiZXF1aXBwZWQgYSBnZW5lcmF0aW9uIG9mIHJlbGF0aXZlbHkgdW5za2lsbGVkIHR5cGUgdXNlcnMsXFxuXCIgK1xyXG4gICAgXCJmYWNpbGl0YXRpbmcgYSBwcm9saWZlcmF0aW9uIG9mIG5ldyBmb250IGRlc2lnbnMuIFdoaWxlIG1hbnlcXG5cIiArXHJcbiAgICBcImRlc2lnbmVycyBhbmQgdHlwb2dyYXBoZXJzIGFyZSBzdGlsbCByZWVsaW5nIGZyb20gdGhlIHNob2NrIG9mXFxuXCIgK1xyXG4gICAgXCJ0aGUgbmV3LCBFcmlrIHZhbiBCbG9rbGFuZCBhbmQgSnVzdCB2YW4gUm9zc3VtLCBhIHBhaXIgb2YgeW91bmdcXG5cIiArXHJcbiAgICBcImRlc2lnbmVycyBjb2xsZWN0aXZlbHkga25vd24gYXMgTGV0dEVycm9yLCBoYXZlIHNldCBvdXQgdG8gdGFrZVxcblwiICtcclxuICAgIFwidGVjaG5vbG9neSB0byBpdHMgbGltaXRzLiBSYXRoZXIgdGhhbiBzaW1wbHkgYWRhcHRpbmcgdG8gY2hhbmdlLFxcblwiICtcclxuICAgIFwidGhleSBhcmUgd2FpdGluZyBpbXBhdGllbnRseSBmb3IgY29tcHV0ZXJzIHRvIGNhdGNoIHVwIHdpdGhcXG5cIiArXHJcbiAgICBcInRoZWlyIGlkZWFzLlxcblxcblwiICtcclxuXHJcbiAgICBcIkJlb3dvbGYsIHRoZSBmaXJzdCBMZXR0RXJyb3IgdHlwZWZhY2UgdG8gYmUgY29tbWVyY2lhbGx5XFxuXCIgK1xyXG4gICAgXCJyZWxlYXNlZCwgaXMgc3RpbGwgdGhlaXIgYmVzdCBrbm93bi4gT3JpZ2luYWxseSBjYWxsZWQgUmFuZG9tXFxuXCIgK1xyXG4gICAgXCJGb250LCBpdHMgc3RhcnRpbmcgcG9pbnQgd2FzIHRoZSBkZXNpZ25lcnPigJkgdW5kZXJzdGFuZGluZyB0aGF0XFxuXCIgK1xyXG4gICAgXCJQb3N0U2NyaXB0IGZvbnRzIGFyZSBzZXRzIG9mIG1hdGhlbWF0aWNhbCBpbnN0cnVjdGlvbnMsIHJhdGhlclxcblwiICtcclxuICAgIFwidGhhbiBwaHlzaWNhbCBmb3Jtcy4gV2hlbiBsZXR0ZXJzIGFyZSBzdG9yZWQgYXMgY29kZWQgb3V0bGluZVxcblwiICtcclxuICAgIFwiaW5mb3JtYXRpb24sIHRoZXkgbmVlZCBub3QgbmVjZXNzYXJpbHkgdGFrZSB0aGUgc2FtZSBmb3JtIGVhY2hcXG5cIiArXHJcbiAgICBcInRpbWUgdGhleSBhcmUgcHJpbnRlZDogaWYgYSByYW5kb20gZWxlbWVudCBpcyBpbnRyb2R1Y2VkLCB0aGVcXG5cIiArXHJcbiAgICBcInNhbWUgc2V0IG9mIGluc3RydWN0aW9ucyBjYW4gcHJvZHVjZSBhIHZhcmlldHkgb2YgZGlmZmVyZW50XFxuXCIgK1xyXG4gICAgXCJsZXR0ZXJmb3Jtcy4gQmVvd29sZiBpcyBhdmFpbGFibGUgaW4gZGlmZmVyZW50IGRlZ3JlZXMgb2ZcXG5cIiArXHJcbiAgICBcInJhbmRvbW5lc3M6IEJlb3dvbGYgMjMsIGZvciBpbnN0YW5jZSwgaXMgYSBncmVhdCBkZWFsIG1vcmVcXG5cIiArXHJcbiAgICBcImlycmVndWxhciBhbmQgamFnZ2VkIHRoYW4gQmVvd29sZiAyMS4gV2hpbGUgbm8gdHdvIGluc3RhbmNlcyBvZlxcblwiICtcclxuICAgIFwiYSBjaGFyYWN0ZXIgZXZlciBjb21lIG91dCB0aGUgc2FtZSwgdGhlIGxldHRlcnMgb2YgdGhlIEJlb3dvbGZcXG5cIiArXHJcbiAgICBcInR5cGVmYWNlIGFyZSBpbnN0YW50bHkgcmVjb2duaXNhYmxlIGFzIHBhcnQgb2YgdGhlIHNhbWUgZmFtaWx5LlxcblxcblwiICtcclxuXHJcbiAgICBcIldoaWxlIEJlb3dvbGYgYW5kIHRoZWlyIHN1YnNlcXVlbnQgcmFuZG9tIGZvbnRzIGhhdmUgYnJva2VuXFxuXCIgK1xyXG4gICAgXCJ3aXRoIGN1cnJlbnQgdHlwb2dyYXBoaWMgY29udmVudGlvbiwgTGV0dEVycm9yIHZpZXcgdGhlXFxuXCIgK1xyXG4gICAgXCJzdGFuZGFyZGlzYXRpb24gb2YgbGV0dGVyZm9ybXMgdGhhdCByZXN1bHRlZCBmcm9tIG1lY2hhbmljYWxcXG5cIiArXHJcbiAgICBcInR5cGVzZXR0aW5nIG5vdCBhcyB0eXBvZ3JhcGhpYyBwZXJmZWN0aW9uLCBidXQgbWVyZWx5IGFzIGEgcGhhc2VcXG5cIiArXHJcbiAgICBcImluIGEgbXVjaCBsb25nZXIgaGlzdG9yeSBvZiB3cml0dGVuIGNvbW11bmljYXRpb24uIEVyaWsgdmFuXFxuXCIgK1xyXG4gICAgXCJCbG9rbGFuZCBleHBsYWluczog4oCYRm9yIGEgc2hvcnQgd2hpbGUsIG1heWJlIDMwMCB5ZWFycywgdGhlcmVcXG5cIiArXHJcbiAgICBcIndhcyBhIHN5c3RlbSB0aGF0IG1lYW50IGxldHRlcnMgaGFkIHRvIGJlIHRoZSBzYW1lLiBBIG1lY2hhbmljYWxcXG5cIiArXHJcbiAgICBcInN5c3RlbSBvZiBwcm9kdWNpbmcgdHlwZSBtZWFudCB0aGF0IHRoZXJlIHdhcyBvbmUgbWFzdGVyIGZvcm1cXG5cIiArXHJcbiAgICBcImFuZCB5b3UgbWFkZSBjb3BpZXMgb2YgdGhhdDsgaXQgd2FzIGFsbCB2ZXJ5IGxvZ2ljYWwuIFRoYXQgaXNcXG5cIiArXHJcbiAgICBcIndoeSBhbGwgdGhlIOKAmEHigJlzIGFyZSB0aGUgc2FtZSBhbmQgYWxsIG9mIHRoZSDigJhC4oCZcyBhcmUgdGhlIHNhbWUuXFxuXCIgK1xyXG4gICAgXCJXZSBoYXZlIGdyb3duIHVwIGV4cGVjdGluZyB0aGF0IHRvIGhhcHBlbiwgYnV0IGl0IGlzIHRoZSByZXN1bHRcXG5cIiArXHJcbiAgICBcIm9mIGEgbWVjaGFuaWNhbCBwcm9jZXNzLCBub3QgZm9yIGFueSByZWFzb24gb2YgdW5kZXJzdGFuZGluZyBvclxcblwiICtcclxuICAgIFwibGVnaWJpbGl0eS7igJlcXG5cXG5cIiArXHJcblxyXG4gICAgXCJWYW4gQmxva2xhbmQgcmVjYWxscyB0aGF0IEJlb3dvbGYgZm91bmQgaXRzIG5hbWUgYWxtb3N0IGJ5XFxuXCIgK1xyXG4gICAgXCJjaGFuY2UuIFN1Z2dlc3RlZCBieSBhIGZyaWVuZCwgdGhlIHRpdGxlIHNlZW1lZCBzdWl0YWJsZSBiZWNhdXNlXFxuXCIgK1xyXG4gICAgXCJvZiBpdHMgZ290aGljIGZlZWwsIGJ1dCBpdCBhbHNvIHJlZmVycmVkIHRvIG1vcmUgdGhhbiBzaW1wbHkgdGhlXFxuXCIgK1xyXG4gICAgXCJzdHlsZSBvZiB0aGUgZmFjZS4gVGhlIG1hbnVzY3JpcHQgaGVsZCBpbiB0aGUgQnJpdGlzaCBNdXNldW0gb2ZcXG5cIiArXHJcbiAgICBcInRoZSBBbmdsby1TYXhvbiBwb2VtIEJlb3dvbGYgd2FzIHByb2JhYmx5IG1hZGUgYnkgc2NyaWJlc1xcblwiICtcclxuICAgIFwiaW4gdGhlIHllYXIgMTAwMC4gSXQgaXMgdGhvdWdodCB0aGUgcG9lbSByZWFjaGVkIGl0cyBmaXJzdCBsaXRlcmFyeVxcblwiICtcclxuICAgIFwiZm9ybSBsYXRlIGluIHRoZSBlaWdodGggY2VudHVyeSwgYnV0IGV4aXN0ZWQgaW4gYW55IG51bWJlciBvZlxcblwiICtcclxuICAgIFwib3JhbCBmb3JtcyBmb3IgY2VudHVyaWVzIGJlZm9yZSB0aGF0LiBUaGUgc3Vydml2aW5nIHZlcnNpb24gb2ZcXG5cIiArXHJcbiAgICBcInRoZSB0ZXh0LCB3aGljaCBpcyBjb25zaWRlcmVkIGFzIHRoZSBvcmlnaW4gb2YgRW5nbGlzaFxcblwiICtcclxuICAgIFwibGl0ZXJhdHVyZSwgd2FzIHNpbXBseSBvbmUgb2YgbWFueS4gSnVzdCBhcyB0aGUgcG9lbSBCZW93b2xmXFxuXCIgK1xyXG4gICAgXCJyZXNpc3RzIHRyYWRpdGlvbmFsIG1vZGVzIG9mIGxpdGVyYXJ5IGNyaXRpY2lzbSBiZWNhdXNlIGl0XFxuXCIgK1xyXG4gICAgXCJjYW5ub3QgYmUgdHJlYXRlZCBhcyBhIHVuaXF1ZSwgZml4ZWQgZG9jdW1lbnQsIHNvIHRoZSB0eXBlZmFjZVxcblwiICtcclxuICAgIFwiZXNjYXBlcyBjb252ZW50aW9uYWwgdHlwb2dyYXBoaWMganVkZ2VtZW50cy4gRGlzY3Vzc2lvbnMgYWJvdXRcXG5cIiArXHJcbiAgICBcInRoZSBmaW5lciBwb2ludHMgb2Ygc3BhY2luZyBhbmQgbGlnYXR1cmUgYXJlIGlycmVsZXZhbnQgd2hlblxcblwiICtcclxuICAgIFwiZWFjaCBsZXR0ZXIgaXMgb2YgdW5jZXJ0YWluIGZvcm0uIEJyb2FkZXIgcXVlc3Rpb25zIG9mXFxuXCIgK1xyXG4gICAgXCJsZWdpYmlsaXR5IGRvIHN0aWxsIGFwcGx5OyBCZW93b2xmIHJlbWFpbnMgYSByZWNvZ25pc2FibGVcXG5cIiArXHJcbiAgICBcImFscGhhYmV0IHdoZW4gcHJpbnRlZCBhcyBwYXJ0IG9mIGEgY29udGludW91cyB0ZXh0LlxcblxcblwiICtcclxuXHJcbiAgICBcIkxldHRFcnJvcuKAmXMgZXhwZXJpbWVudGF0aW9uIHdpdGggcmFuZG9tIGZvbnRzIHdhcyBwcm9tcHRlZFxcblwiICtcclxuICAgIFwiYnkgYSBkZXNpcmUgdG8gdGFrZSBmdWxsIGFkdmFudGFnZSBvZiBQb3N0U2NyaXB0IHRlY2hub2xvZ3kuXFxuXCIgK1xyXG4gICAgXCJIaXN0b3JpY2FsbHksIGRlc2lnbmVycyBhaW1pbmcgdG8gZXhwbG9pdCB0ZWNobm9sb2dpY2FsXFxuXCIgK1xyXG4gICAgXCJpbm5vdmF0aW9uIGhhdmUgZG9uZSBzbyB1bmRlciB0aGUgYmFubmVyIG9mIGZ1bmN0aW9uOiB3aGVuXFxuXCIgK1xyXG4gICAgXCJ0eXBvZ3JhcGhlcnMgZWFybGllciB0aGlzIGNlbnR1cnkgcHJvcG9zZWQgYWJhbmRvbmluZyB0aGVcXG5cIiArXHJcbiAgICBcInVwcGVyY2FzZSwgdGhleSBhcmd1ZWQgaXQgd291bGQgbGVhZCB0byBtb3JlIGVmZmVjdGl2ZSB1c2Ugb2ZcXG5cIiArXHJcbiAgICBcImNvbnRlbXBvcmFyeSB0eXBlc2V0dGluZyBtYWNoaW5lcnkuIExldHRFcnJvciB3b3VsZCBub3RcXG5cIiArXHJcbiAgICBcImNsYWltIHRoYXQgdGhlaXIgdHlwZWZhY2VzIGFyZSBlZmZpY2llbnQgaW4gdGhhdCBzZW5zZSDigJQgYW4gYXJ0aWNsZVxcblwiICtcclxuICAgIFwic2V0IGluIEJlb3dvbGYgZm9yIEVtaWdyZSBtYWdhemluZSB0b29rIGFuIGhvdXIgYW5kIGEgaGFsZiB0b1xcblwiICtcclxuICAgIFwicHJpbnQuIExldHRFcnJvcuKAmXMgb2JqZWN0aXZlIGlzIOKAmHRvIHVzZSB0aGUgdGVjaG5vbG9neSBmb3Igd2hhdFxcblwiICtcclxuICAgIFwiaXQgaXMgd29ydGjigJkuIFRoZXkgcG9pbnQgb3V0IHRoYXQgYSBsYXNlciBwcmludGVyIGlzIGEgdmVyeSBsYXJnZVxcblwiICtcclxuICAgIFwiYW5kIGV4cGVuc2l2ZSBtYWNoaW5lIGNhcGFibGUgb2YgcmVzcG9uZGluZyB0byBjb21wbGV4XFxuXCIgK1xyXG4gICAgXCJzZXRzIG9mIGluc3RydWN0aW9ucywgc28gd2h5LCB3aGVuIHlvdSBhc2sgZm9yIGFuIOKAmEHigJksIHNob3VsZCBpdFxcblwiICtcclxuICAgIFwicHJpbnQgdGhlIHNhbWUgZm9ybSBlYWNoIHRpbWU/IFlvdSBtaWdodCBoYXZlIHRvIHdhaXQgdGhyZWVcXG5cIiArXHJcbiAgICBcInF1YXJ0ZXJzIG9mIGFuIGhvdXIgZm9yIHlvdXIgcGFnZSBvZiBCZW93b2xmIHRvIGVtZXJnZSwgYnV0IGF0XFxuXCIgK1xyXG4gICAgXCJsZWFzdCB0aGUgcHJpbnRlciBpcyBkb2luZyBzb21ldGhpbmcgaW5zdGVhZCBvZiBqdXN0IHNpdHRpbmdcXG5cIiArXHJcbiAgICBcImFyb3VuZC5cIjtcclxuIiwiaW1wb3J0IHA1IGZyb20gJ3A1JztcclxuaW1wb3J0IG90ZiBmcm9tICdvcGVudHlwZS5qcyc7XHJcblxyXG5pbXBvcnQgJ0BzcmMvc3R5bGVzL3NrZXRjaC5jc3MnO1xyXG5cclxuaW1wb3J0IGxpYnJlQmFza2VydmlsbGVSZWdQYXRoIGZyb20gJ0BzcmMvYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtUmVndWxhci50dGYnO1xyXG5cclxuaW1wb3J0ICogYXMgT1RGRm9udFJlbmRlcmVyIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItZm9udCc7XHJcbmltcG9ydCAqIGFzIE9URkZvbnRSZW5kZXJTdHJhdGVneSBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLXN0cmF0ZWd5JztcclxuaW1wb3J0ICogYXMgT1RGUGF0aFByZXByb2Nlc3NvciBmcm9tICdAc3JjL3JlbmRlcmVycy9vdGYvcGF0aC1wcmVwcm9jZXNzb3InO1xyXG5pbXBvcnQge2xhcmdlVGV4dFN0cmluZ30gZnJvbSBcIkBzcmMvZXhwZXJpbWVudHMvbGFyZ2UvbGFyZ2UtdGV4dC1zdHJpbmdcIjtcclxuaW1wb3J0IHtGaWxsU3RhdHVzfSBmcm9tIFwiQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250XCI7XHJcblxyXG5mdW5jdGlvbiBza2V0Y2gocDU6IHA1KTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxpYnJlQmFza2VydmlsbGVSZWdPVEYgOiBvdGYuRm9udDtcclxuXHJcbiAgICBsZXQgdGV4dDogc3RyaW5nID0gbGFyZ2VUZXh0U3RyaW5nO1xyXG4gICAgY29uc3QgdHlwZVNpemU6IG51bWJlciA9IDQyO1xyXG4gICAgbGV0IHRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuICAgIGxldCB1bnByb2Nlc3NlZFRleHRQYXRoczogb3RmLlBhdGhbXTtcclxuICAgIGNvbnN0IG1heFNjcm9sbFk6IG51bWJlciA9IDE4MDA7XHJcbiAgICBsZXQgc2Nyb2xsWTogbnVtYmVyID0gbWF4U2Nyb2xsWTtcclxuICAgIGNvbnN0IHNjcm9sbFNlbnNpdGl2aXR5OiBudW1iZXIgPSAxO1xyXG4gICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KC9cXHI/XFxuLyk7XHJcbiAgICBjb25zdCByZWRyYXdJbnRlcnZhbDogbnVtYmVyID0gMTAwMDtcclxuICAgIGxldCByZWRyYXdUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIGxldCB0ZXh0RmlsbFN0YXR1c2VzOiBGaWxsU3RhdHVzW11bXTtcclxuICAgIGNvbnN0IGZpbGxTdGF0dXNTYW1wbGVVbml0OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNvbnN0IGZyZWFrVG9DcmF6aW5lc3NWYWx1ZTogbnVtYmVyID0gMS4zO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHJhd0ZvbnQoaW1tZWRpYXRlbHlSZWRyYXc6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgcDUuYmFja2dyb3VuZCgyNTUpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBjbGVhbiB0aGlzIHVwXHJcbiAgICAgICAgLy8gTWVhc3VyZSB0aGUgd2lkZXN0IGxpbmUgKGF0ICgwLDApKSBmb3IgdGhlIGdpdmVuIHR5cGVTaXplXHJcbiAgICAgICAgY29uc3QgbWF4TGluZVdpZHRoID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIC4uLmxpbmVzLm1hcChsaW5lID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJiID0gbGlicmVCYXNrZXJ2aWxsZVJlZ09URlxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRQYXRoKGxpbmUsIDAsIDAsIHR5cGVTaXplLCB7IGtlcm5pbmc6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYi54MiAtIGJiLngxO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChpbW1lZGlhdGVseVJlZHJhdykgeyAvLyB0aGlzIGNvbmRpdGlvbiBpcyBmb3Igd2hlbiB0aGUgdGV4dCBpcyB1cGRhdGVkIChmb3IgZGVidWdnaW5nKVxyXG4gICAgICAgICAgICBsZXQgcGF0aHM6IHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGV4dFBhdGg6IG90Zi5QYXRoW11cclxuICAgICAgICAgICAgICAgIHByb2Nlc3NlZFRleHRQYXRoOiBvdGYuUGF0aFtdXHJcbiAgICAgICAgICAgIH0gPSBPVEZGb250UmVuZGVyZXIuZ2V0VGV4dFBhdGhzKFxyXG4gICAgICAgICAgICAgICAgcDUsXHJcbiAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGLFxyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgIHR5cGVTaXplLFxyXG4gICAgICAgICAgICAgICAgT1RGUGF0aFByZXByb2Nlc3Nvci5mcmVha1RvLFxyXG4gICAgICAgICAgICAgICAgeyBjcmF6aW5lc3M6IGZyZWFrVG9DcmF6aW5lc3NWYWx1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBhbGlnbjogXCJsZWZ0XCIsIGxpbmVIZWlnaHQ6IDEsIG1hcmdpblg6IChwNS53aW5kb3dXaWR0aCAtIG1heExpbmVXaWR0aCkgLyAyLCBtYXJnaW5ZOiBzY3JvbGxZIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGV4dFBhdGhzID0gcGF0aHMucHJvY2Vzc2VkVGV4dFBhdGg7XHJcbiAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzID0gcGF0aHMub3JpZ2luYWxUZXh0UGF0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0ZXh0RmlsbFN0YXR1c2VzID09PSB1bmRlZmluZWQgJiYgKHRleHRQYXRocyAhPT0gdW5kZWZpbmVkIHx8IHVucHJvY2Vzc2VkVGV4dFBhdGhzICE9PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGV4dEZpbGxTdGF0dXNlcylcclxuICAgICAgICAgICAgLy8gc29ydGluZyBvdXQgcmVuZGVyaW5nIGhvbGVzIGluIGZvbnRzXHJcbiAgICAgICAgICAgIC8vIHVucHJvY2Vzc2VkVGV4dFBhdGhzIGNhbiBiZSB1c2VkIGhlcmUgaWYgdGhlIHByb2Nlc3NpbmcgeW91IGRvIG9uIHlvdXIgdGV4dCBpcyBzbyBleHRyZW1lIHRoYXQgaXQgZGVzdHJveXNcclxuICAgICAgICAgICAgLy8gbXkgdmVyeSBmaWNrbGUgYWxnb3JpdGhtIGZvciBkZXRlcm1pbmluZyB0aGUgbnVtYmVyIGFuZCBvcmRlciBvZiBob2xlcyBpbiBhIGxldHRlcmZvcm0gOilcclxuICAgICAgICAgICAgdGV4dEZpbGxTdGF0dXNlcyA9IHVucHJvY2Vzc2VkVGV4dFBhdGhzID09PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgT1RGRm9udFJlbmRlcmVyLmdldFRleHRGaWxsU3RhdHVzZXMocDUsIHRleHRQYXRocywgZmlsbFN0YXR1c1NhbXBsZVVuaXQpIDpcclxuICAgICAgICAgICAgICAgIE9URkZvbnRSZW5kZXJlci5nZXRUZXh0RmlsbFN0YXR1c2VzKHA1LCB1bnByb2Nlc3NlZFRleHRQYXRocywgZmlsbFN0YXR1c1NhbXBsZVVuaXQpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIE9URkZvbnRSZW5kZXJlci5yZW5kZXJGb250KFxyXG4gICAgICAgICAgICBwNSxcclxuICAgICAgICAgICAgdGV4dFBhdGhzLFxyXG4gICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzLFxyXG4gICAgICAgICAgICBPVEZGb250UmVuZGVyU3RyYXRlZ3kuZmlsbGVkLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHVucHJvY2Vzc2VkVGV4dFBhdGhzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwNS5zZXR1cCA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgcDUuY3JlYXRlQ2FudmFzKHA1LndpbmRvd1dpZHRoLCBwNS53aW5kb3dIZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBvcGVudHlwZS5qcyBmb250IGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgb3RmLmxvYWQobGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGgsIChlcnJvciwgZm9udCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW50eXBlLmpzIHwgXCIgKyBsaWJyZUJhc2tlcnZpbGxlUmVnUGF0aCArIFwiIGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGlmIChmb250ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdPVEYgPSBmb250O1xyXG4gICAgICAgICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBsb2FkZWQuXCIpO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBpdCB3YXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwNS5kcmF3ID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICByZWRyYXdUaW1lciArPSBwNS5kZWx0YVRpbWU7XHJcblxyXG4gICAgICAgIGlmIChyZWRyYXdUaW1lciA+PSByZWRyYXdJbnRlcnZhbCAmJiBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmVkcmF3VGltZXIgPSAwO1xyXG4gICAgICAgICAgICByZWRyYXdGb250KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHA1Lm1vdXNlV2hlZWwgPSAoZXZlbnQ6IFdoZWVsRXZlbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBjYW5kaWRhdGU6IG51bWJlciA9IHNjcm9sbFkgLSBldmVudC5kZWx0YVkgLyBzY3JvbGxTZW5zaXRpdml0eTtcclxuICAgICAgICBjb25zdCBjb25zdHJhaW5lZFNjcm9sbFk6IG51bWJlciA9IHA1LmNvbnN0cmFpbihjYW5kaWRhdGUsIC1tYXhTY3JvbGxZLCBtYXhTY3JvbGxZKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cmFpbmVkU2Nyb2xsWSA9PT0gc2Nyb2xsWSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBzY3JvbGxZID0gY29uc3RyYWluZWRTY3JvbGxZO1xyXG4gICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHA1LndpbmRvd1Jlc2l6ZWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LnJlc2l6ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubmV3IHA1KHNrZXRjaCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==