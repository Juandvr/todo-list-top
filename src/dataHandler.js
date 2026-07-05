import { Project, ToDo } from './classes.js'
import { activeProject } from './DOMHandler.js'

let projects = JSON.parse(localStorage.getItem('projects')) || [new Project('default')]
let todos = JSON.parse(localStorage.getItem('todos')) || []

function createTodo(data) {
    const newTodo = new ToDo(data.title, data.description, data.dueDate, data.priority)
    todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function createProject(data) {
    const newProject = new Project(data.title)
    projects.push(newProject)
    localStorage.setItem('projects', JSON.stringify(projects))
}

function loadTodos() {
    if (todos != []) {
        todos = todos.map(data => {
            const newTodo = new ToDo()
            return Object.assign(newTodo, data)
        }) 
    }
}

export { createTodo, createProject, loadTodos, projects, todos }