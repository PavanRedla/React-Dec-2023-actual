// state demo example

// import React, { Component } from "react";

// export default class StateDemo1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // state is a pre-defined keyword
//       counter: 0, // Counter is a state variable,
//     };
//   }
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 }, () => {
//       console.log(this.state.counter);
//     }); // setState() is Asynchronous
//   };

//   render() {
//     return (
//       <>
//         <div>Counter value is {this.state.counter} </div>
//         <p>
//           <button onClick={this.increment}>Increment</button>
//         </p>
//       </>
//     );
//   }
// }

// event demo (normal function will not work and only arrow function will work)

import React, { Component } from "react";

export default class StateDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state is a pre-defined keyword
      counter: 0, // Counter is a state variable,
    };
    this.increment = this.increment.bind(this); // if we do not want to do this binding then we have to use arrow function as shown below.
  }
  // increment = () => {
  //   this.setState({ counter: this.state.counter + 1 }, () => {
  //     console.log(this.state.counter);
  //   }); // setState() is Asynchronous
  // };

  // if we use normal function as written below instead of arrow function written above then code will not work as this represents undefined here in normal function but in above arrow function this represents where the function is written, increment function is written in StateDemo1 i.e., this == StateDemo1. so if we use the normal function and also we want the code to work then we have to bind this value as shown in line 42. The best solution is to use arrow function rather than normal function.

  increment() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    }); // setState() is Asynchronous
  }

  render() {
    return (
      <>
        <div>Counter value is {this.state.counter} </div>
        <p>
          <button onClick={this.increment}>Increment</button>
        </p>
      </>
    );
  }
}
