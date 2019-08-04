import { IMediaPlayer } from "../interfaces/IMediaPlayer";
import { MediaAdapter } from "./mediaAdapter";

export class AudioPlayer implements IMediaPlayer {
    private mediaAdapter:MediaAdapter;

    public play(audioType:string,fileName:string){
        if(audioType == "mp3"){
            let span:HTMLSpanElement = document.createElement("span");
            span.innerText = `Playing MP3 file ${fileName}`;
            document.body.appendChild(span);
        }
        else if(audioType == "mp4" || audioType == "vlc"){
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType,fileName)
        }
        else {
            let span:HTMLSpanElement = document.createElement("span");
            span.innerText = `Invalid audio type, format not supported`;
            document.body.appendChild(span);
        }
    }
    
}