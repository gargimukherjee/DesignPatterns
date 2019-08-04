import { AudioPlayer } from "./classes/audioPlayer";

export class Main {
    public audioPlayer:AudioPlayer = new AudioPlayer();

    public init(){
        let mp3Btn = document.getElementById('mp3Btn');
        let mp4Btn = document.getElementById('mp4Btn');
        let vlcBtn = document.getElementById('vlcBtn');
        let aviBtn = document.getElementById('aviBtn');
        
        mp3Btn.addEventListener('click', this.playMP3)
        mp4Btn.addEventListener('click', this.playMP4)
        vlcBtn.addEventListener('click', this.playVLC)
        aviBtn.addEventListener('click', this.playAVI)
    }

    public playMP3 = () => {
        this.audioPlayer.play("mp3", "beyond the horizon.mp3");
    }

    public playMP4 = () => {
        this.audioPlayer.play("mp4", "alone.mp4");
    }

    public playVLC = () => {
        this.audioPlayer.play("vlc", "far far away.vlc");
    }

    public playAVI = () => {
        this.audioPlayer.play("avi", "mind me.avi");
    }
}

let main = new Main();
main.init();