import React, { useState } from "react";

export default function ToggleDemo2() {
  let [flag, setFlag] = useState(true);

  const toggle = () => {
    setFlag(!flag);
  };
  return (
    <>
      <h2 style={{ display: flag ? "block" : "none" }}>
        This is a Heading, Please CLick below Button to Toggle me
      </h2>
      <button onClick={toggle}>{flag ? "HIDE" : "SHOW"}</button>
    </>
  );
}
