function threeStepsAB(text) {
    // mengakses karakter ke-i sampai ke-(i-4)
    for (let i = 0; i < text.length - 4; i++) {
        // cek posisi 'a' di posisi i dan 'b' di posisi i+4, atau sebaliknya
        if ((text[i] === 'a' && text[i+4] ==='b') || (text[i] === 'b' && text[i+4] === 'a')) {
        return true;
        }
    }
    return false;
}
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false


// Pingkan S.A.