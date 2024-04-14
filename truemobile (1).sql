SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


INSERT INTO `addressusers` (`id`, `userId`, `shipName`, `shipAdress`, `shipEmail`, `shipPhonenumber`, `createdAt`, `updatedAt`) VALUES
(1, 4, 'Home 2', '24 VTP', 'home@gmail.com', '031457994', '2024-04-12 00:29:46', '2024-04-12 00:34:38'),
(3, 4, 'Home', '24 VTP', 'home@gmail.com', '031457994', '2024-04-12 00:31:10', '2024-04-12 00:31:10'),
(4, 1, 'user 1\'sHome', 'abc', 'user1@gmail.com', '031457994', '2024-04-12 00:31:10', '2024-04-12 00:31:10');

INSERT INTO `allcodes` (`id`, `type`, `value`, `code`, `createdAt`, `updatedAt`) VALUES
(1, 'ROLE', 'admin', 'R1', '2024-04-08 22:45:20', '2024-04-08 22:45:20'),
(2, 'ROLE', 'user', 'R2', '2024-04-08 22:45:51', '2024-04-08 22:56:50'),
(3, 'ROLE', 'saler', 'R3', '2024-04-08 22:46:33', '2024-04-08 22:46:33'),
(4, 'ROLE', 'shipper', 'R4', '2024-04-08 22:46:50', '2024-04-08 22:46:50'),
(5, 'GENDER', 'nam', 'M', '2024-04-08 22:47:30', '2024-04-08 22:47:30'),
(6, 'GENDER', 'nữ', 'FE', '2024-04-08 22:47:36', '2024-04-08 22:47:36'),
(7, 'GENDER', 'khác', 'O', '2024-04-08 22:47:47', '2024-04-08 22:47:47'),
(9, 'BRAND', 'Apple', 'apple', '2024-04-09 00:49:51', '2024-04-09 00:49:51'),
(10, 'BRAND', 'Samsung', 'samsung', '2024-04-09 00:50:12', '2024-04-09 00:50:12'),
(11, 'BRAND', 'Xiaomi', 'xiaomi', '2024-04-09 00:50:19', '2024-04-09 00:50:19'),
(12, 'BRAND', 'Realme', 'realme', '2024-04-09 00:50:56', '2024-04-09 00:50:56'),
(13, 'BRAND', 'Vivo', 'vivo', '2024-04-09 00:51:04', '2024-04-09 00:51:04'),
(14, 'CATEGORY', 'Điện thoại mới', 'dien-thoai-moi', '2024-04-09 00:54:57', '2024-04-09 00:54:57'),
(15, 'STATUS', 'không kích hoạt', 'S2', '2024-04-09 16:01:06', '2024-04-09 16:01:06'),
(16, 'STATUS', 'kích hoạt', 'S1', '2024-04-09 16:01:21', '2024-04-09 16:01:21'),
(17, 'SUBJECT', 'Công nghệ', 'cong-nghe', '2024-04-10 23:47:27', '2024-04-10 23:47:27'),
(18, 'SUBJECT', 'Mới', 'new', '2024-04-10 23:47:51', '2024-04-10 23:47:51'),
(19, 'SUBJECT', 'Mẹo', 'tips', '2024-04-10 23:48:07', '2024-04-10 23:48:07'),
(20, 'ROM', '64G', 'rom-64', '2024-04-11 23:33:33', '2024-04-11 23:33:33'),
(21, 'ROM', '128G', 'rom-128', '2024-04-11 23:33:42', '2024-04-11 23:33:42'),
(22, 'ROM', '512G', 'rom-512', '2024-04-11 23:33:50', '2024-04-11 23:33:50'),
(23, 'COLOR', 'RED', 'red', '2024-04-11 23:34:16', '2024-04-11 23:34:16'),
(24, 'COLOR', 'BLUE', 'blue', '2024-04-11 23:34:33', '2024-04-11 23:34:33'),
(25, 'COLOR', 'GREEN', 'green', '2024-04-11 23:34:40', '2024-04-11 23:34:40'),
(26, 'ORDERSTATUS', 'Xác nhận đơn hàng thành công', 'S4', '2024-04-13 00:00:07', '2024-04-13 00:00:07'),
(27, 'ORDERSTATUS', 'Xác nhận gửi hàng thành công', 'S5', '2024-04-13 00:00:18', '2024-04-13 00:00:18'),
(28, 'ORDERSTATUS', 'Đã giao hàng thành công', 'S6', '2024-04-13 00:00:26', '2024-04-13 00:00:26'),
(29, 'ORDERSTATUS', 'Hủy đơn hàng thành công', 'S7', '2024-04-13 00:00:34', '2024-04-13 00:00:34'),
(30, 'ORDERSTATUS', 'Đơn hàng chưa được xác nhận', 'S3', '2024-04-13 00:02:18', '2024-04-13 00:02:18');

