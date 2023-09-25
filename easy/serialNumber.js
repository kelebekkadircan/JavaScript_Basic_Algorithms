export const serialNumber = (str) => {

    const [first, second, third] = str.split(".")

    if (
        first.length != 3 || first.indexOf("0") > -1 ||
        second.length != 3 || second.indexOf("0") > -1 ||
        third.length != 3 || third.indexOf("0") > -1
    ) {
        return false
    }

    if (evenOdd(first) !== "even") {
        return false
    }
    if (evenOdd(second) !== "odd") return false


    if (!isLastDigitGreatest(str.split("."))) return false



    return true
}

const evenOdd = (set) => {

    let sum = 0;

    for (let i = 0; i < set.length; i++) {
        sum += Number(set[i])
    }

    return sum % 2 === 0 ? "even" : "odd"
}

const isLastDigitGreatest = (sets) => {

    let result = true

    sets.forEach(set => {
        if (set[2] <= set[1] || set[2] <= set[0]) result = false
    })


    return result
}   