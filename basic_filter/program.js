module.exports = function getShortMessages(messages) {
  return messages.map(function(obj) {
    return obj.message
  }).filter(isLessThan50Chars)
}

function isLessThan50Chars(string) {
  return string.length < 50
}

// Official Solution

// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }

// Notes:

// Better to filter (as shown in official solution)
// first to yield a smaller array
// to iterate through and return wth map...
// More efficient solution.