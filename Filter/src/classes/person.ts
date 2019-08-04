export class Person {
    private name:string;
    private gender:string;
    private maritalStatus:string;

    constructor(name:string, gender:string, maritalStatus:string){
        this.name = name;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    public getName():string{
        return this.name;
    }

    public getGender():string{
        return this.gender;
    }
     
    public getMaritalStatus():string{
        return this.maritalStatus;
    }
}