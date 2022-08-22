const inquirer = require("inquirer");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;

inquirer.prompt([
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
]);

function startPrompts() {
	inquirer.prompt(questions);
}

startPrompts();
