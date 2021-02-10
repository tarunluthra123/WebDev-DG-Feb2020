// let s = 'Hello World'
// let s2 = "Hello there"
// let s3 = `
//     This is a very long paragraph
//     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// `


// console.log(s, s2, s3)




let s = 'Hello World'
console.log(s.length)
console.log(s.indexOf('l'))

console.log(s.includes('r'))
console.log(s.includes('x'))

console.log(s.toLowerCase())
console.log(s.toUpperCase())


let apple = "Apple"
console.log(apple.slice(2, 4))
console.log(apple.slice(1, -1))


console.log(apple.substring(2, 4))


console.log(apple.substr(0, 3))

let hello = 'HelloWorld'
console.log(hello.substr(2, 5))
console.log(hello.substring(2, 5))

let h = 'Hello'
let w = 'World'
let space = '123'

console.log(h + space + w)
