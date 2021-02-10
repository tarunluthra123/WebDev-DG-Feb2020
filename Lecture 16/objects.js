const spidey = {
    name: {
        first: 'Peter',
        last: 'Parker'
    },
    age: 25,
    villains: ['Vulture', 'Venom', 'Doc Ock'],
    fight:  function () {
                console.log("Spiderman is fighting", this.villains[1])
            }
}

var batman = {
    name: 'Bruce Wayne',
    age: 30,
    villains: ['Joker','Penguin']
}

console.log(spidey)

console.log(spidey.name.first)
console.log(spidey.name.last)
console.log(spidey.age)

console.log(spidey.villains)

console.log(spidey['name'])
console.log(spidey['age'])

console.log(spidey['villains'])


spidey.age = 20
console.log(spidey)

spidey.girlfriend = 'Mary Jane Watson'
console.log(spidey)

spidey.fight()

delete spidey.villains;
console.log(spidey)





let superheroes = [
    spidey, batman
]


// console.log(superheroes)