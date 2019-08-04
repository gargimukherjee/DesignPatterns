import {IPacking} from '../interfaces/IPacking';

export class Bottle implements IPacking {

    public pack():String{
        return "Bottle";
    }
}