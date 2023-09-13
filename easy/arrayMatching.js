export const arrayMatching = (arr) => {

    const arr1 = arr[0].match(/[0-9]+/gi)
    const arr2 = arr[1].match(/[0-9]+/gi)

    let longerArr = "equal"

    if (arr1.length > arr2.length) {
        longerArr = "first"
    }
    if (arr1.length < arr2.length) {
        longerArr = "second"
    }

    let newArr = []
    if (longerArr === "equal") {
        newArr = createArr(arr1, arr2, arr1.length)

    }

    if (longerArr == "first") {
        newArr = createArr(arr1, arr2, arr2.length, "first")
    }

    if (longerArr == "second") {
        newArr = createArr(arr1, arr2, arr1.length, "second")
    }



    // for (let i = 0; i < arr1.length; i++) {
    //     newArr.push(parseInt(arr1[i]) + parseInt(arr2[i]))
    // }

    let result = newArr[0]

    for (let i = 1; i < newArr.length; i++) {
        result = result + "-" + String(newArr[i])
    }


    return "[" + result + "]"
}

const createArr = (arr1, arr2, length, balance = "equal") => {

    let arr = []

    for (let i = 0; i < length; i++) {
        arr.push(parseInt(arr1[i]) + parseInt(arr2[i]))
    }

    if (balance === "equal") {
        return arr
    }

    if (balance === "first") {
        return arr.concat(arr1.slice(-(arr1.length - arr2.length)))
    }

    if (balance === "second") {
        return arr.concat(arr2.slice(-(arr2.length - arr1.length)))
    }



}