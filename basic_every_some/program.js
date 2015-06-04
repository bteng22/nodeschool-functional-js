function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser){
      return goodUsers.some(function(goodUser) {
        return submittedUser.id === goodUser.id
      });
    });
  };
}

module.exports = checkUsersValid

// EVERY submittedUser must match atleast SOME of the goodUsers
// Must return for submittedUser.id === goodUser.id... THIS IS NOT RUBY
// WHERE LAST STATEMENT IS RETURNED

// Official Solution

// module.exports = function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return goodUsers.some(function(goodUser) {
//         return goodUser.id === submittedUser.id
//       })
//     })
//   }
// }