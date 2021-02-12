// value of counter variable should only be read and modified in the increment()
// counter variable should not be declared in global

// let counter = 0

// function increment() {
//     counter++
//     return counter
// }


// Counter variable is getting reinitialised everytime the increment function is called.
// counter = 0

// counter variable should not be declared inside increment()

// function increment() {
//     let counter = 0
//     counter++
//     return counter
// }

function incrementGenerator() {
    let counter = 0


    function increment() {
        counter++
        return counter
    }


    return increment
}


const inc = incrementGenerator()

console.log(inc())
console.log(inc())
console.log(inc())
console.log(inc())

console.log(inc())
console.log(inc())
console.log(inc())
console.log(inc())