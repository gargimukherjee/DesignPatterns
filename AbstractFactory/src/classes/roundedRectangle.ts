import {IShape} from '../interfaces/IShape';

export class RoundedRectangle implements IShape{

    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Drawing a rounded rectangle here...`;
        document.body.appendChild(span);
    }
}