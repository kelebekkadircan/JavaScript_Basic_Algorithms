export const camelCase = (str) => {

    let arr = str.split(' ')

    let camelC = ""

    arr.forEach((word) => {
        let firstLetter = word[0].toUpperCase()
        let restOfTheWord = word.substring(1) // ilk harften sonrakini alıp sona kadar gider
        let newWord = firstLetter + restOfTheWord
        // console.log(newWord);

        camelC = camelC + newWord
    })


    let veryfirstletter = "";
    veryfirstletter = camelC[0].toLowerCase()
    let restOfTheWord2 = camelC.substring(1)
    let newCamelC = veryfirstletter + restOfTheWord2


    // let veryfirstletter = arr[0][0].toLowerCase()

    // for (let i = 1; i < arr.length; i++) {
    //     let firstletter = arr[i][0].toUpperCase()

    // }
    // console.log(veryfirstletter);

    return newCamelC
}