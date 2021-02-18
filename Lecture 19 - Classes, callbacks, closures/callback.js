function timer(callback) {
    setTimeout(() => {
        console.log('This is going to print after 3 seconds')
        callback()
    }, 3000)
}

function hello() {
    console.log('Hello there')
}

timer(hello)