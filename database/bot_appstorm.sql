CREATE SCHEMA `test_appstorm` ;

use `test_appstorm`;

CREATE TABLE `test_appstorm`.`asistencias` (
    `id_asistencia` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre_asistencia` VARCHAR(250) NOT NULL,
    `entrada_asistencia` TIMESTAMP NULL,
    `salida_asistencia` TIMESTAMP NULL,
PRIMARY KEY (`id_asistencia`));