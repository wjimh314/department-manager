/*CREATING DATABASE FOR DEPARTMENTS*/

DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    department_id INT,
    salary DECIMAL,
    FOREIGN KEY (department_id) REFERENCES  departments(id) ON DELETE CASCADE
);

CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);