<?php
$array = [];
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
	<meta charset="utf-8">

	<title>Nure Shop</title>
	<link rel="shortcut icon" href="images/apple.png" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet">

</head>

<body>
	<div class="preloader" id="preload">
		<div class="loader"></div>
	</div>

	<div class="modal" id="modal">
		<div class="modal-content" id="modalContent">
			<div class="success" id="success">
				<p><span class="success-image"><img src="images/success.jpg"></span>Покупка успешна</p>
			</div>
			<span class="close" id="close" onclick="closeModal()">&times;</span>
			<div class="modal-cart" id="modal-cart">
				<div class="modal-head">
					<h3>Корзина</h3>
				</div>
				<div class="modal-cart-content">
					<div class="product-in-cart" id="productInCart">
						<div class="cart-image" id="cartImage"></div>
						<div class="modal-inner-wrap">
							<div class="modal-product-content" id="modalProductContent"></div>
							<div class="modal-checkout">
								<p>Карта:</p>
								<img class="bank-card" src="images/mastercard.png" id="mastercard" alt="card">
								<img class="bank-card" src="images/visacard.png" id="visacard" alt="card-back">
								<input class="card-field" id="bankInput" type="text" placeholder="Введите номер карты" onkeydown="return ( event.ctrlKey || event.altKey
												|| (47<event.keyCode && event.keyCode<58 && event.shiftKey==false)
											 	|| (95<event.keyCode && event.keyCode<106)
												|| (event.keyCode==8) || (event.keyCode==9)
												|| (event.keyCode>34 && event.keyCode<40)
												|| (event.keyCode==46) )" maxlength="16">
								<label for="Email">Почта:</label>
								<input class="card-field" id="emailInput" type="email" name="Email" placeholder="Ваша почта">
								<p>Выберите отделение новой почты:</p>
								<div class="unit-delivery">
									<label for="unit">Отделение №1</label>
									<input type="radio" name="unit" id="adressbtn">
									<label for="unit">Отделение №27</label>
									<input id="adressbtn" name="unit" type="radio" required>
								</div>
							</div>
						</div>
					</div>
					<div class="cart-btn">
						<p class="cart-price" id="cart-price">Итого: <span id="cartPrice"></span></p>
						<a class="btn" id="cart-btn">Оформить Заказ</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<header>
		<div class="main-header-block">
			<div class="logo">
				<a href="index.php" onclick="returnMainPage()">
					<p>Home Devices</p>
					<div class="logo-image-block">
						<img src="images/logoDevices.png" alt="Devices">
						<img class="active-logo" src="images/ActiveLogo.png" alt="Devices">
					</div>
				</a>
			</div>
			<div class="search-block">
				<div class="search-group">
					<input id="search" name="search" placeholder="Search">
					<button class="search-btn" id="search-btn"><img src="images/search.png" alt="search"></button>
				</div>
			</div>
			<div id="menu" class="main-menu">
				<a href="index.php" onclick="returnMainPage()">Главная страница</a>
				<a href="help.html">Помощь</a>
				<a href="contact.html">Контакты</a>
			</div>
		</div>
	</header>

	<div id="main">
		<div class="content">
			<div class="filter-block">
				<h1 id="head-product-block">Новые продукты</h1>
			</div>
			<div class="card-grid-wrap">
				<div class="card-grid" id="card-grid">
					<?php
					include 'Database.php';
					include 'Product.php';
					$productArray = [];
					$DB = new Database();
					$result = $DB->sendQuery("SELECT * FROM `Products`");

					$rows = mysqli_num_rows($result);
					for ($i = 0; $i < $rows; $i++) {
						$row = mysqli_fetch_row($result);
						$productObj = new Product($row[0], $row[2], $row[3], $row[4], $row[5], $row[6]);
						$productObj->outProduct($row[0], $row[2], $row[3], $row[4], $row[5], $row[6]);
					}

					?>
				</div>
				<div class="pagination" id="pagination">
				</div>
			</div>
		</div>
	</div>
	<footer>
		<div class="footer">
			<p><a href="contact.html">О нас</a> | <a href="index.html">Начальная страница</a> | <a href="help.html">FAQs</a>
			</p>
			Copyright © 2077 <a href="#">E corp</a>
		</div>
	</footer>
	<script src="database.js"></script>
	<script src="javascript.js"></script>
</body>

</html>