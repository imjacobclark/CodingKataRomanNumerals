<?php
  require('../../../autoload.php');
  $rng = new RNGenerator;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Roman Numerals Converter</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

    <!-- Custom styles for this template -->
    <style>
      body {
        padding-top: 50px;
      }
      .starter-template {
        padding: 40px 15px;
        text-align: center;
      }
      .integer{
        float: left;
      }
      .numerals{
        float: right; 
      }
    </style>
  </head>

  <body>

  <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Roman Numerals Converter</a>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="starter-template">
      <p>Jacob Clark - Wednesday 15th October 2014</p>
      <div class="integer">
        <h1>Integer to Roman Numerals</h1>
          <form method="POST" action="">
          <label for="integer">Enter an integer</label>
          <input type="text" name="integer" placeholder="1 - 3999">
          <input type="submit">
        </form>

        <?php                                                                                                                                                 
          if(isset($_POST['integer'])){
            $output = $rng->generate( intval($_POST['integer']) );         
            if($output == false){
              echo "Please enter a valid number.";
            }else{
        ?>      
            <p style="padding-top: 10px;"><strong>Result:</strong>
        <?php   
            echo $output;                              
            }
          }       
        ?>
      </div>

      <div class="numerals">
        <h1>Roman Numerals to Integer</h1>
        <form method="POST" action="">
          <label for="numeral">Enter a numeral pattern</label>
          <input type="text" name="numeral" placeholder="XXI">
          <input type="submit">
        </form>

        <?php
          if(isset($_POST['numeral'])){
            $output = $rng->parse($_POST['numeral']);                    
            if($output == false){
              echo "Please enter a valid numeral pattern.";
            }else{
        ?> 
            <p style="padding-top: 10px;"><strong>Result:</strong> 
        <?php	
            echo $output;                 
            }
          }       
        ?>
        </p>
      </div>
    </div>

  </div><!-- /.container -->

  </body>
</html>

