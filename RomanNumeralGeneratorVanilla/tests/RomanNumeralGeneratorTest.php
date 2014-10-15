<?php
class RomanNumeralGeneratorTest extends PHPUnit_Framework_TestCase{
	public function testNegativeNumbersReturnFalse(){
        	$rng = new RNGenerator;

		$generate = $rng->generate(-100);

		$this->assertEquals(false, $generate);
	}

	public function testHighNumbersReturnFalse(){
		$rng = new RNGenerator;

		$generate = $rng->generate(1234567);

		$this->assertEquals(false, $generate);
	}
}
