function buttonClr(){
	document.calculator.display.value = "";
	document.calculator.answer.value = "";
}

function backSpace(){
    let val = document.getElementById("display").value;
    if(val.length > 0){
        val = val.substring(0, val.length-1);
        document.calculator.display.value = val;
    }
}

function operators(symbol){
    let sign = symbol.value;
    document.calculator.display.value += sign;
}

function compute() {
    let output = eval(document.getElementById("display").value);
    if(output.toString().length > 14) alert("Can only display output of length less than 15");
    else document.calculator.answer.value = output;
}

function numbers(btnVal){
    let buttonValue = btnVal.value;
    document.calculator.display.value += buttonValue;
}
