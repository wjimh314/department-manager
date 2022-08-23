const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const util = require("util");

let connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "tothetop",
	database: "et_db",
});

const questions = [
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
		],
	},
];

function startPrompts() {
	inquirer.prompt(questions);
}

startPrompts();
