import Entity from './Entity.js';
//import Video from './Video.js';

export default class User extends Entity{
    
    #userName;
    #name;
    #surname;
    #password;
    #registrationDate;
    #videos;

    constructor(id, user, name, surname, password, date){
        super(id);
        this.#userName = user;
        this.#name = name;
        this.#surname = surname;
        this.#password = password;
        this.#registrationDate = date;
        this.#videos = new Array[100];
    }

    createVideo(video){
        this.#videos[0] = video;
    }

    searchVideoByTitle(title){
        //return this.#videos.Find
    }

    showListVideos(){
        if(this.#videos.length > 0){
            console.log("No tens cap vídeo per mostrar");
        }

        //foreach de #videos per mostrar videos
    }

    addVideo(video){
        //this.#videos.add(video)
    }
}