import { Meal } from './meal';
import { VegBurger } from './vegBurger';
import { ChickenBurger } from './chickenBurger';
import { Coke } from './coke';
import { Pepsi } from './pepsi';

export class MealBuilder{

    public prepareVegMeal():Meal{
        let meal:Meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }

    public prepareNonVegMeal():Meal{
        let meal:Meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}