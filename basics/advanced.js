let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked.')
} else if (userRole === 'admin') {
    console.log('Welcome admin!')
} else {
    console.log('Welcome!')
}

//Challenge
let temp = 32;

// It is freezing outside!
//It is hot outside!
//It is pretty nice.

if (temp < 33) {
    console.log('It is freezing outside!')
} else if (temp > 85) {
    console.log('It is hot outside!')
} else {
    console.log('It is pretty nice.')
}
