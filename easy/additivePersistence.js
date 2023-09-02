export const additivePersistence = (num) => {

    let count = 1;

    // rakamsa 0 dönsün
    if (num < 10) {
        return 0
    }


    // verilen sayını rakamlarını topla
    let sumDigit = sum(num);

    // tek haneye indirene kadar devam ediyor
    while (sumDigit > 9) {
        count++;
        sumDigit = sum(sumDigit);
    }



    return count
}

const sum = (n) => {

    let sum = 0;
    const arr = n.toString().split('')
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i])
    }

    return sum
}

/*
    bir sayının rakamlarının toplamının tek haneli sayıya ulaşmasıdır 18 çıkrasa 1 + 8 = 9 deriz
*/