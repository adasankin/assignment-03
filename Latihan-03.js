function sumArray(arr, int) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            // Cek apakah jumlah dari dua angka sama dengan int
            if (arr[i] + arr[j] === int) {
                result.push([arr[i], arr[j]]);
                //console.log(`Found pair: [${arr[i]}, ${arr[j]}]`);
            }
        }
    }
    return result;
}

console.log(sumArray([2, 1, 4, 3], 5)) // output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)) // output: [[1, 10], [8, 3]]


// Pingkan S.A.