export const findIntersection = (arr) => {

    // array tipinde değişken tanımla
    let intersection = []

    // .split()    .replace()   boşlukları silmek için regex
    const set1 = arr[0].replace(/\s/g, "").split(',')
    const set2 = arr[1].replace(/\s/g, "").split(',')

    // forEach() kullanarak bütün array içerisindeki karakterlerin

    set2.forEach((item) => {
        if (set1.includes(item)) {
            intersection.push(item)
        }

    })


    if (intersection.length != 0) {
        return intersection.toString()
    }
    else {
        return false
    }


    //  diper array içerisinde olup olmadığını kontrol edicez. varsa içine koyucaz

    // Eğer tanımladığımız array boşsa return false boş değilse array içersiindeki değerleri string halinde return edicez



}