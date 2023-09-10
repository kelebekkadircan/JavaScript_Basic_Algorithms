export const powerSetCount = (arr = []) => {

    const numberOfSubset = 2 ** arr.length; // iki üzeri array uzunluğu

    let result = [] // power set, güç kümesi


    for (let i = 0; i < numberOfSubset; i++) {
        let tempBinary = Number(i).toString(2);
        let currentBinary = "0".repeat(arr.length - tempBinary.length) + tempBinary
        console.log(currentBinary);

        let tempValue = ""

        for (let j = 0; j < arr.length; j++) {

            if (currentBinary[j] === "1") {
                tempValue += arr[j]
            }

        }

        result.push(tempValue)

    }



    return result
}