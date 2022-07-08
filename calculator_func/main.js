function Calc() {
    let number1 = +document.getElementById("num1").value;
    let cal = document.getElementById("calc").value;
    let number2 = +document.getElementById("num2").value;
    let result = 0;
    if (cal == "+") {
        result = number1 + number2;
    } else if (cal == "-") {
        result = number1 - number2;
    } else if (cal == "x") {
        result = number1 * number2;
    } else if (cal == "/") {
        result = number1 / number2;
    }
    let display = "Dap an cua " + number1 + cal + number2 + " =" + result;
    document.getElementById("result").innerHTML = display;
}