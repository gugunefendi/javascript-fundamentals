/*
1. Let adalah variabel blok scope;
2. Let tidak dapat di deklarasikan ulang di scope yang sama;
3. Let tidak dapat di hoisting;

4. Var adalah variabel global scope;
5. Var dapat di deklarasikan ulang di scope yang sama;
6. Var dapat di hoisting; artinya: kita dapat menggunakan variabel tersebut sebelum variabel tersebut di deklarasikan.
*/

// 1. Let adalah variabel block scope
{
    let score = 100;
}
// console.log(score); // error

// 2. Let tidak dapat di deklarasikan ulang di scope yang sama
let personOne = 'John';
// let personOne = 'Jane'; // error
console.log(personOne);

{
    let personTwo = 'Adi';
    // let personTwo = 'Budi'; // error
}
let personTwo = 'Cici';
console.log(personTwo);

// 3. Let tidak dapat di hoisting;
personSix = 'Icha';
// let personSix = 'Amel';
console.log(personSix); // error



// 4. Var adalah variabel global scope
{
    var globalName = 'global';
}
console.log(globalName); // dapat diakses di luar scope

// 5. Var dapat di deklarasikan ulang di scope yang sama;
var personThree = 'Dani';
var personThree = 'Eva';
console.log(personThree); // output Eva

var personFour = 'Dina';
{
    var personFour = 'Cici';
}
console.log(personFour); // output Cici. Dapat di re-assign meski berbeda scope

// Var dapat di hoisting;
personFive = 'Hadi';
var personFive;
console .log(personFive); // output: Hadi