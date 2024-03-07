import React from "react";
import { ages, companies, users } from "../data/MockData";

export const Sort = () => {
  const sortedCompanies = companies.sort((a, b) =>
    a.start > b.start ? 1 : -1
  );
  //   console.log(sortedCompanies);
  const sortAges = ages.sort((a, b) => a - b); //artan ascending 0.index en küçüğü olacak şekilde
  // console.log(sortAges);

  const sortedUsers = users.sort((a, b) => (a.age > b.age ? 1 : -1));
  // console.log(sortedUsers);

  // Orijinal arrayi değiştirmeden sıralmaak içlin toSorted fonksiyonu yazılabilir
  const months = ["Mar", "Jan", "Feb", "Dec"];
  const sortedMonths = months.toSorted();
  //console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
  // console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']
  const values = [1, 10, 21, 2];
  const sortedValues = values.toSorted((a, b) => a - b);
  // console.log(sortedValues); // [1, 2, 10, 21]
  // console.log(values); // [1, 10, 21, 2]

  // FARKLI VERİLERLE SORT KULLANIMI
  const stringArray = ["Blue", "Humpback", "Beluga"];
  const numberArray = [40, 1, 5, 200];
  const numericStringArray = ["80", "9", "700"];
  const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
  function compareNumbers(a, b) {
    return a - b;
  }
  stringArray.join(); // 'Blue,Humpback,Beluga'
  stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']
  numberArray.join(); // '40,1,5,200'
  numberArray.sort(); // [1, 200, 40, 5]
  numberArray.sort(compareNumbers); // [1, 5, 40, 200]
  numericStringArray.join(); // '80,9,700'
  numericStringArray.sort(); // ['700', '80', '9']
  numericStringArray.sort(compareNumbers); // ['9', '80', '700']
  mixedNumericArray.join(); // '80,9,700,40,1,5,200'
  mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
  mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

  // SORTING OBJECTS
  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

  // sort by value
  items.sort((a, b) => a.value - b.value);

  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  // yeni sorted arrayi numbers referans alır
  const numbers = [3, 1, 4, 1, 5];
  const sorted = numbers.sort((a, b) => a - b);
  // numbers and sorted are both [1, 1, 3, 4, 5]
  sorted[0] = 10;
  // console.log(numbers[0]); // 10

  // yeni sorted2 arrayi numbers2 referans alır ve spread operator ile kopyalanır
  // bu yüzden numbers2 değişmez ve shallow copy kullanılır
  const numbers2 = [3, 1, 4, 1, 5];
  // [...numbers] creates a shallow copy, so sort() does not mutate the original
  const sorted2 = [...numbers2].sort((a, b) => a - b);
  sorted[0] = 10;
  // console.log(numbers2[0]); // 3

  return <div>Sort</div>;
};
