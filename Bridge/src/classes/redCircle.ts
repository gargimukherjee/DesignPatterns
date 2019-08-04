import { IDrawAPI }from '../interfaces/IDrawAPI';

export class RedCircle implements IDrawAPI{
    
    public drawCircle(radius:number,x:number,y:number):void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Drawing Circle[color: red, radius: ${radius},x: ${x}, y: ${y}]`;
        document.body.appendChild(span);
    }
}