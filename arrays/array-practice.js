// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// for (let count = 0; count < todos.length; count++  ) {
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}. ${todo}`)
// }


const array1 = [1,10,15,20,25] // 71
const array2 = [2,12,24,30,40] // 108
let sum1 = 0
let sum2 = 0

let arraySums = function () {
    for (let count = 0; count < array1.length; count++) {
    sum1 = sum1 + array1[count]
    // if (count = array1.length) {
    //     console.log(sum1)
    // }
}
// console.log(sum1)

for (let count = 0; count < array2.length; count++) {
    sum2 = sum2 + array2[count]
    // if (count = array1.length) {
    //     console.log(sum1)
    // }
}
// console.log(sum2)

return sum1 + sum2

}

console.log(arraySums())


