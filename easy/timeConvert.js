export const timeConvert = (num) => {

    // const min = num % 60 // dakikayı verir
    // const hour = Math.floor(num / 60) // tam sayı verir

    // return hour + ":" + min

    // Kısa yol
    return `${Math.floor(num / 60)}:${num % 60} `

}

// dakikayı vericez bize saat ve dakika şeklinde vericek 63 = 1:3 1 saat 3 dakika