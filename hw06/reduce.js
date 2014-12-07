function countWords(inputWords) {
	return inputWords.reduce(function(wordArray, word, index, array) {
		wordArray[word] = ++wordArray[word] || 1;
		return wordArray;
	}, {});
}


module.exports = countWords;