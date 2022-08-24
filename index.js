const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const util = require("util");
const PORT = process.env.PORT || 3001;
let connection = mysql.createConnection(
	{
		host: "localhost",
		port: 3306,
		user: "root",
		password: "tothetop",
		database: "et_db",
	},
	console.log(`Connected to the et_db; database.`)
);
console.table("The Employee Tracker");

startTracker = () => {
	inquirer
		.prompt([
			{
				type: "list",
				name: "options",
				message: "what would you like to do?",
				choices: [
					"view all departments",
					"view all roles",
					"view all employee",
					"add a department",
					" add a role",
					"add an employee",
					"update an employee role",
					"exit",
				],
			},
		])
		.then((response) => {
			console.log(response.options);
			switch (response.options) {
				case "view all departments":
					viewAllDepartments();
					break;
				case "view all roles":
					viewAllRoles();
					break;
				case "view all employee":
					viewAllEmployee();
					break;
				case "view all employees by manager":
					viewAllEmployeesByManager();
					break;
				case "add a department":
					addADepartment();
					break;
				case "add a role":
					addARole();
					break;
				case "add an employee":
					addAnEmployee();
					break;
				case "update employee's role":
					updateEmployeeRole();
					break;
				case "update employee's manager":
					updateEmployeesManager();
					break;
				case "remove a department":
					removeADepartment();
					break;
				case "remove a role":
					removeARole();
					break;
				case "remove an employee":
					removeAnEmployee();
					break;
				case "view total salary of department":
					viewDepartmentSalary();
					break;
				case "exit":
					connection.end();
					console.log(
						"\n You have exited the employee management program. Thanks for using! \n"
					);
					return;
				default:
					console.log("no match found");
					break;
			}
		});

	viewAllDepartments = () => {
		console.log("view all departments");
		connection.query(`SELECT * FROM departments `, (err, res) => {
			if (err) throw err;
			console.table("\n", res, "\n");
			console.log(res);
		});
		startTracker();
	};
	viewAllRoles = () => {
		console.log("working");
		connection.query(`SELECT * FROM roles `, (err, res) => {
			if (err) throw err;
			console.table("\n", res, "\n");
		});
		startTracker();
	};
};
viewAllEmployee = () => {
	console.log("view all employee");
	connection.query(`SELECT * FROM employee`, (err, res) => {
		if (err) throw err;
		console.table("\n", res, "\n");
	});
	startTracker();
};

addADepartment = () => {
	inquirer
		.prompt([
			{
				name: "newDepartment",
				type: "input",
				message: "department you would like to add?",
			},
		])
		.then((response) => {
			connection.query(
				`INSERT INTO department SET ?`,
				{
					department_name: response.newDept,
				},
				(err, res) => {
					//console.log(`success!`);
					startTracker();
				}
			);
		});
};

startTracker();
