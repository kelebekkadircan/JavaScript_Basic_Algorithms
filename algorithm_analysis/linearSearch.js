function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i

    }
    return -1
}



array = [1, 4, 7, -4, 11, 25, 46];
target = 25;
const result = linearSearch(array, target)
console.log(result);