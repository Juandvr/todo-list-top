import './classes.js'
import { ToDo } from './classes.js'

const todos = []

function createTodo(data) {
    const newTodo = new ToDo('default', data.title, data.description, data.dueDate, data.priority)
    todos.push(newTodo)
    console.log(todos)
}

export { createTodo }