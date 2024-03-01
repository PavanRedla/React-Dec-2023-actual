import React, { Component } from "react";

export default class ToggleDemo1 extends Component {
  state = {
    flag: true,
  };
  toggle = () => {
    this.setState({ flag: !this.state.flag });
  };
  render() {
    return (
      <>
        <h2 style={{ display: this.state.flag ? "block" : "none" }}>
          This is a Heading, plz click the below button to Toggle Me
        </h2>
        <button onClick={this.toggle}>
          {this.state.flag ? "HIDE" : "SHOW"}
        </button>
      </>
    );
  }
}
