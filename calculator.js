let cleared= false;

function myInput(id){
        if(cleared){
            clearScreen()
            document.calc.result.value+=id;
        }    
        else
        document.calc.result.value+=id;
}

function clearScreen() {
    document.calc.result.value="";
    cleared=false;
  
}

function calculate() {
    try{
        let input = eval(document.calc.result.value);
        document.calc.result.value=input;
        cleared=true
    }
    catch(err){
        document.calc.result.value="Error";
    }

}