import p5 from 'p5';

type FontRenderStrategy = (p5: p5, points: Point[]) => void;

let fontSampleFactor: number = 1;

export function renderFont(p5: p5,
                           font: p5.Font,
                           text: string,
                           fontSize: number,
                           fontRenderer: FontRenderStrategy) : void {


    p5.textFont(font);
    p5.textSize(fontSize);
    let points: Point[] = font.textToPoints(
        text,
        (p5.windowWidth - p5.textWidth(text)) / 2,
        (p5.windowHeight + p5.textAscent() - p5.textDescent()) / 2,
        fontSize,
        { sampleFactor: fontSampleFactor }
    );

    fontRenderer(p5, points);
}

export function renderStrategyPoints(p5: p5, points: Point[]) : void {
    p5.strokeWeight(1.75);

    for (let p of points) {
        p5.point(p.x + p5.random(0, 10), p.y + p5.random(0, 7));
    }
}

export function renderStrategyLines(p5: p5, points:Point[]) : void {
    let maxJumpDistance = 7;

    for (let i = 0; i < points.length; i++) {
        let point1: Point  = points[i];
        if (i + 1 >= points.length) break;
        let point2: Point = points[i + 1];

        // Stopping "jump stitches" intra and inter letters
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        if (Math.sqrt(dx ** 2 + dy ** 2) > maxJumpDistance) continue;

        p5.line(point1.x + p5.random(0, 3), point1.y + p5.random(0, 4),
            point2.x + p5.random(0, 3), point2.y + p5.random(0, 4));

    }
}
