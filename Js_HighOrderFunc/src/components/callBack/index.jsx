import React from "react";

export const CallBack = () => {
  const twoTimesNumber = (number) => number * 2;

  function cube(cb, number) {
    return cb(number) * number;
  }

  //   cube fonksiyonu içine iki tane parametre alıyor. İlki bir fonksiyon, ikincisi ise bir sayı.
  //  cube fonksiyonu içinde cb fonksiyonu çağrılıyor ve cb fonksiyonuna number parametresi gönderiliyor.
  //  cb fonksiyonu içinde number parametresi ile işlem yapılarak sonuç döndürülüyor.
  //   console.log(cube(twoTimesNumber, 3));
  //   Aynı işlemi arrow function ile de yapabiliriz.
  //   console.log(cube((number) => number * 2, 3));

  //   İç içe döngülerle yapılan işlemleri callback fonksiyonlar ile daha kısa bir şekilde yapabiliriz.
  const a = (s1) => {
    const b = (s2) => {
      const c = (s3) => {
        return s1 + s2 + s3;
      };
      return c;
    };
    return b;
  };

  // console.log(a(31)(12)(22));

  return <div>CallBack</div>;
};
