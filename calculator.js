

const screen = document.querySelector(".screen");

const btn_AC = document.querySelector(".JS-AC"),
    btn_C = document.querySelector(".JS-C"),
    btn_per = document.querySelector(".JS-per"),
    btn_div = document.querySelector(".JS-div"),
    btn_mul = document.querySelector(".JS-mul"),
    btn_sub = document.querySelector(".JS-sub"),
    btn_add = document.querySelector(".JS-add");
    btn_eq = document.querySelector(".JS-eq");
    btn_dot = document.querySelector(".JS-dot");

const btn_0 = document.querySelector(".JS-0"),
    btn_1 = document.querySelector(".JS-1"),
    btn_2 = document.querySelector(".JS-2"),
    btn_3 = document.querySelector(".JS-3"),
    btn_4 = document.querySelector(".JS-4"),
    btn_5 = document.querySelector(".JS-5"),
    btn_6 = document.querySelector(".JS-6"),
    btn_7 = document.querySelector(".JS-7"),
    btn_8 = document.querySelector(".JS-8"),
    btn_9 = document.querySelector(".JS-9");

var operation = "", input = 0, answer = 0, show = 0, Dot = false, decimal;

function update(){
    screen.classList.remove("long");
    if (`${show}`.length > 5) screen.classList.add("long");
    screen.innerText = `${show}`;
    if (`${show}`.length > 10) {
        operation ="";
        input = 0;
        answer = 0;
        Dot = false;
        screen.innerText = `Too Long`;
    }
}
function btnColor(){
    if (operation === "divide"){
        btn_div.classList.add("clicked");
        btn_mul.classList.remove("clicked");
        btn_sub.classList.remove("clicked");
        btn_add.classList.remove("clicked");
    }
    else if (operation === "multiple"){
        btn_div.classList.remove("clicked");
        btn_mul.classList.add("clicked");
        btn_sub.classList.remove("clicked");
        btn_add.classList.remove("clicked");
    }
    else if (operation === "subtract"){
        btn_div.classList.remove("clicked");
        btn_mul.classList.remove("clicked");
        btn_sub.classList.add("clicked");
        btn_add.classList.remove("clicked");
    }
    else if (operation === "add"){
        btn_div.classList.remove("clicked");
        btn_mul.classList.remove("clicked");
        btn_sub.classList.remove("clicked");
        btn_add.classList.add("clicked");
    }
    else{
        btn_div.classList.remove("clicked");
        btn_mul.classList.remove("clicked");
        btn_sub.classList.remove("clicked");
        btn_add.classList.remove("clicked");
    };
}

function allClear(){
    operation = "";
    input = 0;
    answer = 0;
    show = 0;
    update();
    btnColor();
}

function clear(){
    input = 0;
    Dot = false;
    show = input;
    update();
}

function percent(){
    input = input * 0.01;
    show = input;
    update();
}

function showAnswer(){
    show = answer;
    if (`${answer}`.length > 10){
        answer_e = `${parseInt(answer)}`.length-1;
        answer_val = `${answer/Math.pow(10, answer_e)
                        }`.substr(0,9-`${answer_e}`.length);
        show = `${answer_val}e${answer_e}`;
    }
    update();
}
function calculate(){
    console.log(`answer = ${answer}, input = ${input}`);
    if (operation === "divide") answer = answer/input;
    else if (operation === "multiple") answer = answer*input;
    else if (operation === "subtract") answer = answer-input;
    else if (operation === "add") answer = answer+input;
    else if (operation === "eq") answer = answer;
    else answer = input;
    input = 0;
    operation = "";
    Dot = false;
    showAnswer();
}

function divide(){
    calculate();
    operation = "divide";
    btnColor();
}

function multiple(){
    calculate();
    operation = "multiple";
    btnColor();
}

function subtract(){
    calculate();
    operation = "subtract";
    btnColor();
}

function add(){
    calculate();
    operation = "add";
    btnColor();
}

function eq(){
    calculate();
    operation = "eq";
    btnColor();
}


function input_0(){
    if (Dot){
        show += 0;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 0;
        show = input;
    }
    update();
}

function input_1(){
    if (Dot){
        show += 1;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 1;
        show = input;
    }
    update();
}

function input_2(){
    if (Dot){
        show += 2;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 2;
        show = input;
    }
    update();
}

function input_3(){
    if (Dot){
        show += 3;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 3;
        show = input;
    }
    update();
}

function input_4(){
    if (Dot){
        show += 4;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 4;
        show = input;
    }
    update();
}

function input_5(){
    if (Dot){
        show += 5;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 5;
        show = input;
    }
    update();
}

function input_6(){
    if (Dot){
        show += 6;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 6;
        show = input;
    }
    update();
}

function input_7(){
    if (Dot){
        show += 7;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 7;
        show = input;
    }
    update();
}

function input_8(){
    if (Dot){
        show += 8;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 8;
        show = input;
    }
    update();
}

function input_9(){
    if (Dot){
        show += 9;
        input = parseFloat(show);
    }
    else{
        input = input * 10 + 9;
        show = input;
    }
    update();
}

function dot(){
    Dot = true;
    decimal = "";
    show = `${input}.`;
    update();
}

function waitInput(){
    btn_AC.addEventListener("click", allClear);
    btn_C.addEventListener("click", clear);
    btn_per.addEventListener("click", percent);
    btn_div.addEventListener("click", divide);
    btn_mul.addEventListener("click", multiple);
    btn_sub.addEventListener("click", subtract);
    btn_add.addEventListener("click", add);
    btn_0.addEventListener("click", input_0);
    btn_1.addEventListener("click", input_1);
    btn_2.addEventListener("click", input_2);
    btn_3.addEventListener("click", input_3);
    btn_4.addEventListener("click", input_4);
    btn_5.addEventListener("click", input_5);
    btn_6.addEventListener("click", input_6);
    btn_7.addEventListener("click", input_7);
    btn_8.addEventListener("click", input_8);
    btn_9.addEventListener("click", input_9);
    btn_eq.addEventListener("click", eq);
    btn_dot.addEventListener("click", dot);
    window.addEventListener("keydown", (e) => {
        if (e.key==="0") input_0();
        else if (e.key==="1") input_1();
        else if (e.key==="2") input_2();
        else if (e.key==="3") input_3();
        else if (e.key==="4") input_4();
        else if (e.key==="5") input_5();
        else if (e.key==="6") input_6();
        else if (e.key==="7") input_7();
        else if (e.key==="8") input_8();
        else if (e.key==="9") input_9();
        else if (e.key==="+") add();
        else if (e.key==="-") subtract();
        else if (e.key==="/") divide();
        else if (e.key==="*") multiple();
        else if (e.key==="Delete") allClear();
        else if (e.key==="="||e.key==="Enter") eq();
        else if (e.key==="%") percent();
        else if (e.key===".") dot();
    })
}

function init(){
    waitInput();
}

init();