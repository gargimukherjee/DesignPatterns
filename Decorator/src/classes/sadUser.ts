import { IUser } from '../interfaces/IUser';

export class SadUser implements IUser{
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
        span.classList.add("sad");
        span.innerText= this.greeting() + " :( "
        container.appendChild(span);
        return container;
    }

    public greeting():string{
        var str = this.user.greeting();
        str = str + " And I am a Sad User";
        return str;
    }
}