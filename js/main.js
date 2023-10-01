import * as inquirer from "inquirer";
import chalk from "chalk";
//We will use operator:
var operator;
(function (operator) {
    operator["ADD"] = "+";
    operator["SUBSTRACTION"] = "-";
    operator["MULTIPLICATION"] = "*";
    operator["DIVISION"] = "/";
})(operator || (operator = {}));
const prompt = inquirer.createPromptModule();
function correctNumber(input) {
    if (isNaN(parseFloat(input))) {
        return chalk.bgRed("please enter a correct number");
    }
    else {
        return true;
    }
}
async function mainCalculator() {
    const input = await prompt([
        {
            type: "input",
            name: "firstnumber",
            message: chalk.bgBlueBright("Enter your first number:"),
            validate: correctNumber,
        },
        {
            type: "list",
            name: "operators",
            message: "Select Operator:",
            choices: ["+", "-", "*", "/"],
        },
        {
            type: "input",
            name: "secondnumber",
            message: chalk.bgBlueBright("Enter your second number:"),
            validate: correctNumber,
        },
    ]);
    const firstnumber = parseFloat(input.firstnumber);
    const secondnumber = parseFloat(input.secondnumber);
    const SelectOperator = input.operators;
    let finalResult;
    if (SelectOperator === operator.ADD) {
        finalResult = firstnumber + secondnumber;
        console.log(chalk.green.bgBlueBright(`Final Result is : ${finalResult}`));
    }
    else if (SelectOperator === operator.SUBSTRACTION) {
        finalResult = firstnumber - secondnumber;
        console.log(chalk.greenBright(`Final Result is : ${finalResult}`));
    }
    else if (SelectOperator === operator.MULTIPLICATION) {
        finalResult = firstnumber * secondnumber;
        console.log(chalk.red.bgYellowBright(`Final Result is : ${finalResult}`));
    }
    else if (SelectOperator === operator.DIVISION) {
        finalResult = firstnumber / secondnumber;
        console.log(chalk.red.bgCyanBright(`Final Result is : ${finalResult}`));
    }
}
mainCalculator();
export default mainCalculator;
