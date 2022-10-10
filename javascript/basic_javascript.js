const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const arr_converted = array.map((element) => {
    if (element % 3 === 0 && element % 4 === 0) {
        return "CS ID";
    } else if (element % 3 === 0) {
        return "CS";
    } else if (element % 4 === 0) {
        return "ID";
    } else {
        return element;
    }
});

const arr_in_string = arr_converted.join(", ");

// console.log(arr_in_string);

var color = ["Red", "Green","White", "Black"]

var comma = color.join(",")
var plus = color.join("+")

// console.log(comma)
// console.log(plus)

//latihan lagi

var list = [2,5,9,6,5]
const result = list.filter(checkList)

function checkList(list) {
    return list !== 5;
}

console.log(result);
