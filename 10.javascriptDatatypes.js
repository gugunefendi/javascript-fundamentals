/*
Javascript Memmiliki 8 Tipe Data:
1. String
2. Number
3. Bigint
4. Boolean
5. Null
6. Undefined
7. Symbol
8. Object

Tipe Data Object
Tipe data object dapat berisi object bawaan dan object yang ditentukan pengguna.

Tipe data object bawaan:
- Object
- Array
- Function
- Date
- Error
- RegExp

Konsep Tipe Data
Saat menambahkan angka dan string, javascript akan memperlakukan angka tersebut sebagai string
contoh:
let x = 16 + "Volvo"; // output: "16Volvo"
let y = "Volvo" + 16; // output: "Volvo16"

Javascript mengevaluasi ekspresi dari kiri ke kanan, urutan yang berbeda dapat menghasilkan hasil yang berbeda.
let x = 16 + 4 + "Volvo"; // output: "20Volvo"
let y = "Volvo" + 16 + 4; // output: "Volvo164"

Tipe Javascript bersifat dinamis, artinya variabel yang sama dapat digunakan untuk menampung tipe data yang berbeda.
let x;
x = 16;
x = "Volvo";
console.log(x); // output: "Volvo"

Tipe data string:
Dapat menggunakan kutip 1 atau kutip 2
// Using double quotes:
let carName1 = "Volvo XC60";
// Using single quotes:
let carName2 = 'Volvo XC60';

Kamu dapat menggunakan tanda kutip di dalam string, selama tanda kutip tersebut tidak cocok dengan tanda kutip yang ada di sekitar string tersebut:

Contoh
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';


Javascript Number
Semua angka dalam javascript adalah bilangan bulat, tidak ada tipe data float.
// With decimals:
let x1 = 34.00; 
console.log(x1); // output: 34

// Without decimals:
let x2 = 34;
console.log(x2); // output: 34

Javascript Boolean
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

Javascript array
const cars = ["Saab", "Volvo", "BMW"];

Javascript Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Javascript Type of
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

Javascript Undefined
Variabel tanpa nilai akan mengembalikkan tipe data undefined.
let x;
console.log(x); // output: undefined

Empty Values
Empty values disini adalah string kosong.
String kosong berbeda dengan undefined, string kosong dianggap legal dan memiliki tipe data string.
let car = "";    // The value is "", the typeof is "string"

*/

// numbers
let x = 10;
let y = 2.15;
console.log(typeof x, typeof y); // output: "number number"

// string
let userName = "John Doe";
let message = "Hi, my name is 'Gunawan'";
let bio = "";
console.log(typeof userName, typeof message, typeof bio); // output: "string"

// boolean
let isMarried = true;
let isSingle = false;
console.log(typeof isMarried, typeof isSingle); // output: "boolean boolean"

// undefined
let mediaSocial;
console.log(typeof mediaSocial); // output: "undefined"

// array
let fruits = ["apple", "banana", "orange"];
console.log(typeof fruits); // output: "object"
console.log(Array.isArray(fruits)); // output: true

// object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(typeof person); // output: "object" 

// Object bawaan dari Javscript
let date = new Date();
let getDate = date.getDate();
let getMonth = date.getMonth();
let year = date.getFullYear();

let error = new Error("Something went wrong");
console.log(error.message);

let regex = /[a-z]/g;
console.log(regex.test("Hello World")); // output: true

console.log(typeof date, typeof error, typeof regex); // output: "object object object"

console.log(year + "-" + (getMonth + 1) + "-" + getDate);