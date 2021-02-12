const inputBox = document.getElementById('inputBox')
const btn = document.getElementById('btn')
const list = document.getElementById('list')

btn.onclick = function () {
    const content = inputBox.value

    const listItem = document.createElement('li')
    listItem.innerText = content

    list.append(listItem)
}