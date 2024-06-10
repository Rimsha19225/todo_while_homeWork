import inquirer from "inquirer";

let first_number =await inquirer.prompt(
    [
        {
            name: "first",
            type: "input",
            message: "Enter first number:"
        }
    ]
);

let second_number =await inquirer.prompt(
    [
        {
            name: "second",
            type: "input",
            message: "Enter first number:"
        }
    ]
);

let addition = first_number.first + second_number.second;
console.log(addition);