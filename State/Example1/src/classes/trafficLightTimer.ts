import { ITrafficLightTimer } from "../interfaces/ITrafficLightTimer";

export class TrafficLightTimer implements ITrafficLightTimer {
    private time:number;
    private timer:HTMLElement;
    constructor(){
        this.timer = document.getElementById('timer');
    }

    public reset():boolean {
        this.time = 0;
        return true;
    }

    public setTime(second:number):boolean {
        this.time = second;
        return true;
    }

    public startTimer(callBack:Function):void {
        this.timer.innerText = String(this.time);   
        var t = setInterval(function(){
            this.time-= 1;
            this.timer.innerText = String(this.time);
            if( this.time === -1){
                clearInterval(t);
                callBack();
            }
        }.bind(this),1000);
    }
    
}