function loadUsers (usersIds, load, done){
	var users = [];
	var count = 0;
	usersIds.forEach(function(userId, index){
		load(userId, function(user){
			users[index] = user;
			count++;
			if (count >= usersIds.length) {
			 done(users);
			}
		})
	});
}

module.exports = loadUsers;