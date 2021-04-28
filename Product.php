<?php

class Product{
    public $productID;
    public $type;
    public $image;
    public $name_of_product;
    public $amount;
    public $cost_of_product;
    public $description;

    public function __construct($productID, $type, $image, $name_of_product, $cost_of_product, $amount, $description) {
        $this->$productID = $productID;
        $this->$type = $type;
        $this->$image = $image;
        $this->name_of_product = $name_of_product;
        $this->cost_of_product = $cost_of_product;
        $this->amount = $amount;
        $this->description = $description;
    }
    
    public function outProduct($productID, $image, $name_of_product,$amount, $cost_of_product, $description) {
        $instock = null;
        
        if ($amount > 0) {
            $instock = "<span class='stock in-stock'>В наличии</span>";
        }
        else {
            $instock = "<span class='stock not-avalible'>Нет в наличии</span>";
        }

        $a = explode(" ", $description);
        $shortDescription = array_slice($a,0 ,20);
        $resultString = join(" ", $shortDescription) . "....";
        echo "<div class='product-card'><div class='id-product'>$productID</div><div class='card-image'><a href='#'".
        "id='productimage' onclick='checkProduct()'><img src='$image'/></a></div><div class='card-content'><h3 class='product-name' id='productname'>$name_of_product</h3>".
        "$instock<div class='more' id='more'>$resultString</div><p class='product-price' id='product-price'>$cost_of_product грн</p>".
        "<div class='card-btn-block' id='paymantBlock'><a href='#' class='add-cart' id='add-cart'>Купить</a>".
        "<a href='#' class='details' id='details' onclick='checkProduct()'>Подробнее</a></div></div></div>";
    }
}

?>