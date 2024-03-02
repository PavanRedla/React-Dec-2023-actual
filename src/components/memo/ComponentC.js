import React from "react";

function ComponentC({ c }) {
  console.log("C Component rendered...");
  return <div>ComponentC - c value is {c}</div>;
}
export default React.memo(ComponentC);

// ComponentC is memo component hence it only gets rerendered if state variable {c} passed to it gets modified in parent component (MemoParent.js)
