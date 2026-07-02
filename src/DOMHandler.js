import { createTodo } from './dataHandler.js'

const modal = document.getElementById('todoModal');
const btn = document.getElementById('addBtn');
const span = document.getElementsByClassName('close')[0];
const todoForm = document.getElementById('todoForm')

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

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(todoForm)
    const data = Object.fromEntries(formData.entries())
    createTodo(data)
    todoForm.reset()
    modal.style.display = 'none'
})