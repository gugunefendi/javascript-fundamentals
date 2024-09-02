/*
JAVACRIPT CONST
Keyword const di perkenalkan pada ES6 (2015);
Variabel yang di definisikan dengan const tidak dapat di deklarasikan ulang / re-declare;
Variabel yang di definisikan dengan const tidak dapat menetapkan ulang nilainya / re-assign;
Variabel yang di definisikan dengan const memiliki block scope;

Kapan harus menggunakan const?
Selalu deklarasikan variable dengan const ketika nilainya tidak dapat diubah.
Gunakan const ketika kamu mendeklarasikan:
1. array baru
2. object baru
3. function baru
4. RegExp baru

Const pada array dan object
Const pada array dan object tidak mendefinisikan nilai konstan.
Namun mendefinisikan referensi konstan ke suatu nilai.
Kamu tidak dapat:
1. menetapkan kembali nilai konstant
2. menetapkan kembali array konstan
3. menetapkan kembali object konstan
Tapi kamu bisa:
1. mengubah elemen array konstan
2. mengubah properti object konstan

Block Scope
const memiliki scope blok, sama seperti let;
Kamu tidak dapat mendeklarasikan ulang variabel const di scope yang sama.

Difference Between var, let and const
        Scope	Redeclare	Reassign	Hoisted	Binds this
var	    No	    Yes	        Yes	        Yes	    Yes
let	    Yes	    No	        Yes	        No	    No
const	Yes	    No	        No	        No	    No

Mendeklarasikan ulang variabel yang sudah ada dengan keyword 'var' atau 'let' ke variabel const di scope yang sama tidak di ijikan:;
Re-assign atau menetapkan ulang variabel const didalam scope yang sama juga tidak di ijinkan;
Const juga bukan variabel hoisted: artinya kita dapat menggunakan variabel const sebelum variabel tersebut di deklarasikan;

*/

// Mengubah nilai / re-assign
const PI = 3.14;
// PI = 3; //error
// PI = PI + 1; //error
console.log(PI);

// Harus di berikan nilai ketika di deklarasikan
const APP_NAME = 'My App';
// Jika tidak di berikan nilai maka akan error
// const NAME; // error
NAME = 'My App';

// Array Const
const myCars = ['Toyota', 'Volvo', 'BMW'];
myCars[3] = 'Honda'; // kamu bisa mengubah elemen array const
myCars.push('Ford'); // kamu bisa menambah elemen array const
console.log(myCars);
// Namun kamu tidak dapar re-assign atau menetapkan ulang array const
const yourCars = ['Toyota', 'Volvo', 'BMW'];
// yourCars = ['Toyota', 'Volvo', 'Honda']; // error
console.log(yourCars);

// Object Const
const car = { type: 'Fiat', model: '500', color: 'White'};
car.color = 'Black'; // kamu bisa mengubah properti object const
car.owner = 'Gunawan'; // kamu bisa menambah properti object const
console.log(car);
// tapi kamu tidak dapat re-assign atau menetapkan ulang object const
const anotherCar = { type: 'Fiat', model: '500', color: 'White'};
// anotherCar = { type: 'Ford', model: 'Mustang', color: 'Red'}; // error
console.log(anotherCar);


// Block scope
const y = 10;
{
    const y = 20;
    console.log(y); // output 20
}
console.log(y); // output 10