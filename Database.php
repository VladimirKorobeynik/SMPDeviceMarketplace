<?php
    class Database {
        public $connectionString;

        function sendQuery($query) {
            $connectionString = new mysqli('localhost','root','root','HomeDevice');
            $result = $connectionString->query($query);
            $connectionString->close();
            return $result;
            // ($this->checkInDataBase($result)) ? $result : null;
        }
        
        function checkInDataBase($object) {;
            (mysqli_num_rows($object) > 0) ? true : false;
        }
    }
?>