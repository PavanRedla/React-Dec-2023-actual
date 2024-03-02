// import React, { useContext } from "react";
// import { myContext } from "../../utils/Mycontext";

// export default function ContactUs() {
//   const contextData = useContext(myContext);
//   return (
//     <>
//       <h2>This is Contact Us Component</h2>;
//       <h2>
//         Name Value is {contextData.name}, age is {contextData.age}, add is{" "}
//         {contextData.add}, Topic is {contextData.topic} === APIContext Example
//       </h2>
//       {/* this context data object value is coming from is direclty coming from index.js file to Home.js and this is how we use syntax to consume data if we write it in fucntional component.*/}
//     </>
//   );
// }

// {
//   /* this context data object value is coming from is direclty coming from index.js file to Home.js and this is how we use syntax to consume data if we write it in class component.*/
// }

import React, { Component } from "react";
import { myContext } from "../../utils/Mycontext";

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <h2 className="text-center">This is Contact Us Component</h2>
        <myContext.Consumer>
          {(userObj) => {
            return (
              <>
                <h3>
                  Name Value is {userObj.Name}, age is {userObj.age}, add is{" "}
                  {userObj.add}, Topic is {userObj.topic} === APIContextExample
                  using Class component
                </h3>
              </>
            );
          }}
        </myContext.Consumer>
      </>
    );
  }
}
