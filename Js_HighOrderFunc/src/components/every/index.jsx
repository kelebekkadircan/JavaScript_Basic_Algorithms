import React from "react";
import { users } from "../data/MockData";

export const Every = () => {
  const userGender = users.every((user) => user.gender === 1);
  // console.log(userGender);

  return <div>Every</div>;
};
