class Project {
    constructor(title){
        this.title = title
        this.todos = []
    }

    addTodo(todo) {
        this.todos.push(todo)
    }
}

class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

export { Project, ToDo }