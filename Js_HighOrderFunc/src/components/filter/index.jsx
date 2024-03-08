import React from "react";
import { ages, companies, users } from "../data/MockData";

// Filtreleme için kullanıyoruz bu metodu.
// array ve objeleri filtrelemek için kullanılır.
// array içindeki elemanları filtreler ve yeni bir array döner.

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

  // eğer array veya string değilse hata veriyor
  // const search = (keyword, array) =>  array.filter((item) => item.includes(keyword));
  // const tInclude = search("t", users);

  // const tInclude = users.filter((user) => user.name.includes("t"));
  // console.log(search("t", users));
  // console.log(tInclude);

  const search = (keyword, array) =>
    array.filter((item) => item.includes(keyword));
  const users = ["cat", "dog", "rabbit", "turtle"];
  const tInclude = search("t", users);

  // console.log(tInclude); // Output: ["cat", "turtle"]

  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  // Harflerin içinde gezer ve uzunluğu 6 dan büyük olanları döner.
  const result = words.filter((word) => word.length > 6);

  // console.log(result);
  // Expected output: Array ["exuberant", "destruction", "present"]

  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  // console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

  const fruits = ["apple", "banana", "grapes", "mango", "orange"];

  /**
   * filterItems içerisinde filter çağırarak onu fonksiyon içerisinde çağırıyoruz.
   *
   */
  function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }

  // console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
  // console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

  return <div>Filter</div>;
};
