import { IAvatar } from './IAvatar';
import { IAvatarStates } from "./IAvatarStates";

export interface IAvatarStates {
    showState():string;
    performAction(IAvatar):void;
    handleKeyUp(IAvatar):void;
    handleKeyRight(IAvatar):void;
    handleKeyLeft(IAvatar):void;
}