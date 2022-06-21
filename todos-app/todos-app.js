const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    let newTask = e.target.elements.newTodoText.value
    todos.push({ text: newTask, completed: false })
    renderTodos(todos, filters)
    e.target.elements.newTodoText.value = ''
})

// Listen for todo text change
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Challenge 4
// Create a form with a single input for todo text
// Setup a submit handler and cancel the default action
// Add a new item to the todos array with that text data (completed value of false)
// Rerender the application
//Clear the input field value