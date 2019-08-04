import { IAdvancedMediaPlayer } from "../interfaces/IAdvancedMediaPlayer";

export class MP4Player implements IAdvancedMediaPlayer {

    public playVLC(filename:string):void{
        return;
    }

    public playMP4(filename:string):void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `System playing MP4 file ${filename}`;
        document.body.appendChild(span);
    }
}