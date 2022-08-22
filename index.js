const inquirer = require("inquirer");
const questions = [
	{
		type: "input",
		name: "managerName",
		message: "what is the managers name",
	},
];

function startPrompts() {
	inquirer.prompt(questions);
}

startPrompts();
