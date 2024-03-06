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

  return (
    <div>
      <ForEach />
      <Filter />
      <Map />
      <Sort />
      <Reduce />
      <CallBack />
      {/* <SetTimeOut /> */}
      {/* <SetInterval /> */}
      <Every />
      <Some />
      <Find />
      <Includes />
    </div>
  );
}

export default App;
