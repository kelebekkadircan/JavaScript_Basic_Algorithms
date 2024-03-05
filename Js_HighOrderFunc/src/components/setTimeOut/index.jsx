import React from "react";

export const SetTimeOut = () => {
  function sayHello() {
    console.log("Hello Kadircan Timeout");
  }

  const silinecekaralik = setTimeout(sayHello, 4000);

  setTimeout(() => {
    clearTimeout(silinecekaralik);
    console.log("Timeout işlemi iptal edildi");
  }, 3000);

  return <div>SetTimeOut</div>;
};
