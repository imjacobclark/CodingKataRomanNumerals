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



module.exports = RomanNumeralGenerator;