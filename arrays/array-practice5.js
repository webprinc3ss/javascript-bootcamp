// https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

let str1 = "javascript";  

for (i=0; i < str1.length; i++) {
    (i+1) % 2 == 0 ? console.log('Z') : console.log(str1.index)
    console.log (str1.i)
}

// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 