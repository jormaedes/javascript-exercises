const repeatString = function(word, num) {
	if (word == '') return '';
	if (num < 0) return 'ERROR';
	let result = '';
	while(num--) result += word;
	return result;
};

// Do not edit below this line
module.exports = repeatString;
