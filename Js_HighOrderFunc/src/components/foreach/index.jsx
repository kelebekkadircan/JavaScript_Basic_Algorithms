import React from "react";
import { ages, companies } from "../data/MockData";

export const ForEach = () => {
  for (let i = 0; i < companies.length; i++) {
    // console.log(companies[i]);
  }
  companies.forEach((e) => {
    // console.log(e.name);
  });

  let total = 0;

  let calculate = (age) => {
    total += age;
  };
  ages.forEach(calculate);
  // console.log(total);

  const array1 = ["a", "b", "c"];

  //array1.forEach((element) => console.log(element));
  // Expected output: "a"
  // Expected output: "b"
  // Expected output: "c"

  // class oluşturuyoruz ve this ile birlikte kullanıyoruz
  class Counter {
    constructor() {
      this.sum = 0;
      this.count = 0;
    }
    add(array) {
      // Only function expressions have their own this bindings.
      array.forEach(function countEntry(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
    }
  }

  const obj = new Counter();
  obj.add([2, 5, 9]);
  // console.log(obj.count); // 3
  // console.log(obj.sum); // 16

  return <div>ForEach</div>;
};
