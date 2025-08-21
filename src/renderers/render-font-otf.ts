import p5 from 'p5';
import otf, {Path} from 'opentype.js';

type FontRenderStrategy = (p5: p5, path: otf.Path) => void;

export function render(p5: p5,
                       font: otf.Font,
                       text: string,
                       fontSize: number,
                       fontSampleFactor: number,
                       fontRenderer: FontRenderStrategy) : void {

    

}
