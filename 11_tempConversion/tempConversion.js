function safe_return(result){
	let index = result.toString().indexOf('.');
	if (index <= -1)
		return (result);
	return parseFloat(result.toFixed(1));
}

const convertToCelsius = function(fahrenheit) {
	return (safe_return(((fahrenheit - 32) * (5/9))));
};

const convertToFahrenheit = function(celsius) {
	return safe_return((celsius * (9/5) + 32));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
