//Multiple arguments

let add = function (a, b, c) {
    return a + b + c
}
let result = add (10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' ' + '- Score: ' + score
    return `Name: ${name} - Score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge Area
//total, tipPercent .2
//A 25% tip on $40 is $10

let getTip = function (total, tipPercent = .18){
return total * tipPercent
}

let tip = getTip(50)
tipDecimal = tip.toFixed(2)
console.log('Tip: $' + tipDecimal)

//Template strings
//let name = 'Vikram'
//age = 12
//console.log(`Hey my name is ${name}! I am ${age} years old.`)


//Challenge
console.log(`Tip: $${tipDecimal}`)
    