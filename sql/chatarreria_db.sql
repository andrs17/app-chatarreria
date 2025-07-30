CREATE DATABASE  IF NOT EXISTS `chatarreria_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `chatarreria_db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: chatarreria_db
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `contacto` varchar(100) DEFAULT NULL,
  `tipo_cliente` enum('natural','empresa') DEFAULT 'natural',
  `creado_en` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'acoplast','433 53 43','empresa','2025-06-04 22:05:38'),(2,'John Jairo','323 555 66 67','natural','2025-06-04 22:08:20'),(10,'recycle','32145633','natural','2025-07-09 13:47:59');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `rol` varchar(50) DEFAULT NULL,
  `creado_en` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'Irlando suarez','conductor','2025-06-04 21:48:22'),(2,'Verenice','condiuctor','2025-06-04 21:52:02');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_aluminio`
--

DROP TABLE IF EXISTS `tipos_aluminio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_aluminio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_aluminio`
--

LOCK TABLES `tipos_aluminio` WRITE;
/*!40000 ALTER TABLE `tipos_aluminio` DISABLE KEYS */;
INSERT INTO `tipos_aluminio` VALUES (1,'Perfil'),(2,'Aluminio_grueso'),(3,'Carlas'),(4,'Aluminio_sucio');
/*!40000 ALTER TABLE `tipos_aluminio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_cobre`
--

DROP TABLE IF EXISTS `tipos_cobre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_cobre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_cobre`
--

LOCK TABLES `tipos_cobre` WRITE;
/*!40000 ALTER TABLE `tipos_cobre` DISABLE KEYS */;
INSERT INTO `tipos_cobre` VALUES (1,'Cobre rojo'),(2,'cobre brillante');
/*!40000 ALTER TABLE `tipos_cobre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_pasta`
--

DROP TABLE IF EXISTS `tipos_pasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_pasta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_pasta`
--

LOCK TABLES `tipos_pasta` WRITE;
/*!40000 ALTER TABLE `tipos_pasta` DISABLE KEYS */;
INSERT INTO `tipos_pasta` VALUES (6,'soplado_blanco'),(7,'pp_blanco'),(8,'soplado_policolor'),(9,'pp_natural'),(10,'soplado_colores'),(11,'pp_negro'),(12,'pp_colores');
/*!40000 ALTER TABLE `tipos_pasta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_pet`
--

DROP TABLE IF EXISTS `tipos_pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_pet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_pet`
--

LOCK TABLES `tipos_pet` WRITE;
/*!40000 ALTER TABLE `tipos_pet` DISABLE KEYS */;
INSERT INTO `tipos_pet` VALUES (1,'pet transparente'),(2,'pet color'),(3,'pet_malta'),(4,'pet_aceite');
/*!40000 ALTER TABLE `tipos_pet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_plastico`
--

DROP TABLE IF EXISTS `tipos_plastico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_plastico` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_plastico`
--

