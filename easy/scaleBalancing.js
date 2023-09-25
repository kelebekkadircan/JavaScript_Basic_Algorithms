export const scaleBalancing = (arr) => {

    // direkt farkı bulup tekte uygulamak
    const [l, r] = returnNumerals(arr[0]);
    const availableWeights = returnNumerals(arr[1])
    availableWeights.sort((a, b) => a - b) // sort methodu üzerinde uyguladığımız değişkeni kökünden değiştirir

    const difference = Math.abs(l - r)

    if (availableWeights.indexOf(difference) > -1) {
        return difference
    }

    // Array içindeki iki değerin toplamıyla bulmak
    let leftIndex = 0;
    let rightIndex = availableWeights.length - 1
    let countDown = 1

    let result = ""

    while (leftIndex < rightIndex && countDown > 0) {
        let sum = availableWeights[leftIndex] + availableWeights[rightIndex]


        if (sum > difference) {
            rightIndex--
        } else if (sum < difference) {
            leftIndex++
        }
        else {
            result = availableWeights[leftIndex] + "," + availableWeights[rightIndex]
            countDown--
        }
    }

    if (result != "") return result

    // 3.seneryo çözüm kümesindeki değerleri birbirinden çıkararak ulaşmak

    for (let i = availableWeights.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (availableWeights[i] - availableWeights[j] === difference) {
                result = availableWeights[i] + "," + availableWeights[j]
            }
        }
    }

    if (result != "") {
        return result

    } else {
        return "Not Possible "
    }



}

function returnNumerals(str) {
    let numerals = []

    // stringin içerisindeki yanyana olan rakamları farkedip ayırabiliyor
    str.match(/\d+/g).forEach(element => {
        numerals.push(Number(element))
    })


    return numerals
}