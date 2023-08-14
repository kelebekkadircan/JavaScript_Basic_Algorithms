export const letterCapitalize = (str) => {

    // charAt() bize bir sitringin istediğimiz indeksini almamızı sağlar

    // const w1 = "merhaba"
    // const ilkharf = w1.charAt(0).toUpperCase()
    // const gerikalan = w1.slice(1, w1.length) // slice ile istediğimiz indexler arasını alabiliriz mesela 1 den sona gibi erhaba
    // console.log(ilkharf); // == w
    // console.log(gerikalan);

    // console.log(ilkharf + gerikalan);


    let newArr = []


    str.split(' ').forEach((word) => {
        newArr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))
    })


    return newArr.join(" ")








}

/*
    javascript kullanarak letterCapitalize(str) str al ve ilk harfini büyüt

    kelimeler sadece 1 boşlukla ayrılsın


*/



