const output = document.querySelector("#output");
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('#dot');
const absoluteValue = document.querySelector('#absoluteValue');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

output.textContent = '0';

numbers.forEach((num) =>{
    num.addEventListener("click", ()=>{
        displayNumbers(num.textContent);
    })
});

operators.forEach((op) =>{
    op.addEventListener("click", ()=>{
        setOperator(op.textContent)
    })
});


dot.addEventListener("click", ()=>{
    
});

absoluteValue.addEventListener("click", ()=>{
    
});

equal.addEventListener("click", ()=>{
   output.textContent = String(operate(firstInput, operand, secondInput));
   firstInput = output.textContent*1;
});

clear.addEventListener("click", ()=>{
    clearCalculator();
});

let firstInput = 0;
let secondInput = 1;
let operand = '';
let flag = false;

function add(a, b) {return (a*1)+(b*1);}
function subtract(a, b) {return (a*1)-(b*1);}
function multiply(a, b) {return (a*1)*(b*1);}
function divide(a, b) {return (a*1)/(b*1);}



function operate(input1, operator, input2){
    switch (operator) {
        case '+':
            return add(input1, input2);
        case '-':
            return subtract(input1, input2);
        case '*':
            return multiply(input1, input2);
        case '/':
            return divide(input1, input2);
        default:
            break;
    }
}

function displayNumbers(digit){
    if(output.textContent === '0'){
        output.textContent = String(digit);
    }
    else{
        output.textContent = output.textContent + String(digit);
    }
}

function setOperator(op){
    operand = op;
    firstInput = output.textContent;
}

function clearCalculator(){
    firstInput = 0;
    secondInput = 0;
    operand = ''
    output.textContent = '0';
}