LOCK TABLES `tipos_plastico` WRITE;
/*!40000 ALTER TABLE `tipos_plastico` DISABLE KEYS */;
INSERT INTO `tipos_plastico` VALUES (1,'transparent_limpio'),(2,'transparent_sucio'),(3,'policolor_limpio'),(4,'policolor_sucio');
/*!40000 ALTER TABLE `tipos_plastico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_vidrio`
--

DROP TABLE IF EXISTS `tipos_vidrio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_vidrio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_vidrio`
--

LOCK TABLES `tipos_vidrio` WRITE;
/*!40000 ALTER TABLE `tipos_vidrio` DISABLE KEYS */;
INSERT INTO `tipos_vidrio` VALUES (1,'transparente'),(2,'azul'),(3,'verde'),(4,'oscuro');
/*!40000 ALTER TABLE `tipos_vidrio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_acero`
--

DROP TABLE IF EXISTS `ventas_acero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_acero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_cliente_id` (`cliente_id`),
  KEY `idx_empleado_id` (`empleado_id`),
  CONSTRAINT `fk_cliente_acero` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_acero` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_acero`
--

LOCK TABLES `ventas_acero` WRITE;
/*!40000 ALTER TABLE `ventas_acero` DISABLE KEYS */;
INSERT INTO `ventas_acero` (`id`, `cliente_id`, `empleado_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,2,1,100.00,2950.00,'2025-07-18');
/*!40000 ALTER TABLE `ventas_acero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_aluminio`
--

DROP TABLE IF EXISTS `ventas_aluminio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_aluminio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `tipo_aluminio_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_cliente_id` (`cliente_id`),
  KEY `idx_empleado_id` (`empleado_id`),
  KEY `idx_tipo_aluminio_id` (`tipo_aluminio_id`),
  CONSTRAINT `fk_cliente_aluminio` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_aluminio` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_tipo_aluminio` FOREIGN KEY (`tipo_aluminio_id`) REFERENCES `tipos_aluminio` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_aluminio`
--

LOCK TABLES `ventas_aluminio` WRITE;
/*!40000 ALTER TABLE `ventas_aluminio` DISABLE KEYS */;
INSERT INTO `ventas_aluminio` (`id`, `cliente_id`, `empleado_id`, `tipo_aluminio_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,1,1,1,1.00,1.00,'2025-07-15'),(2,10,2,2,200.00,5450.00,'2025-07-16');
/*!40000 ALTER TABLE `ventas_aluminio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_archivo`
--

DROP TABLE IF EXISTS `ventas_archivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_archivo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_cliente_id` (`cliente_id`),
  KEY `idx_empleado_id` (`empleado_id`),
  CONSTRAINT `fk_cliente_archivo` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_archivo` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_archivo`
--

LOCK TABLES `ventas_archivo` WRITE;
/*!40000 ALTER TABLE `ventas_archivo` DISABLE KEYS */;
INSERT INTO `ventas_archivo` (`id`, `cliente_id`, `empleado_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,2,1,1.00,1.00,'2025-07-02'),(2,1,1,2.00,2.00,'2025-07-02'),(3,2,1,2.00,3.00,'2025-07-01'),(4,2,2,2.00,2.00,'2025-07-03'),(5,10,2,2.00,2.00,'2025-07-10'),(6,1,1,3.00,3.00,'2025-07-16');
/*!40000 ALTER TABLE `ventas_archivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_carton`
--

DROP TABLE IF EXISTS `ventas_carton`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_carton` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cliente_carton` (`cliente_id`),
  KEY `fk_empleado_carton` (`empleado_id`),
  CONSTRAINT `fk_cliente_carton` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_carton` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_carton`
--

LOCK TABLES `ventas_carton` WRITE;
/*!40000 ALTER TABLE `ventas_carton` DISABLE KEYS */;
INSERT INTO `ventas_carton` (`id`, `cliente_id`, `empleado_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,1,1,1.00,1.00,'2025-07-02'),(2,1,2,2.40,1150.00,'2025-07-01'),(3,1,1,10.00,5.50,'2025-07-01'),(4,1,2,2.00,2.00,'2025-07-09'),(5,2,2,3.00,3.00,'2025-07-09'),(6,2,1,3.00,3.00,'2025-07-07'),(7,10,2,3.00,3.00,'2025-07-08'),(8,10,2,2.00,2.00,'2025-07-10');
/*!40000 ALTER TABLE `ventas_carton` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_chatarra`
--

DROP TABLE IF EXISTS `ventas_chatarra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_chatarra` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_cliente_id` (`cliente_id`),
  KEY `idx_empleado_id` (`empleado_id`),
  CONSTRAINT `fk_cliente_chatarra` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_chatarra` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_chatarra`
--

LOCK TABLES `ventas_chatarra` WRITE;
/*!40000 ALTER TABLE `ventas_chatarra` DISABLE KEYS */;
INSERT INTO `ventas_chatarra` (`id`, `cliente_id`, `empleado_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,10,2,1.00,1.00,'2025-07-10'),(2,10,2,2.00,2.00,'2025-07-10');
/*!40000 ALTER TABLE `ventas_chatarra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_cobre`
--

DROP TABLE IF EXISTS `ventas_cobre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_cobre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `tipo_cobre_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_cliente_id` (`cliente_id`),
  KEY `idx_empleado_id` (`empleado_id`),
  KEY `idx_tipo_cobre_id` (`tipo_cobre_id`),
  CONSTRAINT `fk_cliente_cobre` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_cobre` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_tipo_cobre` FOREIGN KEY (`tipo_cobre_id`) REFERENCES `tipos_cobre` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_cobre`
--

LOCK TABLES `ventas_cobre` WRITE;
/*!40000 ALTER TABLE `ventas_cobre` DISABLE KEYS */;
INSERT INTO `ventas_cobre` (`id`, `cliente_id`, `empleado_id`, `tipo_cobre_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,10,1,1,100.00,32500.00,'2025-07-18'),(2,2,2,1,10.00,32400.00,'2025-07-17');
/*!40000 ALTER TABLE `ventas_cobre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_pasta`
--

DROP TABLE IF EXISTS `ventas_pasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_pasta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `tipo_pasta_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) DEFAULT NULL,
  `precio_unitario` decimal(10,2) DEFAULT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cliente_pasta` (`cliente_id`),
  KEY `fk_empleado_pasta` (`empleado_id`),
  KEY `fk_tipo_pasta` (`tipo_pasta_id`),
  CONSTRAINT `fk_cliente_pasta` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_pasta` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_tipo_pasta` FOREIGN KEY (`tipo_pasta_id`) REFERENCES `tipos_pasta` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_pasta`
--

LOCK TABLES `ventas_pasta` WRITE;
/*!40000 ALTER TABLE `ventas_pasta` DISABLE KEYS */;
INSERT INTO `ventas_pasta` (`id`, `cliente_id`, `empleado_id`, `tipo_pasta_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,1,1,6,7.00,1.00,NULL),(2,1,1,6,2.00,2.00,NULL),(3,1,1,8,1.00,1.00,'2025-07-01'),(4,1,1,10,2.00,2.00,'2025-06-10'),(5,2,2,11,1.00,1.00,'2025-07-02'),(6,2,2,12,2.00,2.00,'2025-07-02'),(7,2,2,9,1.00,1.00,'2025-06-29'),(8,2,1,8,1.00,1.00,'2025-07-01'),(9,1,1,8,3.00,3.00,'2025-07-07'),(10,10,2,8,1.00,1.00,'2025-07-09'),(11,1,1,8,11.00,11.00,'2025-07-11');
/*!40000 ALTER TABLE `ventas_pasta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_pet`
--

DROP TABLE IF EXISTS `ventas_pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_pet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `tipo_pet_id` int NOT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_tipo_pet` (`tipo_pet_id`),
  KEY `idx_fecha_venta` (`fecha_venta`),
  KEY `idx_cliente` (`cliente_id`),
  KEY `idx_empleado` (`empleado_id`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_tipo_pet` FOREIGN KEY (`tipo_pet_id`) REFERENCES `tipos_pet` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_pet`
--

LOCK TABLES `ventas_pet` WRITE;
/*!40000 ALTER TABLE `ventas_pet` DISABLE KEYS */;
INSERT INTO `ventas_pet` (`id`, `cliente_id`, `empleado_id`, `tipo_pet_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,2,1,1,100.00,2200.00,'2025-06-05'),(2,1,1,1,100.00,2200.00,'2025-06-05'),(3,2,2,2,550.00,2200.00,'2025-06-05'),(4,2,2,2,500.00,2300.00,'2025-06-06'),(5,1,1,1,10.00,3000.00,'2025-06-06'),(6,2,1,1,600.00,2350.00,'2025-06-12'),(7,2,1,2,6000.00,1.00,'2025-06-13'),(8,1,1,1,1.00,2350.00,'2025-06-13'),(9,NULL,1,2,2.00,2.00,'2025-06-18'),(10,1,2,1,3.00,3.00,'2025-06-18'),(11,1,1,4,100.00,1.00,'2025-06-11'),(12,1,1,2,1.00,1.00,'2025-06-27'),(13,1,1,1,2.00,2.00,'2025-07-01'),(14,1,1,2,3.00,3.00,'2025-07-01'),(15,1,1,3,1.00,1.00,'2025-07-01'),(16,2,1,4,1.50,1150.00,'2025-07-01'),(17,2,1,1,1.00,1.00,'2025-06-30'),(18,1,1,2,3.00,3.00,'2025-06-30'),(19,1,2,2,1.00,1.00,'2025-07-09'),(20,1,2,1,5.00,5.00,'2025-07-08'),(21,1,1,2,2.00,2.00,'2025-07-16'),(22,10,2,3,100.00,1000.00,'2025-07-18'),(23,2,2,2,12.00,1430.00,'2025-07-18'),(24,2,2,4,2.00,1250.00,'2025-07-18');
/*!40000 ALTER TABLE `ventas_pet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_plastico`
--

DROP TABLE IF EXISTS `ventas_plastico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_plastico` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `tipo_plastico_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_cliente_id` (`cliente_id`),
  KEY `idx_empleado_id` (`empleado_id`),
  KEY `idx_tipo_plastico_id` (`tipo_plastico_id`),
  CONSTRAINT `fk_cliente_plastico` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_plastico` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_tipo_plastico` FOREIGN KEY (`tipo_plastico_id`) REFERENCES `tipos_plastico` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_plastico`
--

LOCK TABLES `ventas_plastico` WRITE;
/*!40000 ALTER TABLE `ventas_plastico` DISABLE KEYS */;
INSERT INTO `ventas_plastico` (`id`, `cliente_id`, `empleado_id`, `tipo_plastico_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,10,2,1,1.00,1.00,'2025-07-10'),(2,10,2,2,1.00,1.00,'2025-07-10'),(3,2,2,3,2.00,2.00,'2025-07-06');
/*!40000 ALTER TABLE `ventas_plastico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_vidrio`
--

DROP TABLE IF EXISTS `ventas_vidrio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventas_vidrio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `tipo_vidrio_id` int DEFAULT NULL,
  `cantidad_kg` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_venta` decimal(10,2) GENERATED ALWAYS AS ((`cantidad_kg` * `precio_unitario`)) STORED,
  `fecha_venta` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_cliente_id` (`cliente_id`),
  KEY `idx_empleado_id` (`empleado_id`),
  KEY `idx_tipo_vidrio_id` (`tipo_vidrio_id`),
  CONSTRAINT `fk_cliente_vidrio` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_empleado_vidrio` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_tipo_vidrio` FOREIGN KEY (`tipo_vidrio_id`) REFERENCES `tipos_vidrio` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_vidrio`
--

LOCK TABLES `ventas_vidrio` WRITE;
/*!40000 ALTER TABLE `ventas_vidrio` DISABLE KEYS */;
INSERT INTO `ventas_vidrio` (`id`, `cliente_id`, `empleado_id`, `tipo_vidrio_id`, `cantidad_kg`, `precio_unitario`, `fecha_venta`) VALUES (1,10,2,1,1.00,1.00,'2025-07-08');
/*!40000 ALTER TABLE `ventas_vidrio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-25 12:34:45
