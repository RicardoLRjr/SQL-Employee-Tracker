DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE database EmployeeTracker_db;

USE EmployeeTracker_db;

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT NOT NULL,
manager_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role_table (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
salary VARCHAR(100) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("first name", "last name", 7, 11);

INSERT INTO role_table (title, salary, department_id)
VALUES ("title", "salary", 9);

INSERT INTO department (departmentName)
VALUES ("department name");

