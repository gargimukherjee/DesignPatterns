import { Shape } from "./classes/shape";
import { Circle } from "./classes/circle";
import { GreenCircle } from "./classes/greenCircle";
import { RedCircle } from "./classes/redCircle";

export class Main{

    public init():void{
        let redCirle:Shape = new Circle(100,100,10,new RedCircle());
        let greenCircle:Shape = new Circle(100,100,10,new GreenCircle());

        redCirle.draw();
        greenCircle.draw();
    }
}

let main = new Main();
main.init();