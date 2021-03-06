<?php

require 'vendor/autoload.php';
require('../autoload.php');
$app = new \Slim\Slim();

$app->get('/getInteger/:string', 'getInteger');
$app->get('/getNumerals/:int', 'getNumerals'); 

$app->run();

function getInteger($string){
	$rng = new RNGenerator();
	$result = $rng->parse($string);
	echo '{"result":"'.$result.'"}';
}


function getNumerals($int){
	$rng = new RNGenerator();
	$result = $rng->generate($int);
	echo '{"result":"'.$result.'"}';
}