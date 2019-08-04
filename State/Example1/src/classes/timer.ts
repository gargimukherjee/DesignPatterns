import { TrafficSignal } from './trafficSignal';
import {ISignal} from "../interfaces/ISignal";



export class Timer {

    i:number;
    timerDiv:HTMLElement;
    timer;
    signal:ISignal
    traffic;
    lightClass;
    
    

    constructor(){
        this.timerDiv = document.getElementById('timer');
        this.traffic = new TrafficSignal(this.signal);
    }

    public setTimer(i){
        this.i = i;
        console.log(this.i);
        this.timer = setInterval(function(){
            this.i--;
            this.timer.innerText = String(this.i);
            if( this.i == 0){
                this.clearTimer();
            }
        },1000);
    }

    public clearTimer(){
        clearInterval(this.timer);
    }
    

    


    
}