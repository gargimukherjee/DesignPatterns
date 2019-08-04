import {IShape} from '../interfaces/IShape';

export class Circle implements IShape{

    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Drawing a circle here...`;
        document.body.appendChild(span);
    }
}