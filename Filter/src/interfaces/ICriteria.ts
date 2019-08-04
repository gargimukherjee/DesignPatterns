import { Person } from "../classes/person";

export interface ICriteria {
    meetCriteria(persons:Array<Person>):Array<Person>;    
}