import {IPacking} from '../interfaces/IPacking';

export class Wrapper implements IPacking {
   
    public pack():String{
        return "Wrapper";
    }
}