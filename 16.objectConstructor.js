// create object constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var personOne = new Person("John", "Dhoe", 32, "Brown");
var personTwo = new Person("Jim", "Dhoe", 42, "Blue");
var personThree = new Person("Jun", "Dhoe", 31, "Dark");
console.log(personTwo);

// add propery to object
personTwo.job = "Software Engineer";
console.log(personTwo);

// constructor function method
function Employee(first, last, age, job) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.job = job;
    this.salary = function() {
        if(this.job === "Software Engineer") {
            return 'Rp.100.000.000';
        }
    }
}
var employee = new Employee("John", "Doe", 35, "Software Engineer");
var showEmployee = {};
for(let key in employee) {
    if(typeof employee[key] === "function") {
        showEmployee[key] = employee[key]();
    } else {
        showEmployee[key] = employee[key];
    }
}
console.log(showEmployee);