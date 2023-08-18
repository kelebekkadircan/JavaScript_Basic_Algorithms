export const vowelCount = (str) => {

    // const arr = str.split("")

    let i = 0;

    [...str].forEach((letter) => {
        if ((/[a/e/i/u/o/A/E/I/U/O]/).test(letter)) {
            i = i + 1
        }

    })

    return i

}