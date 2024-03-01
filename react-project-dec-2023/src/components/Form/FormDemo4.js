// Controlled Form Example using Class Component

// import React, { Component } from "react";

// export default class FormDemo4 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userName: "sanjay" };
//   }
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state.userName);
//   };
//   render() {
//     return (
//       <div>
//         <div>name is: {this.state.userName}</div>
//         <form onSubmit={this.submitHandler}>
//           <input
//             name="userName"
//             value={this.state.userName}
//             onChange={this.changeHandler}
//           />
//           <input type="submit" value="submit" />
//         </form>
//         <br />
//         <br />
//         <p>User Name is : {this.state.userName}</p>
//       </div>
//     );
//   }
// }

// Controlled Form using Functional component

import React, { useState } from "react";

export default function FormDemo4() {
  const [userName, setUserName] = useState("");

  const changeHandler = (e) => {
    setUserName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        User Name :{" "}
        <input name="userName" value={userName} onChange={changeHandler} />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <p>User name is : {userName}</p>
    </>
  );
}
