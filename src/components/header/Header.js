// import React from 'react'

// export default function Header() {
//     return <h1 style={{ backgroundColor: 'blueviolet', color: 'white', textAlign: 'center', margin: 0 }}>
//         This is My Header
//     </h1>
// }

import React from "react";
export default class Header extends React.Component {
  render() {
    return (
      <h1
        style={{
          backgroundColor: "blueviolet",
          color: "white",
          textAlign: "center",
          margin: 0,
        }}
      >
        This is My Header
      </h1>
    );
  }
}
