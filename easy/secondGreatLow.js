export const secondGreatLow = (arr) => {

    let newArr = []

    // iki kere olanları 1 e indirir
    arr.forEach((num) => {
        !newArr.includes(num) && newArr.push(num)
    })

    newArr.sort((a, b) => a - b)


    if (newArr.length === 2) {
        return newArr[1] + "-" + newArr[0]
    }
    else {
        return newArr[1] + "-" + newArr[newArr.length - 2]
    }



    return newArr
}