/**
 * String pada javascript bisa menggunakan kutip 1 ( 'String' ) atau kutip 2 ( "String" )
 * 
 * Tanda kutip didalam tanda kutip, contoh:
 * 1. "It's alright"
 * 2. "He is called 'John'"
 * 3. 'He is called "John"
 * 
 * Template String ( ` ` ) atau tanda petik terbalik
 * Template string diperkenalkan pada ES6
 * Dengan template string kamu bisa memasukkan kutip '' atau "" didalam string, contoh:
 * `He is often called "Jhonny"`
 * Template string memperbolehkan multi-line string, contoh:
 * let hello =`Hello
 * World,
 * I love
 * Javascript`;
 * 
 * Panjang string
 * Untuk menghitung panjang string gunakan fungsi length(), contoh:
 * var = "This is a string";
 * console.log(var.length);
 * 
 * Escape character / karakter pelarian
 * kutip 2 didalam kutip 2 atau kutip 1 didalam kutip1 akan menghasilkan error, solusinya gunakan garis miring terbalik ( \ )
 * let text = "We are the so-called "Vikings" from the north."; // ini akan error
 * let text = "We are the so-called \"Vikings\" from the north."; // ini cara yang benar
 * let username = 'Nama saya adalah 'Gunawan\'; // ini akan error
 * let username = 'Nama saya adalah \'Gunawan\''; // ini cara yang benar
 * let text = 'satu \ 1'; // output satu 1
 * let text = 'dua \\ 2'; // output dua \ 2
 * 
 * 
 */
