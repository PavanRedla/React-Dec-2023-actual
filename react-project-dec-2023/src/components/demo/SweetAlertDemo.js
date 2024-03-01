import React from "react";
import Swal from "sweetalert2";

export default function SweetAlertDemo() {
  const clickHandler = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <>
      <h3>Please click the below button to open alert box</h3>
      <button onClick={clickHandler}>Click me</button>
    </>
  );
}
