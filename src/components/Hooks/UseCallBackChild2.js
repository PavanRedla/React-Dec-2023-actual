import React from "react";

function UseCallBackChild2({ b }) {
  console.log("UseCallBackChild2 rendered");
  return <div>UseCallBackChild2- b from parent is {b}</div>;
}
export default React.memo(UseCallBackChild2);

// to make a whole component not to re-render if it's props is not changing then we have to use React.memo and to make a function not to re-render for every state update we use useMemo.
