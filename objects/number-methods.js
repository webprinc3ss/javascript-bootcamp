let num = 103.941

//to fixed specifies decimal places

console.log(num.toFixed(2))

//math round
console.log(Math.round(num))

//Round down to nearest integer
console.log(Math.floor(num))

//Ceiling - round up to nearest integer
console.log(Math.ceil(num))

//Math.random between 0 and .99999
let randomNum = Math.random()
console.log(randomNum)

//New range from 10-20 - Use common formula below
let min = 10
let max = 20
randomNum = Math.floor(Math.random() * (max-min + 1)) + min
console.log(randomNum)

//Challenge
    //Guessing Game
    //1-5 - true if correct, false if not correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    randomNum = Math.floor(Math.random() * (max-min + 1)) + min
    console.log (randomNum)
    return guess === randomNum 
}

console.log(makeGuess(3))