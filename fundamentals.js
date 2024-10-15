// 01. How to declare a variable using let and const
const fatherName = "Arnold";
let season = "Rainy";
season = "Winter";

console.log(season);


/*
* 02. ----- Conditions -----
* 6 Basic Conditions: >, <, ===, !==, <=, >= 
* Multiple Conditions: &&, ||
*/

if (fatherName === "arnold" || season === "Rainy") {
    console.log("Yes");
}
else if (fatherName === "Arnold") {
    console.log("No");
}
else {
    console.log("Very Good");
}


/*
* 03. ----- Array Declare -----
* index, 
* length, push, pop
*/
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

console.log(numbers);


// 04. for Loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}


// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(10, 8);
console.log(output);


// 6. Object
// 3 ways to access property by name 
const student = {
    name: "SRK",
    age: 60,
    movies: ["Ra-One", "Paathan", "Jawan"]
}
const myVariable = "age";

console.log(student.age); // direct by property
console.log(student["age"]);// access via property name string 
console.log(student[myVariable]); // access via property name in a variable