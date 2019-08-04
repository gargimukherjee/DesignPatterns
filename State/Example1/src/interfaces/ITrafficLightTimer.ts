export interface ITrafficLightTimer {
    reset():boolean
    setTime(second:number):boolean
    startTimer(callBack:Function):void
}