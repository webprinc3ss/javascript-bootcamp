const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes.pop())
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note')

console.log(notes.length)
console.log(notes)
//console.log(notes[notes.length-1]) //Grab last item from list