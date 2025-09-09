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
    const redrawInterval = 2000;
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
    p5.preload = () => {
        alert("𝗖𝗼𝗻𝘁𝗿𝗼𝗹𝘀\n" +
            "   𝘀𝗰𝗿𝗼𝗹𝗹 𝘄𝗵𝗲𝗲𝗹/𝘁𝗿𝗮𝗰𝗸𝗽𝗮𝗱 𝘀𝗰𝗿𝗼𝗹𝗹 🡺 scroll up and down\n");
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUVELEVBQUUsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFpQixFQUFXLEVBQUU7UUFDM0MsTUFBTSxTQUFTLEdBQVcsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7UUFDckUsTUFBTSxrQkFBa0IsR0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVwRixJQUFJLGtCQUFrQixLQUFLLE9BQU87WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVqRCxPQUFPLEdBQUcsa0JBQWtCLENBQUM7UUFDN0IsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDLENBQUM7SUFFRixFQUFFLENBQUMsYUFBYSxHQUFHLEdBQVUsRUFBRTtRQUMzQixFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWpELFVBQVUsRUFBRSxDQUFDO0lBQ2pCLENBQUM7QUFFTCxDQUFDO0FBRUQsSUFBSSxrQkFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFuZG9tZm9udC8uL3NyYy9leHBlcmltZW50cy9sYXJnZS9sYXJnZS10ZXh0LXN0cmluZy50cyIsIndlYnBhY2s6Ly9yYW5kb21mb250Ly4vc3JjL2V4cGVyaW1lbnRzL2xhcmdlL3NrZXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbGFyZ2VUZXh0U3RyaW5nOiBzdHJpbmcgPVxyXG4gICAgXCJGcmllemUgTWFnYXppbmUsIElzc3VlIDIxLCAwNiBNYXJjaCDigJg5NVxcblxcblwiICtcclxuICAgIFwiV2lkZWx5IGNvbnNpZGVyZWQgYXMgY3JhZnRzcGVvcGxlIHJhdGhlciB0aGFuIGFydGlzdHMsIHR5cGVmYWNlXFxuXCIgK1xyXG4gICAgXCJkZXNpZ25lcnMgdHJhZGl0aW9uYWxseSBpbmhhYml0ZWQgdGhlIG1vc3QgY2xvaXN0ZXJlZCBvZlxcblwiICtcclxuICAgIFwiZW52aXJvbm1lbnRzLiBTaW5jZSB0aGUgbWlkLWVpZ2h0aWVzLCBob3dldmVyLCB0aGV5IGhhdmUgaGFkIHRvXFxuXCIgK1xyXG4gICAgXCJjb21lIHRvIHRlcm1zIHdpdGggdGhlIG91dHNpZGUgd29ybGQgYXMgbmV3IHRlY2hub2xvZ3kgaGFzXFxuXCIgK1xyXG4gICAgXCJlcXVpcHBlZCBhIGdlbmVyYXRpb24gb2YgcmVsYXRpdmVseSB1bnNraWxsZWQgdHlwZSB1c2VycyxcXG5cIiArXHJcbiAgICBcImZhY2lsaXRhdGluZyBhIHByb2xpZmVyYXRpb24gb2YgbmV3IGZvbnQgZGVzaWducy4gV2hpbGUgbWFueVxcblwiICtcclxuICAgIFwiZGVzaWduZXJzIGFuZCB0eXBvZ3JhcGhlcnMgYXJlIHN0aWxsIHJlZWxpbmcgZnJvbSB0aGUgc2hvY2sgb2ZcXG5cIiArXHJcbiAgICBcInRoZSBuZXcsIEVyaWsgdmFuIEJsb2tsYW5kIGFuZCBKdXN0IHZhbiBSb3NzdW0sIGEgcGFpciBvZiB5b3VuZ1xcblwiICtcclxuICAgIFwiZGVzaWduZXJzIGNvbGxlY3RpdmVseSBrbm93biBhcyBMZXR0RXJyb3IsIGhhdmUgc2V0IG91dCB0byB0YWtlXFxuXCIgK1xyXG4gICAgXCJ0ZWNobm9sb2d5IHRvIGl0cyBsaW1pdHMuIFJhdGhlciB0aGFuIHNpbXBseSBhZGFwdGluZyB0byBjaGFuZ2UsXFxuXCIgK1xyXG4gICAgXCJ0aGV5IGFyZSB3YWl0aW5nIGltcGF0aWVudGx5IGZvciBjb21wdXRlcnMgdG8gY2F0Y2ggdXAgd2l0aFxcblwiICtcclxuICAgIFwidGhlaXIgaWRlYXMuXFxuXFxuXCIgK1xyXG5cclxuICAgIFwiQmVvd29sZiwgdGhlIGZpcnN0IExldHRFcnJvciB0eXBlZmFjZSB0byBiZSBjb21tZXJjaWFsbHlcXG5cIiArXHJcbiAgICBcInJlbGVhc2VkLCBpcyBzdGlsbCB0aGVpciBiZXN0IGtub3duLiBPcmlnaW5hbGx5IGNhbGxlZCBSYW5kb21cXG5cIiArXHJcbiAgICBcIkZvbnQsIGl0cyBzdGFydGluZyBwb2ludCB3YXMgdGhlIGRlc2lnbmVyc+KAmSB1bmRlcnN0YW5kaW5nIHRoYXRcXG5cIiArXHJcbiAgICBcIlBvc3RTY3JpcHQgZm9udHMgYXJlIHNldHMgb2YgbWF0aGVtYXRpY2FsIGluc3RydWN0aW9ucywgcmF0aGVyXFxuXCIgK1xyXG4gICAgXCJ0aGFuIHBoeXNpY2FsIGZvcm1zLiBXaGVuIGxldHRlcnMgYXJlIHN0b3JlZCBhcyBjb2RlZCBvdXRsaW5lXFxuXCIgK1xyXG4gICAgXCJpbmZvcm1hdGlvbiwgdGhleSBuZWVkIG5vdCBuZWNlc3NhcmlseSB0YWtlIHRoZSBzYW1lIGZvcm0gZWFjaFxcblwiICtcclxuICAgIFwidGltZSB0aGV5IGFyZSBwcmludGVkOiBpZiBhIHJhbmRvbSBlbGVtZW50IGlzIGludHJvZHVjZWQsIHRoZVxcblwiICtcclxuICAgIFwic2FtZSBzZXQgb2YgaW5zdHJ1Y3Rpb25zIGNhbiBwcm9kdWNlIGEgdmFyaWV0eSBvZiBkaWZmZXJlbnRcXG5cIiArXHJcbiAgICBcImxldHRlcmZvcm1zLiBCZW93b2xmIGlzIGF2YWlsYWJsZSBpbiBkaWZmZXJlbnQgZGVncmVlcyBvZlxcblwiICtcclxuICAgIFwicmFuZG9tbmVzczogQmVvd29sZiAyMywgZm9yIGluc3RhbmNlLCBpcyBhIGdyZWF0IGRlYWwgbW9yZVxcblwiICtcclxuICAgIFwiaXJyZWd1bGFyIGFuZCBqYWdnZWQgdGhhbiBCZW93b2xmIDIxLiBXaGlsZSBubyB0d28gaW5zdGFuY2VzIG9mXFxuXCIgK1xyXG4gICAgXCJhIGNoYXJhY3RlciBldmVyIGNvbWUgb3V0IHRoZSBzYW1lLCB0aGUgbGV0dGVycyBvZiB0aGUgQmVvd29sZlxcblwiICtcclxuICAgIFwidHlwZWZhY2UgYXJlIGluc3RhbnRseSByZWNvZ25pc2FibGUgYXMgcGFydCBvZiB0aGUgc2FtZSBmYW1pbHkuXFxuXFxuXCIgK1xyXG5cclxuICAgIFwiV2hpbGUgQmVvd29sZiBhbmQgdGhlaXIgc3Vic2VxdWVudCByYW5kb20gZm9udHMgaGF2ZSBicm9rZW5cXG5cIiArXHJcbiAgICBcIndpdGggY3VycmVudCB0eXBvZ3JhcGhpYyBjb252ZW50aW9uLCBMZXR0RXJyb3IgdmlldyB0aGVcXG5cIiArXHJcbiAgICBcInN0YW5kYXJkaXNhdGlvbiBvZiBsZXR0ZXJmb3JtcyB0aGF0IHJlc3VsdGVkIGZyb20gbWVjaGFuaWNhbFxcblwiICtcclxuICAgIFwidHlwZXNldHRpbmcgbm90IGFzIHR5cG9ncmFwaGljIHBlcmZlY3Rpb24sIGJ1dCBtZXJlbHkgYXMgYSBwaGFzZVxcblwiICtcclxuICAgIFwiaW4gYSBtdWNoIGxvbmdlciBoaXN0b3J5IG9mIHdyaXR0ZW4gY29tbXVuaWNhdGlvbi4gRXJpayB2YW5cXG5cIiArXHJcbiAgICBcIkJsb2tsYW5kIGV4cGxhaW5zOiDigJhGb3IgYSBzaG9ydCB3aGlsZSwgbWF5YmUgMzAwIHllYXJzLCB0aGVyZVxcblwiICtcclxuICAgIFwid2FzIGEgc3lzdGVtIHRoYXQgbWVhbnQgbGV0dGVycyBoYWQgdG8gYmUgdGhlIHNhbWUuIEEgbWVjaGFuaWNhbFxcblwiICtcclxuICAgIFwic3lzdGVtIG9mIHByb2R1Y2luZyB0eXBlIG1lYW50IHRoYXQgdGhlcmUgd2FzIG9uZSBtYXN0ZXIgZm9ybVxcblwiICtcclxuICAgIFwiYW5kIHlvdSBtYWRlIGNvcGllcyBvZiB0aGF0OyBpdCB3YXMgYWxsIHZlcnkgbG9naWNhbC4gVGhhdCBpc1xcblwiICtcclxuICAgIFwid2h5IGFsbCB0aGUg4oCYQeKAmXMgYXJlIHRoZSBzYW1lIGFuZCBhbGwgb2YgdGhlIOKAmELigJlzIGFyZSB0aGUgc2FtZS5cXG5cIiArXHJcbiAgICBcIldlIGhhdmUgZ3Jvd24gdXAgZXhwZWN0aW5nIHRoYXQgdG8gaGFwcGVuLCBidXQgaXQgaXMgdGhlIHJlc3VsdFxcblwiICtcclxuICAgIFwib2YgYSBtZWNoYW5pY2FsIHByb2Nlc3MsIG5vdCBmb3IgYW55IHJlYXNvbiBvZiB1bmRlcnN0YW5kaW5nIG9yXFxuXCIgK1xyXG4gICAgXCJsZWdpYmlsaXR5LuKAmVxcblxcblwiICtcclxuXHJcbiAgICBcIlZhbiBCbG9rbGFuZCByZWNhbGxzIHRoYXQgQmVvd29sZiBmb3VuZCBpdHMgbmFtZSBhbG1vc3QgYnlcXG5cIiArXHJcbiAgICBcImNoYW5jZS4gU3VnZ2VzdGVkIGJ5IGEgZnJpZW5kLCB0aGUgdGl0bGUgc2VlbWVkIHN1aXRhYmxlIGJlY2F1c2VcXG5cIiArXHJcbiAgICBcIm9mIGl0cyBnb3RoaWMgZmVlbCwgYnV0IGl0IGFsc28gcmVmZXJyZWQgdG8gbW9yZSB0aGFuIHNpbXBseSB0aGVcXG5cIiArXHJcbiAgICBcInN0eWxlIG9mIHRoZSBmYWNlLiBUaGUgbWFudXNjcmlwdCBoZWxkIGluIHRoZSBCcml0aXNoIE11c2V1bSBvZlxcblwiICtcclxuICAgIFwidGhlIEFuZ2xvLVNheG9uIHBvZW0gQmVvd29sZiB3YXMgcHJvYmFibHkgbWFkZSBieSBzY3JpYmVzXFxuXCIgK1xyXG4gICAgXCJpbiB0aGUgeWVhciAxMDAwLiBJdCBpcyB0aG91Z2h0IHRoZSBwb2VtIHJlYWNoZWQgaXRzIGZpcnN0IGxpdGVyYXJ5XFxuXCIgK1xyXG4gICAgXCJmb3JtIGxhdGUgaW4gdGhlIGVpZ2h0aCBjZW50dXJ5LCBidXQgZXhpc3RlZCBpbiBhbnkgbnVtYmVyIG9mXFxuXCIgK1xyXG4gICAgXCJvcmFsIGZvcm1zIGZvciBjZW50dXJpZXMgYmVmb3JlIHRoYXQuIFRoZSBzdXJ2aXZpbmcgdmVyc2lvbiBvZlxcblwiICtcclxuICAgIFwidGhlIHRleHQsIHdoaWNoIGlzIGNvbnNpZGVyZWQgYXMgdGhlIG9yaWdpbiBvZiBFbmdsaXNoXFxuXCIgK1xyXG4gICAgXCJsaXRlcmF0dXJlLCB3YXMgc2ltcGx5IG9uZSBvZiBtYW55LiBKdXN0IGFzIHRoZSBwb2VtIEJlb3dvbGZcXG5cIiArXHJcbiAgICBcInJlc2lzdHMgdHJhZGl0aW9uYWwgbW9kZXMgb2YgbGl0ZXJhcnkgY3JpdGljaXNtIGJlY2F1c2UgaXRcXG5cIiArXHJcbiAgICBcImNhbm5vdCBiZSB0cmVhdGVkIGFzIGEgdW5pcXVlLCBmaXhlZCBkb2N1bWVudCwgc28gdGhlIHR5cGVmYWNlXFxuXCIgK1xyXG4gICAgXCJlc2NhcGVzIGNvbnZlbnRpb25hbCB0eXBvZ3JhcGhpYyBqdWRnZW1lbnRzLiBEaXNjdXNzaW9ucyBhYm91dFxcblwiICtcclxuICAgIFwidGhlIGZpbmVyIHBvaW50cyBvZiBzcGFjaW5nIGFuZCBsaWdhdHVyZSBhcmUgaXJyZWxldmFudCB3aGVuXFxuXCIgK1xyXG4gICAgXCJlYWNoIGxldHRlciBpcyBvZiB1bmNlcnRhaW4gZm9ybS4gQnJvYWRlciBxdWVzdGlvbnMgb2ZcXG5cIiArXHJcbiAgICBcImxlZ2liaWxpdHkgZG8gc3RpbGwgYXBwbHk7IEJlb3dvbGYgcmVtYWlucyBhIHJlY29nbmlzYWJsZVxcblwiICtcclxuICAgIFwiYWxwaGFiZXQgd2hlbiBwcmludGVkIGFzIHBhcnQgb2YgYSBjb250aW51b3VzIHRleHQuXFxuXFxuXCIgK1xyXG5cclxuICAgIFwiTGV0dEVycm9y4oCZcyBleHBlcmltZW50YXRpb24gd2l0aCByYW5kb20gZm9udHMgd2FzIHByb21wdGVkXFxuXCIgK1xyXG4gICAgXCJieSBhIGRlc2lyZSB0byB0YWtlIGZ1bGwgYWR2YW50YWdlIG9mIFBvc3RTY3JpcHQgdGVjaG5vbG9neS5cXG5cIiArXHJcbiAgICBcIkhpc3RvcmljYWxseSwgZGVzaWduZXJzIGFpbWluZyB0byBleHBsb2l0IHRlY2hub2xvZ2ljYWxcXG5cIiArXHJcbiAgICBcImlubm92YXRpb24gaGF2ZSBkb25lIHNvIHVuZGVyIHRoZSBiYW5uZXIgb2YgZnVuY3Rpb246IHdoZW5cXG5cIiArXHJcbiAgICBcInR5cG9ncmFwaGVycyBlYXJsaWVyIHRoaXMgY2VudHVyeSBwcm9wb3NlZCBhYmFuZG9uaW5nIHRoZVxcblwiICtcclxuICAgIFwidXBwZXJjYXNlLCB0aGV5IGFyZ3VlZCBpdCB3b3VsZCBsZWFkIHRvIG1vcmUgZWZmZWN0aXZlIHVzZSBvZlxcblwiICtcclxuICAgIFwiY29udGVtcG9yYXJ5IHR5cGVzZXR0aW5nIG1hY2hpbmVyeS4gTGV0dEVycm9yIHdvdWxkIG5vdFxcblwiICtcclxuICAgIFwiY2xhaW0gdGhhdCB0aGVpciB0eXBlZmFjZXMgYXJlIGVmZmljaWVudCBpbiB0aGF0IHNlbnNlIOKAlCBhbiBhcnRpY2xlXFxuXCIgK1xyXG4gICAgXCJzZXQgaW4gQmVvd29sZiBmb3IgRW1pZ3JlIG1hZ2F6aW5lIHRvb2sgYW4gaG91ciBhbmQgYSBoYWxmIHRvXFxuXCIgK1xyXG4gICAgXCJwcmludC4gTGV0dEVycm9y4oCZcyBvYmplY3RpdmUgaXMg4oCYdG8gdXNlIHRoZSB0ZWNobm9sb2d5IGZvciB3aGF0XFxuXCIgK1xyXG4gICAgXCJpdCBpcyB3b3J0aOKAmS4gVGhleSBwb2ludCBvdXQgdGhhdCBhIGxhc2VyIHByaW50ZXIgaXMgYSB2ZXJ5IGxhcmdlXFxuXCIgK1xyXG4gICAgXCJhbmQgZXhwZW5zaXZlIG1hY2hpbmUgY2FwYWJsZSBvZiByZXNwb25kaW5nIHRvIGNvbXBsZXhcXG5cIiArXHJcbiAgICBcInNldHMgb2YgaW5zdHJ1Y3Rpb25zLCBzbyB3aHksIHdoZW4geW91IGFzayBmb3IgYW4g4oCYQeKAmSwgc2hvdWxkIGl0XFxuXCIgK1xyXG4gICAgXCJwcmludCB0aGUgc2FtZSBmb3JtIGVhY2ggdGltZT8gWW91IG1pZ2h0IGhhdmUgdG8gd2FpdCB0aHJlZVxcblwiICtcclxuICAgIFwicXVhcnRlcnMgb2YgYW4gaG91ciBmb3IgeW91ciBwYWdlIG9mIEJlb3dvbGYgdG8gZW1lcmdlLCBidXQgYXRcXG5cIiArXHJcbiAgICBcImxlYXN0IHRoZSBwcmludGVyIGlzIGRvaW5nIHNvbWV0aGluZyBpbnN0ZWFkIG9mIGp1c3Qgc2l0dGluZ1xcblwiICtcclxuICAgIFwiYXJvdW5kLlwiO1xyXG4iLCJpbXBvcnQgcDUgZnJvbSAncDUnO1xyXG5pbXBvcnQgb3RmIGZyb20gJ29wZW50eXBlLmpzJztcclxuXHJcbmltcG9ydCAnQHNyYy9zdHlsZXMvc2tldGNoLmNzcyc7XHJcblxyXG5pbXBvcnQgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggZnJvbSAnQHNyYy9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0Zic7XHJcblxyXG5pbXBvcnQgKiBhcyBPVEZGb250UmVuZGVyZXIgZnJvbSAnQHNyYy9yZW5kZXJlcnMvb3RmL3JlbmRlci1mb250JztcclxuaW1wb3J0ICogYXMgT1RGRm9udFJlbmRlclN0cmF0ZWd5IGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9yZW5kZXItc3RyYXRlZ3knO1xyXG5pbXBvcnQgKiBhcyBPVEZQYXRoUHJlcHJvY2Vzc29yIGZyb20gJ0BzcmMvcmVuZGVyZXJzL290Zi9wYXRoLXByZXByb2Nlc3Nvcic7XHJcbmltcG9ydCB7bGFyZ2VUZXh0U3RyaW5nfSBmcm9tIFwiQHNyYy9leHBlcmltZW50cy9sYXJnZS9sYXJnZS10ZXh0LXN0cmluZ1wiO1xyXG5pbXBvcnQge0ZpbGxTdGF0dXN9IGZyb20gXCJAc3JjL3JlbmRlcmVycy9vdGYvcmVuZGVyLWZvbnRcIjtcclxuXHJcbmZ1bmN0aW9uIHNrZXRjaChwNTogcDUpOiB2b2lkIHtcclxuXHJcbiAgICBsZXQgbGlicmVCYXNrZXJ2aWxsZVJlZ09URiA6IG90Zi5Gb250O1xyXG5cclxuICAgIGxldCB0ZXh0OiBzdHJpbmcgPSBsYXJnZVRleHRTdHJpbmc7XHJcbiAgICBjb25zdCB0eXBlU2l6ZTogbnVtYmVyID0gNDI7XHJcbiAgICBsZXQgdGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgbGV0IHVucHJvY2Vzc2VkVGV4dFBhdGhzOiBvdGYuUGF0aFtdO1xyXG4gICAgY29uc3QgbWF4U2Nyb2xsWTogbnVtYmVyID0gMTgwMDtcclxuICAgIGxldCBzY3JvbGxZOiBudW1iZXIgPSBtYXhTY3JvbGxZO1xyXG4gICAgY29uc3Qgc2Nyb2xsU2Vuc2l0aXZpdHk6IG51bWJlciA9IDE7XHJcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoL1xccj9cXG4vKTtcclxuICAgIGNvbnN0IHJlZHJhd0ludGVydmFsOiBudW1iZXIgPSAyMDAwO1xyXG4gICAgbGV0IHJlZHJhd1RpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgbGV0IHRleHRGaWxsU3RhdHVzZXM6IEZpbGxTdGF0dXNbXVtdO1xyXG4gICAgY29uc3QgZmlsbFN0YXR1c1NhbXBsZVVuaXQ6IG51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3QgZnJlYWtUb0NyYXppbmVzc1ZhbHVlOiBudW1iZXIgPSAxLjM7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkcmF3Rm9udChpbW1lZGlhdGVseVJlZHJhdzogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBwNS5iYWNrZ3JvdW5kKDI1NSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGNsZWFuIHRoaXMgdXBcclxuICAgICAgICAvLyBNZWFzdXJlIHRoZSB3aWRlc3QgbGluZSAoYXQgKDAsMCkpIGZvciB0aGUgZ2l2ZW4gdHlwZVNpemVcclxuICAgICAgICBjb25zdCBtYXhMaW5lV2lkdGggPSBNYXRoLm1heChcclxuICAgICAgICAgICAgLi4ubGluZXMubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmIgPSBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldFBhdGgobGluZSwgMCwgMCwgdHlwZVNpemUsIHsga2VybmluZzogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJiLngyIC0gYmIueDE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGltbWVkaWF0ZWx5UmVkcmF3KSB7IC8vIHRoaXMgY29uZGl0aW9uIGlzIGZvciB3aGVuIHRoZSB0ZXh0IGlzIHVwZGF0ZWQgKGZvciBkZWJ1Z2dpbmcpXHJcbiAgICAgICAgICAgIGxldCBwYXRoczoge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0UGF0aDogb3RmLlBhdGhbXVxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkVGV4dFBhdGg6IG90Zi5QYXRoW11cclxuICAgICAgICAgICAgfSA9IE9URkZvbnRSZW5kZXJlci5nZXRUZXh0UGF0aHMoXHJcbiAgICAgICAgICAgICAgICBwNSxcclxuICAgICAgICAgICAgICAgIGxpYnJlQmFza2VydmlsbGVSZWdPVEYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgdHlwZVNpemUsXHJcbiAgICAgICAgICAgICAgICBPVEZQYXRoUHJlcHJvY2Vzc29yLmZyZWFrVG8sXHJcbiAgICAgICAgICAgICAgICB7IGNyYXppbmVzczogZnJlYWtUb0NyYXppbmVzc1ZhbHVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IGFsaWduOiBcImxlZnRcIiwgbGluZUhlaWdodDogMSwgbWFyZ2luWDogKHA1LndpbmRvd1dpZHRoIC0gbWF4TGluZVdpZHRoKSAvIDIsIG1hcmdpblk6IHNjcm9sbFkgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0UGF0aHMgPSBwYXRocy5wcm9jZXNzZWRUZXh0UGF0aDtcclxuICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHMgPSBwYXRocy5vcmlnaW5hbFRleHRQYXRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRleHRGaWxsU3RhdHVzZXMgPT09IHVuZGVmaW5lZCAmJiAodGV4dFBhdGhzICE9PSB1bmRlZmluZWQgfHwgdW5wcm9jZXNzZWRUZXh0UGF0aHMgIT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0RmlsbFN0YXR1c2VzKVxyXG4gICAgICAgICAgICAvLyBzb3J0aW5nIG91dCByZW5kZXJpbmcgaG9sZXMgaW4gZm9udHNcclxuICAgICAgICAgICAgLy8gdW5wcm9jZXNzZWRUZXh0UGF0aHMgY2FuIGJlIHVzZWQgaGVyZSBpZiB0aGUgcHJvY2Vzc2luZyB5b3UgZG8gb24geW91ciB0ZXh0IGlzIHNvIGV4dHJlbWUgdGhhdCBpdCBkZXN0cm95c1xyXG4gICAgICAgICAgICAvLyBteSB2ZXJ5IGZpY2tsZSBhbGdvcml0aG0gZm9yIGRldGVybWluaW5nIHRoZSBudW1iZXIgYW5kIG9yZGVyIG9mIGhvbGVzIGluIGEgbGV0dGVyZm9ybSA6KVxyXG4gICAgICAgICAgICB0ZXh0RmlsbFN0YXR1c2VzID0gdW5wcm9jZXNzZWRUZXh0UGF0aHMgPT09IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICBPVEZGb250UmVuZGVyZXIuZ2V0VGV4dEZpbGxTdGF0dXNlcyhwNSwgdGV4dFBhdGhzLCBmaWxsU3RhdHVzU2FtcGxlVW5pdCkgOlxyXG4gICAgICAgICAgICAgICAgT1RGRm9udFJlbmRlcmVyLmdldFRleHRGaWxsU3RhdHVzZXMocDUsIHVucHJvY2Vzc2VkVGV4dFBhdGhzLCBmaWxsU3RhdHVzU2FtcGxlVW5pdCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgT1RGRm9udFJlbmRlcmVyLnJlbmRlckZvbnQoXHJcbiAgICAgICAgICAgIHA1LFxyXG4gICAgICAgICAgICB0ZXh0UGF0aHMsXHJcbiAgICAgICAgICAgIHRleHRGaWxsU3RhdHVzZXMsXHJcbiAgICAgICAgICAgIE9URkZvbnRSZW5kZXJTdHJhdGVneS5maWxsZWQsXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdW5wcm9jZXNzZWRUZXh0UGF0aHNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHA1LnByZWxvYWQgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIHByaW50IGFsbCBjb250cm9scyB0byBhbiBhbGVydFxyXG4gICAgICAgIGFsZXJ0KFwi8J2XlvCdl7zwnZe78J2YgfCdl7/wnZe88J2XufCdmIBcXG5cIiArXHJcbiAgICAgICAgICAgIFwiICAg8J2YgPCdl7DwnZe/8J2XvPCdl7nwnZe5IPCdmITwnZe18J2XsvCdl7LwnZe5L/CdmIHwnZe/8J2XrvCdl7DwnZe48J2XvfCdl67wnZexIPCdmIDwnZew8J2Xv/Cdl7zwnZe58J2XuSDwn6G6IHNjcm9sbCB1cCBhbmQgZG93blxcblwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcDUuc2V0dXAgPSAoKSA6IHZvaWQgPT4ge1xyXG4gICAgICAgIHA1LmNyZWF0ZUNhbnZhcyhwNS53aW5kb3dXaWR0aCwgcDUud2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gb3BlbnR5cGUuanMgZm9udCBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIG90Zi5sb2FkKGxpYnJlQmFza2VydmlsbGVSZWdQYXRoLCAoZXJyb3IsIGZvbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVudHlwZS5qcyB8IFwiICsgbGlicmVCYXNrZXJ2aWxsZVJlZ1BhdGggKyBcIiBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIiArIGVycm9yKTtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBpZiAoZm9udCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICBsaWJyZUJhc2tlcnZpbGxlUmVnT1RGID0gZm9udDtcclxuICAgICAgICAgICAgICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgbG9hZGVkLlwiKTtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3BlbnR5cGUuanMgfCBcIiArIGxpYnJlQmFza2VydmlsbGVSZWdQYXRoICsgXCIgY291bGQgbm90IGJlIGxvYWRlZDogaXQgd2FzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcDUuZHJhdyA9ICgpIDogdm9pZCA9PiB7XHJcbiAgICAgICAgcmVkcmF3VGltZXIgKz0gcDUuZGVsdGFUaW1lO1xyXG5cclxuICAgICAgICBpZiAocmVkcmF3VGltZXIgPj0gcmVkcmF3SW50ZXJ2YWwgJiYgbGlicmVCYXNrZXJ2aWxsZVJlZ09URiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlZHJhd1RpbWVyID0gMDtcclxuICAgICAgICAgICAgcmVkcmF3Rm9udCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwNS5tb3VzZVdoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlOiBudW1iZXIgPSBzY3JvbGxZIC0gZXZlbnQuZGVsdGFZIC8gc2Nyb2xsU2Vuc2l0aXZpdHk7XHJcbiAgICAgICAgY29uc3QgY29uc3RyYWluZWRTY3JvbGxZOiBudW1iZXIgPSBwNS5jb25zdHJhaW4oY2FuZGlkYXRlLCAtbWF4U2Nyb2xsWSwgbWF4U2Nyb2xsWSk7XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJhaW5lZFNjcm9sbFkgPT09IHNjcm9sbFkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgc2Nyb2xsWSA9IGNvbnN0cmFpbmVkU2Nyb2xsWTtcclxuICAgICAgICByZWRyYXdGb250KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwNS53aW5kb3dSZXNpemVkID0gKCkgOiB2b2lkID0+IHtcclxuICAgICAgICBwNS5yZXNpemVDYW52YXMocDUud2luZG93V2lkdGgsIHA1LndpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgICAgIHJlZHJhd0ZvbnQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm5ldyBwNShza2V0Y2gpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=