import {IStrategy} from '../interfaces/IStrategy';

export class MultiplyOperation implements IStrategy{
    
    public doOperation(num1:number,num2:number):Number{
        return num1 * num2;
    }
}