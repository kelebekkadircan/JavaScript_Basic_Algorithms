export const longestWord = (sen) => {

    // Noktalama işaretlerini kaldır
    // sadece harf ve boşluğu alan regex
    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")

    // Cümleyi boşluklardan bölüp,kelimelerle bir array oluştur

    // Maksimum sayıda karaktere sahip olan kelimeyi öne alır
    arr.sort((a, b) => { return b.length - a.length })


    // Cümle içinde en fazla karaktere sahip kelimeye ulaşmış oluyoruz
    return arr[0]



    // arrayi kelimelerin karakter sayılarına göre azalan bir şekilde sıralamak 

    // en başta yani 0. indekste yer alan kelimeyi return etmek


}