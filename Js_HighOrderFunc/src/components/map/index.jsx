import React from "react";
import { companies, ages } from "../data/MockData";

export const Map = () => {
  //   const companyNames = companies.map((company) => company.name);
  //   console.log(companyNames);

  const testMap = companies.map(
    (company) => `${company.name} [${company.start} - ${company.end}]`
  );
  //   console.log(testMap);

  const agesSquare = ages.map((age) => Math.sqrt(age));
  //   console.log(agesSquare);

  const agesTimesTwo = ages.map((age) => age * 2);
  console.log(agesTimesTwo);

  return <div>Map</div>;
};
