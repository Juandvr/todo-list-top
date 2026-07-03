import { createTodo } from './dataHandler.js'

const modal = document.getElementById('todoModal');
const btn = document.getElementById('addBtn');
const span = document.getElementsByClassName('close')[0];
const todoForm = document.getElementById('todoForm')
const todosDiv = document.getElementById('todos')

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

window.onload = () => {
  displayTodos()
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(todoForm)
    const data = Object.fromEntries(formData.entries())
    createTodo(data)
    todoForm.reset()
    modal.style.display = 'none'
    displayTodos()
})

function displayTodos() {
  const todos = JSON.parse(localStorage.getItem('todos'))

  todos.forEach(todo => {
    const div = document.createElement('div')

    const title = document.createElement('p')
    const desc = document.createElement('p')
    const dueDate = document.createElement('p')
    const prior = document.createElement('p')

    title.textContent = todo.title
    desc.textContent = todo.description
    dueDate.textContent = todo.dueDate
    prior.textContent = todo.priority

    div.append(title, desc, dueDate, prior)
    todosDiv.append(div)
  })
}