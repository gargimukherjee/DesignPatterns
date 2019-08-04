import { Iterator } from './classes/iterator';
import { ImageLoaderProxy } from './classes/imageLoaderProxy';


class Main{
    iterator:Iterator;
    imageLoader:ImageLoaderProxy;

    constructor(){
        var list:Array<any> = [
            "images/apple.jpg"
        ]

        this.iterator = new Iterator(list);
        this.imageLoader = new ImageLoaderProxy();
    }

    public loadNextImage(){
        if(this.iterator.hasNext() == true){
            var url:string = this.iterator.getNext();
            this.imageLoader.loadImage(url, this.handleImageLoaded.bind(this));
        }
    }

    private handleImageLoaded(obj){
        console.log("image load success");
        if(obj != null && obj.imgeEle != null){
            document.body.appendChild(obj.imgeEle)
        }
        this.loadNextImage();
    }
}

var obj:Main = new Main();
obj.loadNextImage();