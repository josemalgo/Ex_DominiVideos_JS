import Option from './Option.js';
import User from '../../Models/User.js';

export default class RegisteringUser extends Option {

    #app;

    constructor(app){
        super("Registrar-se.");
        this.#app = app;
    }

    execute(){
        console.log("--- Registre d'usuari ---");
        let userName = this.#app.getInputItemValidate("Introdueix el nom d'usuari (anular per sortir): ", 1);
        if (userName){
            return;
        }
        let password = this.#app.getInputItemValidate("Introdueix la contrasenya (anular per sortir): ");
        if (password){
            return;
        }
        let name = this.#app.getInputItemValidate("Introdueix el teu nom (anular per sortir): ");
        if (name){
            return;
        }
        let surname = this.#app.getInputItemValidate("Introdueix el teu cognom (anular per sortir): ");
        if (stringsurname){
            return;
        }

        let newUser = new User(1, userName, name, surname, password, new Date.now());
        this.#app.users.add(userName, newUser);
        this.#app.currentUser = newUser;
        console.log("\nUsuari registrat amb éxit!");
    }
}