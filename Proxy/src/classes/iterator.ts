export class Iterator{
    list:Array<any>;
    counter:number;
    iLen:number;

    constructor(list:Array<any>){
        this.list = list;
        this.counter = 0;
        this.iLen = this.list.length;
    }

    public hasNext():Boolean{
        if(this.counter >= this.iLen){
            return false;
        }
        return true;
    }

    public getNext():any{
        var obj:any = this.list[this.counter];
        this.counter++;
        return obj;
    }

    public reset(){
        this.counter = 0;
    }

}