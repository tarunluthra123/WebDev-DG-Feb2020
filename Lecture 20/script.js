let myDiv = document.getElementById('myDiv')
var inputBox = document.getElementById('inputBox')
const btn = document.getElementById('btn')
const para = document.getElementById('para')
const colorInput = document.getElementById('colorInput')
const colorBtn = document.getElementById('colorBtn')

myDiv.innerText = 'ABCDEF'

// myDiv.style = "font-size: 50px"
myDiv.style.fontSize = '70px'

// myDiv.style = "color: blue; font-size:70px"
myDiv.style.color = 'blue'

let counter = 1
btn.onclick = function () {
    const value = inputBox.value
    // console.log(value)
    myDiv.innerText = value

    para.innerText = 'This is a paragraph'
}

colorBtn.onclick = function () {
    const chosenColor = colorInput.value

    alert("You have picked the color")

    myDiv.style.backgroundColor = chosenColor
}