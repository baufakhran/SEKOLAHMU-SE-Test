# SEKOLAHMU-SE-Test

Folder backend-section berisi aplikasi restAPI untuk user (Menjawab soal backend no 2)

Folder frontend-section berisi aplikasi web (Menjawab soal frontend no 2)

## **Jawaban Pertanyaan Backend section**

1. Tingkat Kompleksitas berdasarkan pendekatan O(n)

- **fungsi mengakses elemen pertama array**

  ```
  def get_first_item(arr):
  return arr[0]
  ```

  Tingkat kompleksitas algoritma ini adalah O(1) atau bisa disebut dengan constant yang yang berarti berapa pun banyaknya input yang dimasukkan, proses yang dijalankan tetap hanya 1 proses saja

- **fungsi mengecek apakah ada nilai yang sama didalah sebuah array**

  ```
  def check_duplicate(arr):
    for outer in range(len(arr)):
      for inner in range(len(arr)):
        if outer == inner:
          continue
        if arr[outer] == arr[inner]:
          return true
    return false
  ```

  Tingkat kompleksitas algoritma ini adalah O(n^2). Kompleksitas tersebut bisa dilihat dari fungsinya yang mempunyai 2 nested loop sehingga kompleksitas nya menjadi n*n atau n^2. Walaupun Jumlah prosesnya dapat berkurang saat mendapatkan nilai yang sama, Pendekatan notasi O menggunakan asumsi worstcase yang dapat terjadi yang dalam hal ini tidak ada satupun nilai yang duplicate sehingga proses yang terjadi akan sebanyak n*n atau n^2

- **mencari bilangan fibonacci**

  ```
  def Fibonacci(number):
    if number <= 1:
      return number
    return Fibonacci(number - 2) + Fibonacci(number - 1)
  ```

  Tingkat kompleksitas algoritma ini adalah O(2^n) atau biasa disebut algoritma eksponensial. Hal ini dikarenakan fungsi tersebut akan menjalankan subproblem dimana subproblem tetapi subproblem yang sama akan menjalankan fungsi lebih dari sekali. Dengan menggunakan algoritma tersebut, untuk mencari Fibonacci(5) maka akan dijalankan proses sebanyak 2^5 atau 32 proses.

## **Jawaban Pertanyaan Frontend section**

1. Tingkat Kompleksitas berdasarkan pendekatan O(n)

   ```javascript
   if (true) {
     let first = 1
   }
   if (true) {
     var second = 10
   }
   console.log(first) // Pertanyaan 1
   console.log(second) // Pertanyaan 2
   ```

   Output yang dikeluarkan dari fungsi console.log(first) adalah error karena first tidak terdefinisi di scope dimana console.log(first) berada karena deklarasi variabel let first = 1 hanya dapat diakses dalam scope lokalnya yang dalam hal ini adalah skop pengondisian/(if). Sedangkan Output yang dikeluarkan dari console.log(second) adalah 10 karena deklarasi variabel menggunakan var dapat diakses secara global.

# **Petunjuk untuk menjalankan resAPI backend test**

Aplikasi restAPI pada backend test ini dibuat menggunakan node.js dan postgreSQL sehingga untuk itu pastikan untuk menginstal node.js, nodemon,PostgreSQL, serta sequelize-cli terlebih dahulu.

Berikut adalah langkah untuk menjalankan aplikasi rest API

1. \$npm install

   Untuk menginstal semua dependecies yang ada di package.json

2. Buat folder config yang didalamnya berisi file config.json yang menggunakan environment development untuk menfigurasi koneksi di database. Berikut contoh dari isi file config

   ```json
   {
     "development": {
       "username": "your_usernmae",
       "password": "your_password",
       "database": "db-smu",
       "host": "127.0.0.1",
       "dialect": "postgres"
     }
   }
   ```

3. \$sequelize db:create

   buat data base sesuai dengan config.json

4. \$sequelize db:migrate

   Untuk migrasi semua file yang ada di folder migrations

5. buat file .env yang berisi varibel sesuai dengn yang ada di envTemplate. Berikut contohnya

   ```
   SECRET=mania-mantap
   PORT=3000
   ```

6. \$npm run dev

   running programnya pada directory backend-section. applikasi akan dijalankan pada port yang diisi pada file .env

   setelah menjalankan perintah npm run dev pada terminal, anda akan melihat respon di terminal sebagai berikut yang menandakan aplikasi telah berjalan

   ```
   [nodemon] 2.0.2
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching dir(s): *.*
   [nodemon] watching extensions: js,mjs,json
   [nodemon] starting `node ./bin/http.js`
   listening to port  3000
   ```

untuk endpoint resAPI (resAPI doc) dapat dilihat dibawah

# Rest API Documentation for API USER Account

