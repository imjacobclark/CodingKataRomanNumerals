function RomanNumeralParser(){
	// Numerals
	this.numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
	// Decimals
	this.numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
}

RomanNumeralParser.prototype.stringPosition = function(string, numeral){
	// Grab the index of
	var i = (string + '').indexOf(numeral, 0);
	// If -1 return false, otherwise return the position
	return i === -1 ? false : i;
}

RomanNumeralParser.prototype.parse = function(string){
	// Answer
	this.answer = 0;

	string = string;

	// Iterate over each number
	for(var i = 0; i < this.numerals.length; i++){			
		// If number is more than or equal to current number in array iterate

		while(this.stringPosition(string, this.numerals[i]) === 0){
			// If a 0 has been returned, we can get its value from the corresponding numbers array and increment our answer variable accordingly
			this.answer += this.numbers[i];
			// Finally we must continue the search after the previous numeral that has been found
			string = string.substr(this.numerals[i].length);
		}

	}

	// Return answer string
	return this.answer;
}

module.exports = RomanNumeralParser;