/*
Kata kunci 'let' di perkenalkan di ES6 (2015).
Variabel yang di deklarasikan menggunakan 'let' harus di deklarasikan sebelum digunakan.
Variabel yang di deklarasikan menggunakan 'let' tidak bisa di deklarasikan ulang didalam scope yang sama.
*/

/*
Sebelum ES6 (2015) javascript tidak memiliki Block Scope.
Javascript hanya memiliki Global Scope dan Function Scope.
ES6 memperkenalkan 2 keyword baru yaitu let dan const.
Dua keyword ini menyediakan Block Scope.
*/

/*
Contoh:
{
    let x = 10;
}
console.log(x); // ini akan error, karena variabel x di deklarasikan di dalam block scope.
*/