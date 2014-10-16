class RNGenerator
	def initialize()
		@numerals = { 	"M" 	=> 1000, 
						"CM" 	=> 900, 
						"D" 	=> 500, 
						"CD" 	=> 400, 
						"C" 	=> 100, 
						"XC" 	=> 90, 
						"L" 	=> 50, 
						"XL" 	=> 40, 
						"X" 	=> 10, 
						"IX" 	=> 9, 
						"V" 	=> 5, 
						"IV" 	=> 4, 
						"I" 	=> 1
					}
	end

	def generate(integer)

		if(integer < 1 || integer > 3999)
			return false
		end

		answer = ""

		@numerals.each do |numeral, number|
			while(integer >= number)
				integer = integer - number;
				answer  = answer + numeral
			end
		end

		answer
	end

	def parse(numerals)
		answer = 0

		@numerals.each do |numeral, number|
			while(numerals.start_with?(numeral))
				answer += number
				numerals = numerals.slice(numeral.length, numerals.length)
			end
		end

		answer
	end

end