INSERT INTO `banners` (`id`, `description`, `name`, `statusId`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 'Ảnh 2', 'name so 2', 'S1', 0x62616e6e65722032, '2024-04-10 23:18:37', '2024-04-10 23:18:37'),
(3, 'Ảnh 3', 'name so 3', 'S1', 0x62616e6e657233, '2024-04-10 23:18:46', '2024-04-10 23:18:46');

INSERT INTO `blogs` (`id`, `shortdescription`, `title`, `subjectId`, `statusId`, `image`, `contentMarkdown`, `contentHTML`, `userId`, `view`, `createdAt`, `updatedAt`) VALUES
(2, NULL, 'Sam sung dan dau cong nghe', 'new', 'S1', 0x73616d73756e67, 'sss', 'sss', 2, 0, '2024-04-10 23:59:55', '2024-04-10 23:59:55'),
(3, NULL, 'Meo tiet kiem pin', 'tips', 'S1', 0x6d656f, 'mmm', 'sssmm', 4, 0, '2024-04-11 00:00:19', '2024-04-11 00:00:19'),
(4, NULL, 'sáng màn hình', 'tips', 'S1', 0x73616e67, 'sss', 'ss', 4, 0, '2024-04-11 00:03:56', '2024-04-11 00:03:56');

INSERT INTO `comments` (`id`, `content`, `image`, `parentId`, `productId`, `userId`, `blogId`, `star`, `createdAt`, `updatedAt`) VALUES
(2, 'cám ơn sếp', NULL, 0, 1, 1, NULL, 0, '2024-04-11 22:02:42', '2024-04-11 22:02:42'),
(3, 'ok đó', 0xc3a1646173, 2, 1, 1, NULL, 5, '2024-04-11 22:07:31', '2024-04-11 22:07:31'),
(4, 'check', 0x313233, 2, 1, 1, NULL, 5, '2024-04-11 22:11:11', '2024-04-11 22:11:11'),
(5, 'sp bình thường', 0x6274313233, NULL, 3, 4, NULL, 4, '2024-04-11 22:11:29', '2024-04-11 22:11:29'),
(6, 'sp bình thường', 0x6274313233, NULL, 3, 4, NULL, 4, '2024-04-11 22:11:45', '2024-04-11 22:11:45'),
(7, 'bài viết rất hay', NULL, NULL, NULL, 3, 2, NULL, '2024-04-12 01:12:43', '2024-04-12 01:12:43'),
(9, 'sp bình thường', 0x6274313233, NULL, 3, 2, NULL, 4, '2024-04-12 03:04:47', '2024-04-12 03:04:47'),
(10, 'comment to', 0x6274313233, NULL, 4, 2, NULL, 4, '2024-04-12 03:08:46', '2024-04-12 03:08:46'),
(11, 'comment nhor 1', NULL, 10, 4, 4, NULL, NULL, '2024-04-12 03:09:34', '2024-04-12 03:09:34'),
(13, 'comment nhor 3', NULL, 10, 4, 5, NULL, NULL, '2024-04-12 03:10:06', '2024-04-12 03:10:06'),
(14, 'comment to 2', 0x68616861, NULL, 4, 3, NULL, 5, '2024-04-12 03:16:17', '2024-04-12 03:16:17'),
(15, 'comment nho cua comment 2', NULL, 14, 4, 6, NULL, NULL, '2024-04-12 03:16:55', '2024-04-12 03:16:55');

INSERT INTO `messages` (`id`, `text`, `userId`, `roomId`, `unRead`, `createdAt`, `updatedAt`) VALUES
(1, 'hello', 1, 2, 1, '2024-04-12 00:54:41', '2024-04-12 00:54:41'),
(2, 'admin oi', 1, 1, 1, '2024-04-12 00:55:09', '2024-04-12 00:55:09'),
(3, 'admin oi', 1, 1, 1, '2024-04-12 00:55:18', '2024-04-12 00:55:18');

