import { IUser } from '../interfaces/IUser';

export class HappyUser implements IUser{
    user:IUser

    constructor(user){
        this.user = user;
        console.log(this.user);
    }

    public init(){
        console.log(this.greeting());
    }

    public renderUser():HTMLElement{
        var container:HTMLElement = this.user.renderUser();
        container.innerHTML = " ";
        var span:HTMLSpanElement = document.createElement("span");
        span.classList.add("happy");
        span.innerText = this.greeting() + " :) " ;
        container.appendChild(span);
        return container;
    }

    public greeting():string{
        var str = this.user.greeting();
        str = str + " And I am a Happy User";
        return str;
    }
}