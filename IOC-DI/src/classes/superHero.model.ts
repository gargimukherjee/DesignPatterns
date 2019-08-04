import {HeroItem, ISuperheroModel } from '../interfaces/ISuperheroModel';

export class SuperHeroModel implements ISuperheroModel {
    private heroList:Array<HeroItem>;
    private index:number;

    constructor(){
        this.index = 0;
        this.heroList = [
            {   
                "name":"Clark Kent",
                "superheroname" : "SuperMan",
                "strength":"I can fly and fight",
                "weakness" : "Kryptonite", 
                "girlfriend" : "Lois Lane"
            },
            {   
                "name":"Peter Parker",
                "superheroname" : "SpiderMan",
                "strength":"I can create webs and swing from buildings",
                "weakness" : "Girls",
                "girlfriend" : "Gwen Stacy"
            }
        ]
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