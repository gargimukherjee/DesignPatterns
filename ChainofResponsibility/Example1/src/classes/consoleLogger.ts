import { AbstractLogger } from './abstractLogger';

export class ConsoleLogger extends AbstractLogger{
    public level:number;

    constructor(level:number){
        super();
        this.level = level;
    }

    protected printMessage(message:String):void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `
        Standard Console Logger ${message}`;
        document.body.appendChild(span);
    }
}