const cart = [
{ name: 'Laptop', quantity: 1, price: 55000 },
{ name: 'Mouse', quantity: 2, price: 700 },
{ name: 'Keyboard', quantity: 1, price: 1500 },
{ name: 'Monitor', quantity: 2, price: 12000 },
{ name: 'Headphones', quantity: 1, price: 2500 },
{ name: 'USB Cable', quantity: 3, price: 250 },
{ name: 'Webcam', quantity: 1, price: 3200 },
{ name: 'External Hard Drive', quantity: 1, price: 4800 },
{ name: 'Laptop Stand', quantity: 2, price: 900 },
];

function calculateTotalPrice(cart) {
let total = 0;

for (let product of cart) {
    total += product.price * product.quantity;
}

return total;
}

console.log("Total Price:", calculateTotalPrice(cart));