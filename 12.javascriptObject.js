/*
Javascript Object
Object di kehidupan nyata seperti:
Object: Handphone
Porperties: Nama Handphone, Tipe Handphone, Deskripsi Handphone, Harga Handphone
Methods: Menelpon, Mengirim SMS, Mengirim Email, Membatalkan Panggilan

Javascript Object
Object adalah variabel juga namun object dapat menyimpan banyak value
contoh:
let handphone = { type: 'iPhone 11', brand: 'Apple', price: 1000000, description: 'Sangat bagus' }; // object handphone memiliki banyak value

Mendefinisikan Object Javascript
1. Menggunakan object literal
2. Menggunakan keyword new 
3. menggunakan object constructor

JavaScript Object Literal atau Inisialisasi Object
Object literal adalah daftar pemasangan key:nilai atau disebut juga nama:nilai didalam kurung kurawal {}.
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

Membuat object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Membubat object kosong
const person = {};

// Menambahkan properti pada object kosong
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


Membuat object menggunakan keyword new
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

Object Properties
Value yang diberi nama, didalam object javscript disebut properties
Property	Value
firstName	John
lastName	Doe
age	      50
eyeColor	blue

Mengakses properti pada object
ada 2 cara:
1. menggunakan dot notation (person.firstName)
2. menggunakan square bracket notation (person["firstName"])

Object Methods
Kita juga bisa membuat sebuah method pada object
contoh:
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
keyword this merujuk pada object person
*/

// membuat object dengan 4 property
const person = { name: 'Jhon', age: 23, address: 'Jakarta'};
console.log(person);

// membuat object kosong dan menambahkan properti ke object kosong tersebut
const personTwo = {};
personTwo.name = 'Jane';
personTwo.age = 25;
personTwo.address = 'Bandung';
console.log(personTwo);

// membuat object menggunakan keyword new
const personThree = new Object();
personThree.name = 'Jimmy';
personThree.age = 27;
personThree.address = 'Surabaya';
console.log(personThree);

// akses properti pada object
let name = person.name; // menggunakan dot notation
let address = person["address"]; // menggunakan square bracket notation
console.log("Name: " + " " + name + " " + "Address: " + " " +  address);