import {IShape} from '../interfaces/IShape';
import {Rectangle} from './rectangle';
import {Square} from './square';
import {Circle} from './circle';


export class ShapeFactory {

    public getShape(shapeType:String):IShape{
        if(shapeType == 'Rectangle'){
            return new Rectangle() ;
        }
        else if(shapeType == 'Square'){
            return new Square();
        }
        else if(shapeType == 'Circle'){
            return new Circle();
        }

        return null;
    }
}