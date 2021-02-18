// Constructor function
function Superhero(name, age, villains) {
    this.name = name;
    this.age = age;
    this.villains = villains;
    // console.log("this = ",this)
}

// this refers to the calling object

Superhero('Spiderman', 25, ['Kingpin', 'Green Goblin'])
// Calling the superhero function from global. this = global


let batman = new Superhero('Bruce Wayne', 30, ['Joker', 'Penguin', 'Deathstroke'])
console.log(batman)

// console.log(Superhero)

let superman = new Superhero('Clark Kent', 28, ['Lex Luthor', 'Brainiac'])
console.log(superman)



// console.log(name)
// console.log(age)
// console.log(villains)


let person = {
    name: 'Peter Parker',
    speak: function () {
                console.log('Hello. My name is ' + this.name)
            }
}

person.speak()