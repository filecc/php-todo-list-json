<?php 
 $file = file_get_contents('data.json');
 $file_decoded = json_decode($file, true);
 
if (!empty($_POST['content'])){
    $randomID = chr(rand(97,122)) . rand(10,99) . chr(rand(97,122));
    $newTask = array(
        "content" => $_POST['content'],
        "completed" => '0',
        "id" => $randomID
    );
    array_push($file_decoded, $newTask);
    file_put_contents('data.json', json_encode($file_decoded));
} else {
    if(!empty($_POST) && empty($_POST['content'])){
        $data = ($_POST);
        file_put_contents('data.json', json_encode($data));
    }
   
} 

echo json_encode($file_decoded);





