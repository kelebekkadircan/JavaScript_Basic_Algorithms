import React from "react";
import { ages, companies, users } from "../data/MockData";

export const Includes = () => {
  // console.log(ages.includes(5));

  let userNames = [];

  users.map((user, index) => {
    userNames[index] = user.name;
  });

  const newInclude = userNames.includes("John");
  // console.log(newInclude);

  return <div>Includes</div>;
};
