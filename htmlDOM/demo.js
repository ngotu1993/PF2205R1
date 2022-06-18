// document.getElementById("para").innerHTML = "Day la lop PF2205R1";
// document.getElementById("para").style.color = "red";

// let number1 = +document.getElementById("num1").value;
// console.log(number1 + typeof(number1))
// let number2 = +document.getElementById("num2").value;



function Add() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Sum = number1 + number2;
    let result = "Ket qua la: " + number1 + " + " + number2 + " = " + Sum;
    document.getElementById("result").innerHTML = result;
}

function Sub() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Sum = number1 - number2;
    let result = "Ket qua la: " + number1 + " - " + number2 + " = " + Sum;
    document.getElementById("result").innerHTML = result;
}

function Mul() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Sum = number1 * number2;
    let result = "Ket qua la: " + number1 + " * " + number2 + " = " + Sum;
    document.getElementById("result").innerHTML = result;
}

function Div() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Sum = number1 / number2;
    let result = "Ket qua la: " + number1 + " / " + number2 + " = " + Sum;
    document.getElementById("result").innerHTML = result;
}