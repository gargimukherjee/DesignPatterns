import { IShape } from "../interfaces/IShape";

export class Rectangle implements IShape{
    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `This is going to draw a rectangle`;
        document.body.appendChild(span);
    }
}