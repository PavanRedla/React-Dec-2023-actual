import React from "react";

export default function DatabindingDemo1() {
  let user = {
    firstName: "sanjay",
    lastName: "samantra",
  };
  return (
    <>
      <h2>This is Data BInding Component</h2>
      <div>Your Name is :: {user.firstName}</div>
      <div>Current React version is {React.version}</div>
      <div>{2 + 3 * 4}</div>
    </>
  );
}
