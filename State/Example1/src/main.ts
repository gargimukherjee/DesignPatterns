import {TrafficSignal} from "./classes/trafficSignal";
import {GreenLight} from "./classes/greenLight";
import {TrafficLightTimer} from "./classes/trafficLightTimer"
class Main{

    public init(){
        document.addEventListener("DOMContentLoaded", this.render);
    }

    public render(){
        var trafficTimer:TrafficLightTimer = new TrafficLightTimer();
        var greenLight = new GreenLight();
        var trafficSignal = new TrafficSignal(greenLight, trafficTimer);
    }

}

var main = new Main();
main.init();
