import React from "react";
import { ages, companies, users } from "../data/MockData";

export const Sort = () => {
  const sortedCompanies = companies.sort((a, b) =>
    a.start > b.start ? 1 : -1
  );
  //   console.log(sortedCompanies);
  const sortAges = ages.sort((a, b) => a - b); // ascending 0.index en küçüğü olacak şekilde
  // console.log(sortAges);

  const sortedUsers = users.sort((a, b) => (a.age > b.age ? 1 : -1));

  // console.log(sortedUsers);

  return <div>Sort</div>;
};
