import { IStrategy } from "../interfaces/IStrategy";

export class Context {
    private strategy:IStrategy;

    constructor(strategy:IStrategy){
        this.strategy = strategy;
    }

    public executeStrategy(num1:number, num2:number){
        return this.strategy.doOperation(num1,num2);
    }
}