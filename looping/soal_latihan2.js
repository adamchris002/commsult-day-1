const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var temp_array = []

for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
        if (array[i] %3 == 0 && array[i] %4 == 0) {
            temp_array += "CS ID, "
        }
        else if (array[i] %3 == 0) {
            temp_array += "CS, "
        }
        else if (array[i] %4 == 0) {
            temp_array += "ID, "
        }
        else {
            temp_array += array[i] + ", "
        }
    }
    else {
        if (array[i] %3 == 0 && array[i] %4 == 0) {
            temp_array += "CS ID"
        }
        else if (array[i] %3 == 0) {
            temp_array += "CS"
        }
        else if (array[i] %4 == 0) {
            temp_array += "ID"
        }
        else {
            temp_array += array[i]
        }
    }
}

// console.log(array.length - 1)
// console.log(temp_array)

//soal latihan 2

arr1 = [1,2,3,7,6]
arr2 = [3,2,1,6,5]

var tim_a = 0;
var tim_b = 0;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
        tim_a += 1
    }
    else if (arr1[i] < arr2[i]) {
        tim_b += 1
    }
    else {
        tim_a += 0;
        tim_b += 0;
    }
}

var arr3 = [tim_a, tim_b]
console.log(arr3)