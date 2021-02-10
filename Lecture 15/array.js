let arr = [10, 25, 'Hello',  5.67567,  [3, 4] , 56]


// console.log(arr)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[4])
// console.log(arr[4][0], arr[4][1])


let cities = ['Delhi', 'Mumbai', 'Kolkata']
console.log(cities)

cities.push("Chennai","Pune")
console.log(cities)

cities.pop()
console.log(cities)

cities.shift()
// Shifted all elements to 1 step left. Removed the first element from the array.
console.log(cities)


cities.unshift("Jaipur", "Bangalore")
// Inserts an element on the starting.
console.log(cities)

console.log("Splice function")

// Modifies your original array
let cities2 = cities.splice(1, 2)
console.log(cities)
console.log(cities2)


// Does not modify your original array
let cities3 = cities.slice(1, 2)
console.log(cities)
console.log(cities3)


cities.splice(2, 0, "Delhi")
console.log(cities)

let cities4 = [...cities.slice(0, 3), "Chandigarh", ...cities.slice(3)]
// ['Jaipur', 'Kolkata' , 'Delhi' , 'Chandigarh', 'Chennai']
console.log(cities)
console.log(cities4)


console.log(cities4.length)

let delhiIndex = cities4.indexOf('Delhi')
console.log(delhiIndex)



let arr1 = [1, 2, 3, 7]
let arr2 = [6, ...arr1,  5]   // [6, 1,2,3,7, 5]

console.log(arr2)


let myArray = [1, 5, 7, 4, 5, 5, 5, 5, 5, 4, 2]

let fiveIndex = myArray.lastIndexOf(5)
console.log(fiveIndex)


myArray.sort()
console.log(myArray)