// Mengakses property pada object
let person = { name: "Jhon", age: 30 };
let name = person["name"];
let age = person.age;
console.log(name);
console.log(age);

// Menambahkan properti pada object
person.address = "Jl. Jendral Sudirman No. 123";
console.log(person.address);

console.log(person);

// menghapus properti pada object
delete person.address;
console.log(person);

// object bersarang
let personTwo = {
    name: "Jim",
    age: 25,
    cars: {
        car1: "Toyota",
        car2: "Honda",
        car3: "Ford"
    }
}
let car1 = personTwo.cars.car1;
console.log(car1);

console.log(personTwo);

// menghapus properti pada object bersarang
delete personTwo.cars.car2;
console.log(personTwo);