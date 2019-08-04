import { IAvatarStates } from '../interfaces/IAvatarStates';
import { IAvatar } from '../interfaces/IAvatar';


export class Avatar implements IAvatar{
    avatarState:IAvatarStates;
    avatarHero

    constructor(avatarState:IAvatarStates){
        this.avatarState = avatarState;
        this.callCurrentStateMethod();
    }

    public getStateChange(newAvatarState:IAvatarStates){
        this.avatarState = newAvatarState;
        this.callCurrentStateMethod();
    }

    public callCurrentStateMethod(){
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = "This is the action to be performed " + this.avatarState.performAction(this);
       // document.body.appendChild(span);
    }

    public jumpAvatar(){
        this.avatarState.handleKeyUp(this);
    }

    public moveBackAvatar(){
        this.avatarState.handleKeyLeft(this);
    }

    public moveForwardAvatar(){
        this.avatarState.handleKeyRight(this);
    }

}