import { IAvatar } from './interfaces/IAvatar';
import { Avatar } from './classes/Avatar';
import { StandingState } from './classes/StandingState';

class Main{
    avatar:IAvatar;
    avatarHero;

    constructor(){
        var standingState = new StandingState();
        this.avatar = new Avatar(standingState);
    }

    public init(){
        document.addEventListener("DOMContentLoaded", this.render.bind(this));
    }

    public render(){
        var container = document.getElementById("container");
        container.innerHTML = `
        <div class="avatar-holder" id="avatarHolder">
        <div class="avatar" id="avatar"></div>
        </div>
        `
        this.assignEvent();

    }

    public assignEvent(){
        this.avatarHero = document.getElementById("avatar");
        document.addEventListener("keyup", this.handleKeyEvents.bind(this));
    }

    public handleKeyEvents(event){
        switch(event.keyCode){
            case 38:
            this.jump();
            break;
            case 39:
            this.forward();
            break;
            case 37:
            this.back();

        }
    }

    public jump(){
       this.avatar.jumpAvatar();
    }

    private back(){
        this.avatar.moveBackAvatar();
    }

    private forward(){
        this.avatar.moveForwardAvatar();
    }

}

var main = new Main();
main.init();
