export const twoSum = (nums, target) => {

    let returnValue = ""

    if (nums.length === 2 && nums[0] + nums[1] === target) {
        returnValue = [0, 1]
    }

    for (let i = 0; i < nums.length; i++) {
        let temp1 = nums[i]
        const newNums = nums.filter(item => item != temp1)
        for (let j = 0; j < newNums.length; j++) {
            if (temp1 + newNums[j] == target) {
                return "[" + i + "," + (j + 1) + "]"
            }

        }
    }




    return returnValue == "" ? false : returnValue
}