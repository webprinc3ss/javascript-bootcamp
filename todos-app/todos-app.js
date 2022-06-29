//1. Delete Dummy data
//2. Read and parse data when app starts up
//3. Stringify and write the data when data is added

let todos = []
const filters = {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')

if (todosJSON != null) {
    todos = JSON.parse(todosJSON)

}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
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
        if (todo.text.length > 0) {
            p.textContent = todo.text
        } else {
            p.textContent = 'Unnamed Todo'
        }

        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)


// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    let newTask = e.target.elements.newTodoText.value
    todos.push({ text: newTask, completed: false })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.newTodoText.value = ''
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})


