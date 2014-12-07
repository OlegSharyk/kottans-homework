function repeat(operation, num){
	if (typeof(num) === "number") {
		for(var i = 0; i < num; i++){
			operation();
		}
	}
}

module.exports = repeat;