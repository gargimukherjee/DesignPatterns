import {AbstractFactory} from './abstractFactory';
import {IShape} from '../interfaces/IShape';
import {RoundedRectangle} from './roundedRectangle';
import {RoundedSquare} from './roundedSquare';

export class RoundedShapeFactory extends AbstractFactory{

    public getShape(shapeType:String):IShape{
        if(shapeType == 'Rounded Rectangle'){
            return new RoundedRectangle() ;
        }
        else if(shapeType == 'Rounded Square'){
            return new RoundedSquare();
        }
        return null;
    }
}