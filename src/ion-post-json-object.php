<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$result = "Your post data : ";
$postData = json_decode( file_get_contents("php://input") );
$result .= "Name : " . $postData->name;
$result .= " Surname : " . $postData->surname;
$result .= " Email : " . $postData->email;

$message = (object)array('message' => $result);
echo json_encode($message);
?>

