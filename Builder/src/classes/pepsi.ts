import { ColdDrink } from './coldDrink';

export class Pepsi extends ColdDrink {

    public name():string{
        return 'Pepsi';
    }

    public price():number{
        return 30;
    }
}