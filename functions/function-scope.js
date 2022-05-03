// Global Scope (convertFarenheittoCelcius, temp1, temp2)
    //Local scope (farenheit, celcius)
        //Local scope (isFreezing)


// convertFahrenheittoCelcius
let convertFahrenheittoCelcius = function (farenheit) {
    let celcius = (farenheit - 32) / 1.8

        if (celcius >=0) {
            let isFreezing = true
        }

    return celcius
}
// Call a couple of times (32-0) (68-20)
let temp1 = convertFahrenheittoCelcius(32)
let temp2 = convertFahrenheittoCelcius(68)

// Print the converted values
console.log(temp1, temp2)
