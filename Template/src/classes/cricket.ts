import { Game } from './game';

export class Cricket extends Game {
    public initialize():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Cricket game initialized`;
        document.body.appendChild(span);
    }

    public startPlay():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Cricket game start playing`;
        document.body.appendChild(span);
    }

    public endPlay():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Cricket game end playing`;
        document.body.appendChild(span);
    }
}