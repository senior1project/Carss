-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Rental_cars
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Rental_cars
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Rental_cars` DEFAULT CHARACTER SET utf8 ;
USE `Rental_cars` ;

-- -----------------------------------------------------
-- Table `Rental_cars`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Rental_cars`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Rental_cars`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Rental_cars`.`vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  `brand` VARCHAR(45) NULL,
  `price_day` INT NULL,
  `color` VARCHAR(45) NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Rental_cars`.`rental`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Rental_cars`.`rental` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `total` INT NULL,
  `users_id` INT NOT NULL,
  `vehicle_id` INT NOT NULL,
  PRIMARY KEY (`id`, `users_id`, `vehicle_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_rental_users_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_rental_vehicle1_idx` (`vehicle_id` ASC) VISIBLE,
  CONSTRAINT `fk_rental_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `Rental_cars`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_rental_vehicle1`
    FOREIGN KEY (`vehicle_id`)
    REFERENCES `Rental_cars`.`vehicle` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
