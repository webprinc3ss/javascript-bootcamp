let todos = getSavedTodos()
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)


// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    let newTask = e.target.elements.newTodoText.value
    todos.push({ text: newTask, completed: false })
    saveTodos(todos)
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