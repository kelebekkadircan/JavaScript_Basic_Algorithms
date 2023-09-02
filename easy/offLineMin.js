export const offLineMin = (strArr) => {


    const [index, freqE] = E_Info(strArr)

    //                         splice ile kestik         gezdik e ise alma dedik
    const numberArr = strArr.splice(0, index + 1).filter(char => char != "E")









    return numberArr.sort((a, b) => a - b).splice(0, freqE)
}

function E_Info(strArr) {

    let index = ""
    let freqE = 0

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "E") {
            index = i
            freqE += 1
        }
    }

    return [index, freqE]

}