<?php
$productArray = [];
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
	<meta charset="utf-8">

	<title>Home Devices</title>
	<link rel="shortcut icon" href="images/apple.png" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="style.css" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap" rel="stylesheet">

</head>

<body>
	<div class="preloader" id="preload">
		<div class="loader"></div>
	</div>

	<div class="modal_bg"></div>
	<div class="modal addModal" id="addModal">
		<div class="modal_head">
			<h2>Добавить товар</h2>
			<span class="close_icon"><img src="images/closeIconBlack.png" alt="X"></span>
		</div>
		<div class="modal_content">
			<!-- <form> -->
				<div class="field_block">
					<label for="addFieldName">Название</label>
					<input type="text" class="input_form" id="addFieldName" name="name">
				</div>
				<div class="field_block">
					<label for="addCategorie">Категория</label>
					<input type="select" class="input_form" id="addFieldCategorie" name="categorie">
				</div>
				<div class="field_block">
					<label for="addFieldCount">Количество</label>
					<input type="number" min="0" class="input_form" id="addFieldCount" name="count">
				</div>
				<div class="field_block">
					<label for="addFieldPrice">Цена</label>
					<input type="number" min="1" class="input_form" id="addFieldPrice" name="price">
				</div>
				<div class="field_block">
					<label for="addFieldPrice">Фото</label>
					<input type="file" id="addFieldPhoto" name="photo">
				</div>
				<div class="field_block">
					<label for="addFieldDescription">Описание</label>
					<textarea type="text" id="addFieldDescription" name="description"></textarea>
				</div>
				<button class="filter-btn" id="addProductBtnSend">Добавить</button>
			<!-- </form> -->
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
					<input id="search" name="search" placeholder="Search" autocomplete="off">
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
				<div class="filter-button">
					<button class="filter-btn add-cart" name="all">Все</button>
					<button class="filter-btn add-cart" name="device">Устройства</button>
					<button class="filter-btn add-cart" name="detector">Датчики</button>
				</div>
				<div class="add_product_block">
					<button class="filter-btn" id="addProductBtn">Добавить +</button>
				</div>
			</div>
			<div class="card-grid-wrap" id="card-grid-wrap">
				<div class="card-grid" id="card-grid">
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
	<script src="jquery.js"></script>
	<script src="javascript.js"></script>
</body>

</html>