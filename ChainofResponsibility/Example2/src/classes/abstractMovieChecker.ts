import { User } from './user';

export abstract class AbstractMovieChecker {

    protected age:Number;
    protected nextPerson:AbstractMovieChecker;

    public setNextPerson(nextPerson:AbstractMovieChecker){
        this.nextPerson = nextPerson;
    }

    public categorizeMovies(user:User,moviesArray:Array<any>):Array<any>{ 
        if(this.age <= user.age){  
            let arr:Array<any> 
            for(let i=0; i<moviesArray.length; i++){
                if( user.age >= moviesArray[i].age){
                    arr = this.saveMovies(moviesArray[i]);
                    
                }
            }
            this.getMovieListing();
            return arr;
        }
        else{
            if(this.nextPerson!=null){
               return this.nextPerson.categorizeMovies(user,moviesArray);
            }
        }
    }

    protected abstract saveMovies(movie:any):Array<any>;

    //Fetch User list 
    public abstract getMovieListing():void;
}