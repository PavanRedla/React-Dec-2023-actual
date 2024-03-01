import React, { Component } from "react";

export default class CounterDemo1 extends Component {
  counter = 0; // Class Variable / instance variable

  increment = () => {
    this.counter = this.counter + 1;
    console.log(this.counter);
    this.forceUpdate(); // forceUpdate() is inbuilt method using which we can make the class and function variables updated in UI(DOM) as class and function variables are not updated in UI defaultly.
  };

  render() {
    return (
      <>
        <h2>This is counter Demo 1 Component</h2>
        <hr />
        <div>Counter value is {this.counter} </div>
        <p>
          <button onClick={this.increment}>Increment</button>
        </p>
      </>
    );
  }
}

// if we want to print the variable in class component then we have to use this.variable

// Ui will print or rerender only the state variables.

// even if you want to update the class variable or function variable in the Ui then we have to use forceupdate.
