function hello() {
    console.log("Hello")
    ask()
    console.log('After ask')
}

function ask() {
    console.log("How are you ?")
    good()
}

function good() {
    console.log("I am well and good.")
}

hello()