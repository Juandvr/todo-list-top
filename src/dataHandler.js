import './classes.js'
import { ToDo } from './classes.js'

let todos = []

function createTodo(data) {
    const newTodo = new ToDo('default', data.title, data.description, data.dueDate, data.priority)

    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos)
}

export { createTodo, todos }