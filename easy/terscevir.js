export const firstReverse = (str) => {

    // Verilen stringi array haline getirmeliyiz .split()
    // reverse()  .join()


    // Stringi arraya çevirir
    const arr = str.split("")

    // arrayi ters çevirir
    const reversedArr = arr.reverse()

    // Arrayi normal stringe çevirir
    const newStr = reversedArr.join("")



    return newStr
}