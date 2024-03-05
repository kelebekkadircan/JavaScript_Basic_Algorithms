import React from "react";
import { ages, users } from "../data/MockData";

export const Find = () => {
  const findNumber = ages.find((age) => age > 20);
  //   console.log(findNumber);

  const currentUser = users.find((user) => user.id === 2);
  // console.log(currentUser);

  return <div>Find</div>;
};
