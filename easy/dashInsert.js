export const dashInsert = (str) => {

    // 7 % 2 != 0 bu tektir ama bunu sayı dışında yaparsak hata verir
    let newArr = []

    for (let i = 0; i < str.length; i++) {
        // sayılara bakıp 1 ve 9 arasında olanları alıyor
        if ((/[^1-9]/).test(str[i])) {
            newArr.push(str[i])

        }
        else {
            if (
                str[i] % 2 != 0 &&
                str[i + 1] % 2 != 0 &&
                str[i + 1] != undefined &&
                (/[1-9]/).test(str[i + 1])
            ) {
                newArr.push(str[i] + "-")
            }
            else {
                newArr.push(str[i])
            }
        }
    }

    //  str uzunluğu 6 
    //  i < 6 i max 5



    return newArr.join("")
}

/* 
    454793  -> 4547-9-3 yan yana iki tek gelirse dash (-) koy
*/