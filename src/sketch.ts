import p5 from 'p5';
import otf from 'opentype.js';

import './styles/sketch.css';

import libreBaskervilleRegPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';
import libreBaskervilleItalicPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf';
import libreBaskervilleBoldPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf';

// @ts-ignore
import * as P5FontRenderer from './renderers/p5/render-font';
// @ts-ignore
import * as OTFFontRenderer from './renderers/otf/render-font';
import * as OTFFontRenderStrategy from './renderers/otf/render-strategy';
import * as OTFPathPreprocessor from './renderers/otf/path-preprocessor';

function sketch(p5: p5): void {

    // @ts-ignore
    let libreBaskervilleRegP5 : p5.Font;
    // @ts-ignore
    let libreBaskervilleRegOTF : otf.Font;
    // @ts-ignore
    let libreBaskervilleItalicP5 : p5.Font;
    // @ts-ignore
    let libreBaskervilleBoldP5 : p5.Font;

    let text: string = "ephemerality";
        // "Archaeopteryx, is a\n" +
        // "genus of bird-like\n" +
        // "dinosaurs.";
    let typeSize: number = 148;
    let textPaths: otf.Path[];
    let unprocessedTextPaths: otf.Path[];

    function redrawFont(): void {
        p5.background(255);

        if (textPaths === undefined) {
            textPaths = OTFFontRenderer.getTextPaths(
                p5,
                libreBaskervilleRegOTF,
                text,
                typeSize,
                OTFPathPreprocessor.freakTo,
                { randomUnit: 10 }
            );
        }

        if (unprocessedTextPaths === undefined) {
            unprocessedTextPaths = OTFFontRenderer.getTextPaths(
                p5,
                libreBaskervilleRegOTF,
                text,
                typeSize,
                OTFPathPreprocessor.noPreprocess
            );
        }

        OTFFontRenderer.renderFont(
            p5,
            textPaths,
            OTFFontRenderStrategy.freakToEroded,
            { nudgeFactor: -7.2 },
            unprocessedTextPaths
        );
        // P5FontRenderer.render(
        //     p5,
        //     libreBaskervilleRegP5,
        //     text,
        //     typeSize,
        //     0.13,
        //     P5FontRenderer.renderStrategyBeowulf
        // );
    }

    // TODO request + cache to get real random numbers http://qrng.anu.edu.au/API/jsonI.php?length=100&type=hex16&size=6

    // p5 font initialization
    p5.preload = (): void => {
        libreBaskervilleRegP5 = p5.loadFont(libreBaskervilleRegPath);
        libreBaskervilleItalicP5 = p5.loadFont(libreBaskervilleItalicPath);
        libreBaskervilleBoldP5 = p5.loadFont(libreBaskervilleBoldPath);
    }

    p5.setup = (): void => {
        window.addEventListener("afterprint", () => {
            console.log("Printing has completed.");
        });

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

        // redrawFont();
    };

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

        redrawFont();
    }

    p5.keyPressed = () : void => {
        let needsUpdate: boolean = false;

        if (p5.key.length === 1) {
            switch (p5.key) {
                default:
                    text += p5.key;
                    break;
            }
            needsUpdate = true;
        } else if (p5.key === "Backspace") {
            text = text.slice(0, text.length - 1);
            needsUpdate = true;
        } else if (p5.key === "Enter") {
            text += "\n";
        } else if (p5.key === "ArrowUp") {
            needsUpdate = true;
        }

        if (needsUpdate) redrawFont();
    }
}

new p5(sketch);
