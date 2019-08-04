import { ICriteria } from "../interfaces/ICriteria";
import { Person } from "./person";

export class OrCriteria implements ICriteria {
    private criteria:ICriteria;
    private otherCriteria:ICriteria;
    
    constructor(criteria:ICriteria, otherCriteria:ICriteria){
        this.criteria = criteria;
        this.otherCriteria = otherCriteria;
    }

    public meetCriteria(persons:Array<Person>):Array<Person>{
        let firstCriteriaItems:Array<Person> = this.criteria.meetCriteria(persons);
        let otherCriteriaItems:Array<Person> = this.otherCriteria.meetCriteria(persons);

        for(var i=0; i<otherCriteriaItems.length; i++){
            if(firstCriteriaItems.indexOf(otherCriteriaItems[i]) != -1 ){
                firstCriteriaItems.push(otherCriteriaItems[i]);
             }
        }  
        return firstCriteriaItems;      
    }
}