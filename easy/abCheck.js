export const abCheck = (str) => {

    const arr = str.toLowerCase().split("")
    let control = []

    arr.forEach(char => {
        if (char === "a" && arr[arr.indexOf(char) + 4] === "b") {
            control.push(true)
        }

    })

    return control.includes(true) ? true : false

    // String metodu tek bir char arıyorsak bize onun indexini verir kelime arıyorsak onun ilk karakterinin indexini verir


    // KISA YOL
    // return str.search("a...b") > -1 ? true : false


}

// eğer bir a harfi var ise ve bundan 3 karakter sonra b var ise true dönsün