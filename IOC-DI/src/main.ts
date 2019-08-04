import {ISuperheroModel} from './interfaces/ISuperHeroModel';
import {SuperHeroFormPresenter} from './classes/superHeroForm.presenter';
import {SuperHeroModel} from './classes/superHero.model';

export class Main{
    private model:ISuperheroModel;

    constructor(){
        document.addEventListener("DOMContentLoaded", this.init.bind(this));
    }

    public init(){
        this.model = new SuperHeroModel();
        let superHeroFormPresenter = new SuperHeroFormPresenter()
        superHeroFormPresenter.init(this.model);
    }
}

let main = new Main();
