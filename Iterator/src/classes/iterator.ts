export class Iterator{
    list:Array<any>;
    counter:number;
    iLen:number;

    constructor(list:Array<any>){
        this.list = list;
        this.counter = 0;
        this.iLen = this.list.length;
    }

    /**
     * function to check wether number if items in a list is greater than the counter
     * @param null
     * @return : return true if the number is lesser and returns false if the number is greater 
     * than the counter
     */
    public hasNext():Boolean{
        if(this.counter >= this.iLen){
            return false;
        }
        return true;
    }

    /**
     * if the number is lesser than the counter, then the next item in the list is returned
     * and at the same time counter is incremented
     * @param null
     * @return obj-- that is the next item in the list
     */
    public getNext():any{
        var obj:any = this.list[this.counter];
        this.counter++;
        return obj;
    }

    public reset(){
        this.counter = 0;
    }

}