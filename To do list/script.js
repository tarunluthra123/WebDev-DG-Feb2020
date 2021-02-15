const inputBox = document.getElementById('inputBox')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')


addTaskBtn.onclick = function () {
    const newTask = inputBox.value

    inputBox.value = ''

    const listItem = document.createElement('li')
    const crossBtn = document.createElement('button')

    crossBtn.innerText = 'X'

    crossBtn.onclick = function () {
        listItem.remove()
    }

    listItem.append(newTask)
    listItem.append(crossBtn)

    taskList.append(listItem)
}