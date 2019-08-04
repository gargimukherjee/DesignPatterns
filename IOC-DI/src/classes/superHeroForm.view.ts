import {ISuperheroModel, HeroItem} from '../interfaces/ISuperheroModel';

export class SuperHeroFormView {
    ul:HTMLUListElement;
    container:HTMLElement;
    constructor (){
        this.ul = document.createElement("ul");
    }

    public render(model:ISuperheroModel){
        var doc:HTMLElement = document.body;
        this.container = document.getElementById("container");
        while(model.hasHeroItem()){
            var item:HeroItem = model.getNextHeroItem();
            var li:HTMLLIElement = document.createElement("li");
            li.classList.add("hero-list");
            li.innerHTML = `My name is ` + item.name +  ` and ` + item.strength 
            this.ul.appendChild(li);
        }
        this.container.appendChild(this.ul);

        doc.appendChild(this.container);
    }

}