import {AbstractFactory} from './abstractFactory';
import {IShape} from '../interfaces/IShape';
import {Rectangle} from './rectangle';
import {Square} from './square';

export class ShapeFactory extends AbstractFactory{

    public getShape(shapeType:String):IShape{
        if(shapeType == 'Rectangle'){
            return new Rectangle() ;
        }
        else if(shapeType == 'Square'){
            return new Square();
        }
        return null;
    }
}