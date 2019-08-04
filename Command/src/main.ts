import { Stock } from "./classes/stock";
import { BuyStock } from "./classes/buyStock";
import { SellStock } from "./classes/sellStock";
import { Broker } from "./classes/broker";

export class Main{

    public init():void{
        let abcStock = new Stock();

        let buyStockOrder:BuyStock = new BuyStock(abcStock);
        let sellStockOrder:SellStock = new SellStock(abcStock);

        let broker:Broker = new Broker();
        broker.takeOrder(buyStockOrder, 'ABC', 100);
        broker.takeOrder(sellStockOrder, 'DEF', 50);
        broker.placeOrder();
    }
}

let main = new Main();
main.init();