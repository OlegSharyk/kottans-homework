function getDependencies(tree, dependencies) {
	var dependencies = dependencies || {};

	if (typeof tree['dependencies'] === 'object') {
		for (var prop in tree['dependencies']){
			dependencies[prop+'@'+tree['dependencies'][prop].version]= null;
			getDependencies(tree['dependencies'][prop], dependencies)
		}
	}
	return Object.keys(dependencies).sort();
}


module.exports = getDependencies;