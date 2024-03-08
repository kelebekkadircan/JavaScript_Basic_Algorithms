import "./App.css";
import {
  ForEach,
  Filter,
  Map,
  Sort,
  Reduce,
  CallBack,
  SetTimeOut,
  SetInterval,
  Every,
  Some,
  Find,
  Includes,
} from "./components";
function App() {
  //Higher order function mean :  takes a function as a parameter or returns a function as a result.
  // array.map is a higher order function
  // array.filter is a higher order function
  // array.reduce is a higher order function
  // array.forEach is a higher order function
  // array.sort is a higher order function
  // SetTimeout is a higher order function
  // SetInterval is a higher order function
  // array.every is a higher order function
  // array.some is a higher order function
  // array.find is a higher order function
  // array.findIndex is a higher order function
  // array.flat is a higher order function
  const companiesÖrnek = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const retailCompanies = companiesÖrnek.filter(
    (company) => company.category === "Retail"
  );
  // console.log(retailCompanies); // [{ name: "Company Two", category: "Retail", start: 1992, end: 2008 }, { name: "Company Four", category: "Retail", start: 1989, end: 2010 }, { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }]

  const users = [
    { id: 1, name: "John", surname: "Doe", age: 25 },
    { id: 2, name: "Jane", surname: "Doe", age: 24 },
    { id: 3, name: "Tom", surname: "Smith", age: 30 },
    { id: 4, name: "Emily", surname: "Jones", age: 28 },
  ];

  let total = 0;
  const totalAge = users.forEach((user) => {
    total += user.age;
  });
  // console.log(total); // 107

  const usersAgeSummary = users.reduce((acc, user) => acc + user.age, 0);
  // console.log(usersAgeSummary); // 107

  return (
    <div>
      <Map />
      <Filter />
      <Reduce />
      <ForEach />
      <Sort />
      {/* <SetTimeOut /> */}
      {/* <SetInterval /> */}
      <CallBack />
      <Every />
      <Some />
      <Find />
      <Includes />
    </div>
  );
}

export default App;
