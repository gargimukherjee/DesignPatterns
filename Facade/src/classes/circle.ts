import { IShape } from "../interfaces/IShape";

export class Circle implements IShape{
    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `This is going to draw a circle`;
        document.body.appendChild(span);
    }
}