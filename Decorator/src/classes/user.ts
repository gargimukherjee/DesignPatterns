import { IUser } from '../interfaces/IUser';

export class User implements IUser {
    name:string;
    callback:Function;
    container:HTMLElement;

    constructor(name:string){
        this.name = name;
    }

    public init(){
       console.log(this.greeting());
    }

    public renderUser():HTMLElement {
        this.container = document.createElement("div");
        this.container.innerHTML = " ";
        var userSpan:HTMLSpanElement = document.createElement("span");
        userSpan.innerText = "Hi!! I am a User and My name is "+ this.name;
        userSpan.classList.add("user");
        this.container.appendChild(userSpan);
        return this.container;
    }

    public greeting():string{
       return "Hi!! I am a User and My name is "+ this.name;
    }

}