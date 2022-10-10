// const arr = [1, 20, 45, 67, 90]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] %2 === 0) {
//         console.log(arr[i] + " adalah genap")
//     }
//     else if (arr[i] %2 !== 0) {
//         console.log(arr[i] + " adalah ganjil")
//     }
//     else {
//         console.log(arr[i] + " bukan sebuah bilangan")
//     }
// }

//soal latihan

var turtle = "turtle"
var number = 1000

var total = turtle;

//menggunakan for
const word1 = "turtle";
const word2 = "153";

let dots = "";
for (let i = 0; i < 30 - word1.length - word2.length; i++) {
    dots += ".";
}
console.log(word1 + dots + word2);

// menggunakan while
while (total.length !== 30) {
    total += "."
    if (total.length + number.toString().length === 30) {
        total += number.toString()
    }
}

// console.log(total)