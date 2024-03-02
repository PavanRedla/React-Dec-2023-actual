import React, { useContext } from "react";
import { BuggyCounter } from "../BuggyCounter";
import MyErrorBoundry from "../MyErrorBoundry";
import { myContext } from "../../utils/Mycontext";

export default function Home(props) {
  const contextData = useContext(myContext);
  console.log(contextData);
  contextData.age = 55;
  console.log(contextData);
  return (
    <>
      <h2>This is Home component</h2>
      <br />
      <h2>Name Value is {props.name} === Props Drilling Example</h2>
      {/* this name variable value is coming from is coming from index.js file to App.js and from App.js to Main.js and from Main.js to Home.js file*/}
      <br />
      <h2>
        Name Value is {contextData.name}, age is {contextData.age}, add is{" "}
        {contextData.add}, Topic is {contextData.topic} === APIContext Example
        using Functional Component
      </h2>
      {/* this context data object value is coming from is direclty coming from index.js file to Home.js and this is how we use syntax to consume data if we write it in fucntional component.*/}
      <br />
      <h2>This is BuggyCounter component using Error Boundry</h2>
      <MyErrorBoundry>
        <BuggyCounter />
      </MyErrorBoundry>
      {/* if this Buggycounter component gets or throws error then whole application will not gets crashed, we can use other components normally only this Buggy counter will not work.*/}
      <br />
      ==============================================
      <br />
      <h2>This is BuggyCounter component without Error Boundry</h2>
      <BuggyCounter />
      {/* if this Buggycounter component gets or throws error then whole application gets crashed, we cannot use other components*/}
    </>
  );
}
