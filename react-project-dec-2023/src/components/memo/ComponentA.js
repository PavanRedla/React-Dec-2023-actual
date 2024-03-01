// import React from "react";

// function ComponentA({ a }) {
//   console.log("A Component rendered...");
//   return <div>ComponentA - a value is {a}</div>;
// }
// export default React.memo(ComponentA);

// // ComponentA is memo component hence it only gets rerendered if state variable {a} passed to it gets modified in parent component (MemoParent.js)

// // React.memo is a higher order predefined function as it takes component (ComponentA) as an argument.

import React, { Component } from "react";

export default class ComponentA extends Component {
  timerId;
  componentDidMount() {
    console.log("Comp-A mounted");
    this.timerId = setInterval(() => {
      console.log("I am a interval from comp-A");
    }, 1000);
  }
  componentWillUnmount() {
    console.log("Comp-A is about to be unmounted");
    clearInterval(this.timerId);
  }
  render() {
    return <div>ComponentA</div>;
  }
}
