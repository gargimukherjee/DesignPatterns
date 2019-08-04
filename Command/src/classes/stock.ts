export class Stock{

    public buy(stockName:string,numberOfstock:number):void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = `Stock: ${stockName} : ${numberOfstock} bought`;
        document.body.appendChild(span);
    }

    public sell(stockName:string,numberOfstock:number):void{
        let span:HTMLSpanElement = document.createElement("span");
        span.innerText = ` Stock: ${stockName} : ${numberOfstock} sold`;
        document.body.appendChild(span);
    }
}