import React, { useState } from "react";

export default function EventDemo2() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);

  //   const changeHandler1 = (e) => {
  //     setNum1(+e.target.value);
  //   };
  //   const changeHandler2 = (e) => {
  //     setNum2(+e.target.value);
  //   };

  // we have written 2 change handlers for num1 and num2. if we have 100 numbers to be added then we have to write 100 change handlers instead of that we can write single changeHandler function for multiple input elements as shown below.
  // we have different approaches:

  //first is writing the changeHandler definition in the input element itself as shown below in input elements ( onChange = {(e) => setNum1(+e.target.value)})

  // second approach is shown in EventDemo3.js file.

  return (
    <>
      <p>
        Number-1:{" "}
        <input value={num1} onChange={(e) => setNum1(+e.target.value)} />
      </p>
      <p>
        Number-2:{" "}
        <input value={num2} onChange={(e) => setNum2(+e.target.value)} />
      </p>
      <p>
        Addition of {num1} and {num2} is {num1 + num2}
      </p>
    </>
  );
}
