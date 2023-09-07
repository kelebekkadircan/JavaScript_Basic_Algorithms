export const largestPair = (num) => {

    if (num.toString().length === 2) {
        const numR = parseInt(num.toString().split('').reverse().join(''))
        const arr = [num, numR]

        return (Math.max(...arr)) % 2 === 0
            ? (Math.max(...arr))
            : (Math.min(...arr)) % 2 === 0
                ? Math.min(...arr)
                : "The number consist only with odd numerics"
    }

    const arr1 = num.toString().split("")
    arr1.sort((a, b) => b - a)

    let tensDigit = arr1[0]

    let unitsDigit = returnUnitsDigit(arr1)

    if (unitsDigit === undefined) {
        return tensDigit % 2 === 0
            ? arr[1] + tensDigit : 'Bize verilen sayıların hepsi tek sayıdır'
    }
    else {
        return parseInt(tensDigit + unitsDigit)
    }

    // return parseInt(tensDigit + "" + unitsDigit)
}


const returnUnitsDigit = (arr) => {
    let unit;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            unit === undefined ? unit = arr[i] : unit
        }

    }

    return unit

}