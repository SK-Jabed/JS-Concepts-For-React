const products = [
    {name: "Laptop", price: 70000, brand: "HP", color: "Dark Gray"},
    {name: "Phone", price: 140000, brand: "Iphone", color: "Dark Blue"},
    {name: "Watch", price: 3000, brand: "Casio", color: "Black"},
    {name: "Sunglass", price: 500, brand: "Ray", color: "Black"},
    {name: "Camera", price: 65000, brand: "Canon", color: "Gray"}
];
// 01. Map
const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);


// ForEach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

});


// 03. Filter
const specificName = products.filter(p => p.name.includes("n"));
console.log(specificName);


//4. Find
const special = products.find(p => p.name.includes('n'));
console.log(special);