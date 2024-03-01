import React from "react";
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" id="btn1">
    {props.children}
  </button>
));
export default FancyButton;

// props is used to collect the props variable passed by parent component and ref is used to collect the ref variables passed by parent component.
