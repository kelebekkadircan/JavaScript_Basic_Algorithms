export const simpleSymbols = (str) => {

    // Stringi arraya döndür
    const arr = str.split('')

    let controlArr = []

    // test ile kontrol ettik a-z arasındaysa döndür dedik log(char) yaparsak d c a görürüz
    arr.forEach((char) => {
        if ((/[a-zA-Z]/).test(char)) {
            // console.log(arr.indexOf(char)) == 2,8,13
            if (arr[arr.indexOf(char) - 1] === "+" && arr[arr.indexOf(char) + 1] === "+") {
                controlArr.push(1)
            }
            else {
                controlArr.push(0)
            }
        }
    })



    // console.log(controlArr); == 1 , 1 , 0
    if (controlArr.includes(0)) {
        return false
    }
    else {
        return true
    }

}


/*



*/