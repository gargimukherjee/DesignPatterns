import { IAvatarStates } from '../interfaces/IAvatarStates';
import { IAvatar } from '../interfaces/IAvatar';
import { StandingState } from './StandingState';


export class ForwardState implements IAvatarStates{

    public showState():string{
        return "Forward State";
    }

    public performAction(avatar:IAvatar){
        var avatarHero = document.getElementById("avatarHolder");
        var leftPosition = avatarHero.offsetLeft;
        avatarHero.style.left = leftPosition + 30 + "px";
        avatar.getStateChange(new StandingState);
        return "Avatar is moving forward";
    }

    handleKeyUp():void{};
    handleKeyRight():void{};
    handleKeyLeft():void{};

}