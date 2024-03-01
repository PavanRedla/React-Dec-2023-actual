// Funcional Component

// import React, { useState } from "react";

// export default function StateDropDown() {
//   const stateNames = [
//     "Karnataka",
//     "Odisha",
//     "Tamilnadu",
//     "Kerala",
//     "Bihar",
//     "UP",
//   ];
//   const [selectedState, setSelectedState] = useState(stateNames[0]);

//   const stateChanged = (e) => {
//     setSelectedState(e.target.value);
//   };
//   return (
//     <>
//       <select onChange={stateChanged}>
//         {stateNames.map((state, ind) => {
//           return <option key={ind}>{state}</option>;
//         })}
//       </select>
//       <h2>You have Selected - {selectedState}</h2>
//     </>
//   );
// }

// Class component

import React, { Component } from "react";

export default class StateDropDown extends Component {
  stateNames = ["Karnataka", "Odisha", "Tamilnadu", "Kerala", "Bihar", "UP"]; // declared as class variable as we will not change it.
  constructor(props) {
    super(props);

    this.state = {
      selectedState: this.stateNames[0], // declared as state variable as this variable modifies every time we select the state.
    };
  }

  stateChanged = (e) => {
    this.setState({ selectedState: e.target.value });
  };

  render() {
    return (
      <>
        <select onChange={this.stateChanged}>
          {this.stateNames.map((state, ind) => {
            return <option key={ind}>{state}</option>;
          })}
        </select>
        <h2>You have selected - {this.state.selectedState}</h2>
      </>
    );
  }
}
