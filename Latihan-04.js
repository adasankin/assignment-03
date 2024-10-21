function arrSum(arr) {
    let maxSum = -Infinity;
    let maxSubarray = [];

    // Loop untuk mulai dari setiap elemen
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        let currentSubarray = [];        

        // Loop untuk tambahin elemen ke subarray
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            currentSubarray.push(arr[j]);
            // console.log(`Tambahkan ${arr[j]}: menjadi ${currentSum}, => [${currentSubarray}]`);
            
            // Cek jumlah saat ini lebih besar dari yang sebelumnya
            if (currentSum > maxSum) {
                maxSum = currentSum;
                maxSubarray = currentSubarray.slice();
                // console.log(`Max baru: maxSum = ${maxSum}, maxSubarray = [${maxSubarray}]`);
            }
        }
    }
    return [maxSubarray, maxSum];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // output [[4, -1, -2, 1, 5], 7]


// Pingkan S.A.