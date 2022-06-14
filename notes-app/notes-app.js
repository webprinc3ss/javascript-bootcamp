const notes = [{
        title: 'my next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better.'

    }
]

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
    // console.log('Click')
    // console.log(e)
})

document.querySelector('#remove-all').addEventListener('click', function () {
    console.log('Delete all notes')

    document.querySelectorAll('.note').forEach(function (note) {
        console.log('Delete all notes')
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

// --Single --
// p
// #replace
// .item

//Multiple
// p# order
// button.inventory
// h1# title.application
// h1.application# title



// document.querySelectorAll('#create-note')[1].addEventListener('click', function () {
//     console.log('Delete all notes')
// })



//DOM - Document Object Model

//Query and remove
// const p = document.querySelector('p') //Matches first match it finds.
// p.remove()

//Query all and remove

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '*****'
// })

//Add an element below - 3 steps
//1. Add a new element
// const newParagraph = document.createElement('p')

//2. Give meaningful content
// newParagraph.textContent = 'This is a new element from JS.'

//3. Pick a place to put it and put it there.
// document.querySelector('body').appendChild(newParagraph)