<?php 

$file = file_get_contents('data.json');
$file_decoded = json_decode($file, true);


if (!empty($_POST['content'])){
    $newTask = array(
        "content" => $_POST['content'],
        "completed" => false
    );
    array_push($file_decoded, $newTask);
    file_put_contents('data.json', json_encode($file_decoded));
}



echo json_encode($file_decoded);
