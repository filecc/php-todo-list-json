<?php 

$file = file_get_contents('data.json');
$file_decoded = json_decode($file, true);


echo json_encode($file_decoded);
