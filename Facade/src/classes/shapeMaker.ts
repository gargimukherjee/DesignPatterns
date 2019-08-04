import { IShape } from "../interfaces/IShape";
import { Rectangle } from "./rectangle";
import { Square } from "./square";
import { Circle } from "./circle";

export class ShapeMaker{
    private rectangle:IShape;
    private square:IShape;
    private circle:IShape;

    constructor(){
        this.rectangle = new Rectangle();
        this.square = new Square();
        this.circle = new Circle();
    }

    public drawRectangle():void{
        this.rectangle.draw();
    }

    public drawSquare():void{
        this.square.draw();
    }

    public drawCircle():void{
        this.circle.draw();
    }
}