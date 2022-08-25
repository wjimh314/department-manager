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
					"add a role",
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
				case "add a department":
					addADepartment();
					break;
				case "add a role":
					addARole();
					break;
				case "add an employee":
					addAnEmployee();
					break;
				case "update an employee role":
					updateEmployeeRole();
					break;
				case "exit":
					connection.end();
					console.log("\n Thanks for using! \n");
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
			//console.log(res);
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
				`INSERT INTO departments SET ?`,
				{
					department_name: response.newDepartment,
				},
				(err, res) => {
					console.log("${response.newDepartment}");
					startTracker();
				}
			);
		});
};

addARole = () => {
	connection.query("SELECT * FROM departments;", (err, res) => {
		if (err) throw err;
		let departments = res.map((departments) => ({
			name: departments.department_name,
			value: departments.id,
		}));
		console.log(departments);
		inquirer
			.prompt([
				{
					name: "title",
					type: "input",
					message: "what role would you like to add",
				},
				{
					name: "salary",
					type: "input",
					message: "how much do you want to pay for this role?",
				},
				{
					name: "departmentName",
					type: "list",
					message: "what department will this be added to?",
					choices: departments,
				},
			])
			.then((response) => {
				console.log(response);
				connection.query(
					"INSERT INTO roles SET ?",
					{
						title: response.title,
						salary: response.salary,
						department_id: response.departmentName,
					},
					(err, res) => {
						if (err) throw err;
						console.log("${response.title}");
						startTracker();
					}
				);
			});
	});
};

addAnEmployee = () => {
	connection.query("SELECT * FROM roles;", (err, res) => {
		if (err) throw err;
		let employeerole = res.map((role) => ({
			name: role.title,
			value: role.id,
		}));
		//console.log(departments);
		inquirer
			.prompt([
				{
					name: "firstName",
					type: "input",
					message: "new employees first name?",
				},
				{
					name: "lastName",
					type: "input",
					message: "new employee last name?",
				},
				{
					name: "title",
					type: "list",
					message: "what will their role be?",
					choices: employeerole,
				},
				{
					name: "managerName",
					type: "input",
					message: "what is the managers name?",
				},
			])
			.then((response) => {
				console.log(response);
				connection.query(
					"INSERT INTO employee SET ?",
					{
						first_name: response.firstName,
						last_name: response.lastName,
						role_id: response.title,
						manager_id: response.managerName,
					},
					(err, res) => {
						//if (err) throw err;
						console.log(
							`${response.firstName} ${response.lastName} was inserted into employee`
						);
						startTracker();
					}
				);
			});
	});
};

updateEmployeeRole = () => {
	connection.query(`SELECT * FROM roles ORDER BY title;`, (err, res) => {
		//if (err) throw err;
		let roles = res.map((role) => {
			return {
				name: role.title,
				value: role.id,
			};
		});
		connection.query(
			`SELECT * FROM employee ORDER  BY first_name;`,
			(err, res) => {
				//if (err) throw err;
				let employee = res.map((employee) => {
					//console.log(res);
					return {
						name: employee.first_name + " " + employee.last_name,
						value: employee.id,
					};
				});

				inquirer
					.prompt([
						{
							name: "employee",
							type: "list",
							message: "which employee would you like to update",
							choices: employee,
						},
						{
							name: "newRole",
							type: "list",
							message: "what is the new role?",
							choices: roles,
						},
					])
					.then((response) => {
						connection.query(
							`update employee SET ? WHERE ?`,
							[
								{
									role_id: response.newRole,
								},
								{
									id: response.employee,
								},
							],
							(err, res) => {
								//if (err) throw err;
								startTracker();
							}
						);
					});
			}
		);
	});
};

startTracker();
