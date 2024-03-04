import React from "react";
import { ages, companies } from "../data/MockData";

export const ForEach = () => {
  for (let i = 0; i < companies.length; i++) {
    // console.log(companies[i]);
  }
  companies.forEach((e) => {
    // console.log(e.name);
  });
  return <div>ForEach</div>;
};
