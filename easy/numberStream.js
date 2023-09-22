export const numberStream = (str) => {

    let arr = [str[0]]

    for (let i = 0; i < str.length; i++) {

        let lastDigitOfLastItem = arr[arr.length - 1][arr[arr.length - 1].length - 1]


        if (lastDigitOfLastItem === str[i]) {
            let temp = arr[arr.length - 1]
            arr.pop()
            arr.push(temp + str[i])
        }
        else if (str[i] != arr[arr.length - 1]) {
            arr.push(str[i])
        }
    }

    let result = false;

    for (let j = 0; j < arr.length; j++) {

        if (arr[j].length === Number(arr[j][0])) {
            result = true;
        }
        if (arr[j].length === Number(arr[j][0])) {
            console.log(Number(arr[j][0]) + "-" + arr[j]);
        }
    }



    return result
}