import p5 from 'p5';

type FontRenderStrategy = (p5: p5, points: Point[]) => void;

export function renderFont(p5: p5,
                           font: p5.Font,
                           text: string,
                           fontSize: number,
                           fontSampleFactor: number,
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
        p5.point(p.x + p5.random(0, 15), p.y + p5.random(0, 5));
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

        p5.line(point1.x, point1.y, point2.x, point2.y);

        // p5.line(point1.x + p5.random(0, 3), point1.y + p5.random(0, 4),
        //     point2.x + p5.random(0, 3), point2.y + p5.random(0, 4));

    }
}

export function renderStrategyRandomLines(p5: p5, points:Point[]) : void {
    let maxJumpDistance = 7;

    for (let i = 0; i < points.length; i++) {
        let point1: Point  = points[i];
        if (i + 1 >= points.length) break;
        let point2: Point = points[i + 1];

        // Stopping "jump stitches" intra and inter letters
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        if (Math.sqrt(dx ** 2 + dy ** 2) > maxJumpDistance) continue;

        // generate random intermediary point
        let randomUnit = p5.random(0, 100);
        if (randomUnit > 45) {
            let point3X = point1.x + dx + p5.random(-randomUnit/10, randomUnit/20);
            let point3Y = point1.y + dy + p5.random(-randomUnit/10, randomUnit/20);

            p5.line(point1.x, point1.y, point3X, point3Y);
            p5.line(point3X, point3Y, point2.x, point2.y);
        } else {
            p5.line(point1.x, point1.y, point2.x, point2.y);
        }
    }
}

export function renderStrategyBeowulf(p5: p5, points: Point[]) : void {
    let maxJumpDistance = 20;
    let randomUnit = 3;

    points[0] = {
        x: points[0].x + p5.random(-randomUnit, randomUnit),
        y: points[0].y + p5.random(-randomUnit, randomUnit),
    }

    for (let i = 0; i < points.length; i++) {
        // this was changed by the previous iteration
        let point1: Point = points[i];
        if (i + 1 >= points.length) break;
        // this will be randomized on this iteration
        let point2: Point = points[i + 1];

        // Stopping "jump stitches" intra and inter letters
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        console.log(Math.sqrt(dx ** 2 + dy ** 2))
        if (Math.sqrt(dx ** 2 + dy ** 2) > maxJumpDistance) continue;

        randomUnit = p5.random(-5, 5);

        let newPoint2: Point = {
            x: point2.x + p5.random(-randomUnit, randomUnit),
            y: point2.y + p5.random(-randomUnit, randomUnit),
        }
        points[i + 1] = newPoint2;

        p5.line(point1.x, point1.y, newPoint2.x, newPoint2.y);
    }
}
