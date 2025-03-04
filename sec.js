// Dummy JavaScript Code

// Function to generate a random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Dummy data
const users = [
    { id: 1, name: "David" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Frank" }
];

// Function to find a user by ID
function findUserById(id) {
    return users.find(user => user.id === id) || null;
}

// Logging outputs
console.log("Random Number:", getRandomNumber(1, 100));
console.log("Reversed String:", reverseString("JavaScript"));
console.log("User with ID 2:", findUserById(2));
