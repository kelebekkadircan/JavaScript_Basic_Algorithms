export const changeSeq = (arr) => {

    // Verilen rakamlar artışta mı azalışta mı bulmalıyız - to + or reverse

    let newArr = []
    let tendency = "increasing"

    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] - arr[i - 1])
    }

    if (newArr[0] < 0) {
        tendency = "decreasing"
    }

    if (tendency === "increasing") {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] < 1) return i
        }
    }

    if (tendency === "descreasing") {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] > 0) return i
        }
    }


    return newArr

}