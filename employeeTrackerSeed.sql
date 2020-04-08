DROP DATABASE IF EXISTS EmployeeTracker_db;
CREATE database EmployeeTracker_db;

USE EmployeeTracker_db;

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT NOT NULL,
manager_id INT (10),
  PRIMARY KEY (id)
);

CREATE TABLE role_table (
role_id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
salary VARCHAR(100) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (role_id)
);

CREATE TABLE department (
  department_id INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(30) NOT NULL,
    PRIMARY KEY (department_id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("first name", "last name", 7, 11);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Colt", "McCoy", 2, 10);

INSERT INTO role_table (title, salary, department_id)
VALUES ("title", "salary", 2);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Quarterback", "50000", 2);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Running Back", "50000", 3);

INSERT INTO department (departmentName)
VALUES ("department name");

INSERT INTO department (departmentName)
VALUES ("University of Texas");
SELECT * FROM employee;
SELECT * FROM role_table;


INSERT INTO department (departmentName)
VALUES ("University of Georgia");
SELECT * FROM employee;
SELECT * FROM role_table;

SELECT employee.first_name, employee.last_name, role_table.title, role_table.salary, departmentName
FROM employee
INNER JOIN role_table ON employee.role_id=role_table.role_id
INNER JOIN department ON role_table.department_id=department.department_id

