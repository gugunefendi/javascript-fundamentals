// display object properties
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("Name: " + person.name + ", Age: " + person.age + ", City: " + person.city);

// display using loop
let text = "";
for (let key in person) {
    text += key + ": " + person[key] + ", ";
}
console.log(text);

// display using Object.values()
let values = Object.values(person);
console.log(values);

// display using object.entries()
let x = Object.entries(person);
console.log(x);

// display using JSON.stringify()
let y = JSON.stringify(person);
console.log(y);