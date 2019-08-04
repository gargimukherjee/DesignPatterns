import { IDrawAPI } from "../interfaces/IDrawAPI";

export abstract class Shape {
    protected drawAPI:IDrawAPI;

    constructor(drawAPI:IDrawAPI){
        this.drawAPI = drawAPI;
    }

    public abstract draw():void;

}