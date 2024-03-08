import React from "react";
import { users } from "../data/MockData";

export const Every = () => {
  const users = [
    { name: "John", surname: "ögel", age: 34, id: 1, gender: 1 },
    { name: "Doe", surname: "demir", age: 23, id: 2, gender: 1 },
    { name: "Smith", surname: "yasar", age: 45, id: 3, gender: 2 },
    { name: "Alex", surname: "mico", age: 23, id: 4, gender: 2 },
    { name: "Tom", surname: "blackland", age: 23, id: 5, gender: 1 },
    { name: "Jerry", surname: "sönmez", age: 23, id: 6, gender: 1 },
  ];
  const someUser = users.some((user) => user.gender === 1);
  // console.log(someUser); //true

  const userGender = users.every((user) => user.gender === 1);
  // console.log(userGender); //false

  return <div>Every</div>;
};
