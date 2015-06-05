function reduce(arr,fn,initial){
  return arr.length < 1 ? initial : reduce(arr.slice(1),fn,fn(initial,arr[0]))
}

module.exports = reduce


// function reduce(arr, fn, initial){
//   if (arr.length){ //we aren't at the end of the array, do another!
//     initial = fn(initial, arr[0]); //get our value
//     arr.splice(0,1); //remove the value we calculated, in lieu of keeping track
//     return reduce(arr, fn, initial); //run again
//   } else {
//     return initial; //we are done, return our output
//   }
// }
// module.exports = reduce;

// Official Solution
// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }

// module.exports = reduce