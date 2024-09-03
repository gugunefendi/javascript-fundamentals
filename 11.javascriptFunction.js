/*
Javascript Function

function adalah sebuah blok kode yang dirancang untuk melakukan tugas tertentu
function di eksekusi ketika sesuatu memanggilnya

contoh membuat function:
function sayHello(name, age) {
    console.log("Hello " + name);
    console.log("Your age is " + age);
}

pemanggilan function dalam javscript:
1. ketika suatu peristiwa terjadi (saat button di klik)
2. ketika dipanggil (dipanggil) dari kode javascript
3. secara otomatis (di inisialisasi sendiri)

Return
ketika suatu function mencapai suatu statement 'return', function tersebut berhenti di eksekusi
jika function dipanggil dari suatu statement, Javascript akan kembali untuk mengeksekusi kode setelah pernyataan pemanggilan
function sering menghitung "return value". Return value tersebut di kembalikkan ke pemanggil

contoh:
// hitung hasil perkalian dua angka dan kembalikan hasilnya

let x = myFunction(4, 3); // x memanggil function myFunction

function myFunction(a, b) {
    return a * b; // myFunction mengembalikkan hasil perkalian a dan b
}

Operator
Operator () memanggil function
contoh:
function toCelcius(fahrenheit) {
    return 5 / 9 * (fahrenheit - 32);
}

let value = toCelcius(77); // gunakan operator () untuk memanggil function toCelcius

Memangil function tanpa () akan mengembalikam function tersebut, bukan hasil dari function tersebut
let value = toCelcius;
console.log(value); // akan mengembalikan function toCelcius

Variabel Lokal
variabel yang di deklarasikan didalam function, menjadi lokal terhadap function tersebut
function myFunction() {
    let carName = "Volvo"; // variabel carName hanya bisa diakses didalam function myFunction
}
console.log(carName); // error karena variabel carName tidak dapat diakses diluar function myFunction

*/

// membuat function
function sayHello(name, age) {
    console.log("Hello " + name + " " + "you are " + age + " " + "years old");
}

// memanggil function
sayHello("John", 25); // output: Hello John

// function return
function calculate(num1, num2) {
    return num1 * num2;
}

let result = calculate(5, 10); // result = 50
console.log(result); // output: 50

//local variables
function getEmployees() {
    let userName = 'Gunawan';
    console.log(userName); // output: Gunawan
}
getEmployees();
// console.log(userName); // error: userName is not defined

function testFunction() {
    console.log("Test Function");
}
testFunction(); // output: Test Function
let test = testFunction; // manggil function tanpa ()  output: function testFunction() {... }
console.log(test);