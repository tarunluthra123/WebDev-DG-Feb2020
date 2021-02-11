let counter = 1

let id = setInterval(() => {
    console.log("Hello there", counter)
    counter++;
    if (counter >= 10) {
        clearInterval(id)
    }
}, 1000)

setInterval(() => {
    console.log('Hi')
}, 2500)
