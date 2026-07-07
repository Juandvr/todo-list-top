import { Project, ToDo } from './classes.js'
import { activeProject } from './DOMHandler.js'

let projects = JSON.parse(localStorage.getItem('projects')) || [new Project('default')]

function createTodo(data) {
    const newTodo = new ToDo(data.title, data.description, data.dueDate, data.priority)
    activeProject.addTodo(newTodo)
    localStorage.setItem('projects', JSON.stringify(projects))
}

function createProject(data) {
    const newProject = new Project(data.title)
    projects.push(newProject)
    localStorage.setItem('projects', JSON.stringify(projects))
}

function reviveProjects() {
    projects = projects.map(data => {
        const revProject = new Project()
        return Object.assign(revProject, data)
    })
}

export { createTodo, createProject, reviveProjects, projects }