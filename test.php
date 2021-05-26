<?php
include 'Database.php';
include 'Product.php';
include 'Device.php';
include 'Detector.php';
$DB = new Database();
$result = $DB->sendQuery("SELECT * FROM `Products`");
$rows = mysqli_num_rows($result);

function showProduct($result,$rows)
{
    for ($i = 0; $i < $rows; $i++) {
        $row = mysqli_fetch_row($result);
        if ($row[1] == 1) {
            $device = new Device($row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6], 'str', 'str');
            $device->outProduct($row[0], $row[2], $row[3], $row[4], $row[5], $row[6]);
            array_push($productArray, $device);
        } 
        else {
            $detector = new Detector($row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6], 'str', 'str');
            $detector->outProduct($row[0], $row[2], $row[3], $row[4], $row[5], $row[6]);
            array_push($productArray, $detector);
        }
    }
}

showProduct($result,$rows);

$input = json_decode(file_get_contents("php://input"), true);
if(isset($input["deleteOperation"])){
    $id = $input["id"];
    try{
        $DB->sendQuery("DELETE FROM `Products` WHERE `product_id` = $id");
    }
    catch(Exception $e){
        echo 'Подключение не удалось: ' . $e->getMessage();
    }
}
else if(isset($input["name"])){
    $name = $input["name"];
    $category = $input["category"];
    $count = $input["count"];
    $price = $input["price"];
    $image = $input["image"];
    $description = $input["description"];
    try{
        $DB->sendQuery("INSERT INTO `products`(`categorie_id`, `image`, `name`, `amount`, `price`, `description`) VALUES ('$category', '$image', '$name', '$count', '$price', '$description')");
    }
    catch(Exception $e){
        echo 'Подключение не удалось: ' . $e->getMessage();
    }
}   
?>