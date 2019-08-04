import { Burger } from './burger';

export class VegBurger extends Burger {
    
    public name():string{
        return 'Veg Burger';
    }

    public price():number{
        return 25;
    }
}