const switcher = document.getElementById("switcher-1");

const switcherDot1 = document.getElementById("switcher-dot-1");

const screen = document.getElementById("calculator-screen");

const keypad = document.getElementById("calculator-keypad");

const calcHeader = document.getElementById("calculator-header");

const numbersBtn = document.getElementsByClassName("number");

const operatorsBtn = document.getElementsByClassName("operator");

const resDelBtn = document.getElementsByClassName("res-del");

const equalBtn = document.getElementById("equalbtn");

const btn = document.getElementsByClassName("btn");

const displayResult = document.getElementById("result");

let result = "";

let number1 = 0;
let number2 = "";

let divide = false;
let multiply = false;
let plus = false;
let minus = false;
let equal = false;
let operator = false;
let displayOperation = 0;

let theme = 1;

/* SWITCH THEME */
const switchTheme = (id) => {
    if(id == "switcher-dot-1") {
        switcher.setAttribute("id", "switcher-2");
        switcherDot1.setAttribute("id", "switcher-dot-2");
        theme = 2;
    } else if(id == "switcher-dot-2") {
        switcher.setAttribute("id", "switcher-3");
        switcherDot1.setAttribute("id", "switcher-dot-3");
        theme = 3;
    } else if(id == "switcher-dot-3") {
        switcher.setAttribute("id", "switcher-1");
        switcherDot1.setAttribute("id", "switcher-dot-1");
        theme = 1;
    }

    switchBg(theme);
}

/* SWITCH BACKGROUNDS COLORS */
const switchBg = (theme) => {
    if(theme == 1) {
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";

        screen.setAttribute("id", "calculator-screen");

        keypad.setAttribute("id", "calculator-keypad");

        calcHeader.setAttribute("id", "calculator-header");

        [...numbersBtn].forEach((button, i) => {
            numbersBtn[i].classList.remove("number-2");
            numbersBtn[i].classList.remove("number-3");
            i++;
        });

        [...operatorsBtn].forEach((button, i) => {
            operatorsBtn[i].classList.remove("number-2");
            operatorsBtn[i].classList.remove("number-3");
            i++;
        });

        [...resDelBtn].forEach((button, i) => {
            resDelBtn[i].classList.remove("res-del-2");
            resDelBtn[i].classList.remove("res-del-3");
            i++;
        });

        equalBtn.setAttribute("id", "equalbtn");

    } else if(theme == 2) {
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";

        screen.setAttribute("id", "calculator-screen-2");

        keypad.setAttribute("id", "calculator-keypad-2");

        calcHeader.setAttribute("id", "calculator-header-2");

        [...numbersBtn].forEach((button, i) => {
            numbersBtn[i].classList.add("number-2");
            i++;
        });

        [...operatorsBtn].forEach((button, i) => {
            operatorsBtn[i].classList.add("number-2");
            i++;
        });

        [...resDelBtn].forEach((button, i) => {
            resDelBtn[i].classList.add("res-del-2");
            i++;
        });

        equalBtn.setAttribute("id", "equalbtn-2");

    } else if(theme == 3) {
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";

        screen.setAttribute("id", "calculator-screen-3");

        keypad.setAttribute("id", "calculator-keypad-3");

        calcHeader.setAttribute("id", "calculator-header-3");

        [...numbersBtn].forEach((button, i) => {
            numbersBtn[i].classList.add("number-3");
            i++;
        });

        [...operatorsBtn].forEach((button, i) => {
            operatorsBtn[i].classList.add("number-3");
            i++;
        });

        [...resDelBtn].forEach((button, i) => {
            resDelBtn[i].classList.add("res-del-3");
            i++;
        });

        equalBtn.setAttribute("id", "equalbtn-3");
    }
}

/* DISPLAY CLICKED NUMBER */
const addNumber = (value) => {

    if (equal == true && operator == false) {
        result = "";
    } else if (result == 0) {
        result = "";
    }

    result = result + value;
    displayResult.innerHTML = result;
    equal = false;
    operator = false;

    console.log("Result : " + result);
}


/* MAKES THE OPERATIONS */
const operations = (value) => {

    if (divide == true) {
        number2 = result.replace(number1 + "/", "");
        number2 = parseFloat(number2);
        number1 = parseFloat(number1);
        result = (number1 / number2);
        divide = false;
        number1 = result;
        number2 = 0;
    } else if (multiply == true) {
        number2 = result.replace(number1 + "*", "");
        number2 = parseFloat(number2);
        number1 = parseFloat(number1);
        result = (number1 * number2);
        multiply = false;
        number1 = result;
        number2 = 0;
    } else if (plus == true) {
        number2 = result.replace(number1 + "+", "");
        number2 = parseFloat(number2);
        number1 = parseFloat(number1);
        result = (number1 + number2);
        plus = false;
        number1 = result;
        number2 = 0;
    } else if (minus == true) {
        number2 = result.replace(number1 + "-", "");
        number2 = parseFloat(number2);
        number1 = parseFloat(number1);
        result = (number1 - number2);
        minus = false;
        number1 = result;
        number2 = 0;
    } else {
        number1 = result;
        console.log(number1);
    }
    

    if (value == "/") {
        divide = true;
        operator = true;
    } else if (value == "*") {
        multiply = true;
        operator = true;
    } else if (value == "+") {
        plus = true;
        operator = true;
    } else if (value == "-") {
        minus = true;
        operator = true;
    }


    if (value == "equal") {
        displayResult.innerHTML = result;
        equal = true;
        divide = false;
        multiply = false;
        plus = false;
        minus = false;
    } else {
        result = result + value;
        displayResult.innerHTML = result;
    }
}

/* RESET CALCULATOR */
const resetCalc = () => {
    number1 = 0;
    number2 = 0;
    result = 0;
    displayResult.innerHTML = result;
}

/* DELETE LAST INPUT */
const deleteLast = () => {
    result = result.slice(0, -1);
    divide = false;
    multiply = false;
    plus = false;
    minus = false;
    if (result.length == 0) {
        resetCalc();
    } else {
        displayResult.innerHTML = result;
    }
    
}