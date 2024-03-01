import React from "react";
import { BuggyCounter } from "../BuggyCounter";
import MyErrorBoundry from "../MyErrorBoundry";

export default function Home() {
  return (
    <>
      <h2>This is Home component</h2>
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
