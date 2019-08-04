import { MealBuilder } from './classes/mealBuilder';
import { Meal } from './classes/meal';

class Main{
    public init(){
        let mealBuilder = new MealBuilder();

        let vegMeal:Meal = mealBuilder.prepareVegMeal();
        let span1:HTMLSpanElement = document.createElement("span");
        span1.innerText = `
        Veg Meal... ${vegMeal.showItems()}...
        Total Cost...${vegMeal.getCost()}`;
        document.body.appendChild(span1);

        let nonVegMeal:Meal = mealBuilder.prepareNonVegMeal();
        let span2:HTMLSpanElement = document.createElement("span");
        span2.innerText = `
        Non-Veg Meal... ${nonVegMeal.showItems()}...
        Total Cost...${nonVegMeal.getCost()}`;
        document.body.appendChild(span2);
    }
}

let main = new Main();
main.init();