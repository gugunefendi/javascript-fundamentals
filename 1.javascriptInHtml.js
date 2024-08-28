/*
Di dalam halaman HTML, kode Javascript dapat di sisipkan diantara tag <script> { kode javscript} </script>.
contoh menyisipkan kode javascript didalam halaman HTML:
<html>
    <head>
    </head>
    <body>
        <script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
    </body>
</html> 
*/

/*
Javascript didalam tag <head> atau <body>?
Javascript bisa di tempatkan didalam tag <head> atau didalam tag <body> atau di keduanya:

Contoh javascript didalam tag <head>:
<html>
    <head>
        <script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
    </head>
    <body>
    </body>
</html>

Contoh javscript didalam tag <body>:
<html>
    <head>
    </head>
    <body>    
        <script>        
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
    </body>
</html>

Contoh Javascript didalam tag <head> dan <body>:
<html>
    <head>
        <script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>
    </head>
    <body>
        <script>
            document.getElementById("demo").innerHTML = "My Second JavaScript";
        </script>                            
    </body>                                
</html>
*/

/*
Eksternal Javascript
Javascript juga bisa di simpan sebagai file eksternal.
Contoh menyisipkan kode javascript dari file eksternal:
<html>
    <head>    
        <script src="myScript.js"></script>
    </head>
    <body>
        <h1 id="demo"></h1>
    </body>
</html>
*/

/*
NOTE
1. Jika menempatkan script didalam tag <head>, maka script akan dijalankan sebelum halaman dimuat.
2. Menempatkan script dibawah tag <body> meningkatkan kecepatan tampilan, karena interpretasi script memperlambat proses loading halaman.
3. Tambahkan properti 'defer' supaya Javascript eksternal dijalankan setelah HTML selesai loading
4. Tambahkan properti 'async' supaya Javascript eksternal dijalankan secara asinkron setelah browser selesai mengunduh file script.

Keuntungan menggunakan Javascript eksternal:
1. Memisahkan HTML dan Javascript
2. Lebih mudah dibaca dan dirawat
3. File Javascript yang di cached dapat mempercepat loading halaman
*/