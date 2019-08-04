export interface HeroItem {
    name:String;
    superheroname: String;
    strength:String;
    weakness:String;
    girlfriend:String;
}

export interface ISuperheroModel {
    hasHeroItem();
    getNextHeroItem():HeroItem;
    reset();
}