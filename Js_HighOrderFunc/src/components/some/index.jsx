import React from "react";
import { users } from "../data/MockData";

export const Some = () => {
  const someUser = users.some((user) => user.gender === 1);
  // console.log(someUser); //true
  return <div>Some</div>;
};
