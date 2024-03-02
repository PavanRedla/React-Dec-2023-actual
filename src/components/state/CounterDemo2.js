import React from "react";

export default function CounterDemo2() {
  let counter = 0; // function variable

  let increment = () => {
    counter++;
    console.log(counter); // count value will not get updated in UI as count is a functional variable and we are not using this.forceUpdate() method.
  };

  return (
    <>
      <p>Counter value is {counter}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

// if we want to print the variable in class component then we have to use this.variable

// Ui will print or rerender only the state variables.

// even if you want to update the class variable or function variable in the Ui then we have to use forceupdate.
