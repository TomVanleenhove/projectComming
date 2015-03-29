-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 29 mrt 2015 om 15:58
-- Serverversie: 5.5.33
-- PHP-versie: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Databank: `komen_opstaan`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `kandidaten`
--

CREATE TABLE `kandidaten` (
  `id` tinyint(11) NOT NULL AUTO_INCREMENT,
  `naam` varchar(45) CHARACTER SET utf8 NOT NULL,
  `adres` varchar(255) CHARACTER SET utf8 NOT NULL,
  `geslacht` varchar(1) NOT NULL,
  `groep_id` tinyint(11) NOT NULL,
  `image` varchar(45) CHARACTER SET utf8 NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0',
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Gegevens worden uitgevoerd voor tabel `kandidaten`
--

INSERT INTO `kandidaten` (`id`, `naam`, `adres`, `geslacht`, `groep_id`, `image`, `score`, `creation_date`) VALUES
(1, 'renaat', 'grauwe broedersstraat 126 Diksmuide', 'm', 1, 'imagerenaat', 0, '2015-03-25 18:52:41'),
(2, 'Morgane', 'Grote hutsesteenweg 140  1640 Sint-Genesius-Rode', 'f', 1, 'image', 0, '2015-03-25 22:41:51'),
(3, 'Tom', 'Stationsstraat 5 Kortrijk', 'm', 0, 'Tom1427436656888.png', 0, '2015-03-27 06:10:56');
