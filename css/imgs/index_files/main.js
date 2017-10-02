var display = "0";
document.getElementById("display").innerHTML = display;
/*
window.onload = main;
function main()
{
    document.getElementById("display").innerHTML = display;
}
*/
function clear() {
    display = "0";
    document.getElementById("display").innerHTML = display;
}

function wpisz(digit) {
    display = display + digit;
    document.getElementById("display").innerHTML = display;
}

var memory;
var operator;

function plus() {
    memory = display;
    display = "0";
    operator = plus;
    document.getElementById("display").innerHTML = display;
}

function plus() {
    memory = display;
    display = "0";
    operator = 'plus';
    document.getElementById("display").innerHTML = display;
}

function minus() {
    memory = display;
    display = "0";
    operator = 'minus';
    document.getElementById("display").innerHTML = display;
}

function multiply() {
    memory = display;
    display = "0";
    operator = 'multiply';
    document.getElementById("display").innerHTML = display;
}

function divide() {
    memory = display;
    display = "0";
    operator = 'divide';
    document.getElementById("display").innerHTML = display;
}

function equal() {
    var memory2 = display;
    var result;
    parseFloat(memory);
    parseFloat(memory2);
    if (operator == 'plus') {
        result = memory + memory2;
    }
    if (operator == 'minus') {
        result = memory - memory2;
    }
    if (operator == 'multiply') {
        result = memory * memory2;
    }
    if (operator == 'divide') {
        result = memory / memory2;
    }

    document.getElementById("display").innerHTML = result;
}