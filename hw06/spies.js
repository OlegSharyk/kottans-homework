function spy(target, method) {
	var func = target[method];
	var result = {
		count: 0
	};

	target[method] = function() {
		result.count++
		return func.apply(target, arguments)
	};

	return result
}

module.exports = spy