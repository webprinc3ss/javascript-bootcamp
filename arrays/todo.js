

const todos = ['Let the dogs out.', 'Work out.', 'Pick up Rey.', 'Food shop.', 'Cook dinner.']

//Delete the third item
//Add a new item onto the end
todos.splice(4,4,'Bake a Cake')

//Remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos!`)
console.log(todos)
// console.log(`Todo 1: ${todos[0]}`)
// console.log(`Todo 5: ${todos[4]}`)
