import React, { Component } from "react";

export default class EventDemo1 extends Component {
  f1 = () => {
    console.log("I am f1...");
  };
  add = (a, b) => {
    console.log(`Addition of ${a} ad ${b} is ${a + b}`);
  };
  render() {
    return (
      <>
        <button onClick={this.f1} className="btn btn-primary">
          btn-1
        </button>
        {/* <button onClick={this.add(2, 3)} className="btn btn-secondary">
          Add
        </button> */}
        {/*  if we pass the variables like this ( onClick = {this.add(2,3)} then add function will be called while page loading itself which is not correct. add function should only load when we click the button so in event handlers when we want to pass varibales then we have to write like this -- onclick = { ()=> add(2,3)} ) as shown below. */}
        <button
          onClick={() => {
            this.add(2, 3);
          }}
          className="btn btn-secondary m-1"
          // now the add function will be called only after clicking Add button
        >
          Add
        </button>
      </>
    );
  }
}
