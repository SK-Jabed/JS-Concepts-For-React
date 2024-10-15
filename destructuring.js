// 1. Array Destructuring
const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]

const [x, y] = numbers;

function getValues(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34]

const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));


const Hero = {
    name: "SRK",
    age: 60,
    movies: ["Ra-One", "Paathan", "Jawan"]
}

const [firstMovie, secondMovie] = student.movies;


// Object Destructuring
// const { name, age } = { name: "alu", age: 14 };
// const { name, age } = { id: 12, name: "alu", salary: 3400, age: 14 };

const employee = {
    id: "VS Code",
    designation: "Developer",
    machine: "MacBook",
    languages: ["HTML", "CSS", "JS", "React JS", "Express JS"],
    specification: {
        height: 66,
        weight: 68,
        address: "Dhaka",
        drink: "Water",
        watch: {
            color: "Black",
            price: 500,
            brand: "Garmin"
        }
    }
}

const { machine, id } = employee;
// const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;