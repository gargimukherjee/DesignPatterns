import {AbstractFactory} from './abstractFactory';
import {RoundedShapeFactory} from './roundedShapeFactory';
import {ShapeFactory} from './shapeFactory';


export class FactoryGenerator {

    public static getFactory(rounded:Boolean):AbstractFactory{
        if(rounded === true){
            return new RoundedShapeFactory();
        }
        else {
            return new ShapeFactory();
        }

    }

}