export class ImageLoader{
    imageUrl:string;
    callback:Function;
    image:HTMLImageElement;
    constructor(){
        
    }

    public loadImage(imageUrl:string, callback:Function){
        this.imageUrl = imageUrl;
        this.callback = callback;
        this.image = document.createElement('img') as HTMLImageElement;
        this.image.onload = this.imageLoaded.bind(this);
        this.image.onerror = this.imageLoadError.bind(this);
        this.image.src = this.imageUrl;
        //setTimeout(this.callback,1000);
    }

    private imageLoaded(){
        console.log("image load ---------")
        this.callback(this.image);
    }

    private imageLoadError(){
        console.log("error occred while loading image "+ this.imageUrl);
        this.callback(null);
    }
}