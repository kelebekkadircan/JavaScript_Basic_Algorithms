import React from "react";
import { ages, companies } from "../data/MockData";

export const Reduce = () => {
  let ageSum = 0;
  for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
  }
  //   console.log(ageSum);

  //   ages içerisindeki her bir elemanı toplar
  const ageSum2 = ages.reduce((total, age) => total + age, 0);
  //   console.log(ageSum2);

  // bütün şirketlerin toplam çalışma yıllarını toplar
  const totalYears = companies.reduce(
    (total, company) => total + (company.end - company.start),
    0
  );
  // console.log(totalYears);

  const totalAges = ages.reduce((oldVal, currentVal) => oldVal + currentVal, 0);

  // console.log(totalAges);

  const array1 = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  // sayıları toplar
  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  // console.log(sumWithInitial);
  // Expected output: 10

  // İlk değer verilmezse, ilk eleman kullanılır
  const array = [15, 16, 17, 18, 19];

  function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
      `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
    );
    return returns;
  }

  // console.log(array.reduce(reducer));

  // objelerin değerlerini toplar
  const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
  const sum = objects.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    0
  );

  // console.log(sum); // 6

  // sıralı fonksiyon ile fonksiyon döndürerek kullanılır
  const pipe =
    (...functions) =>
    (initialValue) =>
      functions.reduce((acc, fn) => fn(acc), initialValue);

  // Building blocks to use for composition
  const double = (x) => 2 * x;
  const triple = (x) => 3 * x;
  const quadruple = (x) => 4 * x;

  // Composed functions for multiplication of specific values
  const multiply6 = pipe(double, triple);
  const multiply9 = pipe(triple, triple);
  const multiply16 = pipe(quadruple, quadruple);
  const multiply24 = pipe(double, triple, quadruple);

  // Usage
  multiply6(6); // 36
  multiply9(9); // 81
  multiply16(16); // 256
  multiply24(10); // 240

  return <div>Reduce</div>;
};
