export class ImageLoader{
    imageUrl:string;
    callback:Function;
    image:HTMLImageElement;

    constructor(){
       
    }

    /**
     * LoadImage creates an img DOM and assigns the url of the image to the image DOM src
     * Also checks if there are errors then error function will get executed
     * @param imageUrl : is the url of the image from image array(;list) received from the main.ts
     * @param callback : handleImageLoaded, a callback function that will get executed 
     * once the image url is set as image src in DOM. Gets executed on the main page.
     * @return void
     */
    public loadImage(imageUrl:string, callback:Function){
        this.imageUrl = imageUrl;
        this.callback = callback;
        this.image = document.createElement('img') as HTMLImageElement;
        this.image.onload = this.imageLoaded.bind(this);
        this.image.onerror = this.imageLoadError.bind(this);
        this.image.src = this.imageUrl;
        //setTimeout(this.callback,1000);
    }

    /**
     * Once the image DOM is ready, it is sent back to the main.ts along with callback function 
     * to be executed. 
     * @param null 
     * @return void
     */
    private imageLoaded(){
        console.log("image load ---------")
        this.callback(this.image);
    }

    /**
     * In case there are any errors in the image url or any other, this code will get executed
     * @param null
     * @return void
     */
    private imageLoadError(){
        console.log("error occred while loading image "+ this.imageUrl);
        this.callback();
    }
}