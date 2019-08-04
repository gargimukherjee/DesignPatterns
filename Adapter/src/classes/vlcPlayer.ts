import { IAdvancedMediaPlayer } from '../interfaces/IAdvancedMediaPlayer';

export class VLCPlayer implements IAdvancedMediaPlayer {

    public playVLC(filename:string):void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `System playing VLC file ${filename}`;
        document.body.appendChild(span);
    }

    public playMP4(filename:string):void{
        return;
    }
}