INSERT INTO `orderdetails` (`id`, `orderId`, `productId`, `quantity`, `realPrice`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 3, 100, '2024-04-12 23:31:55', '2024-04-12 23:31:55'),
(2, 5, 1, 3, 100, '2024-04-12 23:32:32', '2024-04-12 23:32:32'),
(3, 1, 1, 3, 101, '2024-04-12 23:37:29', '2024-04-12 23:37:29'),
(4, 7, 1, 3, 101, '2024-04-12 23:43:40', '2024-04-12 23:43:40'),
(5, 8, 1, 3, 101, '2024-04-13 00:45:41', '2024-04-13 00:45:41'),
(6, 9, 1, 3, 101, '2024-04-13 00:47:21', '2024-04-13 00:47:21'),
(7, 10, 2, 3, 101, '2024-04-13 00:48:03', '2024-04-13 00:48:03'),
(8, 11, 2, 3, 599, '2024-04-13 00:48:03', '2024-04-13 00:48:03');

INSERT INTO `orderproducts` (`id`, `addressUserId`, `shipperId`, `statusId`, `typeShipId`, `voucherId`, `note`, `isPaymentOnlien`, `createdAt`, `updatedAt`, `image`) VALUES
(1, 1, NULL, 'S7', 3, NULL, NULL, NULL, '2024-04-12 23:23:31', '2024-04-13 01:54:17', 0x616263),
(2, 1, 2, 'S5', 3, NULL, NULL, NULL, '2024-04-12 23:25:36', '2024-04-13 02:01:23', NULL),
(3, 1, NULL, 'S3', 3, NULL, NULL, NULL, '2024-04-12 23:26:09', '2024-04-12 23:26:09', NULL),
(4, 1, NULL, 'S3', 3, NULL, NULL, NULL, '2024-04-12 23:31:55', '2024-04-12 23:31:55', NULL),
(5, 1, NULL, 'S3', 3, NULL, NULL, NULL, '2024-04-12 23:32:32', '2024-04-12 23:32:32', NULL),
(6, 1, NULL, 'S3', 2, NULL, NULL, NULL, '2024-04-12 23:37:29', '2024-04-12 23:37:29', NULL),
(7, 2, NULL, 'S3', 2, NULL, NULL, NULL, '2024-04-12 23:43:40', '2024-04-12 23:43:40', NULL),
(8, 1, NULL, 'S3', 2, NULL, NULL, NULL, '2024-04-13 00:45:41', '2024-04-13 00:45:41', NULL),
(9, 3, NULL, 'S3', 2, NULL, NULL, NULL, '2024-04-13 00:47:21', '2024-04-13 00:47:21', NULL),
(10, 3, NULL, 'S3', 2, NULL, NULL, NULL, '2024-04-13 00:48:03', '2024-04-13 00:48:03', NULL),
(11, 4, 1, 'S5', 1, NULL, 'abc', NULL, '2024-04-13 00:48:03', '2024-04-13 00:48:03', NULL);

