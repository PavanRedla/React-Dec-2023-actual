// program- 67  Ref Forwarding
// **************************

import React, { Component } from "react";
import FancyButton from "../Form/FancyButton";

export default class RefForward extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // syntax to create the ref variable in class component
  }
  fun1 = () => {
    console.log(this.myRef.current.className);
    console.log(this.myRef.current.id);
  };
  render() {
    return (
      <div>
        <FancyButton ref={this.myRef}>
          {/* we are passing ref variable to FancyButton component (child Component)*/}
          <div>button text</div>
        </FancyButton>

        {/* if we want to pass both ref and props variable then we have to write like this */}

        {/* <FancyButton ref={this.myRef} propsvariable = {propsvariable}>
          <div>button text</div>
        </FancyButton> */}

        <button onClick={this.fun1}>click me</button>
      </div>
    );
  }
}
