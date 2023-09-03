export const overlapRanges = (arr) => {

    const firstSet = createArr(arr[0], arr[1])
    const secondSet = createArr(arr[2], arr[3])

    let intersectionSet = []
    let count = 0

    firstSet.map((item) => {
        if (secondSet.indexOf(item) > -1) {
            intersectionSet.push(item)
            count += 1
        }
    })

    return intersectionSet.length >= arr[arr.length - 1] ? true : false
}

const createArr = (x, y) => {
    let subSet = []
    for (let i = x; i <= y; i++) {
        subSet.push(i)
    }



    return subSet

}
