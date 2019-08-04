import {ImageLoader} from "./imageLoader";

export class ImageLoaderProxy{
    cacheList:Array<any>
    // this is callback method which is main->handleImageLoaded()
    callback:Function; 
    imageLoader:ImageLoader;
    imageUrl:string;
    context;
   // imageLoadedCallback:Function;

    constructor(){
        this.cacheList = [];
        this.imageLoader = new ImageLoader()
       // this.imageLoadedCallback = this.imageLoaded.bind(this)
    }

    public loadImage(imageUrl:string, callback:Function){
        this.callback = callback;
        var hasElement:any = this.findInCache(imageUrl);
        if(hasElement != null){
            console.log("from cache")
            this.callback(hasElement);
        } else{
            this.imageUrl = imageUrl;
            this.imageLoader.loadImage(imageUrl, this.imageLoaded.bind(this));
        }
        
    }

    public imageLoaded(ele:HTMLImageElement){
        console.log(this);
        console.log("image load ---------", ele)
        var obj = {imageUrl:this.imageUrl, imgeEle:ele};
        this.cacheList.push(obj);
        this.callback(obj);
    }

    private findInCache(imageUrl:string):any {
     //   var iLen:number = this.cacheList.length;
        // for (var index = 0; index < iLen; index++) {
        //     var element = this.cacheList[index];
        //     if(element.imageUrl == imageUrl){
        //         return element;
        //     } 
        // }
        return null;
    }
}