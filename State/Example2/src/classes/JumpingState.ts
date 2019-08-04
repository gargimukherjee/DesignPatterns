import { IAvatarStates } from '../interfaces/IAvatarStates';
import { IAvatar } from '../interfaces/IAvatar';
import { StandingState } from './StandingState';

export class JumpingState implements IAvatarStates{
    avatarHero;
    avatarHeroHolder;
    onlyoneMoveAllowed:Boolean = true;

    public showState():string{
        return "Jumping State";
    }

    public performAction(avatar:IAvatar){
        this.avatarHeroHolder = document.getElementById("avatarHolder");
        var topPosition = this.avatarHeroHolder.offsetTop;
        this.avatarHeroHolder.style.top = topPosition - 150 + "px";
        this.avatarHero = document.getElementById("avatar");
        this.avatarHero.classList.add("jump-avatar")
        setTimeout(this.removeJumpClass.bind(this), 1000, avatar);
      
        return "The avatar is jumping now";
   }

   private removeJumpClass(avatar){
    this.avatarHero.classList.remove("jump-avatar");
    var topPosition = this.avatarHeroHolder.offsetTop;
     this.avatarHeroHolder.style.top = topPosition + 150 + "px";
     avatar.getStateChange(new StandingState);
   }

   handleKeyUp():void{};
   
   handleKeyRight():void{
       if(this.onlyoneMoveAllowed){
        var leftPosition = this.avatarHeroHolder.offsetLeft;
        this.avatarHeroHolder.style.left = leftPosition + 30 + "px";
        this.onlyoneMoveAllowed = false;
       }
   };
   
   handleKeyLeft():void{
    if(this.onlyoneMoveAllowed){
    var leftPosition = this.avatarHeroHolder.offsetLeft;
    this.avatarHeroHolder.style.left = leftPosition - 30 + "px";
    this.onlyoneMoveAllowed = false;
    }
   };
}