export const largestFour = (arr) => {

    let arrMax = []

    arr.forEach((subArr) => {
        const max = Math.max(...subArr)
        arrMax.push(max)

    })

    return arrMax
}