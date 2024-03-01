// import React, { useState } from "react";

// export default function FormDemo1() {
//   const [fname, setFname] = useState("sachin");
//   const [lname, setLname] = useState("tendulkar");

//   const submitHandler = (e) => {
//     e.preventDefault(); // submit handler function is printing the first and last name in the console. After printing the page gets loaded and console will be cleared, so we can see the first and last name for a second. Inorder to prevent the page refreshing e.preventDefault() method is used.
//     console.log(fname, lname);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       First Name:
//       <input
//         name="fname"
//         value={fname}
//         onChange={(e) => setFname(e.target.value)}
//       />
//       Last Name:
//       <input
//         name="lname"
//         value={lname}
//         onChange={(e) => setLname(e.target.value)}
//       />
//       <br />
//       <br />
//       <button>submit</button>
//     </form>
//   );
// }

// Practice

import React, { useState } from "react";

export default function FormDemo1() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(fname, lname);
  };

  return (
    <form onSubmit={submitHandler}>
      First Name:{" "}
      <input
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      Last Name:{" "}
      <input
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
}
