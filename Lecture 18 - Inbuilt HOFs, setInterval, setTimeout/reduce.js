let arr = [5, 3, 8, 9, 7, 6, 1]

// let sum = 0;

// for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)

console.log(arr)

let sum = arr.reduce((accumulate, current) => {
    return accumulate + current
})

console.log(sum)

let product = arr.reduce((acc, curr) => {
    return acc * curr
}, 1)

console.log(product)