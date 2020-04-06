DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE database EmployeeTracker_db;

USE EmployeeTracker_db;

CREATE TABLE employee (
 id INT NOT NULL,
  first_name VARCHAR(100) NULL,
  last_name VARCHAR(100) NULL,
  role_id INT NULL,
manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE role_table (
  id INT NOT NULL,
title VARCHAR(100) NOT NULL,
salary VARCHAR(100) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT NOT NULL,
    departmentName VARCHAR(30),
    PRIMARY KEY (id)
)


