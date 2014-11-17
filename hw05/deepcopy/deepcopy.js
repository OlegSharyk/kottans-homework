// Your code goes here
function deepCopy(obj) {
	if (obj === null || typeof(obj) !== 'object') {
		return obj;
	};

	var temp = obj.constructor();

	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			temp[key] = deepCopy(obj[key]);
		}
	}
	return temp;
}

