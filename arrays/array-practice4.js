//https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/

// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
 
let array1  = [4, 6, 7];
let array2   = [8, 1, 9];
let newArr = []

for (i = 0; i < array1.length; i++) {
newArr.push(array1[i] + array2[i])
}
console.log (newArr)
// Example output: 
// [12, 7, 16]