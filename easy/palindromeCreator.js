export const palindromeCreator = (str) => {

    // harf olmayanları sildik ve küçülttük

    const strippedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase()

    if (isPalindrome(strippedStr)) {
        return "The String itself is a palindrome"
    }
    let removedLetters = []

    let [removed, newStr] = removeLetter(strippedStr)

    removedLetters.push(removed)


    if (isPalindrome(newStr) === true) {
        return removed
    }
    else {
        let [removed2, newStr2] = removeLetter(newStr)

        removedLetters.push(removed2)

        if (isPalindrome(newStr2) === true) {
            return removedLetters.join("")
        }
        else {
            return "Not palindrome material"
        }
    }






}

function isPalindrome(word) {
    return word.split("").reverse().join("") === word ? true : false
}

function removeLetter(str) {
    let it = Math.floor(str.length / 2)
    let arr = str.split("")

    for (let i = 0; i < it; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            arr.splice(i, 1)
            return [str[i], arr.join("")]
        }
    }
}