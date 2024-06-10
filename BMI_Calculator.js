import inquirer from "inquirer";
console.log("***Rectangular Area Calculator***");
let length = await inquirer.prompt([
    {
        name: "length1",
        type: "number",
        message: "Enter lenght in meter:"
    }
]);
let width = await inquirer.prompt([
    {
        name: "width1",
        type: "number",
        message: "Enter width in meter:"
    }
]);
let rectangular_area = (length.length1 * width.width1);
console.log(rectangular_area, "meter rectangular area");
