import React from "react";

// Default Props

export default function Addition({ num1 = 0, num2 = 0 }) {
  // Default Props num1 = 0 and num2=0 will only work if parent(addition component in Main.js file) is not passing any values. in this case parent is passing values so num1 = 10 and num2 = 20.
  return (
    <h3>
      Sum of {num1} and {num2} is {num1 + num2}
    </h3>
  );
}
