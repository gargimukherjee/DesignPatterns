import {ISignal} from "../interfaces/ISignal";
import {ITraffic} from "../interfaces/ITraffic";
import {ITrafficLightTimer} from "../interfaces/ITrafficLightTimer"

import {YellowLight} from "./yellowLight"

export class GreenLight implements ISignal{
    traffic:ITraffic
    constructor(){}

    public startTransition(traffic:ITraffic, trafficTimer:ITrafficLightTimer){
        this.traffic = traffic;
        trafficTimer.reset();
        trafficTimer.setTime(10);
        trafficTimer.startTimer(this.onTimeOver.bind(this));
    }

    private onTimeOver(){
        var yellow = new YellowLight();
        this.traffic.changeState(yellow);
    }        

    public getStateName():string{
        return "green";
    }

    
}