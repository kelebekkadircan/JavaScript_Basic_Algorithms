export const questionMark = (str) => {
    // str >= 5 kontrol et 3 soru işaretinin sağı solunu topla dediği için 
    if (str.length < 5) return false


    // soru işareti ve rakam olmayan bütün değerleri temizle
    //                 0 ile 9 arasında ve ? değilse o değeri al bunun ile değiştir 
    const newStr = str.replace(/[^0-9?]/g, "")

    //  forEach için stringi arraye çevir

    const arr = newStr.split("")

    console.log(arr);
    // değişkenleri tanımla sums,sum,iterator
    let sums = []
    let sum = 0
    let iterator = 0

    // foreach ile her bir rakam ve kendisinden sonraki 4.karakter toplanarak sum eşitlenir ve sums arrayine eklenir

    arr.forEach((item) => {
        if (item != "?") {
            sum = parseInt(item) + parseInt(arr[iterator + 4])
            sums.push(sum)
        }

        iterator += 1
    })

    console.log(sums);

    // sums içerisinde 10 değeri varsa true yoksa false

    return sums.includes(10) ? true : false


}

/*
    rastgele bir string veriyor içindeki rakamlar 10 yapıyorsa true değilse false
*/