// import React, { useState } from "react";

// export default function CounterDemo3() {
//   let [counter, updateCounter] = useState(0);

//   //   useState is a predefined function in react also called as hook and using use state function we can create state variable. state variables are updated in the UI unlike class and function variables.

//   // useState methods take a default value as a argument. It return array of 2 items called state variable (counter) and setter function (updateCounter).

//   let increment = () => {
//     updateCounter(++counter);
//     console.log(counter);
//   };

//   return (
//     <>
//       <p>Counter value is {counter}</p>
//       <button onClick={increment}>Increment</button>
//     </>
//   );
// }

// useState is a predefined function in react also called as hook and using use state function we can create state variable. state variables are updated in the UI unlike class and function variables.

// useState methods take a default value as a argument. It return array of 2 items called state variable and setter function.

// using useEffect

// import React, { useEffect, useState } from "react";

// export default function CounterDemo3() {
//   let [counter, updateCounter] = useState(0);

//   let increment = () => {
//     updateCounter(counter + 1);
//   };
//   useEffect(() => {
//     console.log(counter); // useEffect makes this line execute after this line gets executed (updateCounter(counter + 1);) above.
//   });

//   return (
//     <>
//       <p>Counter value is {counter}</p>
//       <button onClick={increment}>Increment</button>
//     </>
//   );
// }

// class component

import React, { Component } from "react";

export default class CounterDemo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  }; // setState() is Asynchronous

  render() {
    return (
      <>
        <p>Counter value is {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}


