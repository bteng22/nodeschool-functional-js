var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger

// slice from previous modules allows the object arugments to be used as an Array. logger(namespace) will return a function that will console.log the namespaces prepended to the array of strings given from arguments.

// HOW IT'S CALLED

// var strings = [ 'Mollit', 'voluptate', 'deserunt', 'excepteur', 'sunt.' ]
// var info = logger('INFO:')
// info(strings)
// The array of strings will be concatenated to the namespace word.

// console and log are host objects. Their behavior is implementation dependent, and to a large degree are not required to implement the semantics of ECMAScript.

// FWIW, your jsBin fails in Chrome as well unless you change it to...

// console.log.apply(console, ['message']);
// but that seems to be that log simply anticipates a calling context of console.