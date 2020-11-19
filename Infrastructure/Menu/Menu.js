import Exit from './Exit.js';

export default class Menu {

  #options;
  #quantity;
  #exit;

  constructor(){
    this.#options = new Map();
    this.#quantity = 0;
    this.#exit = new Exit();
  }
  
  add(option){
    this.#options.set(this.#quantity + 1, option);
    this.#quantity++;
  }

  close(){
    this.add(this.#exit);
  }

  closeSesion(){
    this.#exit.titleLogOut();
    this.add(this.#exit);
  }

  show(){
    for (let [key, value] of this.#options) {
      value.show(key);
    }
  }

  getOption(){
    //const manageIO = new ManageIO();
    let option = 1;
    let error = true;

    //do{
      console.log("\nEscull una opció [1 - " + this.#quantity + "]: ");

      //option = prompt("Escull una opció [1 - " + this.#quantity + "]: ");
      error = !this.#options.has(option);
      if(error)
	      console.log("Error!!! La opció ha d'estar entre 1 y " + this.#quantity);
    //}while(error);

    return this.#options.get(option);
  }

  finished(){
    return this.#exit.executed();
  }

}
