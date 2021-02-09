// let x = 5;
// let y = 4


// Write a semicolon if you like
// Do not write a semicolon if you don't like

let n = 101

let factors = 0
// for (let i = 1; i <= n; i++){
//     if (n % i == 0) {
//         factors++
//     }
// }

// if (factors == 2) {
//     console.log(n,"is a prime number")
// }
// else {
//     console.log(n+" is not a prime number")
// }

let isPrime = true
// Assume your number is prime

// Time complexity - O(n)
for (let i = 2; i < n; i++){
    if (n % i == 0) {
        isPrime = false
        break
    }
}

if (isPrime) {
    console.log(n,"is a prime number")
}
else {
    console.log(n+" is not a prime number")
}
n = 40

// Best method
// Time complexity - O(sqrt(n))
for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
        isPrime = false
        break
    }
}

// 100 - 1,2,4,5,10,20,25,50,100