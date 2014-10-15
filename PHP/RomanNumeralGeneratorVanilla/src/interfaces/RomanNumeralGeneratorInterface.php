<?php

interface RomanNumeralGenerator {
        public function generate($integer); // convert from int -> roman
        public function parse($string); // convert from roman -> int
}
