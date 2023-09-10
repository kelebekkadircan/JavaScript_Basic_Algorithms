export const palindromeTwo = (str) => {



    const newStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase()



    return newStr.split("").reverse().join("") === newStr ? true : false

    return str
}