//function duckCount() {
//	return Array.prototype.slice.call(arguments).filter(function(element){
//		return element.hasOwnProperty('quack');
//	}).length;
//}

function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(element){
		return Object.prototype.hasOwnProperty.call(element,'quack');
	}).length;
}


module.exports = duckCount;