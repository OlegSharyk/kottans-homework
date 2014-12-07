module.exports = function arrayMap(arr, fn){
	return arr.reduce(function(agregator, currentValue, index, array) {
        return agregator.concat(fn(currentValue));
	}, []);
};