const isSafe = function (number) {
	if (number < 0 || typeof(number) != 'number')
		return false;
	let char = number.toString();
	for(let i = 0; i < char.length; i++){
		if (char.charCodeAt(i) < 48 || char.charCodeAt(i) > 57)
			return false;
	}
	return true;
}

const sumAll = function(start, end) {
	let sum = 0;
	if (!isSafe(start) || !isSafe(end))
		return 'ERROR';
	if (end < start){
		let aux = start;
		start = end;
		end = aux;
	}
	for(let i = start; i <= end; i++)
		sum += i;
	return (sum);
};

// Do not edit below this line
module.exports = sumAll;
