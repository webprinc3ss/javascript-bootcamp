//Read Existing Notes from Local Storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Save the Notes to Local Storage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Generate DOM structure for a Note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('p')

    if (note.title.length > 0) {
        noteEl.textContent = note.title
    } else {
        noteEl.textContent = 'Unnamed Note'
    }
    return noteEl
}

//Render Notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //Clear div - wipes previously rendered notes
    document.querySelector('#notes').innerHTML = ''

    //Add just the filtered notes in
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

