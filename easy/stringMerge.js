export const stringMerge = (str) => {

    // const first = str.split('*')[0]
    // const second = str.split('*')[1]

    const [first, second] = str.split('*')

    let combineWords = ""

    for (let i = 0; i < first.length; i++) {
        combineWords += first[i] + second[i]
    }

    return combineWords
}