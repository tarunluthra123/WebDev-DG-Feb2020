const inputBox = document.getElementById('inputBox')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')


addTaskBtn.onclick = function () {
    const newTask = inputBox.value

    if (newTask.length == 0)
        return

    inputBox.value = ''

    const listItem = document.createElement('li')
    const crossBtn = document.createElement('button')
    const upBtn = document.createElement('button')
    const downBtn = document.createElement('button')
    const span = document.createElement('span')

    listItem.classList.add('task')
    crossBtn.classList.add('crossBtn')
    upBtn.classList.add('upBtn')
    downBtn.classList.add('downBtn')

    crossBtn.innerText = 'X'
    upBtn.innerText = '↑'
    downBtn.innerText = '↓'

    crossBtn.onclick = function () {
        listItem.remove()
    }

    upBtn.onclick = function () {
        taskList.insertBefore(
            listItem,
            listItem.previousElementSibling
        )
    }

    downBtn.onclick = function () {
        taskList.insertBefore(
            listItem,
            listItem.nextElementSibling.nextElementSibling
        )
    }

    listItem.append(newTask)

    span.append(crossBtn)
    span.append(upBtn)
    span.append(downBtn)

    listItem.append(span)

    taskList.append(listItem)
}