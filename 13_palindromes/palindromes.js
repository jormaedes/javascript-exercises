const palindromes = function (word) {
	word = word.toLowerCase();
	word = word.replaceAll(' ', '').replaceAll('.', '').replaceAll(',', '').replaceAll('!', '');
	let reverseWord = '';
	for(let i = word.length-1; i > -1; i--)
		reverseWord += word[i];
	return (reverseWord == word);
};


palindromes('ZZZZ car, a man, a maracaz.')
// Do not edit below this line
module.exports = palindromes;
