import Menu from './Infrastructure/Menu/Menu.js';
import LogIn from './Infrastructure/Menu/LogIn.js';
import Register from './Infrastructure/Menu/RegisteringUser.js';
import ValidationResult from './Infrastructure/ValidationResult.js';

export default class App{
    #menu;
    #users;
    #currentUser;

    get users(){
        return this.#users;
    }

    get currentUser(){
        return this.#currentUser;
    }

    constructor(){
        this.#users = new Map();
        this.#currentUser = null;
        this.#menu = new Menu();
        this.#menu.add(new LogIn(this));
        this.#menu.add(new Register(this));
        this.#menu.close();
    }

    start(){
        do{
            console.log("--- Menu inici aplicació ---");
            this.#menu.show();
            this.#menu.getOption().execute();
        }while(!this.#menu.finished());
    }

    getInputItemValidate(outputInfo, exist){
       
        let item = "";
        let valRes = new ValidationResult();
        valRes.isSucces = false;

        while (!valRes.isSuccess){

            if (valRes.messages.Count > 0)
                Console.WriteLine(valRes.allErrors());

            console.log(outputInfo);
            item = "jose"
            if (item === "anular")
                return null;

            if (exist == 1 && this.#users.has(item)){
                console.log("\nEl nom d'usuari ya s'esta utilitzant. Proba amb un altre.");
            }
            else{
                valRes = ValidateEmptyOrNullField(item);
            }
        }
        return item;
    }

    validateEmptyOrNullField(value)
        {
            let valRes = new ValidationResult();
            valRes.isSuccess = true;

            if (value || value.replace(" ", "", "gi") == "")
            {
                valRes.IsSuccess = false;
                valRes.Messages.Add("El camp no pot estar buit!");
            }

            return valRes;
        }

}