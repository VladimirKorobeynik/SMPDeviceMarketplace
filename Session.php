<?php

session_start();
$agent = $_SERVER['HTTP_USER_AGENT']; $uri = $_SERVER['REQUEST_URI'];
$user = $_SERVER['PHP_AUTH_USER']; $ip = $_SERVER['REMOTE_ADDR'];
$ref = $_SERVER['HTTP_REFERER']; $dtime = date('r');
if(!$ref){
$ref = "Direct link"; }
if(!$user){
$user = "Anonymous";
}
$entry_line = "DATETIME: $dtime | IP: $ip | Agent: $agent | URL: $uri | Referrer: $ref | Username: $user\n";
$file = fopen("./log.txt", "a");
fputs($file, $entry_line);
fclose($file);

// $f=fopen("stat.dat","a+");
// flock($f,LOCK_EX);
// $count=fread($f,100);
// @$count++;
// ftruncate($f,0);
// fwrite($f,$count);
// fflush($f);
// flock($f,LOCK_UN);
// fclose($f);

// $db = new mysqli('localhost','root','root','homedevice');
// $ip = $_SERVER['REMOTE_ADDR'];
// $result = $db->query("SELECT * FROM `list_ip` WHERE `ip` = '$ip'");
// $row = mysqli_num_rows($result);
// if($row > 0){
//     $result = $db ->query("SELECT `statistics`.`count` FROM `statistics`, `list_ip` WHERE `statistics`.`stat_id` = `list_ip`.`stat_id` AND `list_ip`.`ip` = '$ip'");
//     $row = mysqli_fetch_array($result); 
//     $new_hits = $row['count'] + 1;
//     $db->query("UPDATE `statistics`, `list_ip` SET `statistics`.`count` = $new_hits WHERE `statistics`.`stat_id` = `list_ip`.`stat_id` AND `list_ip`.`ip` = '$ip'");
// }else{
//     $db->query("INSERT INTO `statistics` (`count`) VALUES (1)");
//     $id = $db->insert_id;
//     $db->query("INSERT INTO `list_ip` (`ip`, `stat_id`) VALUES ('$ip', $id)");
// }
// function output_img(){
//     $db = new mysqli('localhost','root','root','homedevice');
//     $newQuery = $db->query("SELECT `statistics`.`stat_id`, `list_ip`.`ip`, `statistics`.`count` FROM `statistics` INNER JOIN `list_ip` ON (`statistics`.`stat_id` = `list_ip`.`stat_id`) ");
//     $rows = mysqli_num_rows($newQuery);

//     echo "<table border='1px solid black' cellpadding='5px'>";
//     echo "<thead> <tr><td>Номер пользователя</td><td>Айпи пользователя</td><td>Кол-во посещений</td></tr></thead>";
//     for ($i = 0 ; $i < $rows ; ++$i)
//     {
//         $row = mysqli_fetch_row($newQuery);
//         echo "<tbody>";
//         echo  "<td align='center'>" .  $row[0]  . "</td>";
//         echo "<td align='center'>" .  $row[1] . "</td>";
//         echo "<td align='center'>" . $row[2] . "</td>";
//         echo "</tbody>";
//     }
//     echo "</table>";
// }

// output_img();
?>