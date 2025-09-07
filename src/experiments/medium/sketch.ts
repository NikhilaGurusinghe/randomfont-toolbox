import p5 from 'p5';
import otf from 'opentype.js';

import '@src/styles/sketch.css';

import libreBaskervilleRegPath from '@src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';

import * as OTFFontRenderer from '@src/renderers/otf/render-font';
import * as OTFFontRenderStrategy from '@src/renderers/otf/render-strategy';
import * as OTFPathPreprocessor from '@src/renderers/otf/path-preprocessor';
// @ts-ignore
import {mediumWordErosionValues} from "@src/experiments/medium/medium-word-erosion-values";

function sketch(p5: p5): void {

    let libreBaskervilleRegOTF : otf.Font;

    let text: string = "We’re destroying words — scores of them, \n" +
        "hundreds of them, every day. We’re cutting\n" +
        "the language down to the bone.";
    const typeSize: number = 64;
    let textPaths: otf.Path[];
    let unprocessedTextPaths: otf.Path[];
    const lines = text.split(/\r?\n/);

    const freakToCrazinessValue: number = 1.17;
    const erosionStrengthValue: number = -3;

    function redrawFont(immediatelyRedraw: boolean = true): void {
        p5.background(255);

        // TODO: clean this up
        // Measure the widest line (at (0,0)) for the given typeSize
        const maxLineWidth = Math.max(
            ...lines.map(line => {
                const bb = libreBaskervilleRegOTF
                    .getPath(line, 0, 0, typeSize, { kerning: true })
                    .getBoundingBox();
                return bb.x2 - bb.x1;
            })
        );

        if (immediatelyRedraw) { // this condition is for when the text is updated (for debugging)
            let paths: {
                originalTextPath: otf.Path[]
                processedTextPath: otf.Path[]
            } = OTFFontRenderer.getTextPaths(
                p5,
                libreBaskervilleRegOTF,
                text,
                typeSize,
                OTFPathPreprocessor.freakTo,
                { craziness: freakToCrazinessValue },
                { align: "left", lineHeight: 1, marginX: (p5.windowWidth - maxLineWidth) / 2, marginY: 0 }
            );
            textPaths = paths.processedTextPath;
            unprocessedTextPaths = paths.originalTextPath;
        }

        OTFFontRenderer.renderFont(
            p5,
            textPaths,
            OTFFontRenderStrategy.erode,
            { erosionStrength: mediumWordErosionValues.map(x => x * erosionStrengthValue) },
            unprocessedTextPaths
        );
    }

    p5.setup = () : void => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);

        // opentype.js font initialization
        otf.load(libreBaskervilleRegPath, (error, font): void => {
           if (error) {
               console.log("opentype.js | " + libreBaskervilleRegPath + " could not be loaded: " + error);
           } else {
               if (font !== undefined) {
                   libreBaskervilleRegOTF = font;
                   redrawFont();
                   console.log("opentype.js | " + libreBaskervilleRegPath + " loaded.");
               } else {
                   console.log("opentype.js | " + libreBaskervilleRegPath + " could not be loaded: it was undefined");
               }
           }
        });
    };

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

        redrawFont();
    }

    p5.keyPressed = () : void => {
        let needsUpdate: boolean = false;

        if (p5.key === "ArrowUp") {
            needsUpdate = true;
        }

        if (needsUpdate) redrawFont();
    }
}

new p5(sketch);
