const btnTask = document.querySelector('.btn-task')
const inputTask = document.querySelector('.input-task')
const tasks = document.querySelector('.tasks')

btnTask.addEventListener('click', () => {
  if(!inputTask.value) return
  createTask()
})

document.addEventListener('click', (e) => {
  const target = e.target
  if(!target.classList.contains('delete')) return
  // console.log()
  deleteButton(target)
})

function createLi() {
  const li = document.createElement('li')
  return li
}

function createTask(input = inputTask.value) {
  const li = createLi()
  li.innerText += input
  tasks.appendChild(li)
  clearInput()
  createDeleteButton(li)
  saveTask()
}

function clearInput() {
  inputTask.value = ''
  inputTask.focus()
}

function createDeleteButton(li) {
  li.innerText += ' '
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Apagar'
  deleteButton.setAttribute('class', 'delete')
  deleteButton.setAttribute('title', 'Apagar esta tarefa')
  li.appendChild(deleteButton)
}

function deleteButton(el) {
  el.parentNode.remove()
  saveTask()
}

function saveTask() {
  const liTask = tasks.querySelectorAll('li')
  const taskList = []

  for (const tasks of liTask) {
    let taskText = tasks.innerText
    taskText = taskText.replace(/apagar$/i, '').trim()
    
    taskList.push(taskText)
  }

  const tasksJson = JSON.stringify(taskList)
  localStorage.setItem('tasks', tasksJson)
}

function loadTasks() {
  const tasks = localStorage.getItem('tasks')
  const taskList = JSON.parse(tasks)

  for (const task of taskList) {
    createTask(task)
  }
}
loadTasks()