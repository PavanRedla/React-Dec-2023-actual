import React from "react";
import { useEffect } from "react";

const LoggerHOC = (InputComponent) => {
  //   console.log(InputComponent);
  const EnhancedComponent = (props) => {
    useEffect(() => {
      console.log(`${InputComponent.name} Mounted`);
      return () => {
        console.log(`${InputComponent.name} UnMounted`);
      };
    }, []);
    useEffect(() => {
      console.log(`${InputComponent.name} Updated`);
    });
    return <InputComponent {...props} />;
  };
  return EnhancedComponent;
};
export default LoggerHOC;
