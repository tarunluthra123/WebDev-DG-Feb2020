let arr = [4, 3, 7, 9, 10, 1, 23, 6, 2]

// let odd = []
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 1) {
//         odd.push(arr[i])
//     }
// }

// console.log(odd)

let odd = arr.filter(function (x) {
    if (x % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
})

console.log(odd)

let even = arr.filter((x) => {
    return x % 2 == 0;
})

console.log(even)

let doubleDigit = arr.filter(function (x) {
    if (x >= 10)
        return true;
    else
        return false
    // return x >= 10;
})

console.log(doubleDigit)