class Project {
    constructor(title, todos){
        this.title = title
        this.todos = []
    }

    addTodo(todo) {
        this.todos.push(todo)
    }
}

class ToDo {
    constructor(project, title, description, dueDate, priority) {
        this.project = project
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    setTitle(title) {
        this.title = title
    }

    setDescription(description) {
        this.description = description
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate
    }

    setPriority(priority) {
        this.priority = priority
    }
}

export { Project, ToDo }