
export const numberAddition = (str) => {

    const strArr = str.split("")

    let numberArr = []

    for (let i = 0; i < strArr.length; i++) {

        let lastIndex = numberArr.length - 1

        if ((/[^0-9]/).test(strArr[i])) {
            numberArr.push(strArr[i])

        }
        else { // döngüdeki karakter eğer rakamsa
            if (numberArr.length === 0) {
                numberArr.push(strArr[i])
            } else if ((/[0-9]/).test(numberArr[lastIndex])) { // eğer boş değil ama arrayin içindeki son değer rakamsa
                numberArr[lastIndex] = numberArr[lastIndex] + strArr[i]
            }
            else if ((/[^0-9]/).test(numberArr[lastIndex])) { // array boş değilse ve son değeri rakam değilse
                numberArr.push(strArr[i])

            }
        }

    }


    return calculateSum(numberArr)
}

const calculateSum = (arr) => {

    let sum = 0;

    for (let j = 0; j < arr.length; j++) {
        // Döngü içindeki eleman 1 veya 1 den fazla basamağa sahip bir sayıysa
        if (arr[j].match(/\d+/)) {
            sum += parseInt(arr[j])
        }
    }


    return sum
}