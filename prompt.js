var mysql = require("mysql");
var inquirer = require("inquirer");

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
      choices: ["department", "role", "employee"]
    }).then(function(answer){
        switch (answer.whatToAdd) {
            case "department":
                function addDepartment(){
                inquirer
                .prompt(
                    {
                  name: "employeeDepartment",
                  type: "input",
                  message: "What department is this employee in?"
                }
                ).then(function(answer) {
                  var query = `INSERT INTO department (departmentName) VALUES (?)`;
                  connection.query(query, [answer.employeeDepartment], function(err, res) {
                      if (err){
                          console.log("something bad happened....")
                          console.log(err)
                          return
                      }
                })})}
                addDepartment();
              break;
            case "role":
              function addRole()
              {
                inquirer
                .prompt([
                    {
                  name: "roleTitle",
                  type: "input",
                  message: "What is this employee's title?"
                },
                {
                    name: "roleSalary",
                    type: "input",
                    message: "What is this employee's salary?"
                },
                {
                    name: "departmentID",
                    type: "number",
                    message: "What is the department id?"
                }
            ]).then(function(answer) {
                  var query = `INSERT INTO role_table (title, salary, department_id) VALUES (?, ?, ?)`;
                  connection.query(query, [answer.roleTitle, answer.roleSalary, answer.departmentID], function(err, res) {
                      if (err){
                          console.log("something bad happened....")
                          console.log(err)
                          return
                      }
                })})}
                addRole();
              break;
            case "employee":
                function addEmployee()
                {
                  inquirer
                  .prompt([
                      {
                    name: "firstName",
                    type: "input",
                    message: "What is this employee's first name?"
                  },
                  {
                      name: "lastName",
                      type: "input",
                      message: "What is this employee's last name?"
                  },
                  {
                      name: "roleID",
                      type: "number",
                      message: "What is this employee's role id?"
                  },
                  {
                    name: "managerID",
type: "number",
message: "What is this employee's manager's ID?"
                  }
              ]).then(function(answer) {
                    var query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
                    connection.query(query, [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res) {
                        if (err){
                            console.log("something bad happened....")
                            console.log(err)
                            return
                        }
                  })})}
                  addEmployee();
              break;
          }
    })

}

function viewFunction() {
  console.log("view function logs");
}

function updateFunction() {
  console.log("update function logs");
}

    // console.log("Add function still works")
    // var query = "INSERT INTO employee (first_name, last_name, role_id, manager_id)";