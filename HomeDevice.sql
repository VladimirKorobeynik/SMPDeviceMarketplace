-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 27, 2021 at 06:40 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `HomeDevice`
--

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `categorie_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`categorie_id`, `name`) VALUES
(1, 'Device'),
(2, 'Detector');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `product_id` int(11) NOT NULL,
  `categorie_id` int(11) DEFAULT NULL,
  `image` text NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`product_id`, `categorie_id`, `image`, `name`, `amount`, `price`, `description`) VALUES
(1, 1, 'images/16.jpg', 'MacBook Pro', 10, 30000, 'Что может быть лучше Mac? Только новый Mac. Благодаря распознаванию лиц. Ты сможешь мгновенно получить доступ к новым продвинутым функциям iFunctions. Семейный доступ, евроинтеграция сервесов. Новая функция TrueTone от Apple. Попробуйте больше нового, вдохновение.'),
(2, 1, 'products/IPad/Pro/top.png', 'IPad Pro', 22, 20000, 'Новый iPad Pro с дисплеем от края до края просто волшебен,<br> он справится со всеми вашими задачами'),
(3, 1, 'images/14.jpg', 'MacBook Air 2018 Gold', 12, 22000, 'Это самый любимый Mac, в который можно заново влюбиться. Новый MacBook Air — ещё более тонкий и лёгкий, оснащён дисплеем Retina, Touch ID, клавиатурой нового поколения, трекпадом Force Touch. И представлен в трёх цветах — серебристом, золотом и «серый космос». Это самый экологичный Mac. Сохранив его культовый дизайн, мы использовали для корпуса только переработанный алюминий. И это невероятно удобный MacBook Air — он работает весь день без подзарядки и может справиться с любыми задачами'),
(4, 1, 'images/12.jpg', 'MacBook Pro TouchBar', 42, 34000, 'Как делать больше, используя меньше. Мы в Apple нарушаем законы физики снова. Получайте уникальный TochBar и экран, который показывает изображение. Взгляни вперед. Это будущее. Сейчас Mac покупай. '),
(5, 2, 'images/04.jpg', 'Detector ', 10, 3000, 'Как делать больше, используя меньше. Мы в Apple нарушаем законы физики снова. Получайте уникальный TochBar и экран, который показывает изображение. Взгляни вперед. Это будущее. Сейчас Mac покупай.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`categorie_id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `categorie_id` (`categorie_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `categorie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categorie_id`) REFERENCES `Categories` (`categorie_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
