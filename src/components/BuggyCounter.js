import React, { Component } from "react";

export class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return (
      <>
        <h2>Counter is : {this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
