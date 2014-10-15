var RomanNumeralGenerator = require('../RomanNumeralGenerator.js'),
	assert = require("assert");

describe('RomanNumberGenerator', function(){
	describe('generate()', function(){
		it('should return false is a number less than 1 is passed', function(){
			
			rng = new RomanNumeralGenerator();
			output = rng.generate(-100)

			assert.equal(false, output);
			assert.equal(typeof output, 'boolean');
		
		});
	});
});

describe('RomanNumberGenerator', function(){
	describe('generate()', function(){
		it('should return false is a number more than 3999 is passed', function(){
			
			rng = new RomanNumeralGenerator();
			output = rng.generate(1234567)

			assert.equal(false, output);
			assert.equal(typeof output, 'boolean');
		
		});
	});
});

describe('RomanNumberGenerator', function(){
	describe('generate()', function(){
		it('should return the string "I" when 1 is an argument', function(){
			
			rng = new RomanNumeralGenerator();
			output = rng.generate(1)

			assert.equal("I", output);
			assert.equal(typeof output, 'string');
		
		});
	});
});

describe('RomanNumberGenerator', function(){
	describe('generate()', function(){
		it('should return the string "V" when 5 is an argument', function(){

			rng = new RomanNumeralGenerator();
			output = rng.generate(5)

			assert.equal("V", output);
			assert.equal(typeof output, 'string');
		
		});
	});
});

describe('RomanNumberGenerator', function(){
	describe('generate()', function(){
		it('should return the string "X" when 10 is an argument', function(){
			
			rng = new RomanNumeralGenerator();
			output = rng.generate(10)

			assert.equal("X", output);
			assert.equal(typeof output, 'string');
		
		});
	});
});

describe('RomanNumberGenerator', function(){
	describe('generate()', function(){
		it('should return the string "XX" when 20 is an argument', function(){
			
			rng = new RomanNumeralGenerator();
			output = rng.generate(20)

			assert.equal("XX", output);
			assert.equal(typeof output, 'string');
		
		});
	});
});

describe('RomanNumberGenerator', function(){
	describe('generate()', function(){
		it('should return the string "MMMCMXCIX" when 3999 is an argument', function(){

			rng = new RomanNumeralGenerator();
			output = rng.generate(3999)

			assert.equal("MMMCMXCIX", output);
			assert.equal(typeof output, 'string');
		
		});
	});
});