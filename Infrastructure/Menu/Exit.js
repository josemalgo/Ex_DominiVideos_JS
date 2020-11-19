import Option from './Option.js';

export default class Exit extends Option {
  
  #executed;

  constructor(){
    super("Sortir");
    this.#executed = false;
  }

  execute(){
    this.#executed = true;
  }

  executed(){
    return this.#executed;
  }
  
  titleLogOut(){
    this.title = "Tancar sessió.";
  }
  
}
