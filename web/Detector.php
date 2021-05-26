<?php

    class Detector extends Product {
        public $workOutside;
        public $independence;

        public function __construct($productID, $type, $image, $name_of_product, $cost_of_product, $amount, $description, $workOutside, $independence)
        {
            parent::__construct($productID, $type, $image, $name_of_product, $cost_of_product, $amount, $description);
            $this->$workOutside = $workOutside;
            $this->$independence = $independence;
        }

        public function outProduct($productID, $image, $name_of_product, $amount, $cost_of_product, $description)
        {
            parent::outProduct($productID, $image, $name_of_product, $amount, $cost_of_product, $description);
        }
    }

?>