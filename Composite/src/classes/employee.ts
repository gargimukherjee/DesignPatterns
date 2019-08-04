export class Employee {
    private name:string;
    private dept:string;
    private salary:number;
    private subordinates:Array<Employee>;

    constructor(name:string,dept:string,salary:number){
        this.name = name;
        this.dept = dept;
        this.salary = salary;
        this.subordinates = [];
    }

    public showCEO(){
        let span1:HTMLSpanElement = document.createElement("span");
        span1.innerText = `Employee :[ Name : ${this.name}  , Dept : ${this.dept}  , Salary : ${this.salary} ]`
        document.body.appendChild(span1);

    }

    public add(employee:Employee):void{
        this.subordinates.push(employee);
    }

    public remove(employee:Employee):void{
        let index = this.subordinates.indexOf(employee)  
        this.subordinates.splice(index,1);
    }

    public getSubordinates():Array<Employee>{
        return this.subordinates;
    }

    public toString():string{
        return (`Employee :[ Name : ${this.name}  , Dept : ${this.dept}  , Salary : ${this.salary} ]`);
    }

    public printHierarchy(){
        let subordinatesHeirarchy = this.getSubordinates();
        for(var i=0;i<subordinatesHeirarchy.length;i++){
            let span:HTMLSpanElement = document.createElement("span");
            span.innerText = subordinatesHeirarchy[i].toString();
            document.body.appendChild(span);
            subordinatesHeirarchy[i].printHierarchy();
        }
    }
}