import { Context } from "./classes/context";
import { AddOperation } from './classes/addOperation';
import { SubtractOperation } from './classes/subtractOperation';
import { MultiplyOperation } from './classes/multiplyOperation';

export class Main{
    public init(){
        let context1:Context = new Context(new AddOperation());
        let span1:HTMLSpanElement = document.createElement("span");
        span1.innerText = `Strategy: Add Operation  10+5= ${context1.executeStrategy(10,5)} `;
        document.body.appendChild(span1);

        let context2:Context = new Context(new SubtractOperation());
        let span2:HTMLSpanElement = document.createElement("span");
        span2.innerText = `Strategy: Subtract Operation  10-5= ${context2.executeStrategy(10,5)}`;
        document.body.appendChild(span2);

        let context3:Context = new Context(new MultiplyOperation());
        let span3:HTMLSpanElement = document.createElement("span");
        span3.innerText = `Strategy: Multiply Operation  10*5= ${context3.executeStrategy(10,5)}`;
        document.body.appendChild(span3);
    }
}

let main = new Main();
main.init();