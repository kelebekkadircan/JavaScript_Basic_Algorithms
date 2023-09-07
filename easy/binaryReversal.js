export const binaryReversal = (str) => {

    const binary = Number(str).toString(2)

    const binaryWithZeros = ("0".repeat(8 - binary.length)) + binary

    const reversedBinary = binaryWithZeros.split("").reverse().join("")



    return parseInt(reversedBinary, 2)

}

