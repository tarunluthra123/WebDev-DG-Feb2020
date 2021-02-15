const boxes = document.getElementsByClassName('box')
const btn = document.getElementById('btn')
const alsoBtn = document.getElementById('alsoBtn')

const div1 = document.querySelector('.box')
console.log(div1)

const anotherBtn = document.querySelector('#btn')
console.log(anotherBtn)


const alsoBoxes = document.querySelectorAll('.box')
console.log(alsoBoxes)
console.log('Second element = ', alsoBoxes[1])

btn.style.backgroundColor = 'lightgreen'

btn.onclick = function () {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText += ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ad reiciendis quos incidunt omnis numquam at voluptates, iusto fugit tempora magnam fuga harum veniam totam libero amet provident? Et, molestiae?`
    }
}


alsoBtn.onclick = function () {
    for (const box of boxes) {
        box.style.backgroundColor = 'aqua'
        box.style.border = '1px solid blue'
    }
}