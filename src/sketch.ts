import p5 from 'p5';

import libreBaskervilleRegPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';
import libreBaskervilleItalicPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf';
import libreBaskervilleBoldPath from './assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf';

import './styles/sketch.css';

import {
    renderFont, // @ts-ignore
    renderStrategyPoints, // @ts-ignore
    renderStrategyLines, // @ts-ignore
    renderStrategyRandomLines, // @ts-ignore
    renderStrategyBeowulf //@ts-ignore
} from './render-font';

function sketch(p5: p5): void {

    // @ts-ignore
    let libreBaskervilleReg : p5.Font;
    // @ts-ignore
    let libreBaskervilleItalic : p5.Font;
    // @ts-ignore
    let libreBaskervilleBold : p5.Font;
    let text: string = "Zurich, Switzerland";
    let fontSize: number = 128;
    function redrawFont(): void {
        p5.background(255);
        renderFont(p5, libreBaskervilleReg, text, fontSize, 0.2, renderStrategyBeowulf);
    }

    p5.preload = (): void => {
        libreBaskervilleReg = p5.loadFont(libreBaskervilleRegPath);
        libreBaskervilleItalic = p5.loadFont(libreBaskervilleItalicPath);
        libreBaskervilleBold = p5.loadFont(libreBaskervilleBoldPath);
    }

    p5.setup = (): void => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);

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
        }

        if (needsUpdate) redrawFont();
    }

    p5.mouseWheel = () : void => {
        redrawFont();
    }

    // p5.draw = (): void => {
    //     p5.background(0);
    //     p5.fill(255);
    //     p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
    // };
}

new p5(sketch);
