let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area
    //Create function - take farenheit in - return object with all three
        // let fahrenheit = 50 0 degrees in C and 273.15K
        //let celcius = (fahrenheit - 32) / 1.8
        //let kelvin = celcius + 273.15
        //console.log('celcius: ' + celcius)
        //console.log('kelvin: ' + kelvin)

let convertTemp = function (farenheit) {

    return {
        farenheit: farenheit,
        kelvin: (farenheit + 459.67) / (5 / 9),
        celcius: (farenheit - 32) * (5 / 9)
    }
}

let temp = convertTemp(100)
console.log (`Its ${temp.farenheit.toFixed(0)} degrees farenheit, ${temp.celcius.toFixed(0)} degrees celcius, or ${temp.kelvin.toFixed(0)} degrees kelvin outside!`)