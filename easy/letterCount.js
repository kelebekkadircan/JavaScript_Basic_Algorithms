export const letterCount = (str) => {

    // console.log("%cMerhaba Kadircan", "color:red;font-size:25px;") // konsola kırmızı büyük yollar
    //    console.log("%cPurple %cRed %cBlue", "color:purple", "color:red", "color:blue");

    // 1. harf dışındaki ve boşluk dışındaki karakterlerin silinmesi

    // Her kelime için nesne oluşturucaz

    const arr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ") // boşluk a-Z olmayanı alıp değiştiriyor 


    let kelimeNesneleri = []

    for (let i = 0; i < arr.length; i++) {
        let obj = {}

        arr[i].split("").forEach((item) => {
            // console.log(arr[i] + ":" + item);

            item in obj ? obj[item] += 1 : obj[item] = 1
            // console.log(obj);
        });

        kelimeNesneleri.push(obj)

    }
    let maxFrequencies = []

    kelimeNesneleri.forEach((item) => {
        maxFrequencies.push(Math.max(...Object.values(item)));
    })

    let maxValue = Math.max(...maxFrequencies)

    console.log(maxValue);
    console.log(maxFrequencies);


    return maxValue < 2 ? -1 : (arr[maxFrequencies.indexOf(maxValue)] ? arr[maxFrequencies.indexOf(maxValue)] : -1)



}


/*
    for ex: "Today, is the greatest day ever!"

    return greatest because it has 2 e and t

    boşlukla ayrılsın dönmezse -1 dönelim

*/