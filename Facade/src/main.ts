import { ShapeMaker } from "./classes/shapeMaker";

export class Main {

    public init(){
        let shapeMaker:ShapeMaker = new ShapeMaker();
        shapeMaker.drawRectangle();
        shapeMaker.drawSquare();
        shapeMaker.drawCircle();
    }
}

let main = new Main();
main.init();