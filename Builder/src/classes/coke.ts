import { ColdDrink } from './coldDrink';

export class Coke extends ColdDrink {

    public name():string{
        return 'Coke';
    }

    public price():number{
        return 20;
    }
}