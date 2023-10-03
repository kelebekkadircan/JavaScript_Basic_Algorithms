export const snakeCase = (sentence) => {

    return sentence.replace(/[^a-zA-Z]/g, "_").toLowerCase()


}