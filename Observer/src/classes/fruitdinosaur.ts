import { ISubject } from '../interfaces/ISubject';
import { ISubscriber}  from '../interfaces/ISubscriber';

export class FruityDinosaur implements ISubscriber{
    human:ISubject;

    /**
     * Constructor method where the dino class is using the subscribe method provided by human
     * to subscribe itself to the list array present in the human class
     * @param human 
     */
     constructor(human:ISubject){
        this.human = human;
        this.human.subscribe(this);
    }

    /**
     * Update method that will deal with the notification coming from the subject human class
     * Depending on the notification is fruit or veggie, the talk bubble will display the text
     * @param obj 
     */
    public update(obj:any){
       var dinosaurSpeak = document.getElementById("fruityDino");
        if(obj.type == "fruit"){
            dinosaurSpeak.innerHTML = "The<strong> " + obj.name + "</strong> was Yummy!!!"
        }
        else {
            dinosaurSpeak.innerHTML = "I don't like veggies! Feed me a fruit!!!"
        }
    }

    /**
     * RemoveSubscription will call the unsubcribe method of the human class and the 
     * Dino will no longer be able to receive notifications from the human class
     */
    private removeSubscription(){
        this.human.unsubscribe(this);
    }

    /**
     * Destroy will call the remove subscription method of Dino class
     */
    public destroy(){
        this.removeSubscription();
    }
}