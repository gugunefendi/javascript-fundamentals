/*

Operator digunakan untuk melakukan perhitungan matematika dan logika

Tipe-tipe Operator pada Javascript
1. arithmatic operators: +, -, *, /, %
2. assignment operator: =
3. comparison operators: >, <, >=, <=, ==,!=
4. logical operators: &&, ||,!
5. string operators: +
6. bitwise operators: &, |, ^, ~, <<, >>
7. tenary operator:? :
8. type operators: typeof, instanceof

Arithmatic Operators
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Division Remainder)
++	        Increment
--	        Decrement

Assignment Operators
Operator	Description Same As
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y

Comparison Operators
Operator	Description
==	        equal to
===	        equal value and equal type
!=	        not equal
!==	        not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	        less than or equal to
?	        ternary operator

String Comparison
Semua operator perbandingan di atas dapat digunakan juga untuk membandingkan string

Menambahkan String dan Number
Menambahkan string dan number menggunakan operator + akan menghasilkan string

Logika Operator
Operator	Description
&&	        AND
||	        OR
!	        NOT

Tipe Operator Javascript
Operator	    Description
typeof	        mengembalikan tipe data dari suatu variable
instanceof	    mengembalikan true jika objek dapat dijadikan instance dari suatu kelas

*/

// Arithmatic Operator
var a = 10;
var b = 5;
var addition = a + b; // addition
var subtraction = a - b; // subtraction
var multiplication = a * b; // multiplication
var division = a / b; // division
var modulus = a % b; // modulus
var increment = ++a; // increment
var decrement = --a; // decrement

console.log(increment);
console.log(decrement);

// Assignment Operator
var c = 10;
c += 5; // c = c (10) + 5
console.log(c)

var d = 22;
d -= 7; // d = d (22) - 7
console.log(d);

// Comparison Operator
var e = '10';
var f = 10;
if(e == f){ // true
    console.log("e and f are equal");
} else {
    console.log("e and f are not equal");
}

if(e === f) { // false
    console.log("e and f are equal value and equal type");
} else {
    console.log("e and f are not equal value or not equal type");
}

var g = 20;
var h = 10;
var i = g > 10 ? `${g} is greater than ${h}` : `${g} is not greater than ${h}`;
console.log(i);

// Comparisan Operator juga bisa digunakan untuk string
var j = "A";
var k = "B";
var l = j < k;
console.log(l);

// Penambahan String
var m = 10;
var n = '5';
var o = m + n; // o = "105"
console.log(o);

var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;
console.log(fullName);

var hello = "Hello";
hello += " World";
console.log(hello);

// Menambahkan angka dan string
// Menambahkan 2 angka akan mengembalikkan hasil penjumlahan, namun menambahkan string dan angka akan menghasilkan string
var p = 10 + 10;
var q = "5" + 10;
var r = "Hello" + 100;
console.log(p);
console.log(q);
console.log(r);

var s = true;
if(!s) {
    console.log("s is false");
} else {
    console.log("s is true");
}
var t = typeof(s); // mencetak tipe data dari sebuah variable
console.log(t);