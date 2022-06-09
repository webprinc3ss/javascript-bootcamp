// const todos = ['Let the dogs out.', 'Work out.', 'Buy food', 'Food shop.', 'Cook dinner.']
//1. Convert array to Array of objects -> text, completed property (boolean)

const todos = [{
        text: 'Let the dogs out.',
        completed: false
    },
    {
        text: 'Work out.',
        completed: false
    },
    {
        text: 'Buy food.',
        completed: false
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

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }



const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {

        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    return todos.splice(index, 1)
}

//Case insensitive search
//Find a match - delete it.  Delete item from array based on its index.  
deleteTodo(todos, 'buy food.')
console.log(todos)