/*
Variabel javascript dapat di deklarasikan dengan 4 cara:
1. Otomatis
2. Dengan kata kunci var // untuk global scope
3. Dengan kata kunci let // untuk block scope
4. Dengan kata kunci const // untuk block scope dan tidak bisa diubah nilainya atau tipenya

Satu statement banyak variabel
Kamu bisa mendeklarasikan beberapa variabel dalam satu statement.

Undefined
Sebuah variabel yang tidak di deklarasikan dengan sebuah value maka akan 'undefined'.

Mendeklarasikan ulang variabel
Gunakan keyword var untuk mendeklarasikan ulang variabel tanpa kehilangan value aslinya.
*/


/*
Otomatis.
Meskipun x tidak di deklarasikan dengan keyword var, let dan const.
x sudah di deklarasikan menjadi sebuah variabel.
*/
x = 10;
console.log(x);

// menggunakan keyword var
var y = 20;
console.log(y);

// menggunakan keyword let
let z = 30;
console.log(z);

// menggunakan keyword const
const a = 40;
console.log(a);

// gunakan let untuk variabel yang akan diubah nilainya
// gunakan const untuk variabel yang tidak akan diubah nilainya atau tipenya
const productOne = 1000;
const productTwo = 2000;
let totalPrice = productOne + productTwo;
console.log(totalPrice);

// satu statment banyak variabel
let username, age, city;
username = "John";
age = 25;
city = "New York";
console.log(username, age, city);

/*
Undefined
Mendeklarasikan sebuah variabel tanpa memberikan sebuah value maka akan undefined
*/
let numberPhone;
console.log(numberPhone);

/*
Mendeklarasikan ulang variabel
Gunakan keyword var untuk mendeklarasikan ulang variabel tanpa kehilangan value aslinya.
*/
var myNumber = 10;
var myNumber;
console.log(myNumber);