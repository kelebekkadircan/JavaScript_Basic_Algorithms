import React from "react";
import { ages, companies } from "../data/MockData";

export const Filter = () => {
  let canDrink = [];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
      canDrink.push(ages[i]);
    }
  }

  const canDrinkTwo = ages.filter((age) => age >= 21);
  //   console.log(canDrink);
  //   console.log(canDrinkTwo);

  const retailCompanies = companies.filter(
    (company) => company.category === "Retail"
  );
  //   console.log(retailCompanies);

  const eightiesCompanies = companies.filter(
    (company) => company.start >= 1980 && company.start < 1990
  );
  //   console.log(eightiesCompanies);

  const lastedTenYears = companies.filter(
    (company) => company.end - company.start >= 10
  );
  //   console.log(lastedTenYears);
  return <div>Filter</div>;
};
