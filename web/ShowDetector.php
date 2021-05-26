<?php
include 'Database.php';
include 'Product.php';
include 'Device.php';
include 'Detector.php';
$DB = new Database();
$result = $DB->sendQuery("SELECT * FROM `Products` WHERE `categorie_id` = 2");
$rows = mysqli_num_rows($result);

function showProduct($result,$rows)
{
    for ($i = 0; $i < $rows; $i++) {
        $row = mysqli_fetch_row($result);
        $device = new Device($row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6], $row[7], $row[8]);
        $device->outProduct($row[0], $row[2], $row[3], $row[4], $row[5], $row[6]);
        array_push($productArray, $device);
    }
}

showProduct($result,$rows);
?>