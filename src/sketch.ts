import p5 from 'p5';
import otf from 'opentype.js';

import './styles/sketch.css';

import libreBaskervilleRegPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';
import libreBaskervilleItalicPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf';
import libreBaskervilleBoldPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf';

// @ts-ignore
import * as P5FontRenderer from './renderers/render-font-p5';
// @ts-ignore
import * as OTFFontRenderer from './renderers/render-font-otf';

function sketch(p5: p5): void {

    // @ts-ignore
    let libreBaskervilleRegP5 : p5.Font;
    // @ts-ignore
    let libreBaskervilleRegOTF : otf.Font;
    // @ts-ignore
    let libreBaskervilleItalicP5 : p5.Font;
    // @ts-ignore
    let libreBaskervilleBoldP5 : p5.Font;

    let text: string = "%";
        // "Archaeopteryx, is a\n" +
        // "genus of bird-like\n" +
        // "dinosaurs.";
    let fontSize: number = 148;
    function redrawFont(): void {
        p5.background(255);
        OTFFontRenderer.renderFont(
          p5,
          libreBaskervilleRegOTF,
          text,
          fontSize
        );
        P5FontRenderer.render(
            p5,
            libreBaskervilleRegP5,
            text,
            fontSize,
            0.13,
            P5FontRenderer.renderStrategyBeowulf
        );
    }

    // p5 font initialization
    p5.preload = (): void => {
        libreBaskervilleRegP5 = p5.loadFont(libreBaskervilleRegPath);
        libreBaskervilleItalicP5 = p5.loadFont(libreBaskervilleItalicPath);
        libreBaskervilleBoldP5 = p5.loadFont(libreBaskervilleBoldPath);
    }

    p5.setup = (): void => {
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

        console.log("mouseX " + p5.mouseX + " | " + "mouseY " + p5.mouseY);

        if (p5.key.length === 1) {
            text += p5.key;
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
