// // class component

// import React from "react";

// class Addition extends React.Component {
//   state = {
//     a: 0,
//     b: 0,
//     total: 0,
//   };
//   changeFirst = (e) => {
//     this.setState({ a: parseInt(e.target.value) });
//   };
//   changeSecond = (e) => {
//     this.setState({ b: parseInt(e.target.value) });
//   };
//   addition = () => {
//     this.setState({ total: this.state.a + this.state.b });
//   };
//   render() {
//     return (
//       <div>
//         Addition Works!!!
//         <input onKeyUp={this.changeFirst}></input>
//         <input onKeyUp={this.changeSecond}></input>
//         <h2>Addition is {this.state.total}</h2>
//         <button onClick={this.addition}>Addddddd</button>
//       </div>
//     );
//   }
// }
// export default Addition;

// Function Component

import React, { useState } from "react";
export default function Demo() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [total, settotal] = useState(0);

  return (
    <div>
      <div>
        <input
          type="number"
          onKeyUp={(e) => {
            setnum1(+e.target.value);
          }}
        />
        <input
          type="number"
          onKeyUp={(e) => {
            setnum2(+e.target.value);
          }}
        />
        Result is: {total}
        <button
          onClick={(e) => {
            settotal(num1 + num2);
          }}
        >
          Addition
        </button>
        <button
          onClick={(e) => {
            settotal(num1 - num2);
          }}
        >
          Subtraction
        </button>
        <button
          onClick={(e) => {
            settotal(num1 * num2);
          }}
        >
          Multiplication
        </button>
        <button
          onClick={(e) => {
            settotal(num1 / num2);
          }}
        >
          Division
        </button>
      </div>
    </div>
  );
}
