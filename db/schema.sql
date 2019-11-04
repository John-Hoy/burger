DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
        id INTEGER(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
        burger_name VARCHAR(50),
        devoured BOOLEAN default false
);