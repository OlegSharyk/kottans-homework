function repeat(operation, num) {
	// modify this so it can be interrupted
	if (num <= 0) return
	operation();

	if (num % 10 === 0) {
		setTimeout(function() {
			repeat(operation, --num)
		},1500)
	} else {
		repeat(operation, --num)
	}
}

module.exports = repeat;