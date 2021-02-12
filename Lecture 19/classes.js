class Superhero {
    constructor(name, age, villains) {
        this.name = name;
        this.age = age;
        this.villains = villains;
    }

    speak(dialogue) {
        console.log(dialogue)
    }

    hello() {
        console.log('Hello. I am a Superhero.')
    }
}

// let batman = new Superhero('Bruce Wayne', 30, ['Joker', 'Penguin', 'Deathstroke'])
// console.log(batman)

// batman.speak('You either die a hero or live long enough to see yourself become the villain')


// let spidey = new Superhero('Peter Parker', 20, ['Kingpin', 'Green Goblin'])
// console.log(spidey)

class Avenger extends Superhero {
    constructor(name, age, villains, species) {
        super(name, age, villains)
        // It called the constructor function of the parent class
        // If you want to call the constructor of your superclass, then this super statement should be the first statement in your constructor.
        this.species = species
        super.hello()
        this.hello()
    }

    hello() {
        console.log('Hello. I am an Avenger.')
    }
}


let ironman = new Avenger('Tony Stark', 40, ['Iron Monger'], "Human")
console.log(ironman)

ironman.speak("I am Iron Man!")
ironman.hello()

