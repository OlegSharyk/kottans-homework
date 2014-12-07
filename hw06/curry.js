function curryN(fn, n){
    return (function curry(fn, remainArgs, argsArr){
        if(!remainArgs)
            return fn.apply(this, argsArr);

        return function(arg){
            return curry(fn, remainArgs-1, argsArr.concat(arg));
        }
    })(fn, n || fn.length, []);
}

module.exports = curryN;