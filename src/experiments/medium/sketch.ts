import p5 from 'p5';
import otf from 'opentype.js';

import '@src/styles/sketch.css';

import libreBaskervilleRegPath from '@src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf';

import * as OTFFontRenderer from '@src/renderers/otf/render-font';
import * as OTFFontRenderStrategy from '@src/renderers/otf/render-strategy';
import * as OTFPathPreprocessor from '@src/renderers/otf/path-preprocessor';

function sketch(p5: p5): void {

    let libreBaskervilleRegOTF : otf.Font;

    let text: string = "caaaaat";
    let typeSize: number = 64;
    let textPaths: otf.Path[];
    let unprocessedTextPaths: otf.Path[];

    let erosionStrengthSlider: p5.Element;
    let erosionStrengthValueText: p5.Element;
    let freakToCrazinessStrengthSlider: p5.Element;
    let freakToCrazinessValueText: p5.Element;

    function redrawFont(immediatelyRedraw: boolean = true): void {
        p5.background(255);

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
                { craziness: freakToCrazinessStrengthSlider.value() }
            );
            textPaths = paths.processedTextPath;
            unprocessedTextPaths = paths.originalTextPath;
        }

        OTFFontRenderer.renderFont(
            p5,
            textPaths,
            OTFFontRenderStrategy.erode,
            { erosionStrength: [0, -erosionStrengthSlider.value()/2, -erosionStrengthSlider.value()/2,-erosionStrengthSlider.value()/2,-erosionStrengthSlider.value()/2,-erosionStrengthSlider.value()/2, 0] },
            unprocessedTextPaths
        );
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

        // setting up sliders for debugging
        freakToCrazinessStrengthSlider = p5.createSlider(0, 10, 3.56, 0.01);
        freakToCrazinessStrengthSlider.position(65, 10);
        freakToCrazinessStrengthSlider.size(200);
        let freakToCrazinessLabel: p5.Element = p5.createP("crazy");
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
        (freakToCrazinessStrengthSlider as any).changed(() => {
            redrawFont();
            freakToCrazinessValueText.html(String(freakToCrazinessStrengthSlider.value()));
            console.log(freakToCrazinessStrengthSlider.value())
        });

        erosionStrengthSlider = p5.createSlider(0, 10, 4.44, 0.01);
        erosionStrengthSlider.position(65, 50);
        erosionStrengthSlider.size(200);
        let erosionStrengthLabel: p5.Element = p5.createP("erode");
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
        (erosionStrengthSlider as any).changed(() => {
            redrawFont(false);
            erosionStrengthValueText.html(String(erosionStrengthSlider.value()));
        });
    };

    p5.windowResized = () : void => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

        redrawFont(false);
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
