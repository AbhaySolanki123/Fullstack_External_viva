
const User = {
    id: 1,
    name: "Abhay",
    email: "abhay@gmail.com",
    passwordHash: "hashed_password",
    role: "customer",
    createdAt: new Date()
};

const Product = {
    id: 101,
    name: "Laptop",
    price: 55000,
    stock: 10,
    category: "Electronics"
};

const Order = {
    id: 1001,
    userId: 1,
    products: [
        {
            productId: 101,
            name: "Laptop",
            quantity: 1,
            price: 55000
        },
        {
            productId: 102,
            name: "Headphones",
            quantity: 2,
            price: 3000
        }
    ],
    totalAmount: 61000,
    status: "Pending",
    createdAt: new Date()
};

console.log(User);
console.log(Product);
console.log(Order);