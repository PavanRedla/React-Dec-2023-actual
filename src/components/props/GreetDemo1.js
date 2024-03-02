// import React, { Component } from "react";

// export default class GreetDemo1 extends Component {
//   render() {
//     return (
//       <>
//         <h3>
//           Hi {this.props.name}, {this.props.msg}
//         </h3>
//       </>
//     );
//   }
// }

// propValues cannot be updated.

// import React, { Component } from "react";

// export default class GreetDemo1 extends Component {
//   render() {
//     // this.props.name = "Rahul";  // if we try to update the props value it will throw error. we cannot update the props value.
//     return (
//       <>
//         <h3>
//           {" "}
//           Hi {this.props.name}, {this.props.msg}
//         </h3>
//       </>
//     );
//   }
// }

// Props.children

// import React, { Component } from "react";

// export default class GreetDemo1 extends Component {
//   render() {
//     // this.props.name = "Rahul";  // if we try to update the props value it will throw error. we cannot update the props value.
//     return (
//       <>
//         <h3>
//           Hi {this.props.name}, {this.props.msg}
//         </h3>
//         <h4>{this.props.children}</h4>
//         {/* the HTML code written between the start and end tag of GreetDemo1 component in Main.js file will come here in line number 45 */}
//       </>
//     );
//   }
// }

// props.children and props destructuring

import React, { Component } from "react";

export default class GreetDemo1 extends Component {
  render() {
    let { name, msg } = this.props; // Props de-structuring
    return (
      <>
        <h3>
          Hi {name}, {msg}
        </h3>
        <h4>{this.props.children}</h4>
      </>
    );
  }
}
