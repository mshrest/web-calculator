//Calculator program

const display = document.getElementById("display");

function Display(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function clearEntry(){
    display.value = display.value.toString().slice(0, -1);  //Deletes the last entry
}

//Calculates the displayed value if the entries are ok, otherwise displays 'Error' message.
function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
