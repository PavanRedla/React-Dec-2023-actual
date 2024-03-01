import React, { useState } from "react";

export default function EventDemo2() {
  let [obj, setObj] = useState({ num1: 0, num2: 0 });
  //   let [num2, setNum2] = useState(0);

  //   const changeHandler1 = (e) => {
  //     setNum1(+e.target.value);
  //   };
  //   const changeHandler2 = (e) => {
  //     setNum2(+e.target.value);
  //   };

  // we have written 2 change handlers for num1 and num2. if we have 100 numbers to be added then we have to write 100 change handlers instead of that we can write single changeHandler function for multiple input elements as shown below.
  // we have different approaches:

  //first is writing the changeHandler definition in the input element itself as shown below in input elements ( onChange = {(e) => setNum1(+e.target.value)})

  // second approach is shown in EventDemo3.js file. we will create only one state object for input values as shown in line no-4 ()

  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setObj({ ...obj, [e.target.name]: +e.target.value }); // [e.target.name] = +e.target.valeu => num1 = 10 , and so on
  };

  return (
    <>
      <p>
        Number-1:
        <input
          name="num1"
          value={obj.num1}
          onChange={(e) => changeHandler(e)}
        />
      </p>
      <p>
        Number-2:
        <input
          name="num2"
          value={obj.num2}
          onChange={(e) => changeHandler(e)}
        />
      </p>
      <p>
        Addition of {obj.num1} and {obj.num2} is {obj.num1 + obj.num2}
      </p>
    </>
  );
}
