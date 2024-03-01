import React from "react";

export default function EventDemo4() {
  const f1 = (e) => {
    console.log(e);
  };

  return (
    <>
      <button onClick={f1}>btn-1</button>
      {/* if we click the above button then output will be like 
      SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …} 
      
      that means the classname or event is SyntheticBaseEvent. The meaning of syntheticbase event is that we can make the code run in all type of browsers.
      <button onclick="f1(event)">Click</button> 
    <!-- when we click the above button then the output will be PointerEvent
    so the class name is PointerEvent. It is called native event and only works in few browsers. To avoid this problem and to make the code work in all browsers react people created a wrapper around our Native event(pointer Event) called synthetic event which is supported by all the browsers.
    -->
      */}
    </>
  );
}
