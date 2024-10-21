# ASSIGNMENT 03

## Latihan 1
Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika dan false jika sebaliknya. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh: 2, 4, 6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan 2, 4, 6, 9 bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

### Kode
```javascript
function isArithmeticProgression (numbers) {
    // your code here
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
```

### Solusi
Untuk jawabannya ada [disini](Latihan-01.js)


## Latihan 2
Diberikan sebuah function yang menerima satu parameter berupa string. Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.

### Kode
```javascript
function threeStepsAB(text) {
    // your code here
}
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false
```

### Solusi
Untuk jawabannya ada [disini](Latihan-02.js)


## Latihan 3
Diberikan function yang menerima 2 parameter, yaitu array of integer (unsorted) dan integer. Function tersebut akan mengembalikan sebuah array di mana di dalam array tersebut mengandung array yang terdiri dari 2 angka yang jika dijumlahkan sama dengan integer.

### Kode
```javascript
function sumArray(arr, int) {
    // your code here
}
console.log(sumArray([2, 1, 4, 3], 5)) // output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)) // output: [[1, 10], [8, 3]]
```

### Solusi
Untuk jawabannya ada [disini](Latihan-03.js)


## Latihan 4
Subarray dapat diartikan sebagai bagian dari sebuah array yang bersambung. Subarray merupakan subset dari array asli yang mencakup elemen-elemen yang berurutan dari sebuah indeks awal hingga indeks akhir.
Sebagai contoh, misalkan kita memiliki sebuah array berikut
arr = [1, 2, 3, 4, 5, 6, 7]
[1, 2, 3] adalah subarray yang dimulai dari indeks 0 dan berakhir pada indeks 2.
[4, 5] adalah subarray yang dimulai dari indeks 3 dan berakhir pada indeks 4.
[1, 2, 4, 5] bukan subarray karena tidak bersambung 

Diberikan satu buah input a. Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan sum terbesar apabila semua anggota subarray tersebut dijumlahkan. Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]
Expected Output: [[ 4, -1, -2, 1, 5] , 7]
Explanation: [ 4, -1, -2, 1, 5] : Subarray yang akan memberikan jumlah terbesar
7 : Sum dari subarray

### Kode
```javascript
function arrSum(arr) {
    // your code here
}
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // output [[4, -1, -2, 1, 5], 7]

```

### Solusi
Untuk jawabannya ada [disini](Latihan-04.js)