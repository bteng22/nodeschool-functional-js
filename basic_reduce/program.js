function countWords(inputWords) {
  return inputWords.reduce(function(obj,word) {
    obj.hasOwnProperty(word) ? ++obj[word] : obj[word]=1
    return objl;;
  }, {});
}

module.exports = countWords

// countWords is invoked with a list of inputWords (ex. ['','','',...] ) that reduce is called upon in order to iterate through each of the strings and add them to an index object/dictionary that is initialized as the second argument of reduce. The callback is mainly responsible for checking the obj if it has the property and either initializing it or incrementin g it.

// CANNOT return obj.hasOwnProperty(word ? ++obj[word] : obj[word]=1 line since this would return not an object but simply obj[word] which would be 1 in this case.
// Must return obj on separate line each time

// Official Solution

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }

// module.exports = countWords