const arr = [1, 20, 45, 67, 90]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] %2 == 0) {
        console.log(arr[i] + " adalah genap")
    }
    else {
        console.log(arr[i] + " adalah ganjil")
    }
}