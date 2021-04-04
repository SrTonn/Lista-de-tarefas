const btnTask = document.querySelector('.btn-task')
const inputTask = document.querySelector('.input-task')
const tasks = document.querySelector('.tasks')

function createLi() {
  tasks.innerHTML += `<li>${inputTask.value}</li>`
  inputTask.value = ''
  inputTask.focus()
}

btnTask.addEventListener('click', () => {
  if(!inputTask.value) return
  createLi()
})