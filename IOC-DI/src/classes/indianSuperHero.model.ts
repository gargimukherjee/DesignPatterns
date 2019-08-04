import {HeroItem, ISuperheroModel} from '../interfaces/ISuperheroModel';

export class IndianSuperHeroModel implements ISuperheroModel{
    private heroList:Array<HeroItem>
    private index:number;
    constructor(){
        this.index = 0;
        this.heroList = [
            {
                "name":"Shaktiman",
                "superheroname" : "Shaktian",
                "strength":"I can fly and fight",
                "weakness" : "Indian TV Soaps", 
                "girlfriend" : "NA"
            },
            {
                "name":"Krish",
                "superheroname" : "Krish",
                "strength":"I can do anthing",
                "weakness" : "Emails", 
                "girlfriend" : "Kangana Ranaut"
            }
        ];
    }

    public hasHeroItem(){
        return this.heroList.length > 0 && this.index < this.heroList.length;
    }

    public getNextHeroItem():HeroItem{
        var item = <HeroItem> this.heroList[this.index];
        this.index++;
        return item;
    }

    public reset(){
        this.index = 0;
    }
}