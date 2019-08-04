import { Burger } from './burger';

export class ChickenBurger extends Burger {

    public name():string{
        return 'Chicken Burger';
    }

    public price():number{
        return 40;
    }

}