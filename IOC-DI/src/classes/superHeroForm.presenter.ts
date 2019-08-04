import {ISuperheroModel, HeroItem} from '../interfaces/ISuperheroModel';
import { IPresenter } from '../interfaces/IPresenter';
import { SuperHeroFormView } from "./superHeroForm.view"


export class SuperHeroFormPresenter implements IPresenter {
    view:SuperHeroFormView
    model:ISuperheroModel

    constructor(){
        this.view = new SuperHeroFormView()
    }

    public init(model:any){
        this.model = model;
        this.view.render(this.model);
        
    }

    public destroy(){
    }



    
}