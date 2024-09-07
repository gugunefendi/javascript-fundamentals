// Object method
let person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 25,
    id: 112,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// akses object method
let personName = person.fullName();
console.log(personName);

// menambahkan method pada object method
let personTwo = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 25,
    id: 112,
    fullName: function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}
let personNameTwo = personTwo.fullName();
console.log(personNameTwo);

