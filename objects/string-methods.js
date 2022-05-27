let myName = ' Danielle Branton '

//Length property

console.log(myName.length)

//Convert to Upper Case
//myName.toUpperCase()
console.log(myName.toUpperCase())

//Convert to Lower Case
console.log(myName.toLocaleLowerCase())

//Includes
let password = 'abc123asdljafklj098'
console.log(password.includes('password'))

//Trim
console.log(myName.trim())

//Challengage
//isValidPassword
//length is more than 8 - and it doesn't contain word 'password'

let isValidPassword = function (password) {
    //return password.length < 9 || password.includes('password') ? false
          // : true
    return password.length > 8 && !password.includes('password')

}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123@#$adsfadsf'))
console.log(isValidPassword('asdfafafasdfpassword'))