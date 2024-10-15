const numbers = [89, 35, 98, 12];
const Hero = {
    name: "SRK",
    age: 60,
    movies: ["Ra-One", "Paathan", "Jawan"]
}

// 1. Template String
const aboutHero = `Name of my favorite hero is ${Hero.name}. His age is ${Hero.age}. His movies number is ${numbers[2]}. My favorite movie is ${Hero.movies[0]}.`;

console.log(aboutHero);

// 2. Arrow Function
const getFiftyFive = () => 55;
console.log(getFiftyFive());

const addSixtyFive = num => num + 65;
console.log(addSixtyFive(35));

const isEven = x => x % 2 == 0;
console.log(isEven(69));

const addThree = (x, y, z) => x + y + z;
console.log(addThree(10, 20, 30));

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
console.log(doMath(6, 6));


// Spread Operator
const newNumbers = [...numbers];
// Create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);