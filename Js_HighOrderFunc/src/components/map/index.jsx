import React from "react";
import { companies, ages, users } from "../data/MockData";

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
  // console.log(agesTimesTwo);

  const numbers2 = ages.map((number) => number * 2);
  // console.log(numbers2);

  const userList = users.map((user) => {
    if (user.id === 2) {
      user.name = "Kelebekcan";
    }
    return user;
  });

  // console.log(userList);

  return <div>Map</div>;
};
