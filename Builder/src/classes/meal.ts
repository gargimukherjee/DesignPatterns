import { IItem } from '../interfaces/IItem';

export class Meal{
    private items:Array<IItem> = [];
    
    public addItem(item:IItem):void{
        this.items.push(item);
    }

    public getCost():number{
        let cost:number = 0;
        for (let i=0; i<this.items.length; i++) {
            cost += this.items[i].price();
         }		
         return cost;
    }

    public showItems():string{
        let allMeal = ""
        for (let i=0; i<this.items.length; i++) {
            let span:HTMLSpanElement = document.createElement("span");
            allMeal += this.items[i].name() + " ";
            span.innerText = `
            Item : ${this.items[i].name()}, 
            Packing : ${this.items[i].packing().pack()}, 
            Price: ${this.items[i].price()}`;
            document.body.appendChild(span);
        }
        return allMeal;		
     }	
}