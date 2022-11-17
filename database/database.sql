-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.11.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for estadisticas
CREATE DATABASE IF NOT EXISTS `estadisticas` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `estadisticas`;

-- Dumping structure for table estadisticas.average
CREATE TABLE IF NOT EXISTS `average` (
  `ID` int(11) NOT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `Variable` varchar(50) DEFAULT NULL,
  `Value` float DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table estadisticas.continentmax
CREATE TABLE IF NOT EXISTS `continentmax` (
  `ID` int(11) NOT NULL,
  `Continent` varchar(50) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `Variable` varchar(50) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `Value` float DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table estadisticas.continentmin
CREATE TABLE IF NOT EXISTS `continentmin` (
  `ID` int(11) NOT NULL,
  `Continent` varchar(50) NOT NULL DEFAULT '',
  `Year` int(11) NOT NULL DEFAULT 0,
  `Variable` varchar(50) NOT NULL DEFAULT '',
  `Country` varchar(50) NOT NULL DEFAULT '',
  `Value` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table estadisticas.countryminmax
CREATE TABLE IF NOT EXISTS `countryminmax` (
  `ID` int(11) NOT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `Variable` varchar(50) DEFAULT NULL,
  `MaxValue` float DEFAULT NULL,
  `MaxYear` int(11) DEFAULT NULL,
  `MinValue` float DEFAULT NULL,
  `MinYear` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table estadisticas.stationminmax
CREATE TABLE IF NOT EXISTS `stationminmax` (
  `ID` int(11) NOT NULL,
  `Country` varchar(50) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `Variable` varchar(50) DEFAULT NULL,
  `MaxStation` varchar(50) DEFAULT NULL,
  `MaxValue` float DEFAULT NULL,
  `MinStation` varchar(50) DEFAULT NULL,
  `MinValue` float DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
