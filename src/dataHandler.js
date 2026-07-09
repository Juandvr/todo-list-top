import { Project, ToDo } from './classes.js'
import { activeProject, displayProjects, displayTodos } from './DOMHandler.js'

let projects

function createProject(data) {
    const newProject = new Project(data.title)
    projects.push(newProject)
    localStorage.setItem('projects', JSON.stringify(projects))
}

function reviveProjects() {
    projects = JSON.parse(localStorage.getItem('projects')) || [new Project('default')]

    projects = projects.map(data => {
        const revProject = new Project()
        return Object.assign(revProject, data)
    })
}

function createTodo(data) {
    const newTodo = new ToDo(data.title, data.description, data.dueDate, data.priority)
    activeProject.addTodo(newTodo)
    localStorage.setItem('projects', JSON.stringify(projects))
}

function removeTodo(todo) {
    activeProject.removeTodo(todo)
    localStorage.setItem('projects', JSON.stringify(projects))
}

function removeProject(project) {
    const index = projects.indexOf(project)

    if (index > -1) {
        projects.splice(index, 1)
    }

    if (projects.length === 0) {
        projects = [new Project('default')]
    }

    localStorage.setItem('projects', JSON.stringify(projects))

    displayProjects()
    displayTodos()
}

export { createTodo, createProject, reviveProjects, removeTodo, removeProject, projects }