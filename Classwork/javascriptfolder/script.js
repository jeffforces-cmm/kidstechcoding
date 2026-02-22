let x=5;
let y=6;
let z= x + y;
document.getElementById("demo").innerHTML ="the value of z is " + z;

let a=30;
let b=20;
let c=a + b;
document.getElementById("first").innerHTML ="the sum of c is " + c;

let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

let carName = "Volvo";
carName="bmw";
console.log(carName)
let _cup = "ice cream";

if (_cup === "ice cream"){
    // alert("i love ice cream")
}else{
    // alert("i dont like ice cream")
}

function changeText(){
    let text = document.getElementById("message");
    text.innerHTML="you clicked the text button";
    text.style.color="red";
}
function changeColor(){
    let body= document.getElementById("pagebody");
    let color=["red","blue","green","yellow","purple"];
   let randomColor = color[Math.floor(Math.random() * color.length)]; body.style.backgroundColor = randomColor;
}