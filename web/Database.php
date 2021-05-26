<?php
    class Database {
        public $connectionString;

        function sendQuery($query) {
            $connectionString = new mysqli('localhost','root','root','homedevice');
            $result = $connectionString->query($query);
            $connectionString->close();
            return $result;
        }
        
        function checkInDataBase($object) {;
            (mysqli_num_rows($object) > 0) ? true : false;
        }
    }
?>