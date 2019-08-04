import {IShape} from '../interfaces/IShape';

export class Rectangle implements IShape{

    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Drawing a rectangle here...`;
        document.body.appendChild(span);
    }
}