// while loop

let i = 1;
console.log(`\n\n ********** Table of 4 **********\n`)
while (i<=10){
    console.log("4 x", i, "=", i*4);
    i++
};

let a = 0;
let guest: string[] = ["bisma", "aamna", "safia", "rohi", "laiba"];
console.log(`\n\n ********** Guest List **********\n`);
while (a<guest.length){
    console.log("i will invite",guest[a]);
    a++
};


// for loop

console.log(`\n\n ********** for Loop in Simple **********\n`);
for (let b=1; b<=10; b++){
    console.log("4 x", b, "=", b*4)
};

console.log(`\n\n ********** for Loop in Array **********\n`);
let friends = ["zaib", "fadi", "qaisar"];
for(let c=0; c<friends.length; c++){
    console.log("my friend name is",friends[c]);
};


// Tuples

 // type array
 // pre define length
 // index type define

 console.log(`\n\n ********** Tuples in Simple **********\n`);
 let mobileBrands :[string,string,string,string] = ["Nokia", "iPhone", "Matrola", "Samsong"];
 console.log(mobileBrands);


 console.log(`\n\n ********** Tuples in Dynamic **********\n`);
 
 type classInfo = readonly [string, number, boolean]
 let Stuents_01 : classInfo = ["rimsha", 24, true];
 let Stuents_02 : classInfo = ["fadi", 20, false];
 let Stuents_03 : classInfo = ["samra", 21 ,true];
 let Stuents_04 : classInfo = ["danyal", 23, false];
 let Stuents_05 : classInfo = ["warda", 26, true];

 let display: (person: classInfo) => void = (person: classInfo) :void => {
    const [name, age, annual_result] =person;
    console.log(`Name: ${name}, Age: ${age}, Annual result: ${annual_result ? "Pass" : "Fail"}`);
 };

 display(Stuents_01);
 display(Stuents_02);
 display(Stuents_03);
 display(Stuents_04);
 display(Stuents_05);

 console.log(`\n\n Rest & Sprad Function \n`)

 function mobiles(...brands: string[]){
    console.log(brands);
 }
 mobiles("nokia", "iPhone", "matrola");