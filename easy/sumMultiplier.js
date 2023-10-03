export const sumMultiplier = (arr) => {

    let sum = sumTheArray(arr)

    const secondGreatest = arr.sort((a, b) => a - b)[arr.length - 2]
    const greatest = Math.max(...arr)
    const multiplication = greatest * secondGreatest

    return multiplication > sum * 2 ? true : false



}

const sumTheArray = (arr) => {

    return arr.reduce((acumulation, currentValue) => {
        return acumulation + currentValue
    }, 0)



}