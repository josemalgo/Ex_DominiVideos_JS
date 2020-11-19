export default class Option {
  
  _title;

  constructor(title){
    if(new.target === Option){
      throw new Error("This is a abstract class");
    }
    this._title = title;
  }

  show(position){
    console.log(position + " - " + this._title);
  }

  //Execute(){
  //}
}
