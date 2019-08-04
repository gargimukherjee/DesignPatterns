import { IAvatarStates } from '../interfaces/IAvatarStates';
import { IAvatar } from '../interfaces/IAvatar';
import { JumpingState } from "./JumpingState";
import { BackState } from "./BackState";
import { ForwardState } from "./ForwardState";

export class StandingState implements IAvatarStates{
    avatar:IAvatar;

    public showState():string{
      return "Standing State";
    }

    public performAction(avatar:IAvatar){
        return "Avatar is standing";
    }

    handleKeyUp(avatar:IAvatar):void{
        avatar.getStateChange(new JumpingState());
    };

    handleKeyRight(avatar:IAvatar):void{
        avatar.getStateChange(new ForwardState());
    };

    handleKeyLeft(avatar:IAvatar):void{
        avatar.getStateChange(new BackState());
    };
}