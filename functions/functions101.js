//function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value, otherValue)

// Challenge Area

    // convertFahrenheittoCelcius
let convert = function (num) {
    let result = (num - 32) / 1.8
    return result
}
// Call a couple of times (32-0) (68-20)
let c = convert(32)
let c2 = convert(68)

// Print the converted values
console.log(c, c2)


