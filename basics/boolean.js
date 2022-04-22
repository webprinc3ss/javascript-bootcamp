// === is equality operator
// !== is NOT equal operator
// >  operator
// < operator
// >=
// >=
let temp = 180
let isFreezing = temp <= 32

if (isFreezing) {
    console.log ('It is freezing outside!')
}

if (temp >= 110) {
    console.log ('It is way to hot outside!')
    console.log('Testing123')
}

console.log(isFreezing)


//Challenge

//Create age variable set to your age
let age = 53
//Calculate is child - if they are 7 or under
let isChild = age <= 7
//Calculate is senior - if they are 65 or older
let isSenior = age >= 65
//Console.log is child value
console.log ('isChild: ' + isChild)
//Console.log is senior value
console.log ('isSenior: ' + isSenior)


//Challenge 2
// If 7 or under print message bout child pricing
if (isChild){
    console.log('You get the child discount!')
}
//If 65 or older print message about senior pricing
if (isSenior) {
    console.log ('You get the senior discount!')
}

