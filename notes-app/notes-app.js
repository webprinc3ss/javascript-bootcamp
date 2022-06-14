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

const filters = {
    searchText: ''
}

//Takes all of notes and filters and figurs out which one matches the filters
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //Clear div - wipes previously rendered notes
    document.querySelector('#notes').innerHTML = ''


    //Add just the filtered notes in
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//Call function once right away to make sure something shows up
renderNotes(notes, filters)

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

//filter search in real time with input.  Calls function when user interacts with page.
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
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