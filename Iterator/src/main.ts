import { Iterator } from './classes/iterator';
import { ImageLoader } from './classes/imageLoader';


class Main{
    iterator:Iterator;
    imageLoader:ImageLoader;
    imageList:HTMLUListElement;

    constructor(){
        var list:Array<any> = [
            "images/apple.jpg", 
            "images/brinjal.jpg",
            "images/broccoli.jpg",
            "images/carrot.jpg",
            "images/chikoo.jpg" 

        ]

        this.iterator = new Iterator(list);
        this.imageLoader = new ImageLoader();

        //Create an Unordered list in which the list items containing the image will get appended
        this.imageList= document.createElement("ul");
    }

    /** Function will check if there is a next item in the list 
     * If hasNext is true, then will execute getNext and load the next image
     * @param null
     * @return void
     */
    public loadNextImage(){
        if(this.iterator.hasNext() == true){
            var url:string = this.iterator.getNext();
            this.imageLoader.loadImage(url, this.handleImageLoaded.bind(this));
        }
    }

    /**
     * Inserts the image DOM into a li and appends the li to the ul-this.imageList
     * this.imageList is appended to the document.body
     * Also class the loadImage after one cycle is complete
     * @param imageEle which is the image DOM received from the imageLoader.ts
     * @return void
     * 
     */
    private handleImageLoaded(imageEle:any){
        var li = document.createElement("li");
        li.appendChild(imageEle);
        this.imageList.appendChild(li);
        document.body.appendChild(this.imageList);
        this.loadNextImage();
    }
}

let main = new Main();
main.loadNextImage();