import inquirer from "inquirer";

let first_number = await inquirer.prompt(
    [
        {
            name: "firsrOperation",
            type: "number",
            message: "Enter First Number:"
        }
    ]
);

let second_number = await inquirer.prompt(
    [
        {
            name: "secondOperation",
            type: "number",
            message: "Enter Second Number:"
        }
    ]
);

let operation = await inquirer.prompt(
    [
        {
            name: "operate",
            type: "list",
            message: "Which Operation are perform:",
            choices: ["addition", "subtraction", "multiplication", "division", "module", "exponentionation", "BMI"]
        }
    ]
);

if (operation.operate === "addition"){
    console.log(first_number.firsrOperation + second_number.secondOperation)
}
else if (operation.operate === "subtraction"){
    console.log(first_number.firsrOperation - second_number.secondOperation)
}
else if (operation.operate === "multiplication"){
    console.log(first_number.firsrOperation * second_number.secondOperation)
}
else if (operation.operate === "division"){
    console.log(first_number.firsrOperation / second_number.secondOperation)
}
else if (operation.operate === "module"){
    console.log(first_number.firsrOperation % second_number.secondOperation)
}
else if (operation.operate === "exponentionation"){
    console.log(first_number.firsrOperation ** second_number.secondOperation)
}
else if (operation.operate === "BMI"){
    console.log("BMI Calculator");
    let BMI = await inquirer.prompt(
        [
            {
                name: "calculator",
                type: "list",
                message: "Which BMI use:",
                choices: ["Area of triangle", "Area of rectangle", "Area of paralelogram"]
            }
        ]
    );
    if (BMI.calculator === "Area of triangle"){
        console.log("A = 1/2 (b * h)");
        console.log((first_number.firsrOperation * second_number.secondOperation)/2);
    }
    else if (BMI.calculator === "Area of rectangle"){
        console.log("A = l * w");
        console.log(first_number.firsrOperation * second_number.secondOperation);
    }
    else if (BMI.calculator === "Area of paralelogram"){
        console.log("A = b * h");
        console.log(first_number.firsrOperation * second_number.secondOperation);
    }
}