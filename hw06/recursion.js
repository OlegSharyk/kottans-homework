function reduce(arr, fn, initial) {
	var count = 0;
	(function moveNext(array){
		if (!array.length) return [];
		var start = array[0];
		initial = fn(initial,start,count++,arr);
		var tail = array.slice(1);
		moveNext(tail);
	})(arr);
	return initial;

//	for(i=0;i<arr.length;i++){
//		initial = fn(initial, arr[i], i, arr);
//	}
//	return initial;
}


module.exports = reduce;