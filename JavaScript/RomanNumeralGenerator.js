function RomanNumeralGenerator(){
	// Numerals
	this.numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
	// Decimals
	this.numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
}

RomanNumeralGenerator.prototype.generate = function(number){
	// If more or less than number support 
	if(number < 1 || number > 3999) 
		return false;

	// Answer
	this.answer = "";

	// Iterate over each number
	for(var i = 0; i < this.numbers.length; i++){	
		// If number is more than or equal to current number in array iterate
		while(number >= this.numbers[i]){
			// Remove current number from array as it has been matched
			number -= this.numbers[i];
			// Append corrisponding matched numeral to number to answer
			this.answer += this.numerals[i]
		}
	}

	// Return answer string
	return this.answer;
}


RomanNumeralGenerator.prototype.parse = function(string){
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

RomanNumeralGenerator.prototype.stringPosition = function(string, numeral){
	// Grab the index of
	var i = (string + '').indexOf(numeral, 0);
	// If -1 return false, otherwise return the position
	return i === -1 ? false : i;
}

module.exports = RomanNumeralGenerator;