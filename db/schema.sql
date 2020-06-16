DROP DATABASE IF EXISTS jokesdb;
CREATE DATABASE jokesdb;

USE jokesdb;

CREATE TABLE members(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30),
    status VARCHAR(10)

);

CREATE TABLE userjokes(
id INT AUTO_INCREMENT PRIMARY KEY,
body VARCHAR (200) NOT NULL,
upvotes INTEGER,
downvotes INTEGER,
userid INTEGER,
FOREIGN KEY (userid) REFERENCES members(id)

);