export const letterChange = (str) => {

    //  js charcode ve charcodeat metotlarını kullanacağız ama ilk çnce lowercase çevrilmeli
    // replace methodu ile harfleri tarayıp ilk z yı a yaparız

    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === "z") {
            return "a"
        }
        else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })

    // sesli harfleri büyük yapıp return ediyoruz

    let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, char => {

        return char.toUpperCase()

    })


    return vowelCapitalize



    //console.log("A".charCodeAt()); // 65
    // console.log(String.fromCharCode(65)) // == 65 
    // console.log(String.fromCharCode("A".charCodeAt() + 1))  // == B
}

/*
1- her harfi bir sonraki ile değiştir a -> b 

2- sesli harfleri büyüt a -> A
*/

export const simpleAdding = (num) => {

    let result = 0;
    for (let i = 1; i <= num; i++) {
        result = result + i
    }
    return result
}