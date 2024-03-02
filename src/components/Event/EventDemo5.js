// Bubbling

// import React, { Component } from "react";

// export default class EventDemo5 extends Component {
//   render() {
//     return (
//       <>
//         <div onClick={() => console.log("Div clicked")}>
//           Div <br />
//           <span onClick={() => console.log("span clicked")}>
//             Span <br />
//             <button onClick={() => console.log("button clicked")}>
//               Button
//             </button>
//           </span>
//         </div>
//       </>
//     );
//   }
// }

// O/p:
// button clicked
// span clicked
// Div clicked

// Capturing

import React, { Component } from "react";

export default class EventDemo5 extends Component {
  render() {
    return (
      <>
        <div onClickCapture={() => console.log("Div clicked")}>
          Div <br />
          <span onClickCapture={() => console.log("span clicked")}>
            Span <br />
            <button onClickCapture={() => console.log("button clicked")}>
              Button
            </button>
          </span>
        </div>
      </>
    );
  }
}

// O/p:
// Div clicked
// span clicked
// button clicked
