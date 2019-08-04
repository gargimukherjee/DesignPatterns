import { AbstractLogger } from './abstractLogger';

export class FileLogger extends AbstractLogger {
    public level:number;

    constructor(level:number){
        super();
        this.level = level;
    }

    protected printMessage(message:String):void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `
        Standard File Logger ${message}`;
        document.body.appendChild(span);
    }
}