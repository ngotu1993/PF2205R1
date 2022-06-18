// let PI = 3.14;
// PI = 7;
// alert(PI);

// let demo = 0;
// let result = 5 + demo++;
// document.write(demo + "</br>" + result)

// let number1 = prompt("Nhap chu so thu nhat");
// let number2 = prompt("Nhap chu so thu hai");
// let number3 = prompt("Nhap chu so thu ba");
// let Sum = number1 + number2 + number3;
// if (Sum % 3 == 0) {
//     alert(Sum + " Co chia het cho 3");
// } else {
//     alert(Sum + " Khong chia het cho 3");
// }

let number = prompt("Nhap mot so bat ky: ");
let arr = Array.from(number);
let Sum = 0;

console.log(arr);

arr.forEach(function(element) {
    Sum += element;
});
console.log(Sum);