function formalGreeting() {
    console.log("How are you?")
}

function casualGreeting() {
    console.log('Whats up ?')
}

// greet function is a higher order function because it accepts another function as an argument
function greet(type, greetFormal, greetCasual) {
    if (type == 'formal') {
        greetFormal()
    }
    else {
        greetCasual()
    }
}

greet('formal', formalGreeting ,casualGreeting)
greet('informal', formalGreeting, casualGreeting)
