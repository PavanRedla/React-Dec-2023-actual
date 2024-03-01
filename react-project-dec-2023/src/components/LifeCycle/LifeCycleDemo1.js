// Example for below LifeCycle Hooks:
//	1.Mounting - During mounting phase these 4 functions gets called automatically (constructor,getDerivedStateFromProps,render,componentDidMount) - when the component gets rendered for the first time is called mounting phase.

// 2.Updating - During Updating phase these 5 functions gets called automatically  (getDerivedStateFromProps,shouldComponentUpdate,render, getSnapshotBeforeUpdate, componentDidUpdate) - rerendering the component after changes is called Updating phase.

import React, { Component } from "react";

export default class LifeCycleDemo1 extends Component {
  constructor(props) {
    console.log("I am Constructor");
    super(props);
    this.state = {
      // Inside constructor function what we can do is - initialize state data and what we should not do is - we should not update state variable.
      counter: 0,
    };
    // setState(counter: this.state.counter+1) // this is not correct, inside constructor we should not update state variables.

    // document.getElementById("div1").style.color = "red"; // if we write this line here then it won't get executed as div is not yet rendered or mounted so it throws error. the best way to write this line is that we can write it after the whole component gets rendered. we have function called componentDidMount() automatically after the component gets rendered. so write this line inside that function.
  }

  // if we want to update the state data using props data then we will use get Derived From Props function. suppose from main.js in life cycle demo 1 we are passing a prop called counter = 5 then counter value become 5 instead of 0 which is defined in constructor function.
  static getDerivedStateFromProps(props, state) {
    console.log("I am getderivedstatefrom props");
    // return { counter: props.counter || 0 };
    return { state }; // this method should have return statement
  }
  shouldComponentUpdate() {
    console.log("I am should component update");
    return false; // if we return false in should Component Update function then re-rendering of the component will not happen even if we change the state variable value. In this example if we click increment button then the counter value increases by 1 and component rerender happens and the output is diplayed with incremented counter value. But if we return false in should Component Update method then this component will not get rerendered even if we click the increment button.
    return true; // // default value of shouldComponentUpdate method is true.
  }
  componentDidMount() {
    // It is called after the component gets rendered completely.
    console.log("I am compoennet did mount");
    document.getElementById("div1").style.color = "red";
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // will give the previous state and current value
    // Note: getSnapshotBeforeUpdate() should be used with componentDidUpdate()

    console.log("getSnapshotBeforeUpdate");
    console.log(
      `Previous value is ${prevState.counter} and current value is ${this.state.counter}`
    );
    return null;
  }
  componentDidUpdate() {
    console.log("componet did update");
  }
  render() {
    console.log("I am Render function");
    return (
      <>
        <div id="div1">Counter value is {this.state.counter} </div>
        <p>
          <button onClick={this.increment}>Increment</button>
        </p>
      </>
    );
  }
}

// output in console before clicking increment button i.e., mounting phase:

// LifeCycleDemo1.js:5 I am Constructor
// LifeCycleDemo1.js:13 I am getderivedstatefrom props
// LifeCycleDemo1.js:37 I am Render function
// LifeCycleDemo1.js:22 I am compoennet did mount

// So Even if we write the functions in different order the functions will be called in the following order only

//(constructor,getDerivedStateFromProps,render,componentDidMount)
