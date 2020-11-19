export default class ValidationResult{
    
    validatedResult;

    isSuccess;

    messages;

    allErrors(){

        get
        {
            let output = "";

            //foreach (var error in this.messages)
              //  output += error + "\n\r";

            return output;
        }
    }

    constructor(){
        this.messages = new Array[10];
        
    }
}