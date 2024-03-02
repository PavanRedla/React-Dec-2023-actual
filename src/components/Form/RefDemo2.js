import React, { useRef } from "react";

export default function RefDemo2() {
  let inputRef1;
  let inputRef2;

  const add = () => {
    console.log(inputRef1);
    const val1 = +inputRef1.value; // inputRef1.current.value is not used here. directly +inputRef1.value is used in callback refs
    const val2 = +inputRef2.value;
    alert(val1 + val2);
  };

  return (
    <div>
      num1:
      <input
        ref={(inputBox) => {
          inputRef1 = inputBox;
        }}
      />
      num2:
      <input
        ref={(inputBox) => {
          inputRef2 = inputBox;
        }}
      />
      <button onClick={add}>Add</button>
    </div>
  );
}

// -React supports another way to set refs called “callback refs”,
//  which gives more fine-grain control over normal refs when refs are set and unset.
//  ex: <input ref={x => inputRef1=x} />
//      alert(inputRef1.value)

// -'Ref forwarding' is a feature that lets some components take a ref they receive,and pass/forward it further down to a child.
