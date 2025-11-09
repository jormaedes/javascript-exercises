const removeFromArray = function(values, ...searcheds) {
	let indexOfElement;
	for(const seached of searcheds){
		indexOfElement = 0;
		while(indexOfElement != -1){
			indexOfElement = values.indexOf(seached);
			if (indexOfElement <= -1) continue;
			values.splice(indexOfElement, 1);
		}
	}
	return (values);
};

// Do not edit below this line
module.exports = removeFromArray;
