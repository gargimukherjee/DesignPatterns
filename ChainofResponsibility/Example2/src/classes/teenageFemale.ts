import { AbstractMovieChecker } from './AbstractMovieChecker';

export class TeenageFemale extends AbstractMovieChecker{
    public age:Number;
    private myMovies:Array<any> = [];

    constructor(age:Number){
        super();
        this.age = age;
    }

    protected saveMovies(movie:any):Array<any>{
        this.myMovies.push(movie);
        return this.myMovies;
    }

    //getMovieListing 
    public getMovieListing():void{
        let ul:HTMLUListElement = document.createElement('ul');
        this.myMovies.forEach((movie)=>{
            let li:HTMLSpanElement = document.createElement("span");
            li.innerHTML = movie.name;
            ul.appendChild(li);
        })
        document.body.appendChild(ul);
        //return this.myMovies;
    }
    
}