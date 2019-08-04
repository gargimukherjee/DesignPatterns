import { AbstractLogger } from './classes/abstractLogger';
import { ConsoleLogger } from './classes/consoleLogger';
import { ErrorLogger } from './classes/errorLogger';
import { FileLogger } from './classes/fileLogger';

export class Main{ 

    public init():AbstractLogger {
        let consoleLogger:AbstractLogger = new ConsoleLogger(AbstractLogger.CONSOLE)//1;
        let fileLogger:AbstractLogger = new FileLogger(AbstractLogger.FILE)//2;
        let errorLogger:AbstractLogger = new ErrorLogger(AbstractLogger.ERROR)//3;

        errorLogger.setNextLogger(fileLogger);
        fileLogger.setNextLogger(consoleLogger);

        return errorLogger;
    }

    public main():void{
        let loggerChain:AbstractLogger = this.init();

        loggerChain.logMessage(AbstractLogger.CONSOLE, `This is a console information`);
        loggerChain.logMessage(AbstractLogger.FILE, `This is a file information`);
        loggerChain.logMessage(AbstractLogger.ERROR, `This is a error information`);
    }
}

let main = new Main();
main.main();
