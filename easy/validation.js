

// Coderbyte userValidation challange Doğru veri girişi kontrolü
/* 
    Kurallar:
    1- 4 ile 25 karakter arası olmalı
    2- harf ile başlamalı
    3- harf , sayı ve _ içerebilir sadece
    4- _ ile bitemez

    eğer doğruysa program true değilse yanlış göndermeli 
*/

export const userValidation = (str) => {

    // and operatörü ve .length property
    // Regex kullanımı 
    // .charAt() hangi indexi alıcaksak onu yazarız 0 1.harf str.charAt(0)
    // .slice() verdiğimiz aralığa göre istediğimiz sayıyı alabiliyoruz
    // .test() regex ile birlikte .test içine yazdığımız karakter true ya da false dönecek


    if (str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0, 1)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1))
    ) {
        return true
    }
    else {
        return false
    }











}