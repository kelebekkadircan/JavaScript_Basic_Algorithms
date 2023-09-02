export const multiplicativePersistance = (num) => {
    let steps = 1;
    let result = multiply(num)

    if (num < 10) {
        return 0
    }

    while (result > 9) {
        steps++
        result = multiply(result)
    }

    return steps
}

const multiply = (num) => {

    const numArr = num.toString().split('')
    let multiply = 1;


    for (let i = 0; i < numArr.length; i++) {
        multiply = multiply * numArr[i]
    }

    return multiply
}

