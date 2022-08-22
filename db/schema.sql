/*CREATING DATABASE FOR DEPARTMENTS*/

DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db
USE department_db;

CREATE TABLE departments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    department_id INT,
    salary DECIMAL,

);

CREATE TABLE employees(
    id INT PRIMARY KEY,
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INT
    manager_id INT
    