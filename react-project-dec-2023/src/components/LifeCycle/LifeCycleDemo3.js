// Example for Unmounting

// Unmounting - Removing the component from DOM
// ==========
// -The next phase in the lifecycle is when a component is removed from the DOM,or unmounting.
// -React has only one built-in method that gets called when a component is unmounted.

// componentWillUnmount()
// ---------------------
// -Called immediately before a component is destroyed.
// -Perform any necessary cleanup in this method, such as cancel network requests, or cleaning up any DOM elements created in componentDidMount.
// -clearTimeout, ClearInterval , Unsubscribe, detachEventHandlers

import React, { Component } from "react";
import ComponentA from "../memo/ComponentA";
import ComponentB from "../memo/ComponentB";

export default class LifeCycleDemo3 extends Component {
  state = {
    flag: true,
  };
  render() {
    return (
      <>
        <div>Plz change flag value to load component conditionally</div>
        <button
          onClick={() => {
            this.setState({ flag: !this.state.flag });
          }}
        >
          toggle flag
        </button>

        {this.state.flag ? <ComponentA /> : <ComponentB />}
      </>
    );
  }
}
