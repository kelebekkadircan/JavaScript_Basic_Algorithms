import React from "react";

export const Find = () => {
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const findNumber = ages.find((age) => age > 20);
  console.log(findNumber); // 33

  const users = [
    { name: "John", surname: "ögel", age: 34, id: 1, gender: 1 },
    { name: "Doe", surname: "demir", age: 23, id: 2, gender: 1 },
    { name: "Smith", surname: "yasar", age: 45, id: 3, gender: 2 },
    { name: "Alex", surname: "mico", age: 23, id: 4, gender: 2 },
    { name: "Tom", surname: "blackland", age: 23, id: 5, gender: 1 },
    { name: "Jerry", surname: "sönmez", age: 23, id: 6, gender: 1 },
  ];
  const currentUser = users.find((user) => user.id === 2);
  // console.log(currentUser);

  return <div>Find</div>;
};
