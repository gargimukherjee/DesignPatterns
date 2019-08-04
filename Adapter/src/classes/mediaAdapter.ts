import { IMediaPlayer } from "../interfaces/IMediaPlayer";
import { IAdvancedMediaPlayer } from "../interfaces/IAdvancedMediaPlayer";
import { VLCPlayer } from "./vlcPlayer";
import { MP4Player } from "./mp4Player";

export class MediaAdapter implements IMediaPlayer {

    public advancedMusicPlayer:IAdvancedMediaPlayer;

    constructor(audioType:string){
        if(audioType == "vlc"){
            this.advancedMusicPlayer = new VLCPlayer();
        }
        else if(audioType == "mp4"){
            this.advancedMusicPlayer = new MP4Player();
        }
    }

    public play(audioType:string,filename:string){
        if(audioType == "vlc"){
            this.advancedMusicPlayer.playVLC(filename);
        }
        else if(audioType = "mp4"){
            this.advancedMusicPlayer.playMP4(filename);
        }
    }
}