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
    displayNumbers('.');
});

absoluteValue.addEventListener("click", ()=>{
    output.textContent = output.textContent*-1;
});

equal.addEventListener("click", ()=>{
    secondInput = output.textContent*1;
    calculate(firstInput, operand, secondInput);
});

clear.addEventListener("click", ()=>{
    clearCalculator();
});

let firstInput = 0;
let secondInput = 0;
let operand = '';
let flag = false;
let dotflag = false;

function add(a, b) {return (a*1)+(b*1);}
function subtract(a, b) {return (a*1)-(b*1);}
function multiply(a, b) {return (a*1)*(b*1);}
function divide(a, b) {return (a*1)/(b*1);}

function calculate(input1, op, input2)
{
    output.textContent = String(operate(input1, op, input2));
    firstInput = output.textContent*1;
    secondInput = 0;
    operand = "";
}

function operate(input1, operator, input2){
    switch (operator) {
        case '+':
            return add(input1, input2);
        case '-':
            return subtract(input1, input2);
        case '*':
            return multiply(input1, input2);
        case '/':
            return (secondInput !== 0) ? divide(input1, input2) : "Error, Can't divide by 0";
        default:
            return output.textContent
    }
}

function displayNumbers(digit){
    if(flag === true)
    {
        output.textContent = '0';
        flag = false;
    }

    if(output.textContent === '0'){
        if(digit === '.' && dotflag === false)
        {
            output.textContent = output.textContent + String(digit);
            dotflag = true;
        }
        else{
            output.textContent = String(digit);
        }
    }
    else{
        output.textContent = output.textContent + String(digit);
    }
}

function setOperator(op){
    if(operand !== "" && firstInput != 0)
    {
        secondInput = output.textContent*1;
        firstInput = operate(firstInput, operand, secondInput);
        secondInput = 0;
    }
    else{
        firstInput = output.textContent*1;
    }
    operand = op;
    dotflag = false;
    flag = true;
}

function clearCalculator(){
    firstInput = 0;
    secondInput = 0;
    operand = '';
    output.textContent = '0';
}

