// 4 ways to declare variables
username = 'Gunawan'; // automatically declared as variable
var x = 10; // using var keyword.
let y = 20; // using let keyword
const z = 30; // using const keyword

// Note
// alway declare variable
// use var for older browser
// use const for values should not be changed
// use const for type should not be changed
// only use let if you can't use const

let name = 'Gunawan Efendi'; // equal (=) is asignment opertator
if(name === 'Gunawan Efendi') { // is equal to
    console.log(name);
}

// One statement many variables
let firsName = 'John', lastName = 'Doe', age = 30;
console.log(firsName, lastName, age); // John Doe 30

// Value undefined
let score;
console.log(score); // undefined

// Re-declare variable
var fruit = 'Apple';
var fruit; // use var if you want re-declare a variable
console.log(fruit); // Apple

let food = 'Pizza';
// let food; // re-declare using let will throw an error
console.log(food);

const users = ['John', 'Mary', 'Peter'];
// const users = ['Jane', 'Tom', 'Lisa']; // re-declare using const will throw an error
console.log(users);