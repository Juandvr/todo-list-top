import { createTodo, createProject, reviveProjects, removeTodo, projects } from './dataHandler.js'

const projectsDiv = document.getElementById('projects')
const projectModal = document.getElementById('projectModal')
const newProjectBtn = document.getElementById('newProject')
const projectForm = document.getElementById('projectForm')
const todoModal = document.getElementById('todoModal')
const newTaskBtn = document.getElementById('newTask')
const closeBtn = document.getElementsByClassName('close')
const todoForm = document.getElementById('todoForm')
const todosDiv = document.getElementById('todos')

let activeProject

newTaskBtn.onclick = () => {
  todoModal.style.display = 'block'
}

newProjectBtn.onclick = () => {
  projectModal.style.display = 'block'
}

closeBtn.onclick = () => {
  todoModal.style.display, projectModal.style.display = 'none'
}

window.onclick = event => {
  if (event.target == projectModal || event.target == todoModal ) {
    todoModal.style.display, projectModal.style.display = 'none'
  }
}

window.onload = () => {
  reviveProjects()
  activeProject = projects[0]
  displayProjects()
  displayTodos()
}

projectForm.onsubmit = event => {
  event.preventDefault()
  const formData = new FormData(projectForm)
  const data = Object.fromEntries(formData.entries())
  createProject(data)
  projectForm.reset()
  projectModal.style.display = 'none'
  displayProjects()
}

todoForm.onsubmit = event => {
    event.preventDefault()
    const formData = new FormData(todoForm)
    const data = Object.fromEntries(formData.entries())
    createTodo(data)
    todoForm.reset()
    todoModal.style.display = 'none'
    displayTodos()
}

function displayProjects() {
  projectsDiv.replaceChildren()
  projects.forEach(project => {
    const span = document.createElement('span')
    span.textContent = project.title
    span.onclick = () => {
      activeProject = project
      displayTodos()
    }
    projectsDiv.append(span)
  })
}

function displayTodos() {
  todosDiv.replaceChildren()
  activeProject.todos.forEach(todo => {
    const div = document.createElement('div')
    div.className = 'todoDiv'

    const title = document.createElement('p')
    const desc = document.createElement('p')
    const dateLabel = document.createElement('label')
    const dueDate = document.createElement('p')
    const priorLabel = document.createElement('label')
    const prior = document.createElement('p')
    const removeBtn = document.createElement('button')

    removeBtn.textContent = 'remove'
    removeBtn.onclick = () => {
      removeTodo(todo)
      displayTodos()
    }

    dateLabel.textContent = 'Due Date:'
    priorLabel.textContent = 'Priority:'

    title.textContent = todo.title
    desc.textContent = todo.description
    dueDate.textContent = todo.dueDate
    prior.textContent = todo.priority

    div.append(title, desc, dateLabel, dueDate, priorLabel, prior, removeBtn)
    todosDiv.append(div)
  })
}

export { activeProject }