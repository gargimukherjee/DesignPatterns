import { Game } from './classes/game';
import { Cricket } from './classes/cricket';
import { Football } from './classes/football';

export class Main {
    public init():void{

        let game1:Game = new Cricket();
        game1.play();
        let game2:Game = new Football();
        game2.play();
    }
}

let main = new Main();
main.init();