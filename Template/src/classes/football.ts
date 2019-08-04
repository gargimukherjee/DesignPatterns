import {Game} from './game';

export class Football extends Game {
    public initialize():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Football game initialized`;
        document.body.appendChild(span);
    }

    public startPlay():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Football game start playing`;
        document.body.appendChild(span);
    }

    public endPlay():void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Football game end playing`;
        document.body.appendChild(span);
    }
}