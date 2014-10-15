<?php

class RNGenerator implements RomanNumeralGenerator{

        public function generate($integer){

		if($integer < 1 || $integer > 3999) 
			return false;

        }

        public function parse($string){
        }
}
