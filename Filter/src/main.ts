import { ICriteria } from './interfaces/ICriteria'

import { Person } from "./classes/person";
import { MaleCriteria } from './classes/maleCriteria';
import { FemaleCriteria } from './classes/femaleCriteria';
import { SingleCriteria } from './classes/singleCriteria';
import { AndCriteria } from './classes/andCriteria';
import { OrCriteria } from './classes/orCriteria';

export class Main {
    
    public init(){
        let persons:Array<Person> = new Array<Person>();

        
      persons.push(new Person("Robert","Male", "Single"));
      persons.push(new Person("John", "Male", "Married"));
      persons.push(new Person("Laura", "Female", "Married"));
      persons.push(new Person("Diana", "Female", "Single"));
      persons.push(new Person("Mike", "Male", "Single"));
      persons.push(new Person("Bobby", "Male", "Single"));

      let male:ICriteria = new MaleCriteria();
      let female:ICriteria = new FemaleCriteria();
      let single:ICriteria = new SingleCriteria();
      let singleMale:ICriteria = new AndCriteria(single, male);
      let singleOrFemale:ICriteria = new OrCriteria(single, female);

      let span1:HTMLSpanElement = document.createElement("span");
      span1.innerText = `Males: `;
      document.body.appendChild(span1);
      this.printPersons(male.meetCriteria(persons));

      let span2:HTMLSpanElement = document.createElement("span");
      span2.innerText = `Females: `;
      document.body.appendChild(span2);
      this.printPersons(female.meetCriteria(persons));

      let span3:HTMLSpanElement = document.createElement("span");
      span3.innerText = `Single Males: `;
      document.body.appendChild(span3);
      this.printPersons(singleMale.meetCriteria(persons));

      let span4:HTMLSpanElement = document.createElement("span");
      span4.innerText = `Single Or Females: `;
      document.body.appendChild(span4);
      this.printPersons(singleOrFemale.meetCriteria(persons));

    }

    public printPersons(persons:Array<Person>){
        for(var i=0; i<persons.length; i++){
            let span:HTMLSpanElement = document.createElement("span");
            span.innerText = `Name: ${persons[i].getName()}, Gender: ${persons[i].getGender()}, Marital Status: ${persons[i].getMaritalStatus()}`;
            document.body.appendChild(span);
        }
    }
}

let main = new Main();
main.init();