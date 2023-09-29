import chalk from "chalk";
export function correctNumber(input: string): boolean | string {
    if (isNaN(parseFloat(input))) {
      return chalk.bgRed("please enter a correct number");
    } else {
      return true;
    }
  }