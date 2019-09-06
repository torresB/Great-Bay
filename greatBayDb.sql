DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;
USE greatBay_DB;
CREATE TABLE bids (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(45) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT (10) NOT NULL,
  highest_bid INT (10) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO bids (item_name, category, starting_bid, highest_bid)
VALUES ("Watch", "Electronics", 50, 100);
INSERT INTO bids (item_name, category, startiong_bid, highest_bid)
VALUES ("Laptop", "Electronics", 150, 500);
INSERT INTO bids (item_name, Category, starting_bid, highest_bid)
VALUES ("Cat", "Pet", 5, 15);