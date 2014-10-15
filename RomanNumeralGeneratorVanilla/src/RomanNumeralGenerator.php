<?php

class RNGenerator implements RomanNumeralGenerator{

	function __construct() {
                // Numerals
                $this->numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
                // Decimals
                $this->numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        }

        public function generate($integer){

		if($integer < 1 || $integer > 3999) 
			return false;

		$answer = "";

                foreach($this->numerals as $index => $numeral){
                        while($integer >= $this->numbers[$index]){
                                $integer = $integer - $this->numbers[$index];
                                $answer .= $numeral;
                        }
                }

                return $answer;

        }

        public function parse($string){
        }
}
