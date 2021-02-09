console.log("Hello World")
console.log(4*2 + 5)
let x = 5
let y = 4
let a = 2, b = 10
console.log(x + y)
console.log(a * b)
console.log(a / b)

console.error("This is a error")
console.warn("Warning... hello there... how are you ?")



let age = 17

if (age >= 18) {
    console.log('This person is an adult')
}
else if (age >= 15) {
    console.log('Older than 15')
}
else {
    console.log('Less than or equal to 14')
}


for (let i = 1; i <= 100; i++){
    console.log(i)
}


x = 1
while (x <= 10) {
    console.log("Square of", x, "is", x * x)
    x++
}

x = 10
// Exit control loop
do {
    console.log(x * x * x)
    x++
} while(x <= 20)