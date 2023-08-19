export const arrayAddition = (arr) => {

    // 1.yöntem
    /*
    
        const newArr = [...arr]
        let sum = 0
        const maxValue = Math.max(...arr)
    
        newArr.splice(arr.indexOf(maxValue), 1) // 23 döndürür onu kestik
    
        for (let i = 0; i < newArr.length; i++) {
            sum += newArr[i]
        }
        return maxValue === sum ? true : false
    
    */

    arr.sort((a, b) => a - b)

    let sum = 0;

    const maxValue = arr[arr.length - 1]

    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i]
    }

    return maxValue === sum ? true : false









}

/*
    array içindeki en büyük değeri al diğerlerini topla ona eşitse true dön 

    [4,6,23,10,1,3] al 23 != 24 

*/