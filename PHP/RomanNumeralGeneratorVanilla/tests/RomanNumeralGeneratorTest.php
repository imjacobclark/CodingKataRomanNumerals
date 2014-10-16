<?php
class RomanNumeralGeneratorTest extends PHPUnit_Framework_TestCase{
	public function testGenerateNegativeNumbersReturnFalse(){
        	$rng = new RNGenerator;

		$generate = $rng->generate(-100);

		$this->assertEquals(false, $generate);
	}

	public function testGenerateHighNumbersReturnFalse(){
		$rng = new RNGenerator;

		$generate = $rng->generate(1234567);

		$this->assertEquals(false, $generate);
	}

        public function testNonIntegerReturnsFalse(){
                $rng = new RNGenerator;

                $generate = $rng->generate("1234567");

                $this->assertEquals(false, $generate);
        }

	public function testIWhen1IsArgument(){
		$rng = new RNGenerator;

                $generate = $rng->generate(1);

                $this->assertEquals('I', $generate);
	}
	
	public function testVWhen5IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(5);

                $this->assertEquals('V', $generate);
        }

	public function testXWhen10IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(10);

                $this->assertEquals('X', $generate);
        }

	public function testXXWhen20IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(20);

                $this->assertEquals('XX', $generate);
        }

	public function testMMMCMXCIXWhen3999IsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->generate(3999);

                $this->assertEquals('MMMCMXCIX', $generate);
        }

	public function test1WhenIIsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->parse('X');

                $this->assertEquals(10, $generate);
        }

        public function test5WhenVIsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->parse('V');

                $this->assertEquals(5, $generate);
        }

        public function test10WhenXIsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->parse('X');

                $this->assertEquals(10, $generate);
        }

        public function test20WhenXXIsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->parse('XX');

                $this->assertEquals(20, $generate);                                                                                                           
        }

        public function test3999WhenMMMCMXCIXIsArgument(){
                $rng = new RNGenerator;

                $generate = $rng->parse('MMMCMXCIX');

                $this->assertEquals(3999, $generate);
        }
}


