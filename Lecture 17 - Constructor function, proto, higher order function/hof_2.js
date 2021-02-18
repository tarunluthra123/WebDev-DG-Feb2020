function generateIncrementor() {
    function incrementor(x) {
        return x+1
    }
    return incrementor
}

const inc = generateIncrementor()

console.log(inc(5))
console.log(inc(8))
console.log(inc(50))
console.log(inc(10))