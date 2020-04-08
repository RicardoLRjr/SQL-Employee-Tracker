var mysql = require("mysql");
var inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "alpha1",
  database: "EmployeeTracker_db",
});

connection.connect(function (err) {
  if (err) throw err;
  EmployeeTracker();
});

function EmployeeTracker() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Welcome to the Employee Tracker! What is your goal:",
      choices: [
        "Add departments, roles, or employees",
        "View departments, roles, or employees",
        "Update employee roles",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add departments, roles, or employees":
          addFunction();
          break;

        case "View departments, roles, or employees":
          viewFunction();
          break;

        case "Update employee roles":
          updateFunction();
          break;
      }
    });
}

function addFunction() {
  inquirer
    .prompt({
      name: "whatToAdd",
      type: "rawlist",
      message: "Are you adding a department, a role, or an employee?",
      choices: ["department", "role", "employee"],
    })
    .then(function (answer) {
      switch (answer.whatToAdd) {
        case "department":
          function addDepartment() {
            inquirer
              .prompt({
                name: "employeeDepartment",
                type: "input",
                message: "What department is this employee in?",
              })
              .then(function (answer) {
                var query = `INSERT INTO department (departmentName) VALUES (?)`;
                connection.query(query, [answer.employeeDepartment], function (
                  err,
                  res
                ) {
                  if (err) {
                    console.log("something bad happened....");
                    console.log(err);
                    return;
                  }
                  EmployeeTracker();
                });
              });
          }
          addDepartment();
          break;
        case "role":
          function addRole() {
            inquirer
              .prompt([
                {
                  name: "roleTitle",
                  type: "input",
                  message: "What is this employee's title?",
                },
                {
                  name: "roleSalary",
                  type: "input",
                  message: "What is this employee's salary?",
                },
                {
                  name: "departmentID",
                  type: "number",
                  message: "What is the department id?",
                },
              ])
              .then(function (answer) {
                var query = `INSERT INTO role_table (title, salary, department_id) VALUES (?, ?, ?)`;
                connection.query(
                  query,
                  [answer.roleTitle, answer.roleSalary, answer.departmentID],
                  function (err, res) {
                    if (err) {
                      console.log("something bad happened....");
                      console.log(err);
                      return;
                    }
                    EmployeeTracker();
                  }
                );
              });
          }
          addRole();
          break;
        case "employee":
          function addEmployee() {
            inquirer
              .prompt([
                {
                  name: "firstName",
                  type: "input",
                  message: "What is this employee's first name?",
                },
                {
                  name: "lastName",
                  type: "input",
                  message: "What is this employee's last name?",
                },
                {
                  name: "roleID",
                  type: "number",
                  message: "What is this employee's role id?",
                },
                {
                  name: "managerID",
                  type: "number",
                  message: "What is this employee's manager's ID?",
                },
              ])
              .then(function (answer) {
                var query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
                connection.query(
                  query,
                  [
                    answer.firstName,
                    answer.lastName,
                    answer.roleID,
                    answer.managerID,
                  ],
                  function (err, res) {
                    if (err) {
                      console.log("something bad happened....");
                      console.log(err);
                      return;
                    }
                    EmployeeTracker();
                  }
                );
              });
          }
          addEmployee();

          break;
      }
    });
}

function viewFunction() {
  console.log("view function logs");
  inquirer
    .prompt({
      name: "whatToView",
      type: "rawlist",
      message: "do you want to view a department, a role, or employees?",
      choices: ["department", "role", "employee"],
    })
    .then(function (answer) {
      switch (answer.whatToView) {
        case "department":
          function viewDepartment() {
            var query = "SELECT * FROM department";
            connection.query(query, function (err, res) {
              console.table(res);
              EmployeeTracker();
            });
          }
          viewDepartment();
          break;
        case "role":
          function viewRole() {
            var query = "SELECT * FROM role_table";
            connection.query(query, function (err, res) {
              console.table(res);
              EmployeeTracker();
            });
          }
          viewRole();
          break;
        case "employee":
          function viewEmployee() {
            var query =
              "SELECT employee.first_name, employee.last_name, role_table.title, role_table.salary, departmentName, managerName ";
            query +=
              "FROM employee LEFT JOIN role_table ON employee.role_id=role_table.role_id ";
            query +=
              "left JOIN department ON role_table.department_id=department.department_id "
            query += "LEFT JOIN manager ON employee.manager_id=manager.manager_id ORDER BY id ASC";
            connection.query(query, [], function (err, res) {
              console.log(res);
              console.table(res);
              EmployeeTracker();
            });
          }
          viewEmployee();
          break;
      }
    });
}
function updateFunction() {
  inquirer
    .prompt([
      {
        name: "EmployeeFirstName",
        type: "input",
        message: "Which employee do you want to edit?",
      },
      {
        name: "roleID",
        type: "number",
        message: "What do you want to set this employee's role to?",
      },
    ])
    .then(function (answer) {
      var query = "UPDATE employee SET role_ID = ? WHERE first_name = ?";
      connection.query(
        query,
        [answer.roleID, answer.EmployeeFirstName],
        function (err, res) {
          if (err) {
            console.log("something bad happened....");
            console.log(err);
            return;
          } else {
            console.log("Table Updated!");
            EmployeeTracker();
          }
        }
      );
    });
}
