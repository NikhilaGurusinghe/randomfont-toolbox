import p5 from 'p5';
import OTF from 'opentype.js';

import libreBaskervilleRegPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';
import libreBaskervilleItalicPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf';
import libreBaskervilleBoldPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf';

import './styles/sketch.css';

import {
    renderFontP5,                   // @ts-ignore
    renderStrategyRandomPoints,     // @ts-ignore
    renderStrategyPoints,           // @ts-ignore
    renderStrategyOutlined,         // @ts-ignore
    renderStrategyRandomOutlined,   // @ts-ignore
    renderStrategyFilled,           // @ts-ignore
    renderStrategyBeowulf           // @ts-ignore
} from './render-font-p5';

function sketch(p5: p5): void {

    let libreBaskervilleRegP5 : p5.Font;            // @ts-ignore
    let libreBaskervilleRegOTF : OTF.Font;     // @ts-ignore

    let libreBaskervilleItalic : p5.Font;           // @ts-ignore

    let libreBaskervilleBold : p5.Font;             // @ts-ignore

    let text: string = "Archaeopteryx";
        // "Archaeopteryx, is a\n" +
        // "genus of bird-like\n" +
        // "dinosaurs.";
    let fontSize: number = 148;
    function redrawFont(): void {
        p5.background(255);
        renderFontP5(p5, libreBaskervilleRegP5, text, fontSize, 0.13, renderStrategyBeowulf);
    }

    // p5 font initialization
    p5.preload = (): void => {
        libreBaskervilleRegP5 = p5.loadFont(libreBaskervilleRegPath);
        libreBaskervilleItalic = p5.loadFont(libreBaskervilleItalicPath);
        libreBaskervilleBold = p5.loadFont(libreBaskervilleBoldPath);
    }

    p5.setup = (): void => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);

        // opentype.js font initialization
        OTF.load(libreBaskervilleRegPath, (error, font): void => {
           if (error) {
               console.log("OTF.js | " + libreBaskervilleRegPath + " could not be loaded: " + error);
           } else {
               if (font !== undefined) {
                   libreBaskervilleRegOTF = font;
                   console.log("OTF.js | " + libreBaskervilleRegPath + " loaded.");
               } else {
                   console.log("OTF.js | " + libreBaskervilleRegPath + " could not be loaded: it was undefined");
               }
           }
        });

        redrawFont();
    };

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

        redrawFont();
    }

    p5.keyPressed = () : void => {
        let needsUpdate: boolean = false;

        if (p5.key.length === 1) {
            text += p5.key;
            needsUpdate = true;
        } else if (p5.key === "Backspace") {
            text = text.slice(0, text.length - 1);
            needsUpdate = true;
        } else if (p5.key === "Enter") {
            text += "\n";
        } else if (p5.key === "ArrowUp") {
            redrawFont();
        }

        if (needsUpdate) redrawFont();
    }

    // p5.mouseWheel = () : void => {
    //     redrawFont();
    // }

    // p5.draw = (): void => {
    //     p5.background(0);
    //     p5.fill(255);
    //     p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
    // };
}

new p5(sketch);
