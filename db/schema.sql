DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY(item_id)
);


