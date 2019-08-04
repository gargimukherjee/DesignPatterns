import { AbstractMovieChecker } from './classes/AbstractMovieChecker';
import { AdultMale } from './classes/adultMale';
import { AdultFemale } from './classes/adultFemale';
import { TeenageMale } from './classes/teenageMale';
import { TeenageFemale } from './classes/teenageFemale';
import { ChildMale }  from './classes/childMale';
import { ChildFemale }  from './classes/childFemale';
import { User } from './classes/user';


export class Main {
    public moviesArray = [
        {name:'Gone with the Wind', age: 18},
        {name:'Tom and Jerry', age: 5},
        {name:'Annabelle', age: 18},
        {name:'The Notebook', age: 15},
        {name:'Marilyn Monroe Documentaries', age: 22}
    ] 

    private getChainOfUsers():AbstractMovieChecker {
        let adultMale:AbstractMovieChecker = new AdultMale(22);
        let adultFemale:AbstractMovieChecker = new AdultFemale(18);
        let teenageMale:AbstractMovieChecker = new TeenageMale(14);
        let teenageFemale:AbstractMovieChecker = new TeenageFemale(16);
        let childMale:AbstractMovieChecker = new ChildMale(5);
        let childFemale:AbstractMovieChecker = new ChildFemale(10);

        adultMale.setNextPerson(adultFemale);
        adultFemale.setNextPerson(teenageMale);
        teenageMale.setNextPerson(teenageFemale);
        teenageFemale.setNextPerson(childMale);
        childMale.setNextPerson(childFemale);

        return adultMale;
    }

    public init():void{
        let movieChecker:AbstractMovieChecker = this.getChainOfUsers();
        let user = new User('Gargi',10);
        let arr:Array<any> =  movieChecker.categorizeMovies(user,this.moviesArray);
    }
}

let main = new Main();
main.init();
