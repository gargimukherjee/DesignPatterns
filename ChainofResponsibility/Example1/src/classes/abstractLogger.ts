export abstract class AbstractLogger {
    public static CONSOLE:number = 1;
    public static FILE:number = 2;
    public static ERROR:number = 3;

    protected level:number;
    protected nextLogger:AbstractLogger;

    public setNextLogger(nextLogger:AbstractLogger):void{
        this.nextLogger = nextLogger;
    }

    public logMessage(level:number,message:String):void{
        if(this.level <= level){
            this.printMessage(message);
        }
        if(this.nextLogger!=null){
            this.nextLogger.logMessage(level,message);
        }
    }

    protected abstract printMessage(message:String):void;

}