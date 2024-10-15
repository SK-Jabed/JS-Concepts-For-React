// 1. JSON => stringify, parse
const Hero = {
    name: "SRK",
    age: 60,
    movies: ["Ra-One", "Paathan", "Jawan"]
}
const heroJSON = JSON.stringify(Hero);
console.log(Hero);
console.log(heroJSON);

const heroObj = JSON.parse(heroJSON);
console.log(heroObj);


//2. Fetch
fetch("url")
    .then(res => res.json())
    .then(data => console.log(data));


// Keys, Values
const keys = Object.keys(Hero);
const values = Object.values(Hero);


// For 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 


// Add or Remove from an array
const products = [
    {name: "Laptop", price: 70000, brand: "HP", color: "Dark Gray"},
    {name: "Phone", price: 140000, brand: "Iphone", color: "Dark Blue"},
    {name: "Watch", price: 3000, brand: "Casio", color: "Black"},
    {name: "Sunglass", price: 500, brand: "Ray", color: "Black"},
    {name: "Camera", price: 65000, brand: "Canon", color: "Gray"}
];

const newProduct = {name: "Webcam", price: 7000, brand: "Lal"};

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];

// Create a new array without one specific item. Remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== "Phone");