<?php

require 'vendor/autoload.php';
require('../autoload.php');
$app = new \Slim\Slim();

$app->get('/getInteger/:int', 'getInteger');
$app->get('/getNumerals/:string', 'getNumerals'); 

$app->run();

function getNumerals($int){
	$rng = new RNGenerator();
	$result = $rng->generate($int);
	echo '{"result":"'.$result.'"}';
}


function getInteger($string){
	$rng = new RNGenerator();
	$result = $rng->parse($string);
	echo '{"result":"'.$result.'"}';
}
