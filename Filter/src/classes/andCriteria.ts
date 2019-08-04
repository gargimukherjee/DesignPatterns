import { ICriteria } from "../interfaces/ICriteria";
import { Person } from "./person";

export class AndCriteria implements ICriteria {
    private criteria:ICriteria;
    private otherCriteria:ICriteria;
    
    constructor(criteria:ICriteria, otherCriteria:ICriteria){
        this.criteria = criteria;
        this.otherCriteria = otherCriteria;
    }

    public meetCriteria(persons:Array<Person>):Array<Person>{
        let firstCriteriaPersons:Array<Person> = this.criteria.meetCriteria(persons);
        return this.otherCriteria.meetCriteria(firstCriteriaPersons);
    }

}