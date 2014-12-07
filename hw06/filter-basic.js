//function getShortMessages(messages){
//	function isBigEnough(item) {
//		return item.message.length < 50
//	}
//	var mes = messages.filter(isBigEnough).map(function(item) {
//		return item.message
//	});
//	return mes;
//}

function getShortMessages(messages){
	function isBigEnough(element) {
		if (element.length() < 50) {
			return element;
		}
	}
	var new = messages.filter(isBigEnough);
	return new;
}

module.exports = getShortMessages;