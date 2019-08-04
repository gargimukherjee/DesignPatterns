import { ICriteria } from "../interfaces/ICriteria";
import { Person } from "./person";

export class SingleCriteria implements ICriteria {
    
    public meetCriteria(persons:Array<Person>):Array<Person>{
        let singlePersons:Array<Person> = []

        for(var i=0; i<persons.length; i++){
            if(persons[i].getMaritalStatus() == "Single"){
                singlePersons.push(persons[i]);
            }
        }
        return singlePersons;
    }

}