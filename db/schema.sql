/*CREATING DATABASE FOR DEPARTMENTS*/

DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db
USE department_db;

CREATE TABLE departments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100)
);