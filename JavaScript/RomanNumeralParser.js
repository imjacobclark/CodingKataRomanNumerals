function RomanNumeralParser(){
	// Numerals
	this.numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
	// Decimals
	this.numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
}



module.exports = RomanNumeralParser;