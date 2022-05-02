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
let convertFahrenheittoCelcius = function (farenheit) {
    let celcius = (farenheit - 32) / 1.8
    return celcius
}
// Call a couple of times (32-0) (68-20)
let temp1 = convertFahrenheittoCelcius(32)
let temp2 = convertFahrenheittoCelcius(68)

// Print the converted values
console.log(temp1, temp2)


