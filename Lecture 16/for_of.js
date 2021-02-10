let arr = [1, 3, 7, 4, 8, 9, 2]

// for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i]
//     console.log(curr * curr)
// }


for (let x of arr) {
    console.log(x * x)
    x += 5
    console.log("x =",x)
}

console.log(arr)



let s = "Hello World."

for (let char of s) {
    console.log(char)
}