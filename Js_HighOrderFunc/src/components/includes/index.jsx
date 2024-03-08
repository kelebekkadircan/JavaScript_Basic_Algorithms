import React from "react";
import { ages, companies, users } from "../data/MockData";

export const Includes = () => {
  // console.log(ages.includes(5));

  let userNames = [];

  const users = [
    { name: "John", surname: "ögel", age: 34, id: 1, gender: 1 },
    { name: "Doe", surname: "demir", age: 23, id: 2, gender: 1 },
    { name: "Smith", surname: "yasar", age: 45, id: 3, gender: 2 },
    { name: "Alex", surname: "mico", age: 23, id: 4, gender: 2 },
    { name: "Tom", surname: "blackland", age: 23, id: 5, gender: 1 },
    { name: "Jerry", surname: "sönmez", age: 23, id: 6, gender: 1 },
  ];

  users.map((user, index) => {
    userNames[index] = user.name;
  });

  const newInclude = userNames.includes("John");
  // console.log(newInclude);

  return <div>Includes</div>;
};
