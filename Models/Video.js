import Entity from './Entity.js';

export default class Video extends Entity{

    #url;
    #title;
    #tags;
    //enum options

    constructor(id, url, title){
        super(id);
        this.#url = url;
        this.#title = title;
        //tags new List;
    }

    play(){
        console.log("El reproductor està en play");
    }

    pause(){
        console.log("El reproductor està en play");
    }

    stop(){
        console.log("El reproductor està en play");
    }

    show(){
        console.log("Títol: " + this.#title + " - URL: " + this.#url + " - Tags: " + concatTags());
    }

    concatTags(){
        concat = "";
        count = 1;

        //foreach list tags
    }

    addTaga(item){
        //this.#tags.Add(item);
    }
}