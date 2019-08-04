import {ISignal} from "../interfaces/ISignal";
import {ITraffic} from "../interfaces/ITraffic";
import {ITrafficLightTimer} from "../interfaces/ITrafficLightTimer"

import {RedLight} from "./redLight";

export class YellowLight implements ISignal {
    traffic:ITraffic
    constructor(){}

    public startTransition(traffic:ITraffic, trafficTimer:ITrafficLightTimer){
        this.traffic = traffic;
        trafficTimer.reset();
        trafficTimer.setTime(5);
        trafficTimer.startTimer(this.onTimeOver.bind(this));
    }

    private onTimeOver(){
        var red = new RedLight();
        this.traffic.changeState(red);
    }

    public getStateName():string{
        return "yellow";
    }
}