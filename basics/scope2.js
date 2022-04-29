//Global ()
    //Local ()
        //local
    //local

    //let name = 'Andrew'

if (true) {
    //let name = 'Mike'  //variable shadowing - uses the value in its scope, shadowing over the parent's value
    if (true) {
        let name = 'jen'
        name='Jen' //created a new variable up above - LEAKED GLOBAL
        console.log(name)
    }
}

if (true) {
console.log(name) 
}