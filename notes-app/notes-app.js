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

//DOM - Document Object Model

//Query and remove
// const p = document.querySelector('p') //Matches first match it finds.
// p.remove()

//Query all and remove

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
    // console.log(p.textContent)
    //p.remove()
})

//Add an element below - 3 steps
//1. Add a new element
const newParagraph = document.createElement('p')

//2. Give meaningful content
newParagraph.textContent = 'This is a new element from JS.'

//3. Pick a place to put it and put it there.
document.querySelector('body').appendChild(newParagraph)