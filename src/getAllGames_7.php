<?php
header("Access-Control-Allow-Origin: *");
header("Content-type:application/json",true);

$con = @mysqli_connect('localhost', 'root', '', 'shop');

//mysqli_connect("localhost","root","");
//mysqli_select_db("shop");
//mysqli_query("SET NAMES 'utf8'");

$games = array("games"=>array());
//$query = mysqli_query("SELECT * FROM game");

$sql = "SELECT * FROM game";
$query 	= mysqli_query($con, $sql);

while($row=mysqli_fetch_assoc($query)){
	//ทดสอบผล print_r($row);
	//ดึงข้อมูลมาใส่ในอาร์เรย์
	array_push($games["games"],array(
		"game_id" => $row["game_id"],
		"game_name" => $row["game_name"],
		"game_price" => $row["game_price"],
		"game_detail" => $row["game_detail"],
		"game_img" => $row["game_img"]
	));
}
echo json_encode($games);
?>
