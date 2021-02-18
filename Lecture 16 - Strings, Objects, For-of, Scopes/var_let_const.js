// let x = 5
// let y = 4
// let z = 3, a = 9
// let variables can be reassigned


// const p = 5
// const variables cannot be reassigned

// var variables can also be reassigned
// var b = 2
// b = 5
// var c = 3, d = 7
// var e = 10


function abc() {
    let p = 10
    var q = 15
    console.log(p, q)
}

abc()

// console.log(p, q)



if (5 > 2) {
    let a = 6           //This has block scope
    var b = 4           //This is declared in global scope because it has function scope
    const c = 5         //This also has block scope
    console.log(a, b)
}

// console.log(a)
console.log(b)
// console.log(c)