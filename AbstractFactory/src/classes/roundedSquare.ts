import {IShape} from '../interfaces/IShape';

export class RoundedSquare implements IShape{

    public draw():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Drawing a rounded square here...`;
        document.body.appendChild(span);
    }
}