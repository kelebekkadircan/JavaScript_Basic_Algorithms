function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right)

    return mergeSorting(leftSorted, rightSorted);

    // console.log(left);
    // console.log(right);
    // console.log(leftSorted);
    // console.log(rightSorted);




    // return arr
}

function mergeSorting(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        }
        else {
            result.push(right[rightIndex])
            rightIndex++;
        }

    }

    result.concat(left.slice(leftIndex), right.slice(rightIndex));

    return result

}

const unsortedArray = [63, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(unsortedArray)
console.log(sortedArray);


