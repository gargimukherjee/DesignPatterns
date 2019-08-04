import { IItem } from '../interfaces/IItem';
import { IPacking } from '../interfaces/IPacking';
import { Bottle } from './bottle';

export abstract class ColdDrink implements IItem {
    public abstract name():string;

    public packing():IPacking{
        return new Bottle();
    }

    public abstract price():number;

}