export const firstNonRepeating = (strng) => {

    const str = strng.toLowerCase()

    let returnValue = ""


    for (let i = 0; i < str.length; i++) {
        let itemInLoop = str[i]
        let newStr = str.slice(0, i) + str.slice(i + 1)
        // console.log(itemInLoop + "--" + newStr);

        if (returnValue === "" && newStr.indexOf(itemInLoop) === -1) {
            returnValue = itemInLoop

        }
    }



    return returnValue === "" ? "none" : returnValue
}