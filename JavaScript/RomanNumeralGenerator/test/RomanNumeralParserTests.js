var RomanNumeralParser = require('../RomanNumeralParser.js'),
	assert = require("assert");

describe('RomanNumberParser', function(){
	describe('generate()', function(){
		it('should return the string "I" when 1 is an argument', function(){
			
			rng = new RomanNumeralParser();
			output = rng.parse("I")

			assert.equal(1, output);
			assert.equal(typeof output, 'number');
		
		});
	});
});

describe('RomanNumberParser', function(){
	describe('generate()', function(){
		it('should return the string "V" when 5 is an argument', function(){

			rng = new RomanNumeralParser();
			output = rng.parse("V")

			assert.equal(5, output);
			assert.equal(typeof output, 'number');
		
		});
	});
});

describe('RomanNumberParser', function(){
	describe('generate()', function(){
		it('should return the string "X" when 10 is an argument', function(){
			
			rng = new RomanNumeralParser();
			output = rng.parse("X")

			assert.equal(10, output);
			assert.equal(typeof output, 'number');
		
		});
	});
});

describe('RomanNumberParser', function(){
	describe('generate()', function(){
		it('should return the string "XX" when 20 is an argument', function(){
			
			rng = new RomanNumeralParser();
			output = rng.parse("XX")

			assert.equal(20, output);
			assert.equal(typeof output, 'number');
		
		});
	});
});

describe('RomanNumberParser', function(){
	describe('generate()', function(){
		it('should return the string "MMMCMXCIX" when 3999 is an argument', function(){

			rng = new RomanNumeralParser();
			output = rng.parse("MMMCMXCIX")

			assert.equal(3999, output);
			assert.equal(typeof output, 'number');
		
		});
	});
});