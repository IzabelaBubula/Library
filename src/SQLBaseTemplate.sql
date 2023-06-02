-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: library3
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `AuthID` int unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) NOT NULL,
  `SecondName` varchar(20) DEFAULT NULL,
  `LastName` varchar(25) NOT NULL,
  `NickName` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`AuthID`),
  UNIQUE KEY `AuthID_UNIQUE` (`AuthID`),
  UNIQUE KEY `NickName_UNIQUE` (`NickName`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (10,'J','RR','Tolkien','JRRT'),(11,'N','M','M',NULL),(12,'as','as','sad',NULL),(14,'J ','K','Rowling','JKR'),(16,'Joel','','Sparks','Joel S');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_reservations`
--

DROP TABLE IF EXISTS `book_reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_reservations` (
  `BRID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `BooID` int unsigned NOT NULL,
  `BorID` int unsigned NOT NULL,
  `NumberOfBooks` smallint unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`BRID`),
  UNIQUE KEY `BRID_UNIQUE` (`BRID`),
  KEY `br_boo_idx` (`BooID`),
  KEY `br_bor_idx` (`BorID`),
  CONSTRAINT `br_boo` FOREIGN KEY (`BooID`) REFERENCES `books` (`BooID`) ON DELETE CASCADE,
  CONSTRAINT `br_bor` FOREIGN KEY (`BorID`) REFERENCES `borrowers` (`BorID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_reservations`
--

LOCK TABLES `book_reservations` WRITE;
/*!40000 ALTER TABLE `book_reservations` DISABLE KEYS */;
INSERT INTO `book_reservations` VALUES (20,11,7,1),(22,11,13,1);
/*!40000 ALTER TABLE `book_reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `BooID` int unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(60) NOT NULL,
  `Description` text,
  `Quantity` smallint NOT NULL DEFAULT '1',
  `PublicationYear` int NOT NULL,
  `Price` decimal(5,2) NOT NULL DEFAULT '35.00',
  PRIMARY KEY (`BooID`),
  UNIQUE KEY `BooID_UNIQUE` (`BooID`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (11,'TEst12','TEst12',1,1999,12.00),(15,'test','test',1,1,1.00),(16,'a','a',1,11,1.00),(17,'Hobbit','No Home',1,1,1.00),(18,'Lord of The Rings','JRRT',100,1970,34.00),(19,'test1','test1',1,1999,11.00),(23,'fsdf','dfsdf',12,12,12.00),(24,'dasdasdasdasd','sadadadaa',12,123,12.00),(25,'eqweqweqweqew','qweeqweqweqweqw',1,1,1.00),(26,'Harry Potter','about boy',1,1,1.00),(27,'About Dog','dog',1,1253,12.00),(41,'asdasdasd','qweqweqwe',1,12,1.00),(42,'lal','alaa',1,12,1.00),(43,'bala','bala',1,1332,1.00),(45,'Kats of Katthulhu','Book 1: The Mekonomikon',10,2014,10.00);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `borrowers`
--

DROP TABLE IF EXISTS `borrowers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `borrowers` (
  `BorID` int unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) NOT NULL,
  `SecondName` varchar(20) DEFAULT NULL,
  `LastName` varchar(25) NOT NULL,
  `email` varchar(60) NOT NULL,
  PRIMARY KEY (`BorID`),
  UNIQUE KEY `BorID_UNIQUE` (`BorID`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `borrowers`
--

LOCK TABLES `borrowers` WRITE;
/*!40000 ALTER TABLE `borrowers` DISABLE KEYS */;
INSERT INTO `borrowers` VALUES (6,'Iza','B','ASS','bhasd@gma.com'),(7,'ola','cola','dola','ola@ola.com'),(9,'Łukasz','asd','Gołojuch','lukasz@gol.com'),(10,'fir','seco','las','em@gmail.com'),(11,'dadadsa','dadsad','asdada','dadsa@gmail.com'),(13,'retTest','rt','rt','tr@sad.gmd');
/*!40000 ALTER TABLE `borrowers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `GenID` int unsigned NOT NULL AUTO_INCREMENT,
  `GenParentID` int unsigned DEFAULT NULL,
  `Name` varchar(40) NOT NULL,
  PRIMARY KEY (`GenID`),
  UNIQUE KEY `genID_UNIQUE` (`GenID`),
  KEY `g_gen_idx` (`GenParentID`),
  CONSTRAINT `g_gen` FOREIGN KEY (`GenParentID`) REFERENCES `genres` (`GenID`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (89,NULL,'Fantasy2'),(90,NULL,'Sci-Fi'),(91,NULL,'Historical'),(92,NULL,'Documantal'),(93,89,'Magic'),(94,89,'Dragons'),(95,89,'Sci-Fantasy'),(97,NULL,'Children'),(113,91,'Slices');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs_books_borrowers`
--

DROP TABLE IF EXISTS `logs_books_borrowers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logs_books_borrowers` (
  `L_BBID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `BooID` int unsigned DEFAULT NULL,
  `BorID` int unsigned DEFAULT NULL,
  `BorrowDate` date NOT NULL,
  `BorrowNumber` smallint unsigned NOT NULL,
  `NumberOfDays` int unsigned NOT NULL COMMENT 'On how many days borrower said that will borrow a book',
  `ReturnTime` datetime(1) NOT NULL COMMENT 'When does borrower returned a book',
  `CashPayed` decimal(10,2) unsigned zerofill NOT NULL,
  PRIMARY KEY (`L_BBID`),
  UNIQUE KEY `LBBID_UNIQUE` (`L_BBID`),
  KEY `lbo_bor_idx` (`BorID`),
  KEY `lbobor_boo_idx` (`BooID`),
  CONSTRAINT `lbobor_boo` FOREIGN KEY (`BooID`) REFERENCES `books` (`BooID`) ON DELETE SET NULL,
  CONSTRAINT `lbobor_bor` FOREIGN KEY (`BorID`) REFERENCES `borrowers` (`BorID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs_books_borrowers`
--

LOCK TABLES `logs_books_borrowers` WRITE;
/*!40000 ALTER TABLE `logs_books_borrowers` DISABLE KEYS */;
INSERT INTO `logs_books_borrowers` VALUES (1,15,11,'2008-08-22',1,30,'2023-05-12 13:36:01.0',00000267.30),(2,15,11,'2009-04-11',1,1,'2023-05-16 17:04:10.0',00000257.35),(3,18,9,'2023-05-16',1,12,'2023-05-16 18:17:55.0',00000000.00),(4,18,9,'2023-05-16',1,3,'2023-05-16 18:20:19.0',00000000.00),(5,18,10,'2023-05-16',1,12,'2023-05-16 18:20:22.0',00000000.00),(6,15,9,'2023-05-16',1,1,'2023-05-16 20:43:11.0',00000000.00),(7,18,13,'2023-05-16',1,12,'2023-05-16 20:45:50.0',00000000.00),(8,18,13,'2023-05-17',1,11,'2023-05-17 08:51:38.0',00000000.00),(9,11,6,'2023-05-10',1,3,'2023-05-17 13:12:45.0',00000000.00),(10,18,9,'2023-05-10',1,12,'2023-05-17 13:27:06.0',00000000.00),(11,18,6,'2023-05-10',1,1,'2023-05-18 20:04:13.0',00000002.38),(12,24,6,'2023-05-16',1,2,'2023-05-24 13:04:46.0',00000000.36),(13,23,6,'2023-05-16',1,1,'2023-05-24 13:09:54.0',00000000.42);
/*!40000 ALTER TABLE `logs_books_borrowers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mtm_books_authors`
--

DROP TABLE IF EXISTS `mtm_books_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mtm_books_authors` (
  `MTM_BAID` int unsigned NOT NULL AUTO_INCREMENT,
  `BooID` int unsigned NOT NULL,
  `AuthID` int unsigned NOT NULL,
  PRIMARY KEY (`MTM_BAID`),
  UNIQUE KEY `MTM_BAID_UNIQUE` (`MTM_BAID`),
  KEY `mtmba_boo_idx` (`BooID`),
  KEY `mtmba_auth_idx` (`AuthID`),
  CONSTRAINT `mtmba_auth` FOREIGN KEY (`AuthID`) REFERENCES `authors` (`AuthID`) ON DELETE CASCADE,
  CONSTRAINT `mtmba_boo` FOREIGN KEY (`BooID`) REFERENCES `books` (`BooID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mtm_books_authors`
--

LOCK TABLES `mtm_books_authors` WRITE;
/*!40000 ALTER TABLE `mtm_books_authors` DISABLE KEYS */;
INSERT INTO `mtm_books_authors` VALUES (18,25,10),(20,26,10),(29,19,14),(30,19,12),(33,41,11),(34,42,11),(35,43,14),(38,45,16);
/*!40000 ALTER TABLE `mtm_books_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mtm_books_borrowers`
--

DROP TABLE IF EXISTS `mtm_books_borrowers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mtm_books_borrowers` (
  `MTM_BBID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `BooID` int unsigned NOT NULL,
  `BorID` int unsigned NOT NULL,
  `BorrowDate` date NOT NULL,
  `NumberOfDays` int unsigned NOT NULL COMMENT 'On how many days borrower said that will borrow a book',
  `BorrowNumber` smallint unsigned NOT NULL,
  PRIMARY KEY (`MTM_BBID`),
  UNIQUE KEY `MTM_BBID_UNIQUE` (`MTM_BBID`),
  KEY `mtmbb_bor_idx` (`BorID`),
  KEY `mtmbb_boo_idx` (`BooID`),
  CONSTRAINT `mtmbb_boo` FOREIGN KEY (`BooID`) REFERENCES `books` (`BooID`) ON DELETE RESTRICT,
  CONSTRAINT `mtmbb_bor` FOREIGN KEY (`BorID`) REFERENCES `borrowers` (`BorID`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mtm_books_borrowers`
--

LOCK TABLES `mtm_books_borrowers` WRITE;
/*!40000 ALTER TABLE `mtm_books_borrowers` DISABLE KEYS */;
INSERT INTO `mtm_books_borrowers` VALUES (17,18,13,'2023-05-16',1,1);
/*!40000 ALTER TABLE `mtm_books_borrowers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mtm_books_genres`
--

DROP TABLE IF EXISTS `mtm_books_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mtm_books_genres` (
  `MTM_BGID` int unsigned NOT NULL AUTO_INCREMENT,
  `BooID` int unsigned NOT NULL,
  `GenID` int unsigned NOT NULL,
  PRIMARY KEY (`MTM_BGID`),
  UNIQUE KEY `MTM_BGID_UNIQUE` (`MTM_BGID`),
  KEY `mtmbg_boo_idx` (`BooID`),
  KEY `mtmbg_gen_idx` (`GenID`),
  CONSTRAINT `mtmbg_boo` FOREIGN KEY (`BooID`) REFERENCES `books` (`BooID`) ON DELETE CASCADE,
  CONSTRAINT `mtmbg_gen` FOREIGN KEY (`GenID`) REFERENCES `genres` (`GenID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mtm_books_genres`
--

LOCK TABLES `mtm_books_genres` WRITE;
/*!40000 ALTER TABLE `mtm_books_genres` DISABLE KEYS */;
INSERT INTO `mtm_books_genres` VALUES (23,23,91),(24,24,92),(25,25,89),(26,26,89),(27,27,89),(28,11,90),(32,11,93),(36,19,97),(38,11,92),(39,11,94),(40,41,94),(41,42,94),(42,43,91),(44,15,94),(46,45,89);
/*!40000 ALTER TABLE `mtm_books_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `return_penalties`
--

DROP TABLE IF EXISTS `return_penalties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_penalties` (
  `RPID` int unsigned NOT NULL AUTO_INCREMENT,
  `PenaltyPerDayPercentage` decimal(5,2) unsigned NOT NULL,
  `BookPrice` decimal(5,2) unsigned NOT NULL,
  PRIMARY KEY (`RPID`),
  UNIQUE KEY `RPID_UNIQUE` (`RPID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_penalties`
--

LOCK TABLES `return_penalties` WRITE;
/*!40000 ALTER TABLE `return_penalties` DISABLE KEYS */;
INSERT INTO `return_penalties` VALUES (5,0.50,10.00),(6,1.00,30.00),(7,3.00,50.00),(8,5.00,100.00);
/*!40000 ALTER TABLE `return_penalties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_book_full_info`
--

DROP TABLE IF EXISTS `view_book_full_info`;
/*!50001 DROP VIEW IF EXISTS `view_book_full_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_book_full_info` AS SELECT 
 1 AS `Title`,
 1 AS `Description`,
 1 AS `Price`,
 1 AS `PublicationYear`,
 1 AS `Quantity`,
 1 AS `genreName`,
 1 AS `ParentName`,
 1 AS `AuthorFirstName`,
 1 AS `AuthorSecondName`,
 1 AS `AuthorNickname`,
 1 AS `AuthorLastName`,
 1 AS `BookID`,
 1 AS `AuthorID`,
 1 AS `BookAutID`,
 1 AS `GenreID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_book_full_info_concated`
--

DROP TABLE IF EXISTS `view_book_full_info_concated`;
/*!50001 DROP VIEW IF EXISTS `view_book_full_info_concated`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_book_full_info_concated` AS SELECT 
 1 AS `Title`,
 1 AS `Description`,
 1 AS `Price`,
 1 AS `PublicationYear`,
 1 AS `Quantity`,
 1 AS `Genres`,
 1 AS `Authors`,
 1 AS `BookID`,
 1 AS `AuthorsIDs`,
 1 AS `GenresIDs`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_books_not_reserved`
--

DROP TABLE IF EXISTS `view_books_not_reserved`;
/*!50001 DROP VIEW IF EXISTS `view_books_not_reserved`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_books_not_reserved` AS SELECT 
 1 AS `NotReservedBooks`,
 1 AS `BookID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_borrowers_with_books`
--

DROP TABLE IF EXISTS `view_borrowers_with_books`;
/*!50001 DROP VIEW IF EXISTS `view_borrowers_with_books`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_borrowers_with_books` AS SELECT 
 1 AS `Title`,
 1 AS `Description`,
 1 AS `Quantity`,
 1 AS `PublicationYear`,
 1 AS `Price`,
 1 AS `FirstName`,
 1 AS `SecondName`,
 1 AS `LastName`,
 1 AS `email`,
 1 AS `BorrowNumber`,
 1 AS `BorrowDate`,
 1 AS `NumberOfDays`,
 1 AS `BooID`,
 1 AS `BorID`,
 1 AS `MTM_BBID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_borrowers_with_books_not_returned`
--

DROP TABLE IF EXISTS `view_borrowers_with_books_not_returned`;
/*!50001 DROP VIEW IF EXISTS `view_borrowers_with_books_not_returned`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_borrowers_with_books_not_returned` AS SELECT 
 1 AS `FirstName`,
 1 AS `SecondName`,
 1 AS `LastName`,
 1 AS `email`,
 1 AS `BorrowDate`,
 1 AS `BorrowNumber`,
 1 AS `NumberOfDays`,
 1 AS `ReturnTime`,
 1 AS `Today`,
 1 AS `NumberOfDaysOverdue`,
 1 AS `ActualPenalty`,
 1 AS `BookTitle`,
 1 AS `BookPrice`,
 1 AS `BorID`,
 1 AS `BooID`,
 1 AS `MTM_BBID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_genres_and_parent_genres`
--

DROP TABLE IF EXISTS `view_genres_and_parent_genres`;
/*!50001 DROP VIEW IF EXISTS `view_genres_and_parent_genres`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_genres_and_parent_genres` AS SELECT 
 1 AS `Name`,
 1 AS `ParentName`,
 1 AS `GenID`,
 1 AS `GenParentID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_logs_info`
--

DROP TABLE IF EXISTS `view_logs_info`;
/*!50001 DROP VIEW IF EXISTS `view_logs_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_logs_info` AS SELECT 
 1 AS `FirstName`,
 1 AS `SecondName`,
 1 AS `LastName`,
 1 AS `email`,
 1 AS `title`,
 1 AS `description`,
 1 AS `publicationYear`,
 1 AS `BorrowDate`,
 1 AS `ReturnTime`,
 1 AS `BorrowNumber`,
 1 AS `NumberOfDays`,
 1 AS `CashPayed`,
 1 AS `BorID`,
 1 AS `BooID`,
 1 AS `L_BBID`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_reservationlist`
--

DROP TABLE IF EXISTS `view_reservationlist`;
/*!50001 DROP VIEW IF EXISTS `view_reservationlist`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_reservationlist` AS SELECT 
 1 AS `FirstName`,
 1 AS `SecondName`,
 1 AS `LastName`,
 1 AS `email`,
 1 AS `NumberOfBooks`,
 1 AS `Title`,
 1 AS `Description`,
 1 AS `PublicationYear`,
 1 AS `BooID`,
 1 AS `BorID`,
 1 AS `BRID`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_book_full_info`
--

/*!50001 DROP VIEW IF EXISTS `view_book_full_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_book_full_info` AS select `b`.`Title` AS `Title`,`b`.`Description` AS `Description`,`b`.`Price` AS `Price`,`b`.`PublicationYear` AS `PublicationYear`,`b`.`Quantity` AS `Quantity`,`g`.`Name` AS `genreName`,`g`.`ParentName` AS `ParentName`,`a`.`FirstName` AS `AuthorFirstName`,`a`.`SecondName` AS `AuthorSecondName`,`a`.`NickName` AS `AuthorNickname`,`a`.`LastName` AS `AuthorLastName`,`b`.`BooID` AS `BookID`,`a`.`AuthID` AS `AuthorID`,`ba`.`MTM_BAID` AS `BookAutID`,`g`.`GenID` AS `GenreID` from ((((`books` `b` left join `mtm_books_genres` `bg` on((`b`.`BooID` = `bg`.`BooID`))) left join `view_genres_and_parent_genres` `g` on((`bg`.`GenID` = `g`.`GenID`))) left join `mtm_books_authors` `ba` on((`b`.`BooID` = `ba`.`BooID`))) left join `authors` `a` on((`ba`.`AuthID` = `a`.`AuthID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_book_full_info_concated`
--

/*!50001 DROP VIEW IF EXISTS `view_book_full_info_concated`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_book_full_info_concated` AS select `b`.`Title` AS `Title`,`b`.`Description` AS `Description`,`b`.`Price` AS `Price`,`b`.`PublicationYear` AS `PublicationYear`,`b`.`Quantity` AS `Quantity`,ifnull(concat(group_concat(distinct `g`.`Name` separator ', '),', ',group_concat(distinct `g`.`ParentName`,'' separator ',')),group_concat(distinct `g`.`Name` separator ', ')) AS `Genres`,group_concat(distinct concat(`a`.`FirstName`,ifnull(concat(' ',`a`.`SecondName`),''),ifnull(concat(' \'',`a`.`NickName`,'\''),''),' ',`a`.`LastName`) separator ', ') AS `Authors`,`b`.`BooID` AS `BookID`,group_concat(distinct `a`.`AuthID` separator ', ') AS `AuthorsIDs`,group_concat(distinct `g`.`GenID` separator ', ') AS `GenresIDs` from ((((`books` `b` left join `mtm_books_genres` `bg` on((`b`.`BooID` = `bg`.`BooID`))) left join `view_genres_and_parent_genres` `g` on((`bg`.`GenID` = `g`.`GenID`))) left join `mtm_books_authors` `ba` on((`b`.`BooID` = `ba`.`BooID`))) left join `authors` `a` on((`ba`.`AuthID` = `a`.`AuthID`))) group by `b`.`BooID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_books_not_reserved`
--

/*!50001 DROP VIEW IF EXISTS `view_books_not_reserved`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_books_not_reserved` AS select ifnull((`b`.`Quantity` - sum(`m`.`BorrowNumber`)),`b`.`Quantity`) AS `NotReservedBooks`,`b`.`BooID` AS `BookID` from (`books` `b` left join `mtm_books_borrowers` `m` on((`b`.`BooID` = `m`.`BooID`))) group by `b`.`BooID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_borrowers_with_books`
--

/*!50001 DROP VIEW IF EXISTS `view_borrowers_with_books`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_borrowers_with_books` AS select `b`.`Title` AS `Title`,`b`.`Description` AS `Description`,`b`.`Quantity` AS `Quantity`,`b`.`PublicationYear` AS `PublicationYear`,`b`.`Price` AS `Price`,`bo`.`FirstName` AS `FirstName`,`bo`.`SecondName` AS `SecondName`,`bo`.`LastName` AS `LastName`,`bo`.`email` AS `email`,`bb`.`BorrowNumber` AS `BorrowNumber`,date_format(`bb`.`BorrowDate`,'%d.%m.%Y') AS `BorrowDate`,`bb`.`NumberOfDays` AS `NumberOfDays`,`b`.`BooID` AS `BooID`,`bo`.`BorID` AS `BorID`,`bb`.`MTM_BBID` AS `MTM_BBID` from ((`books` `b` join `mtm_books_borrowers` `bb` on((`b`.`BooID` = `bb`.`BooID`))) join `borrowers` `bo` on((`bb`.`BorID` = `bo`.`BorID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_borrowers_with_books_not_returned`
--

/*!50001 DROP VIEW IF EXISTS `view_borrowers_with_books_not_returned`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_borrowers_with_books_not_returned` AS select `bo`.`FirstName` AS `FirstName`,`bo`.`SecondName` AS `SecondName`,`bo`.`LastName` AS `LastName`,`bo`.`email` AS `email`,date_format(`bb`.`BorrowDate`,'%d.%m.%Y') AS `BorrowDate`,`bb`.`BorrowNumber` AS `BorrowNumber`,`bb`.`NumberOfDays` AS `NumberOfDays`,date_format((`bb`.`BorrowDate` + interval `bb`.`NumberOfDays` day),'%d.%m.%Y') AS `ReturnTime`,date_format(cast(now() as date),'%d.%m.%Y') AS `Today`,(to_days(cast(now() as date)) - to_days((`bb`.`BorrowDate` + interval `bb`.`NumberOfDays` day))) AS `NumberOfDaysOverdue`,round((((((to_days(cast(now() as date)) - to_days((`bb`.`BorrowDate` + interval `bb`.`NumberOfDays` day))) * `pen`.`price`) * 0.01) * `pen`.`penalty`) * `bb`.`BorrowNumber`),2) AS `ActualPenalty`,`b`.`Title` AS `BookTitle`,`b`.`Price` AS `BookPrice`,`bo`.`BorID` AS `BorID`,`b`.`BooID` AS `BooID`,`bb`.`MTM_BBID` AS `MTM_BBID` from (((`borrowers` `bo` join `mtm_books_borrowers` `bb` on((`bo`.`BorID` = `bb`.`BorID`))) join `books` `b` on((`bb`.`BooID` = `b`.`BooID`))) join (select `rp`.`PenaltyPerDayPercentage` AS `penalty`,`bo1`.`BooID` AS `BooID`,`bo1`.`Price` AS `price` from (`return_penalties` `rp` join `books` `bo1`) group by `bo1`.`BooID`,`bo1`.`Price`,`rp`.`PenaltyPerDayPercentage`,`rp`.`BookPrice` having (`rp`.`BookPrice` = (select max(`rp2`.`BookPrice`) from (`return_penalties` `rp2` join `books` `bo2` on((`bo2`.`BooID` = `bo1`.`BooID`))) where (((`bo2`.`Price` - `rp2`.`BookPrice`) > 0) or ((`bo2`.`Price` < (select min(`rp3`.`BookPrice`) from `return_penalties` `rp3`)) and `rp2`.`BookPrice` in (select min(`rp3`.`BookPrice`) from `return_penalties` `rp3`)) or ((`bo2`.`Price` >= (select max(`rp3`.`BookPrice`) from `return_penalties` `rp3`)) and (`rp2`.`BookPrice` = (select max(`rp3`.`BookPrice`) from `return_penalties` `rp3`)))))) order by `bo1`.`BooID`) `pen` on((`bb`.`BooID` = `pen`.`BooID`))) where ((`bb`.`BorrowDate` + interval `bb`.`NumberOfDays` day) < cast(now() as date)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_genres_and_parent_genres`
--

/*!50001 DROP VIEW IF EXISTS `view_genres_and_parent_genres`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_genres_and_parent_genres` AS select `g1`.`Name` AS `Name`,`g2`.`ParentName` AS `ParentName`,`g1`.`GenID` AS `GenID`,`g1`.`GenParentID` AS `GenParentID` from (`genres` `g1` left join (select `g`.`Name` AS `ParentName`,`g`.`GenID` AS `ParentID` from `genres` `g`) `g2` on((`g1`.`GenParentID` = `g2`.`ParentID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_logs_info`
--

/*!50001 DROP VIEW IF EXISTS `view_logs_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_logs_info` AS select `r`.`FirstName` AS `FirstName`,`r`.`SecondName` AS `SecondName`,`r`.`LastName` AS `LastName`,`r`.`email` AS `email`,`b`.`Title` AS `title`,`b`.`Description` AS `description`,`b`.`PublicationYear` AS `publicationYear`,date_format(`l`.`BorrowDate`,'%d.%m.%Y') AS `BorrowDate`,date_format(`l`.`ReturnTime`,'%d.%m.%Y %T') AS `ReturnTime`,`l`.`BorrowNumber` AS `BorrowNumber`,`l`.`NumberOfDays` AS `NumberOfDays`,cast(`l`.`CashPayed` as double) AS `CashPayed`,`l`.`BorID` AS `BorID`,`l`.`BooID` AS `BooID`,`l`.`L_BBID` AS `L_BBID` from ((`logs_books_borrowers` `l` left join `books` `b` on((`l`.`BooID` = `b`.`BooID`))) left join `borrowers` `r` on((`l`.`BorID` = `r`.`BorID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_reservationlist`
--

/*!50001 DROP VIEW IF EXISTS `view_reservationlist`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_reservationlist` AS select `bo`.`FirstName` AS `FirstName`,`bo`.`SecondName` AS `SecondName`,`bo`.`LastName` AS `LastName`,`bo`.`email` AS `email`,`br`.`NumberOfBooks` AS `NumberOfBooks`,`b`.`Title` AS `Title`,`b`.`Description` AS `Description`,`b`.`PublicationYear` AS `PublicationYear`,`b`.`BooID` AS `BooID`,`bo`.`BorID` AS `BorID`,`br`.`BRID` AS `BRID` from ((`borrowers` `bo` join `book_reservations` `br` on((`bo`.`BorID` = `br`.`BorID`))) join `books` `b` on((`br`.`BooID` = `b`.`BooID`))) order by `b`.`BooID`,`br`.`BRID` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-02 14:09:22
