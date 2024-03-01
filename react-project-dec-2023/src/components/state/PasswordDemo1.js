// function component

// import React, { useState } from "react";
// export default function PasswordDemo1() {
//   const [flag, setFlag] = useState(true);

//   const toggle = () => {
//     setFlag(!flag);
//   };
//   return (
//     <>
//       <input type={flag ? "password" : "text"} />
//       <input type="checkbox" onClick={toggle} /> {flag ? "SHOW" : "HIDE"}
//       Password
//     </>
//   );
// }

// class component

import React, { Component } from "react";

export default class PasswordDemo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: true,
    };
  }

  toggle = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <>
        <input type={this.state.flag ? "password" : "text"} />
        <input type="checkbox" onClick={this.toggle} />
        {this.state.flag ? "SHOW" : "HIDE"} Password
      </>
    );
  }
}
