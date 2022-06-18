function Check() {
    let number = +document.getElementById("num").value;
    if (number % 2 == 0) {
        let result = number + " la mot so chan";
        document.getElementById("result").innerHTML = result;
    } else {
        let result = number + " la mot so le";
        document.getElementById("result").innerHTML = result;
    }
}