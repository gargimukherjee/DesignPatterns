import { IUser } from './interfaces/IUser';
import { User } from './classes/user';
import { HappyUser } from './classes/happyUser';
import { SadUser } from './classes/sadUser';
import { UserReason } from './classes/userReason';

export class Main{
    user:IUser;

    constructor(){}

    /**
     * [init description]
     * @return {[type]} [description]
     */
    public init(){
        document.addEventListener("DOMContentLoaded", this.render.bind(this));
    }

    /**
     * [render description]
     * @return {[type]} [description]
     */
    public render(userInfo):void{
        var container = document.getElementById("container");
        container.innerHTML = `
        <label>Enter your name to create an user:</label>
        <input type="text" id="username" />
        <label>Enter your reason here:</label>
        <input type="text" id="userReason"/>
        <button type="button" id="createBtn">Create User</button>
        <button id="happyUserBtn" type="button">Create Happy User</button>
        <button id="sadUserBtn" type="button">Create Sad User</button>
        <button id="userReasonBtn" type="button">Provide reason for the user</button>
        <button id="showUserBtn" type="button">Show User</button>
        <div id="view"></div>
        `
        this.assignEvent();
    }

    /**
     * [assignEvent description]
     * @return {[type]} [description]
     */
    public assignEvent(){
        var createBtn = document.getElementById("createBtn");
        createBtn.addEventListener("click", this.createUser.bind(this));

        var happyUserBtn = document.getElementById("happyUserBtn");
        happyUserBtn.addEventListener("click", this.createHappyUser.bind(this));

        var sadUserBtn = document.getElementById("sadUserBtn");
        sadUserBtn.addEventListener("click", this.createSadUser.bind(this));

        var showUserBtn = document.getElementById("showUserBtn");
        showUserBtn.addEventListener("click", this.showUser.bind(this));

        var userReasonBtn = document.getElementById("userReasonBtn");
        userReasonBtn.addEventListener("click", this.createUserReason.bind(this));

    }

    private createUser(){
        var input:HTMLInputElement = <HTMLInputElement> document.getElementById("username")
        this.user = new User(input.value);
        this.user.init();
    }

    private createHappyUser(){
        this.user = new HappyUser(this.user);
        this.user.init();
    }

    private createSadUser(){
        this.user = new SadUser(this.user);
        this.user.init();
    }

    private createUserReason(){
        var userReason:HTMLInputElement = <HTMLInputElement>document.getElementById("userReason");
        this.user = new UserReason(this.user, userReason.value);
    }

    private showUser(){
        console.log(`show user`);
       var view:HTMLDivElement = <HTMLDivElement> document.getElementById("view");
       view.innerHTML = " ";
       var container:HTMLElement = this.user.renderUser();
       view.appendChild(container);
    }

}

var main = new Main();
main.init();