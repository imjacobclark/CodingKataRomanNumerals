<?php
class RNGenerator implements RomanNumeralGenerator{

	function __construct() {
                // Numerals
                $this->numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
                // Decimals
                $this->numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        }

        public function generate($integer){
		// If more or less than number support 
		if($integer < 1 || $integer > 3999) 
			return false;

		// Assuming a string should be returned rather than an array
		$answer = "";

		// For every numeral in the array iterate providing the index
                foreach($this->numerals as $index => $numeral){
			// With our remaining integer, if it is more of equal to corresponding roman numerals integer
                        while($integer >= $this->numbers[$index]){
				// Subtract it from our remaining integer
                                $integer = $integer - $this->numbers[$index];
				// Append the numeral to our answer variable (string)
                                $answer .= $numeral;
                        }
                }
		
		// Return the string
                return $answer;

        }

        public function parse($string){
		
		// Note; Cannot split $string into array due to double char numerals
		$string = $string;

		$answer = 0;
		
		// For every numeral in the array iterate providing the index
                foreach($this->numerals as $index => $numeral){
			// If a 0 is returned, the numeral has been found within the string
                        while(strpos($string, $numeral) === 0){
				// If a 0 has been returned, we can get its value from the corresponding numbers array and increment our answer variable accordingly
				$answer += $this->numbers[$index];
				// Finally we must continue the search after the previous numeral that has been found
				$string = substr($string, strlen($numeral));
			}
                }
		
		// Return the integer
                return $answer;


        }
}
