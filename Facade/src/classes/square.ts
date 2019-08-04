import { IShape } from "../interfaces/IShape";

export class Square implements IShape{
    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `This is going to draw a square`;
        document.body.appendChild(span);
    }
}