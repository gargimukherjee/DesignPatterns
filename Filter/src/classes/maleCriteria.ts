import { ICriteria } from "../interfaces/ICriteria";
import { Person } from "./person";

export class MaleCriteria implements ICriteria {
    
    public meetCriteria(persons:Array<Person>):Array<Person>{
        let malePersons:Array<Person> = []

        for(var i=0; i<persons.length; i++){
            if(persons[i].getGender() == "Male"){
                malePersons.push(persons[i]);
            }
        }
        return malePersons;
    }

}