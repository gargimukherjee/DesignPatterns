import { ShapeFactory } from './classes/shapeFactory';
import { IShape } from './interfaces/IShape'


export class Main{

    public init(){
        let shapeFactory:ShapeFactory = new ShapeFactory();

        let rectangle:IShape = shapeFactory.getShape('Rectangle');
        rectangle.draw();
        let square:IShape = shapeFactory.getShape('Square');
        square.draw();
        let circle:IShape = shapeFactory.getShape('Circle');
        circle.draw();

    }
}

let main = new Main();
main.init();