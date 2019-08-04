import { ISubject } from '../interfaces/ISubject';
import { ISubscriber}  from '../interfaces/ISubscriber';

export class Human implements ISubject{

    list:Array<ISubscriber> = [];
  
    public subscribe(context:ISubscriber){
        this.list.push(context);
    }

    public unsubscribe(context:ISubscriber){
        var index = this.list.findIndex((value:ISubscriber) => {
            return value == context;
        });
        this.list.splice(index,1);
    }

    public notify(obj:any){
        this.list.forEach(function(item:ISubscriber){
            item.update(obj);
        })
    }

}