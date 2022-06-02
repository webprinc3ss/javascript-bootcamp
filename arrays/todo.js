

const todos = ['Let the dogs out.', 'Work out.', 'Pick up Rey.', 'Food shop.', 'Cook dinner.']

//Delete the third item
//Add a new item onto the end
todos.splice(4,4,'Bake a Cake')

//Remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos!`)
todos.forEach(
    function(item,index){
        console.log(index+1 + '. ' + item)
    }
)

for (let count = 0; count < todos.length; count++  ) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}



// console.log(`Todo 1: ${todos[0]}`)
// console.log(`Todo 5: ${todos[4]}`)
