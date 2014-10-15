<?php

require('RomanNumeralGeneratorInterface.php');
require('RomanNumeralGenerator.php');

$rng = new RNGenerator;

echo $rng->parse("MMMCMXCIX");
