<?php
class RomanNumeralGeneratorTest extends PHPUnit_Framework_TestCase{
    public function testNegativeNumbersReturnFalse(){
        $rng = new RomanNumeralGenerator();

        $generate = $rng->generate(-100);

        $this->assertEquals(false, $generate);
    }
}
