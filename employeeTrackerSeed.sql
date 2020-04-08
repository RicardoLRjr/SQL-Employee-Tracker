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
    manager_id INT NOT NULL,
    PRIMARY KEY (department_id)
);

CREATE TABLE manager(
  manager_id INT NOT NULL AUTO_INCREMENT,
    managerName VARCHAR(30) NOT NULL,
    PRIMARY KEY (manager_id)
);
-- Default Values
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("first name", "last name", 7, 11);

INSERT INTO role_table (title, salary, department_id)
VALUES ("title", "salary", 2);

INSERT INTO department (departmentName, manager_id)
VALUES ("department name", 1);

INSERT INTO manager(managerName)
VALUES ("manager name");

-- Testing Values

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Colt", "McCoy", 2, 2);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Quarterback", "50000", 2);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Running Back", "50000", 3);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Linebacker", "250000", 4);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Safety", "250000", 5);

INSERT INTO department (departmentName)
VALUES ("University of Texas", 2);

INSERT INTO department (departmentName)
VALUES ("University of Georgia", 3);

INSERT INTO department (departmentName)
VALUES ("Michigan State University", 4);

INSERT INTO department (departmentName)
VALUES ("University of Alabama", 5);

INSERT INTO manager(managerName)
VALUES ("Mack Brown");

INSERT INTO manager(managerName)
VALUES ("Mark Richt");

INSERT INTO manager(managerName)
VALUES ("Mark Dantonio");

INSERT INTO manager(managerName)
VALUES ("Nick Saban");
