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

  const date = new Date();
  const newUsers = users.map((user) => {
    return {
      fullName: `${user.name} ${user.surname}`,
      yearOfBirth: date.getFullYear() - user.age,
    };
  });

  // console.log(newUsers);

  const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];

  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

  // console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  // console.log(kvArray);
  // [
  //   { key: 1, value: 10 },
  //   { key: 2, value: 20 },
  //   { key: 3, value: 30 }
  // ]

  const parseDeneme = ["1", "2", "3"].map(parseInt);
  //  console.log(parseDeneme); // [1, NaN, NaN]

  const parseDeneme2 = ["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
  // console.log(parseDeneme2); // [1, 2, 3]

  const numberDeneme = ["1", "2", "3"].map(Number); // [1, 2, 3]
  // console.log(numberDeneme); // [1, 2, 3]

  const numberDeneme2 = // But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
    ["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
  // console.log(numberDeneme2); // [1.1, 220, 3e+300]
  // For comparison, if we use parseInt() on the array above:
  const numberDeneme3 = ["1.1", "2.2e2", "3e300"].map((str) =>
    parseInt(str, 10)
  ); // [1, 2, 3]
  // console.log(numberDeneme3); // [1, 2, 3]
  return <div>Map</div>;
};
