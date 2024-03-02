// there are two types of forms
// 1. Controlled Form - on every keyup if we are changing the state variable then it is called contolled Form. Example for controlled form is in FormDemo4.js file

// 2. Uncontrolled Form - on every key up if we are not changing the state variable and we are updating the data only once through ref is called uncontrolled form. 

// Below is the example of Uncontrolled Form.

// import React, { useState } from "react";
// import { useRef } from "react";

// export default function FormDemo2() {
//   let myRef1 = useRef("");
//   let myRef2 = useRef("");
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const fname = myRef1.current.value;
//     const lname = myRef2.current.value;
//     console.log(fname, lname);
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       First Name:
//       <input name="fname" defaultValue={"Sachin"} ref={myRef1} />
//       Last Name:
//       <input name="lname" defaultValue={"Tendulkar"} ref={myRef2} />
//       <br />
//       <br />
//       <button>submit</button>
//     </form>
//   );
// }

// Practice

import React, { useRef } from "react";

export default function FormDemo2() {
  let myRef1 = useRef("");
  let myRef2 = useRef("");

  let submitHandler = (e) => {
    e.preventDefault();
    const fname = myRef1.current.value;
    const lname = myRef2.current.value;
    console.log(fname, lname);
  };

  return (
    <form onSubmit={submitHandler}>
      First Name: <input name="fname" defaultValue={"Sachin"} ref={myRef1} />
      Last Name: <input name="lname" defaultValue={"Tendulkar"} ref={myRef2} />
      <button>Submit</button>
    </form>
  );
}
