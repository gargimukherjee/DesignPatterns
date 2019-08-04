import { Human } from './classes/human';
import { FruityDinosaur } from './classes/fruitdinosaur';
import { VeggyDinosaur } from './classes/vegdinosaur';

document.addEventListener("DOMContentLoaded", renderDOM)

function renderDOM(){
    var foodItems = document.getElementsByClassName("food-items");

    //Creates an array of all the fruits and veggies btns from the DOM and attaches the 
    //click event with function showFruitDetails 
    for(var i =0; i<foodItems.length; i++){
        foodItems[i].addEventListener("click", showFruitDetails)
    }
}

var human:Human = new Human();
var fruityDinosaur:FruityDinosaur = new FruityDinosaur(human);
var veggieDinosaur:VeggyDinosaur = new VeggyDinosaur(human);

/**
 * showFruitsDetails will send notification object with type and fruit/veggie using the 
 * notify method from the human class
 * The notify method will inturn call the update method of the dinosaurs and pass 
 * the notification to them for further dealing. 
 * @param e: specifies the button that was clicked.
 */
function showFruitDetails(e){
    var clickedBtn = e.target.id;

    switch(clickedBtn){
        case "orange":
            human.notify({type:"fruit",name:"Orange"}); 
            break;
        case "lemon":
            human.notify({type:"fruit",name:"Lemon"}); 
            break;
        case "pomgranate":
            human.notify({type:"fruit",name:"Pomgranate"}); 
            break;
        case "apple":
            human.notify({type:"fruit",name:"Apple"}); 
            break;
        case "pears":
            human.notify({type:"fruit",name:"Pears"}); 
            break;
        case "carrot":
            human.notify({type:"veggie",name:"Carrot"}); 
            break;
        case "chilli":
            human.notify({type:"veggie",name:"Chilli"}); 
            break;
        case "brinjal":
            human.notify({type:"veggie",name:"Brinjal"}); 
            break;
        case "broccoli":
            human.notify({type:"veggie",name:"Broccoli"}); 
            break;
        case "tomato":
            human.notify({type:"veggie",name:"Tomato"}); 
            break;
    }
}











