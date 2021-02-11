function generateHelloSayer() {
    function sayHello() {
        console.log("Hello there")
    }

    return sayHello
}


console.log(generateHelloSayer)

const hello = generateHelloSayer()

console.log("hello=",hello)

// hello()
// hello()
// hello()