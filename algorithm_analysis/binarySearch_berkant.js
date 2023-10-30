function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
        if (arr[mid] > target) {
            right = mid - 1
        }

    }
    return -1;


}




const sortedArray = [2, 4, 7, 10, 13, 18, 22, 27]
const targetElement = 7;


const result = binarySearch(sortedArray, targetElement)

if (result !== -1) {
    console.log("Success : ...index ", result);
}
else {
    console.log("böyle bir sonuç bulunamadı...");
}
