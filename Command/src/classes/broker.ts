import { IOrder, IOrderItem } from '../interfaces/IOrder';

export class Broker {
    private orderList:Array<IOrderItem> = [];

    public takeOrder(order:IOrder, stockName:string, numberOfStock:number){
        this.orderList.push({order:order, stockName:stockName, numberOfStock:numberOfStock});
    }

    public placeOrder():void{
        for(var i=0; i<this.orderList.length; i++){
            let item:IOrderItem = this.orderList[i];
            item.order.execute(item.stockName,item.numberOfStock);
        }
        this.orderList = [];
    }

}