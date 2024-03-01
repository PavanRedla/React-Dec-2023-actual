import React from "react";

export default function ListDemo1() {
  let cities = ["bangalore", "mumbai", "chennai", "delhi"];

  return (
    <>
      <ol>
        {cities.map((city, ind) => {
          return <li key={ind}>{city}</li>;
        })}
      </ol>

      <select>
        <option>---Select---</option>
        {cities.map((city, ind) => {
          return <option key={ind}>{city}</option>;
        })}
      </select>
    </>
  );
}

// Practice

// import React from "react";

// export default function ListDemo1() {
//   let cities = ["bangalore", "mumbai", "chennai", "delhi"];

//   return (
//     <>
//       <ol>
//         {cities.map((city, ind) => {
//           return <li key={ind}>{city}</li>;
//         })}
//       </ol>

//       <select>
//         <option>---Select---</option>
//         {cities.map((city, ind) => {
//           return <option key={ind}>{city}</option>;
//         })}
//       </select>
//     </>
//   );
// }
