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

//Challenge 2
//print summary "You have 2 todos left." (p element)
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const totalTodos = document.createElement('h2')
totalTodos.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(totalTodos)

//Add a p for each todo above - use text value for each object
todos.forEach(function (todo) {
    let p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

const todo = document.createElement('p')


//Challenge 1
// const paragraphs = document.querySelectorAll('p')
// // console.log(paragraphs)

// paragraphs.forEach(function (p) {
//     if (p.textContent.includes("the")) {
//         p.remove()
//     }
// })