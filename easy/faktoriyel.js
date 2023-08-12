export const firstFactoriel = (num) => {

    let faktoriyel = 1;

    for (let i = 2; i <= num; i++) {

        faktoriyel = faktoriyel * i


    }

    return faktoriyel

    // return num
}