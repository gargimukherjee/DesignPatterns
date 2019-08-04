import { ICriteria } from "../interfaces/ICriteria";
import { Person } from "./person";

export class FemaleCriteria implements ICriteria {
    
    public meetCriteria(persons:Array<Person>):Array<Person>{
        let femalePersons:Array<Person> = []

        for(var i=0; i<persons.length; i++){
            if(persons[i].getGender() == "Female"){
                femalePersons.push(persons[i]);
            }
        }
        return femalePersons;
    }

}