import {IShape} from '../interfaces/IShape';

export class Square implements IShape{

    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Drawing a square here...`;
        document.body.appendChild(span);
    }
}