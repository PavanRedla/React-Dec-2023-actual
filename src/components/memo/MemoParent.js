import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export default function MemoParent() {
  const [a, setA] = useState(100);
  const [b, setB] = useState(200);
  const [c, setC] = useState(300);

  return (
    <>
      <button onClick={() => setA(a + 1)}>update A</button>
      <button onClick={() => setB(b + 1)} className="mx-1">
        update B
      </button>
      <button onClick={() => setC(c + 1)}>update C</button>

      <ComponentA a={a} />
      <ComponentB b={b} />
      <ComponentC c={c} />
    </>
  );
}

// when child components of the parent component are NORMAL components and if any of the state variable changes in parent component then all the child components will get re-rendered even if that particular state variable which is being changed in parent component is not passed as props to child component.

// when child components of the parent component are MEMO components and if any of the state variable changes in parent component then only the child components will get re-rendered which receive that particular state variable which is being changed in parent component passed as props to that child component. Remaining child components will not get re-rendered.

//  syntax to make a child component a memo component is

// function ComponentA({ a }) {
//   console.log("A Component rendered...");
//   return <div>ComponentA - a value is {a}</div>;
// }
// export default React.memo(ComponentA);
