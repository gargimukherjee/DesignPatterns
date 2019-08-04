import {IItem} from '../interfaces/IItem';
import {IPacking} from '../interfaces/IPacking';
import {Wrapper} from './wrapper';

export abstract class Burger implements IItem {
    public abstract name():string;

    public packing():IPacking{
        return new Wrapper();
    }

    public abstract price():number;
}