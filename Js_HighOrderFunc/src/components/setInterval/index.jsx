import React from "react";

export const SetInterval = () => {
  function sayHello() {
    console.log("Hello Kadircan Interval");
  }

  const silinecekaralik = setInterval(sayHello, 1000);

  setTimeout(() => {
    clearInterval(silinecekaralik);
    console.log("Interval işlemi iptal edildi");
  }, 7000);

  return <div>SetInterval</div>;
};
