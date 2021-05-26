<?php
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true);
print_r($input);
// $array = $_POST;
// echo $_POST["name"];
?>