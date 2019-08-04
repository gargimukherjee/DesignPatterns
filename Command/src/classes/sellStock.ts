import { Stock } from './stock';
import { IOrder } from '../interfaces/IOrder';

export class SellStock implements IOrder{
    private abcStock:Stock;

    constructor(abcStock:Stock){
        this.abcStock = abcStock;
    }

    public execute(stockName:string,numberOfStock:number):void{
        this.abcStock.sell(stockName,numberOfStock);
    }
}