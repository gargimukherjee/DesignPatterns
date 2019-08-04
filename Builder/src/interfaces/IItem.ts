import { IPacking } from './IPacking';

export interface IItem {
    name():String;
    packing():IPacking;
    price():number;
}