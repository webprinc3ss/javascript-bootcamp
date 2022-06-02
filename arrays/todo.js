

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

//1. The first item
//2. The second item
//3. The third item



// console.log(`Todo 1: ${todos[0]}`)
// console.log(`Todo 5: ${todos[4]}`)
