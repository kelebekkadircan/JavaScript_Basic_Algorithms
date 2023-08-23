export const meanMode = (arr) => {

    const mean = calculateMean(arr); // ortalama değer

    const mode = calculateMode(arr);






    return mode === mean ? 1 : 0
}

const calculateMean = (arr) => {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum / arr.length
}

const calculateMode = (arr) => {

    // {eleman:array içerisindeki tekrar sayısı} {1:1 , 3:5, 5:1}
    // max = 5 1 keyinin valuesi max eşitse keyi dön
    let freq = {}

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] in freq) {
            freq[arr[j]] = freq[arr[j]] + 1
        }
        else {
            freq[arr[j]] = 1
        }
    }

    const max = Math.max(...Object.values(freq))

    return iterateOverObj(freq, max)



}

const iterateOverObj = (freq, max) => {
    for (let j in freq) {
        if (freq[j] === max) {
            return parseInt(j)
        }
    }
}