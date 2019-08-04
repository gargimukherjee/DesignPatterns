import {ISignal} from "../interfaces/ISignal";
import {ITraffic} from "../interfaces/ITraffic";
import {ITrafficLightTimer} from "../interfaces/ITrafficLightTimer"

export class TrafficSignal implements ITraffic{
    className:string;
    trafficContainer:HTMLElement = document.getElementById("trafficContainer");
    signal:ISignal;
    trafficTimer:ITrafficLightTimer;

    constructor(signal:ISignal, trafficTimer:ITrafficLightTimer){
        this.trafficTimer = trafficTimer;
        this.changeState(signal);
    }

    public changeState(signal:ISignal){
        if(this.className != undefined){
            this.trafficContainer.classList.remove(this.className);
        }
        this.signal = signal;
        this.className = this.signal.getStateName();
        this.trafficContainer.classList.add(this.className);
               
       this.startTransition();
    }
    
    private startTransition(){
        this.signal.startTransition(this, this.trafficTimer);
    }

}