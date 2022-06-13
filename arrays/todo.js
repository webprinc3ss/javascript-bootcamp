//1. Convert array to Array of objects -> text, completed property (boolean)

const todos = [{
        text: 'Let the dogs out.',
        completed: false
    },
    {
        text: 'Buy food.',
        completed: true
    },
    {
        text: 'Work out.',
        completed: true
    },

    {
        text: 'Food shop.',
        completed: false
    },
    {
        text: 'Cook dinner.',
        completed: false
    }
]

//2. Create a function that works with array of objects to remove a todo by text value

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

//List of just the todos with completed value of false
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })

}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))
//Case insensitive search
//Find a match - delete it.  Delete item from array based on its index.  
// deleteTodo(todos, 'buy foods.')
// console.log(todos)