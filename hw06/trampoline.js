function repeat(operation, num) {
	if (num <= 0) return;
	operation();
	return repeat.bind(this, operation, --num)
}

function trampoline(fn) {
	while (fn && typeof fn === 'function') {
		fn = fn();
	}
	return fn;
}

module.exports = function(operation, num) {
	return trampoline(repeat(operation, num))
};