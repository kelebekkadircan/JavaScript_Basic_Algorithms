function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let numberToInsert = arr[i]
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }

        arr[j + 1] = numberToInsert
    }
}

const arr = [20, 8, -2, 4, -6];
// const arr2 = [8, 20, -2, 4, -6]
// const arr3 = [8, -2, 20, 4, -6]
// const arr4 = [-2, 8, 20, 4, -6]
// const arr5 = [-2, 8, 4, 20, -6]
// const arr6 = [-2, 4, 8, 20, -6]

insertionSort(arr);
console.log(arr);

function insertionSort2(arr2) {

    for (let i = 1; i < arr.length; i++) {

        let numberToInsert2 = arr[i]
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert2) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert2;

    }


}