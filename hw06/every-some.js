function checkUsersValid(goodUsers){
	return function(submittedUsers){
		function isSomeValid(submittedUser) {
			return goodUsers.some(function (goodUser){
				return submittedUser.id === goodUser.id;
			});
		}

		return submittedUsers.every(isSomeValid)
	}
}

module.exports = checkUsersValid;