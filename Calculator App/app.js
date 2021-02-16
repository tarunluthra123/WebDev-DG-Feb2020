const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')
const output = document.getElementById('output')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const backspace = document.getElementById('backspace')

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    num.onclick = function () {
        output.innerText += num.value
    }
}

for (let i = 0; i < operators.length; i++) {
    const op = operators[i]
    op.onclick = function () {
        const lastChar = output.innerText[output.innerText.length - 1]
        if ("+/*%-".includes(lastChar) && op.value != '-')
            return
        output.innerText += op.value
    }
}

equal.onclick = function () {
    const expression = output.innerText
    const evaluatedAnswer = eval(expression)
    output.innerText = evaluatedAnswer
}

clear.onclick = function () {
    output.innerText = ""
}

backspace.onclick = function () {
    const expression = output.innerText
    const newExpression = expression.slice(0, -1)
    // = expression.slice(0, expression.length - 1) = expression.substring(0, expression.length - 1)
    output.innerText = newExpression
}