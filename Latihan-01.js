function isArithmeticProgression (numbers) {
    // cek kalau panjang array kurang dari atau sama dengan 1
    if (numbers.length <= 1) {
        return false; // kalau iya, false karena aritmatika butuh minimal 2 angka
    }

    // menghitung selisih index
    const difference = numbers[1] - numbers[0];

    // looping dari index 2 sampai akhir array
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i+1] - numbers[i] !== difference) { // cek selisih angka saat ini dan sebelumnya
            return false; // kalau tidak sama, bukan aritmatika
        }
    }
    // kalau selisihnya sama, bearti aritmatika (true)
    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false


// Pingkan S.A.