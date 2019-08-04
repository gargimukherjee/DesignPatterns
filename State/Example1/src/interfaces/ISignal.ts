import {ITraffic} from "./ITraffic";
import {ITrafficLightTimer} from "./ITrafficLightTimer";

export interface ISignal{
    startTransition(traffic:ITraffic, timer:ITrafficLightTimer):void
    getStateName():string;
}