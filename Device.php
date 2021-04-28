<?php

    class Device extends Product{
        public $interface;
        public $platform;

        public function __construct($productID, $type, $image, $name_of_product, $cost_of_product, $amount, $description, $interface, $platform)
        {
            parent::__construct($productID, $type, $image, $name_of_product, $cost_of_product, $amount, $description);
            $this->$interface = $interface;
            $this->$platform = $platform;
        }

        public function outProduct($productID, $image, $name_of_product, $amount, $cost_of_product, $description)
        {
            parent::outProduct($productID, $image, $name_of_product, $amount, $cost_of_product, $description);
        }
    }

?>