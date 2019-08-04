import {ISignal} from "../interfaces/ISignal";
import {ITraffic} from "../interfaces/ITraffic";
import {ITrafficLightTimer} from "../interfaces/ITrafficLightTimer"

import {GreenLight} from "./greenLight"

export class RedLight implements ISignal{
    traffic:ITraffic
    constructor(){}

    public startTransition(traffic:ITraffic, trafficTimer:ITrafficLightTimer){
        this.traffic = traffic;
        trafficTimer.reset();
        trafficTimer.setTime(10);
        trafficTimer.startTimer(this.onTimeOver.bind(this));
    }

    private onTimeOver(){
        var green = new GreenLight();
        this.traffic.changeState(green);
    }   

    public getStateName():string{
        return "red";
    }
}