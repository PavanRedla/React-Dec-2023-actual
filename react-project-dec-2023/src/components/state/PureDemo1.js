// import React, { Component, PureComponent } from "react";

// export default class PureDemo1 extends Component {
//   state = {
//     color: "red",
//   };
//   changeColor = () => {
//     this.setState({ color: "blue" });
//   };
//   render() {
//     console.log("PureDemo Render() called");
//     return (
//       <>
//         <h3>Color is: {this.state.color}</h3>
//         <button onClick={this.changeColor}>Change Color</button>
//       </>
//     );
//   }
// }

// when we click the button the
// O/P: Color is: blue
//  PureDemo Render() called - becuase we are changing the state variable color from red to blue.

// import React, { Component, PureComponent } from "react";

// export default class PureDemo1 extends Component {
//   state = {
//     color: "red",
//   };
//   changeColor = () => {
//     this.setState({ color: "red" });
//   };
//   render() {
//     console.log("PureDemo Render() called");
//     return (
//       <>
//         <h3>Color is: {this.state.color}</h3>
//         <button onClick={this.changeColor}>Change Color</button>
//       </>
//     );
//   }
// }

// when we click the button the
// O/P: Color is: red
//  PureDemo Render() called - eventhough we are changing the state variable color from red to again red impure component will rerender, but in ideal case the color we intially define for state variable (color) is red and using setState method we are again updating the color with same value (red). Hence, the component should not load but the component is rerendering again which is not a good process. hence, to make it not rerender if we are updating the same value then we have to use (export default class PureDemo1 extends PureComponent ) as shown in line 51. so we have to use Purecomponent in place of Component. this is applicable for class component whereas for functional component, functional component itself called as pure component.

// import React, { Component, PureComponent } from "react";

// export default class PureDemo1 extends PureComponent {
//   state = {
//     color: "red",
//   };
//   changeColor = () => {
//     this.setState({ color: "blue" });
//   };
//   render() {
//     console.log("PureDemo Render() called");
//     return (
//       <>
//         <h3>Color is: {this.state.color}</h3>
//         <button onClick={this.changeColor}>Change Color</button>
//       </>
//     );
//   }
// }

// when we click the button the
// O/P: Color is: blue
//  PureDemo Render() called  - because we are updating the new value called blue to state variable from red hence component will be rerendered.

import React, { Component, PureComponent } from "react";

export default class PureDemo1 extends PureComponent {
  state = {
    color: "red",
  };
  changeColor = () => {
    this.setState({ color: "red" });
  };
  render() {
    console.log("PureDemo Render() called");
    return (
      <>
        <h3>Color is: {this.state.color}</h3>
        <button onClick={this.changeColor}>Change Color</button>
      </>
    );
  }
}

// when we click the button the
// O/P: Color is: red
//  we will not get the o/p like PureDemo Render() called because we are using pure component and we are updating the same value to state variable.
