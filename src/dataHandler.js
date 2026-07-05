import './classes.js'
import { ToDo } from './classes.js'

let todos = JSON.parse(localStorage.getItem('todos')) || []

function createTodo(data) {
    const newTodo = new ToDo(data.title, data.description, data.dueDate, data.priority)
    todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos)
}

function loadTodos() {
    if (todos != []) {
        todos = todos.map(data => {
            const newTodo = new ToDo()
            return Object.assign(newTodo, data)
        }) 
    }
}

export { createTodo, loadTodos, projects, todos }