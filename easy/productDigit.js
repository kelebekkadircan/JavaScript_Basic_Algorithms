export const productDigit = (num) => {

    let multipliers = []

    for (let i = 1; i <= num; i++) {
        num % i === 0 && multipliers.push(i)
    }

    let medium = multipliers.length / 2
    let result = 0;

    // console.log(multipliers[medium - 1] + "-" + multipliers[medium]);

    if (multipliers[medium - 1] * multipliers[medium] === num) {
        result = multipliers[medium - 1].toString().length + multipliers[medium].toString().length
    }

    return result
}