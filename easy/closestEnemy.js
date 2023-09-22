export const closestEnemy = (arr) => {

    let indexof1 = arr.indexOf(1)
    let indexesOf2 = []
    let differences = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            indexesOf2.push(i)
        }
    }

    if (indexesOf2.length === 0) return 0

    indexesOf2.forEach((element) => {
        differences.push(Math.abs(element - indexof1))
    })





    return Math.min(...differences)
}