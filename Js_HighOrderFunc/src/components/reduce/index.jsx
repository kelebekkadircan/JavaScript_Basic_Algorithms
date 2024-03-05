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

  return <div>Reduce</div>;
};
