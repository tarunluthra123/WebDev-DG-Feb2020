let arr = [5, 3, 8, 9, 7, 6, 1]

// let sq = []
// for (let i = 0; i < arr.length; i++) {
//     sq.push(arr[i]  * arr[i])
// }

// console.log(sq)

let squares = arr.map(function (x) {
    console.log("x = ",x)
    return x * x;
})

console.log(squares)


// let booleanGreaterThanFive = arr.map((x) => {
//     return x >= 5;
// })

// console.log(booleanGreaterThanFive)