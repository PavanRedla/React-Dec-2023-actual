// import React from "react";
// import "./categories.css";

// export default function Category(props) {
//   return (
//     <>
//       <div className="col">
//         <div className="category text-center">
//           <img src={props.img} alt="some text" />
//           <div>{props.name}</div>
//         </div>
//       </div>
//     </>
//   );
// }

// Props Destructuring for functional component

// import React from "react";
// import "./categories.css";

// export default function Category({ img, name }) {
//   // in the above code we have used props but here we are using directly propNames we are getting from category component (categories.js file)
//   return (
//     <>
//       <div className="col">
//         <div className="category text-center">
//           <img src={img} alt="some text" />
//           <div>{name}</div>
//           {/* we are using img instead of props.img as shown in above code this is possible due to destructuring */}
//         </div>
//       </div>
//     </>
//   );
// }

// Props Destructuring for class component

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Category extends Component {
  render() {
    let { img, name } = this.props; // destructuring for class component
    return (
      <div className="col">
        <div className="category text-center">
          <img src={img} alt="some text" />
          <div>{name}</div>
          {/* we are using img instead of props.img as shown in above code this is possible due to destructuring */}
        </div>
      </div>
    );
  }
}

// here the child component called category.js is taking name and img as a input from the parent element and the name and img are string type of values. suppose if we pass a numerical value to a name then also the component works fine but if we want to throw an error if we do not get the string type value to name variable then we have to use proptypes as shown below.

Category.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string.isRequired,
};

// if we want to make the property or variable to not to have any blank we have to use required keyword as shown above in line 62 (img: PropTypes.string.isRequired,). By default if we do not give the img value in the above code then also the code works fine.
