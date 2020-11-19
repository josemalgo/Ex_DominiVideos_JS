import Menu from './Menu.js'
import Option from './Option.js'

export default class LogIn extends Option{

    #app;
    #menu;

    constructor(app){
        super("Iniciar sessió.");
        this.#app = app;
        this.#menu = new Menu();
        //this.#menu.add(new VideoList(_app));
        //this.#menu.add(new VideoCreator(_app));
        //this.#menu.add(new VideoManager(_app));
        this.#menu.closeSesion();
    }

    execute(){
        console.log("--- Login ---");
        console.log("Introdueix el nom d'usuari (anular per sortir): ");
        let userName = "jose";
        console.log("Introdueix el password (anular per sortir): ");
        let password = "jose";

        if(this.#app.Users.has(username) && this.#app.Users.get(username).password === password)
        {
            console.log("Sessió iniciada amb éxit!");
            this.showMenuUser();
        }
        else{
            console.log("El nom d'usuari i/o la contraseña son incorrectes.");
        }
    }

    showMenuUser(){
        
        do
        {
            console.log("\n--- Menú d'Usuari ---");
            this.#menu.show();
            this.#menu.getOption().execute();
        } while (!this.#menu.finished());

        this.#app.currentUser = null;
    }
}