import { IUser } from '../interfaces/IUser';

export class UserReason implements IUser {
    user:IUser;
    reason:string;

    constructor(user, reason){
        this.user = user;
        this.reason = reason;
    }

    public init(){
        console.log(this.greeting());
    }

    public renderUser():HTMLElement{
        var container:HTMLElement = this.user.renderUser();
        var span:HTMLSpanElement = document.createElement("span");
        span.classList.add("reason");
        span.innerText = this.reason;
        container.appendChild(span);
        return container;
    }

    public greeting():string{
        var str = this.user.greeting();
        str = str + "because" + this.reason;
        return str;
    }

}