INSERT INTO `productdetailconfigs` (`id`, `productdetailId`, `colorId`, `romId`, `screen`, `os`, `backcam`, `frontcam`, `cpu`, `ram`, `sim`, `battery`, `design`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'red', 'rom-64', 'HD', 'ios', '5.1', NULL, 'A16', '8G', 'e-sim', '95000', 'ádasdas', '2024-04-09 01:16:59', '2024-04-10 23:01:18'),
(2, 2, 'blue', 'rom-128', 'QHD+', 'Android', '108', NULL, 'Exynos 2200', '12G', 'dual-sim', '5000', 'ergasd', '2024-04-09 01:22:16', '2024-04-09 01:22:16'),
(3, 3, 'Black', '128', 'AMOLED', 'MIUI 13 (dựa trên Android 12)', '108', NULL, 'Snapdragon 695', '8G', NULL, '5000', 'Thiết kế hiện đại, màn hình cong ấn tượng.', '2024-04-09 01:24:01', '2024-04-09 01:24:01'),
(4, 4, 'Silver', '256', 'AMOLED', 'MIUI 13 (dựa trên Android 12)', '200', NULL, 'Snapdragon 8 Gen 2', '12G', 'dual-sim', '4500', 'Thiết kế sang trọng và hiện đại, với màn hình cong ấn tượng và viền siêu mỏng.', '2024-04-09 03:42:20', '2024-04-09 03:42:20'),
(5, 5, 'Blue', '256', 'AMOLED', 'OriginOS 1.0 (dựa trên Android 12)', '108', NULL, 'Snapdragon 778G', '12G', 'dual-sim', '4500', 'Thiết kế hiện đại, màn hình cong, và viền siêu mỏng.', '2024-04-09 03:42:57', '2024-04-09 03:42:57'),
(6, 6, 'Space Gray', '512', 'Super Retina XDR OLED', 'iOS 16', '12MP + 12MP + 12MP', NULL, 'A16 Bionic', '8GB', 'eSIM', '4500', 'Thiết kế sang trọng và hiện đại, với viền thép không gỉ và mặt sau kính đặc biệt.', '2024-04-09 03:43:38', '2024-04-09 03:43:38'),
(7, 7, 'Silver', '64', 'Retina HD', 'iOS 14', '12MP', NULL, 'A11 Bionic', '2GB', 'nano-SIM', '1821', 'Thiết kế nhỏ gọn và thanh lịch, với mặt trước kính cường lực và mặt sau bằng kính.', '2024-04-09 03:44:16', '2024-04-09 03:44:16'),
(8, 8, 'Blue', '128', 'IPS LCD', 'Realme UI (dựa trên Android 11)', '64MP + 8MP + 2MP + 2MP', NULL, 'Snapdragon 730G', '6GB', 'dual-sim', '4200', 'Thiết kế hiện đại với màn hình tràn viền và mặt sau bóng bẩy.', '2024-04-09 03:44:45', '2024-04-09 03:44:45'),
(9, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-10 21:52:20', '2024-04-10 21:52:20'),
(11, 1, 'Red', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-10 22:51:43', '2024-04-10 22:51:43'),
(13, 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-11 00:42:36', '2024-04-11 00:42:36');

INSERT INTO `productdetails` (`id`, `productId`, `description`, `nameDetail`, `originalPrice`, `discountPrice`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Iphone mới ra', 'Iphone 15 New', 20000000, 19000000, '2024-04-09 01:16:59', '2024-04-09 01:16:59'),
(2, 2, 'Samsung flagship mới', 'Galaxy S22 Ultra', 25000000, 24000000, '2024-04-09 01:22:16', '2024-04-09 01:22:16'),
(3, 3, 'Chiếc điện thoại tầm trung mạnh mẽ với camera chất lượng, pin lâu và hiệu suất ổn định.', 'Redmi Note 11 Pro', 8000000, 7500000, '2024-04-09 01:24:01', '2024-04-09 01:24:01'),
(4, 4, 'Flagship mới của Xiaomi với màn hình cao cấp, hiệu suất ổn định và camera đỉnh cao.', 'Xiaomi Mi 12', 15000000, 14000000, '2024-04-09 03:42:20', '2024-04-09 03:42:20'),
(5, 5, 'Chiếc điện thoại cao cấp với camera selfie kép, màn hình AMOLED, và hiệu suất ổn định.', 'Vivo V23 Pro', 18000000, 17000000, '2024-04-09 03:42:57', '2024-04-09 03:42:57'),
(6, 6, 'Sản phẩm cao cấp mới nhất của Apple với camera chất lượng cao, màn hình AMOLED, và hiệu suất mạnh mẽ.', 'iPhone 14 Pro Max', 25000000, 24000000, '2024-04-09 03:43:38', '2024-04-09 03:43:38'),
(7, 7, 'Chiếc điện thoại cổ điển với thiết kế thời thượng, camera tốt và hiệu suất mạnh mẽ.', 'iPhone 8', 15000000, 12000000, '2024-04-09 03:44:16', '2024-04-09 03:44:16'),
(8, 8, 'Chiếc điện thoại tầm trung với hiệu suất ổn định, camera đa năng và màn hình đẹp.', 'Realme X3', 10000000, 9000000, '2024-04-09 03:44:45', '2024-04-09 03:44:45'),
(9, 1, 'Iphone 15 cũ nhưng vẫn mới', 'Iphone 15 - 99%', 16900000, 14500000, '2024-04-10 21:52:20', '2024-04-10 22:07:11'),
(11, 10, NULL, 'Iphone 6 Old', NULL, NULL, '2024-04-11 00:42:36', '2024-04-11 00:42:36');

INSERT INTO `productimages` (`id`, `caption`, `productdetailId`, `image`, `createdAt`, `updatedAt`) VALUES
(2, NULL, 2, 0x3738393031, '2024-04-09 01:22:16', '2024-04-09 01:22:16'),
(3, NULL, 3, 0x3938373635, '2024-04-09 01:24:01', '2024-04-09 01:24:01'),
(4, NULL, 4, 0x3534333231, '2024-04-09 03:42:20', '2024-04-09 03:42:20'),
(5, NULL, 5, 0x3938373635, '2024-04-09 03:42:57', '2024-04-09 03:42:57'),
(6, NULL, 6, 0x3132333435, '2024-04-09 03:43:38', '2024-04-09 03:43:38'),
(7, NULL, 7, 0x6970686f6e655f382e6a7067, '2024-04-09 03:44:16', '2024-04-09 03:44:16'),
(8, NULL, 8, 0x7265616c6d655f78332e6a7067, '2024-04-09 03:44:45', '2024-04-09 03:44:45'),
(9, NULL, 9, 0x69703135206f6c64, '2024-04-10 21:52:20', '2024-04-10 21:52:20'),
(11, 'ảnh 2', 1, 0xc3a16461, '2024-04-10 22:20:59', '2024-04-10 22:20:59'),
(12, NULL, 11, 0x3132333132, '2024-04-11 00:42:36', '2024-04-11 00:42:36');

INSERT INTO `products` (`id`, `name`, `contentHTML`, `contentMarkdown`, `statusId`, `categoryId`, `view`, `madeby`, `brandId`, `createdAt`, `updatedAt`) VALUES
(1, 'Iphone 15 ', 'H1 H2 H3', 'bcd', 'S2', 'dien-thoai-moi', 0, 'Apple Cali', 'apple', '2024-04-09 01:16:59', '2024-04-10 20:57:34'),
(2, 'Galaxy S22', 'def', 'efg', 'S1', 'dien-thoai-moi', 0, 'Samsung Seoul', 'samsung', '2024-04-09 01:22:16', '2024-04-10 21:03:02'),
(3, 'Redmi Note 11 Pro', 'Xiaomi Redmi Note 11 Pro là một trong những chiếc điện thoại tầm trung mới nhất của Xiaomi với nhiều tính năng nổi bật.', 'Xiaomi Redmi Note 11 Pro là một trong những chiếc điện thoại tầm trung mới nhất của Xiaomi với nhiều tính năng nổi bật.', 'S1', 'dien-thoai-moi', 0, 'Xiaomi Beijing', 'xiaomi', '2024-04-09 01:24:01', '2024-04-10 21:02:53'),
(4, 'Mi 12', 'Xiaomi Mi 12 là một trong những flagship hàng đầu của Xiaomi với hiệu suất mạnh mẽ và camera vượt trội.', 'Xiaomi Mi 12 là một trong những flagship hàng đầu của Xiaomi với hiệu suất mạnh mẽ và camera vượt trội.', 'S1', 'dien-thoai-moi', 0, 'Xiaomi Beijing', 'xiaomi', '2024-04-09 03:42:20', '2024-04-09 03:42:20'),
(5, 'V23 Pro', 'Vivo V23 Pro là một chiếc điện thoại thông minh cao cấp với camera selfie độc đáo và hiệu suất mạnh mẽ.', 'Vivo V23 Pro là một chiếc điện thoại thông minh cao cấp với camera selfie độc đáo và hiệu suất mạnh mẽ.', 'S1', 'dien-thoai-moi', 0, 'Vivo Shanghai', 'vivo', '2024-04-09 03:42:57', '2024-04-09 03:42:57'),
(6, 'iPhone 14 Pro Max', 'iPhone 14 Pro Max là một trong những sản phẩm cao cấp nhất của Apple với nhiều cải tiến đáng kể.', 'iPhone 14 Pro Max là một trong những sản phẩm cao cấp nhất của Apple với nhiều cải tiến đáng kể.', 'S1', 'dien-thoai-moi', 5, 'Apple Cupertino', 'apple', '2024-04-09 03:43:38', '2024-04-09 03:43:38'),
(7, 'iPhone 8', 'iPhone 8 là một trong những điện thoại cổ điển của Apple với hiệu suất ổn định và tính năng đáng tin cậy.', 'iPhone 8 là một trong những điện thoại cổ điển của Apple với hiệu suất ổn định và tính năng đáng tin cậy.', 'S1', 'dien-thoai-cu', 1, 'Apple Cupertino', 'apple', '2024-04-09 03:44:16', '2024-04-09 03:44:16'),
(8, 'Realme X3', 'Realme X3 là một trong những điện thoại tầm trung mới nhất của Realme với hiệu suất mạnh mẽ và camera đa năng.', 'Realme X3 là một trong những điện thoại tầm trung mới nhất của Realme với hiệu suất mạnh mẽ và camera đa năng.', 'S1', 'dien-thoai-moi', 0, 'Realme', 'realme', '2024-04-09 03:44:45', '2024-04-09 03:44:45'),
(9, NULL, NULL, NULL, 'S1', 'dien-thoai-cu', 0, NULL, 'apple', '2024-04-10 21:55:58', '2024-04-10 21:55:58'),
(10, NULL, NULL, NULL, 'S1', 'dien-thoai-cu', 0, NULL, 'apple', '2024-04-11 00:42:36', '2024-04-11 00:42:36');

INSERT INTO `receiptdetails` (`id`, `receiptId`, `productdetailconfigId`, `quantity`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 5, 45000000, '2024-04-11 23:02:54', '2024-04-11 23:02:54'),
(2, 2, 1, 5, 45000000, '2024-04-11 23:04:25', '2024-04-11 23:04:25'),
(3, 3, 1, 5, 45000000, '2024-04-11 23:06:14', '2024-04-11 23:06:14'),
(4, 4, 2, 9, 95000000, '2024-04-12 00:13:45', '2024-04-12 00:13:45'),
(5, 4, 2, 15, 99000000, '2024-04-12 00:20:28', '2024-04-12 00:20:28');

INSERT INTO `receipts` (`id`, `userId`, `supplierId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2024-04-11 23:02:54', '2024-04-11 23:02:54'),
(2, 2, 1, '2024-04-11 23:04:25', '2024-04-11 23:04:25'),
(3, 1, 1, '2024-04-11 23:06:14', '2024-04-11 23:06:14');

INSERT INTO `roommessages` (`id`, `userOne`, `userTwo`, `createdAt`, `updatedAt`) VALUES
(1, 1, 6, '2024-04-12 00:51:50', '2024-04-12 00:51:50'),
(2, 2, 6, '2024-04-12 01:04:30', '2024-04-12 01:04:30');

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-addressuser.js'),
('migration-create-allcode.js'),
('migration-create-banner.js'),
('migration-create-blog.js'),
('migration-create-comment.js'),
('migration-create-message.js'),
('migration-create-orderdetail.js'),
('migration-create-orderproduct.js'),
('migration-create-product.js'),
('migration-create-productdetail.js'),
('migration-create-productdetailconfig.js'),
('migration-create-productimage.js'),
('migration-create-receipt.js'),
('migration-create-receiptDetail.js'),
('migration-create-roommessage.js'),
('migration-create-shopcart.js'),
('migration-create-supplier.js'),
('migration-create-typeship.js'),
('migration-create-typevoucher.js'),
('migration-create-user.js'),
('migration-create-voucher.js'),
('migration-create-voucherused.js');

INSERT INTO `shopcarts` (`id`, `userId`, `productdetailconfigId`, `quantity`, `statusId`, `createdAt`, `updatedAt`) VALUES
(6, 4, 1, 3, '0', '2024-04-13 00:48:28', '2024-04-13 00:48:28');

INSERT INTO `suppliers` (`id`, `name`, `address`, `phonenumber`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Hoàng Hà', '157 Vũ Tông Phan', '0367965698', 'hoangha@gmail.com', '2024-04-11 22:44:16', '2024-04-11 22:44:16'),
(2, 'Điện máy xanh', '24 Cầu GIấy', '0979745784', 'dienmayxanh@gmail.com', '2024-04-11 22:45:07', '2024-04-11 22:45:07'),
(3, 'Media Mart VIP', '57 Ciputra', '0367965487', 'Mediamart@gmail.com', '2024-04-11 22:45:31', '2024-04-11 22:50:28'),
(4, 'Media Mart', '57 Ciputra', '0367965487', 'Mediamart@gmail.com', '2024-04-11 22:51:32', '2024-04-11 22:51:32');

INSERT INTO `typeships` (`id`, `type`, `price`, `createdAt`, `updatedAt`) VALUES
(2, 'Tiết kiệm', 20000, '2024-04-11 00:59:36', '2024-04-11 00:59:36'),
(3, 'Nhanh', 30000, '2024-04-11 00:59:46', '2024-04-11 00:59:46'),
(4, 'Vừa Vừa', 25000, '2024-04-11 01:01:30', '2024-04-11 01:05:54'),
(5, 'Hỏa tốc', 50000, '2024-04-11 01:07:14', '2024-04-11 01:07:14');

INSERT INTO `typevouchers` (`id`, `typeVoucher`, `value`, `maxValue`, `minValue`, `createdAt`, `updatedAt`) VALUES
(1, 'percent', 50, 50000, 30000, '2024-04-11 06:09:54', '2024-04-11 06:09:54'),
(2, 'percent', 30, 30000, 10000, '2024-04-11 06:10:11', '2024-04-11 06:10:11'),
(3, 'money', 50000, 50000, 50000, '2024-04-11 06:10:28', '2024-04-11 06:10:28');

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `address`, `genderId`, `phonenumber`, `image`, `dob`, `roleId`, `statusId`, `isActiveEmail`, `usertoken`, `createdAt`, `updatedAt`) VALUES
(1, 'baocao1@gmail.com', '$2b$08$TGd1U1aNWgMpePZS6fihsOMdE/1Hsbj2pOI4fXSKRv2rK2Psdcejm', 'Kane2', NULL, NULL, NULL, NULL, NULL, NULL, 'R1', NULL, NULL, NULL, '2024-04-08 19:18:04', '2024-04-08 19:21:45'),
(2, 'example@example.com', '$2b$08$oD29yv4D39aywRTvwZfBKe8IpAE.yNP2MZhfbu7YZlMlq4m4CncGO', 'Kane', 'Doe', '123 Main St', 'male', '1234567890', 0x68747470733a2f2f6578616d706c652e636f6d2f696d6167652e6a7067, NULL, 'R1', NULL, NULL, NULL, '2024-04-08 19:18:15', '2024-04-08 19:21:23'),
(4, 'acc1@gmail.com', '$2b$08$NeYRdsBzVcuh.JYxKfdN8ubOLrY/3y/3AP98mnikt9wnpUy1ESkTK', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'R2', NULL, NULL, NULL, '2024-04-08 19:22:52', '2024-04-08 19:22:52'),
(5, 'duong2@gmail.com', '$2b$08$iuBfZgLzNQrm3UycHxH6C.4gX8Q/bOiA9R//mCzLsZoUnLv4lwYIy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'R2', NULL, NULL, NULL, '2024-04-09 16:44:08', '2024-04-09 16:44:08'),
(6, 'chat@gmail.com', '$2b$08$hwB22gLtIjmIpzTFWp5cd.RQfJ2VSYk3svP02.ZSMlZLPiKdilVzW', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'R1', NULL, NULL, NULL, '2024-04-12 00:51:13', '2024-04-12 00:51:13');

INSERT INTO `vouchers` (`id`, `fromDate`, `toDate`, `typeVoucherId`, `amount`, `codeVoucher`, `createdAt`, `updatedAt`) VALUES
(2, '9/4/2024', '25/4/2024', 1, 99, 'GIAM30%', '2024-04-11 20:21:44', '2024-04-11 20:21:44'),
(4, '10/4', '15/4', 3, 55, 'GIAMIT%', '2024-04-11 20:26:16', '2024-04-11 20:29:25');

INSERT INTO `voucheruseds` (`id`, `voucherId`, `userId`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 4, 0, '2024-04-11 20:36:06', '2024-04-11 20:36:06'),
(2, 4, 5, 0, '2024-04-11 20:39:56', '2024-04-11 20:39:56'),
(3, 2, 5, 0, '2024-04-11 20:41:19', '2024-04-11 20:41:19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
