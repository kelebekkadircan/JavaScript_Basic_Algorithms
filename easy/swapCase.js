export const swapCase = (str) => {

    // Verilen stringin büyük harflerini küçük harf ve küçük harflerini büyük harf yapmalıyız

    let newArr = []

    str.split('').forEach(element => {
        if ((/[^a-zA-Z]/).test(element)) {
            newArr.push(element)
        }
        else if ((/[a-z]/).test(element)) {
            newArr.push(element.toUpperCase())
        }
        else if ((/[A-Z]/).test(element)) {
            newArr.push(element.toLowerCase())
        }
    })

    return newArr.join('')
}