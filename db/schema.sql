/*CREATING DATABASE FOR DEPARTMENTS*/

DROP DATABASE IF EXISTS et_db;
CREATE DATABASE et_db;
USE et_db;

CREATE Table departments(
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
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT null);
 Foreign key (role_id) References role(role_id) ON DELETE CASCADE,
 FOREIGN KEY (manager_id) REFERENCES employee(employee_id) ON DELETE CASCADE

