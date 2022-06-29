let notes = [{
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

// const user = {
//     name: 'Danielle',
//     age: 53
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)

// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)

//Check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON != null) {
    notes = JSON.parse(notesJSON)
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
        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed Note'
        }

        document.querySelector('#notes').appendChild(noteEl)
    })
}

//Call function once right away to make sure something shows up
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
    // e.target.textContent = 'The button was clicked'
    // console.log('Click')
    // console.log(e)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#forFun").addEventListener('change', function (e) {
    console.log(e.target.checked)
})

document.querySelector("#filter-by").addEventListener('change', function (e) {

    console.log(e.target.value)


})

var cookies = ['Oatmeal', 'Chocolate Chip', 'Peanut Butter', 'Double Chocolate', 'M&M']

// //For Loop
// for (var i = 0; i < cookies.length; i++) {
//     console.log('The cookie is ' + cookies[i] + '<br>')
// }

//For Each loop
cookies.forEach(function (cookie) {
    console.log('The cookie is ' + cookie + '<br>')
});