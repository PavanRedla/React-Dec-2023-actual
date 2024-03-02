import React, { useRef } from "react";

export default function RefDemo1() {
  const inputRef1 = useRef(); // creating useRef variables to collect input without using any change handler functions.
  const inputRef2 = useRef();

  const add = () => {
    const val1 = +inputRef1.current.value;
    const val2 = +inputRef2.current.value;
    alert(val1 + val2);
  };

  return (
    <div>
      num1: <input ref={inputRef1} />
      {/* assigning useRef variable to input box */}
      num2: <input ref={inputRef2} />
      <button onClick={add}>Add</button>
    </div>
  );
}

// using change handler function we can take the input from the input box for every letter of input we enter. whereas, using useref we can take the input from input box only once.

// Practice

// import React, { useRef } from "react";

// export default function RefDemo1() {
//   let inputRef1 = useRef();
//   let inputRef2 = useRef();

//   const add = () => {
//     const val1 = +inputRef1.current.value;
//     const val2 = +inputRef2.current.value;
//     alert(val1 + val2);
//   };

//   return (
//     <div>
//       num1: <input ref={inputRef1} />
//       num2: <input ref={inputRef2} />
//       <button onClick={add}>Add</button>
//     </div>
//   );
// }
