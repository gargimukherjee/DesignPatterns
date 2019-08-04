export interface IOrder{
     execute(stockName:string, numberOfStock:number):void;
}

export interface IOrderItem {
     order:IOrder
     stockName: string
     numberOfStock:number
 }