## \_Base Url : http://localhost:3000/user

## **Register User**

User Register for insert new user to database

- **URL**

  /register

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  `email = [string]`

  `username = [string]`

  `password = [string]`

  Here the request body example

  ```json
  {
    "username": "bau fakhran",
    "email": "bau@mail.com",
    "password": "bau123"
  }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{

    ```json
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhdWZha0BtYWlsLmNvbSIsImlhdCI6MTU4NzA0MzYwOX0.u8LM28d43twdlPm8oiVIDOMISgOk4-DL1hK71iDh5Sk",
      "msg": "register successfully"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{

    ```json
    {
      "msg": "Bad Request",
      "errors": "Email has already been taken"
    }
    ```

    - **Code:** 400 <br />
      **Content:**

    ```json
    {
      "msg": "Bad Request",
      "errors": [
        "email cannot be null",
        "password cannot be null",
        "username cannot be null"
      ]
    }
    ```

## **Login Use Password**

User Login use Password

- **URL**

  /loginPassword

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  `email = [string]`

  `password = [string]`

  Request Body Example

  ```json
  {
    "email": "bau@mail.com",
    "password": "bau123"
  }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{

    ```json
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhdWZha0BtYWlsLmNvbSIsImlhdCI6MTU4NzA0MzYwOX0.u8LM28d43twdlPm8oiVIDOMISgOk4-DL1hK71iDh5Sk",
      "msg": "login successfully"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{

    ```json
    {
      "msg": "login failed",
      "errors": "invalid email or password"
    }
    ```

## **Generate Token (OTP) for OTP login**

Generate 6 digit OTP code and send it to user email. User will receive 6 digit OTP from email awarungq@gmail.com . The OTP will valid for 3 minutes from time we hit the endpoint.

- **URL**

  /generateOTP

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  `email = [string]`

  example for the request body

  ```json
  {
    "email": "bau@mail.com"
  }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `

    ```json
    {
      "msg": "ITP code has send, check your email"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{

    ```json
    {
      "msg": "send OTP failed",
      "errors": "email not registered"
    }
    ```

## **Login by OTP**

verify the OTP which get from the email, and then give the access token

- **URL**

  /verifyOTP

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  `email = [string]`

  `otp = [integer]`

  example for the request body

  ```json
  {
    "email": "bau@mail.com",
    "OTP": 123456
  }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{

    ```json
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhdWZha2hyYW5AZ21haWwuY29tIiwiaWF0IjoxNTg3MDQ0OTIyfQ.aob6s1sR_Xn-g3I_O8JaqEqISyxWnMoIpdzkrqyDveg",
      "msg": "login successfullly"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{

    ```json
    {
      "msg": "login failed",
      "errors": "wrong ITP code"
    }
    ```

## **findOne User**

give user data (email, username, id)

- **URL**

  /:id

- **Method:**

  `GET`

- **URL Params**

  `id = [integer]`

* **Data Params**

  none

* **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{

    ```json
    {
      "id": 5,
      "email": "baufakhran@gmail.com",
      "username": "fakhran"
    }
    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{

    ```json
    {
      "msg": "NOT FOUND",
      "errors": "DATA NOT FOUND"
    }
    ```

## **change User password**

change user password, require old password

- **URL**

  /:id

- **Method:**

  `PATCH`

- **URL Params**

  `id = [integer]`

* **Data Params**

  `password = [integer]`

  `new_password = [integer]`

  Request Body example:

  ```json
  {
    "password": "bau123",
    "new_password": "newBau123"
  }
  ```

* **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{

    ```json
    {
      "result": [1],
      "msg": "success change password"
    }
    ```

* **Error Response:**

  - **Code:** 400 <br />
    **Content:** `{

    ```json
    {
      "msg": "change password failed",
      "errors": "old password wrong"
    }
    ```

## **delete a User**

delete user - asumption just SuperUser doit, not the user

- **URL**

  /:id

- **Method:**

  `DELETE`

- **URL Params**

  `id = [integer]`

* **Data Params**

  none

* **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{

    ```json
    {
      "result": 1,
      "msg": "success delete user"
    }
    ```

* **Error Response:**

  - **Code:** 200 <br />
    **Content:** `{

    ```json
    {
      "result": 0,
      "msg": "failed delete user, user not found"
    }
    ```

# **Menjalankan aplikasi frontend section**

aplikasi web untuk front end section dibuat mengunakan framework vue.js. Adapun langkah untuk menjalankan aplikasi tersebut adalah sebagai berikut

1.  Arahkan terminal pada direktori folder frontend-section.

2.  Jalankan npm install pada terminal untuk mengistall semua dependecies pada packaje.json.

3.  Jalankan npm run serve untuk menjalankan applikasi.
