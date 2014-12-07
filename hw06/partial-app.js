var slice = Array.prototype.slice;

function logger(namespace) {
	return function(){
		console.log.apply(undefined,[namespace].concat(slice.call(arguments)))
	}
}

module.exports = logger;