function duckCount() {
  var args = Array.prototype.slice.call(arguments);

  var filtered = args.filter(function(arg) {
    console.log(arg)
    if(Object.getPrototypeOf(arg) === null) {
      return Object.prototype.hasOwnProperty.call(arg, 'quack');
    } else {
      return 'quack' in arg
    }
  });
  return filtered.length;
}

module.exports = duckCount

// Implemented solution is unstable. The in operator returns true for properties in the prototype chain. Will occasionally recieve
// submission: 'Matched 9 of 6 valid objects from 11 total.'
// solution:   'Matched 6 of 6 valid objects from 11 total.'

// Official Solution

// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function(obj) {
//     return Object.prototype.hasOwnProperty.call(obj, 'quack')
//   }).length
// }

// module.exports = duckCount

// Originally I thought you could only use
// Object.prototype.hasOwnProperty.call(obj, property) when the object DOESNT inherit from Object.prototype. However, it can be used in both cases and detects if the object in question 'has' a property defined on ITSELF. (not inherited from its prototype chain).


