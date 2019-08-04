import { FactoryGenerator } from './classes/factoryGenerator';
import { ShapeFactory } from './classes/shapeFactory';
import { IShape } from './interfaces/IShape'


export class Main{

    public init(){
        let shapeFactory:ShapeFactory = FactoryGenerator.getFactory(true);
        let roundedRectangle:IShape = shapeFactory.getShape('Rounded Rectangle');
        roundedRectangle.draw();
        let roundedSquare:IShape = shapeFactory.getShape('Rounded Square');
        roundedSquare.draw()

        shapeFactory = FactoryGenerator.getFactory(false);
        let rectangle:IShape = shapeFactory.getShape('Rectangle');
        rectangle.draw();
        let square:IShape = shapeFactory.getShape('Square');
        square.draw();
    }
}

let main = new Main();
main.init();