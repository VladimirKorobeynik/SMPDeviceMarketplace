-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 12, 2021 at 03:46 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homedevice`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categorie_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categorie_id`, `name`) VALUES
(1, 'Device'),
(2, 'Detector');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `images_id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `patch` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`images_id`, `title`, `patch`) VALUES
(1, 'dsadas', 'img/0f62058ee89389e00e7c6b0af5f7d984.jpg'),
(2, 'ssss', 'img/1-bigTopImage_2019_11_26_12_08_50.jpeg'),
(3, 'dsadadad', 'img/3af50429-cf39-4097-9bf4-551b9955fe8a-profile_image-70x70.png'),
(4, 'linux', 'img/arch2.png');

-- --------------------------------------------------------

--
-- Table structure for table `list_ip`
--

CREATE TABLE `list_ip` (
  `ip` varchar(100) NOT NULL,
  `stat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `list_ip`
--

INSERT INTO `list_ip` (`ip`, `stat_id`) VALUES
('127.0.0.1', 9),
('231321.232.12', 2);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `categorie_id` int(11) DEFAULT NULL,
  `image` text NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` text,
  `interface` varchar(100) DEFAULT NULL,
  `platform` varchar(100) DEFAULT NULL,
  `workOutside` tinyint(1) DEFAULT NULL,
  `independence` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `categorie_id`, `image`, `name`, `amount`, `price`, `description`, `interface`, `platform`, `workOutside`, `independence`) VALUES
(1, 1, 'images/16.jpg', 'Пульт Yeelight Bluetooth-пульт ДУ', 0, 30000, 'Что может быть лучше Mac? Только новый Mac. Благодаря распознаванию лиц. Ты сможешь мгновенно получить доступ к новым продвинутым функциям iFunctions. Семейный доступ, евроинтеграция сервесов. Новая функция TrueTone от Apple. Попробуйте больше нового, вдохновение.', NULL, NULL, NULL, NULL),
(2, 1, 'products/IPad/Pro/top.jpg', 'Настольный смарт-светильник NiteBird Smart Bedside', 22, 20000, 'Новый iPad Pro с дисплеем от края до края просто волшебен,<br> он справится со всеми вашими задачами', NULL, NULL, NULL, NULL),
(3, 1, 'images/14.jpg', 'Умная светодиодная лампа NiteBird', 12, 22000, 'Это самый любимый Mac, в который можно заново влюбиться. Новый MacBook Air — ещё более тонкий и лёгкий, оснащён дисплеем Retina, Touch ID, клавиатурой нового поколения, трекпадом Force Touch. И представлен в трёх цветах — серебристом, золотом и «серый космос». Это самый экологичный Mac. Сохранив его культовый дизайн, мы использовали для корпуса только переработанный алюминий. И это невероятно удобный MacBook Air — он работает весь день без подзарядки и может справиться с любыми задачами', NULL, NULL, NULL, NULL),
(4, 1, 'images/12.jpg', 'Умная светодиодная лента NiteBird', 42, 34000, 'Как делать больше, используя меньше. Мы в Apple нарушаем законы физики снова. Получайте уникальный TochBar и экран, который показывает изображение. Взгляни вперед. Это будущее. Сейчас Mac покупай. ', NULL, NULL, NULL, NULL),
(5, 2, 'images/04.jpg', 'Беспроводной контроллер Xiaomi Mi Smart Wireless', 10, 3000, 'Как делать больше, используя меньше. Мы в Apple нарушаем законы физики снова. Получайте уникальный TochBar и экран, который показывает изображение. Взгляни вперед. Это будущее. Сейчас Mac покупай.', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `stat_id` int(11) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `statistics`
--

INSERT INTO `statistics` (`stat_id`, `count`) VALUES
(2, 32173),
(9, 32381);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categorie_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`images_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `categorie_id` (`categorie_id`);

--
-- Indexes for table `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`stat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categorie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `images_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `statistics`
--
ALTER TABLE `statistics`
  MODIFY `stat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`categorie_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
