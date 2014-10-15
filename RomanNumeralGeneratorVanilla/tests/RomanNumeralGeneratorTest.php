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

	public function testIWhen1IsArgument(){
		$rng = new RNGenerator;

                $generate = $rng->generate(1);

                $this->assertEquals("I", $generate);
	}
	
	public function testVWhen5IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(5);

                $this->assertEquals("V", $generate);
        }

	public function testXWhen10IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(10);

                $this->assertEquals("X", $generate);
        }

	public function testXXWhen20IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(20);

                $this->assertEquals("XX", $generate);
        }

	public function testMMMCMXCIXWhen3999IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(3999);

                $this->assertEquals("MMMCMXCIX", $generate);
        }
}


