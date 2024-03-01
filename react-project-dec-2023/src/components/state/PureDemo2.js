import React, { useState } from "react";

export default function PureDemo2() {
  let [color, setColor] = useState("red");

  return (
    <>
      {console.log("PureDemo Render() called")}
      <h3>Color is: {color}</h3>
      <button onClick={() => setColor("red")}>Change Color</button>
    </>
  );
}

// when we click the button the
// O/P: Color is: red
//  we will not get the o/p like PureDemo Render() called because we are using functional component (always a pure component) and we are updating the same value to state variable.
