import p5 from 'p5';

import '@src/styles/sketch.css';

import testLetterStickerPath from '@src/assets/images/magazine-letters/D/test-D.png';
let testLetterSticker : p5.Image;

function sketch(p5: p5): void {

    p5.preload = (): void => {
        testLetterSticker = p5.loadImage(testLetterStickerPath);
    }

    p5.setup = (): void => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.fill(0, 255, 0);
        p5.circle(p5.windowWidth/2, p5.windowHeight/2, 200);

    };

    p5.draw = () : void => {
        p5.clear();
        p5.image(testLetterSticker, p5.mouseX - testLetterSticker.width/2, p5.mouseY - testLetterSticker.height/2);
    }

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    p5.keyPressed = () : void => {

        if (p5.key.length === 1) {
            switch (p5.key) {
                default:
                    break;
            }
        } else if (p5.key === "Backspace") {

        } else if (p5.key === "Enter") {

        } else if (p5.key === "ArrowUp") {

        }
    }
}

new p5(sketch);
