DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;
USE greatBay_DB;
CREATE TABLE bids (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(45) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT (10) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO bids (item_name, category, starting_bid)
VALUES ("Watch", "Electronics", 50);
INSERT INTO bids (item_name, category, startiong_bid)
VALUES ("Laptop", "Electronics", 150);
INSERT INTO bids (item_name, Category, starting_bid)
VALUES ("Cat", "Pet", 5);