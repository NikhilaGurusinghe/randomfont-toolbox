import p5 from 'p5';
import otf from 'opentype.js';

import '@src/styles/sketch.css';

import libreBaskervilleRegPath from '@src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';

import * as OTFFontRenderer from '@src/renderers/otf/render-font';
import * as OTFFontRenderStrategy from '@src/renderers/otf/render-strategy';
import * as OTFPathPreprocessor from '@src/renderers/otf/path-preprocessor';
import {largeTextString} from "@src/experiments/large/large-text-string";
import {FillStatus} from "@src/renderers/otf/render-font";

function sketch(p5: p5): void {

    let libreBaskervilleRegOTF : otf.Font;

    let text: string = largeTextString;
    const typeSize: number = 42;
    let textPaths: otf.Path[];
    let unprocessedTextPaths: otf.Path[];
    const maxScrollY: number = 1800;
    let scrollY: number = maxScrollY;
    const scrollSensitivity: number = 1;
    const lines = text.split(/\r?\n/);
    const redrawInterval: number = 1000;
    let redrawTimer: number = 0;
    let textFillStatuses: FillStatus[][];
    const fillStatusSampleUnit: number = 1;

    const freakToCrazinessValue: number = 1.3;

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
                { align: "left", lineHeight: 1, marginX: (p5.windowWidth - maxLineWidth) / 2, marginY: scrollY }
            );
            textPaths = paths.processedTextPath;
            unprocessedTextPaths = paths.originalTextPath;
        }

        if (textFillStatuses === undefined && (textPaths !== undefined || unprocessedTextPaths !== undefined)) {
            console.log("hello")
            console.log(textFillStatuses)
            // sorting out rendering holes in fonts
            // unprocessedTextPaths can be used here if the processing you do on your text is so extreme that it destroys
            // my very fickle algorithm for determining the number and order of holes in a letterform :)
            textFillStatuses = unprocessedTextPaths === undefined ?
                OTFFontRenderer.getTextFillStatuses(p5, textPaths, fillStatusSampleUnit) :
                OTFFontRenderer.getTextFillStatuses(p5, unprocessedTextPaths, fillStatusSampleUnit);
        }


        OTFFontRenderer.renderFont(
            p5,
            textPaths,
            textFillStatuses,
            OTFFontRenderStrategy.filled,
            undefined,
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

    p5.draw = () : void => {
        redrawTimer += p5.deltaTime;

        if (redrawTimer >= redrawInterval && libreBaskervilleRegOTF !== undefined) {
            redrawTimer = 0;
            redrawFont();
        }
    }

    p5.mouseWheel = (event: WheelEvent): boolean => {
        const candidate: number = scrollY - event.deltaY / scrollSensitivity;
        const constrainedScrollY: number = p5.constrain(candidate, -maxScrollY, maxScrollY);

        if (constrainedScrollY === scrollY) return false;

        scrollY = constrainedScrollY;
        redrawFont();
        return false;
    };

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

        redrawFont();
    }

}

new p5(sketch);
