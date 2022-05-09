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

let getTemp = function (farenheit) {
    let celcius = (farenheit - 32) / 1.8
    let kelvin = celcius + 273.15
    return {
    f: farenheit,
    c: celcius,
    k: kelvin
    }
}

let temp = getTemp(100)
console.log (`Its ${temp.f.toFixed(0)} degrees farenheit, ${temp.c.toFixed(0)} degrees celcius, or ${temp.k.toFixed(0)} degrees kelvin outside!`)