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
					"view all employees",
					"add a department",
					" add a role",
					"add an employee",
					"update an employee role",
					"exit",
				],
			},
		])
		.then((response) => {
			switch (options.response) {
				case "View all departments":
					viewAllDepartments("SELECT * FROM departments");
					break;
				case "View all roles":
					viewAllRoles();
					break;
				case "View all employees":
					viewAllEmployees();
					break;
				case "View all employees by manager":
					viewAllEmployeesByManager();
					break;
				case "Add a department":
					addADepartment();
					break;
				case "Add a role":
					addARole();
					break;
				case "Add an employee":
					addAnEmployee();
					break;
				case "Update employee's role":
					updateEmployeeRole();
					break;
				case "Update employee's manager":
					updateEmployeesManager();
					break;
				case "Remove a department":
					removeADepartment();
					break;
				case "Remove a role":
					removeARole();
					break;
				case "Remove an employee":
					removeAnEmployee();
					break;
				case "View total salary of department":
					viewDepartmentSalary();
					break;
				case "Exit program":
					connection.end();
					console.log(
						"\n You have exited the employee management program. Thanks for using! \n"
					);

					break;
			}
		});

	viewAllDepartments = () => {
		connection.query(
			`SELECT * FROM departments ORDER BY department_id ;`,
			(err, res) => {
				if (err) throw err;
				console.table(results);
				startApp();
			}
		);
	};

	viewAllRoles = () => {
		connection.query(`SELECT * FROM employees ;`, (err, res) => {
			if (err) throw err;
			console.table(results);
			startApp();
		});
	};
};
