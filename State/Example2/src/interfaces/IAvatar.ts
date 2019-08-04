import { IAvatarStates } from './IAvatarStates';

export interface IAvatar {
    getStateChange(IAvatarStates):void;
    callCurrentStateMethod(IAvatarStates):void;
    jumpAvatar():void;
    moveBackAvatar():void;
    moveForwardAvatar():void;
}