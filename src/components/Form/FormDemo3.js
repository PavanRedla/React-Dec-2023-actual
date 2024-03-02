// // program-73  Form Validation while typing

import React, { useState } from "react";

export default function FormDemo3() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tendulkar");
  const [fNameErrorMsg, setfNameErrorMsg] = useState("");
  const [lNameErrorMsg, setlNameErrorMsg] = useState("");
  const [flag, setFlag] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(fname + " " + lname);
  };

  const changeHandler = (e) => {
    const inputField = e.target.name;
    if (inputField == "fname") {
      setFname(e.target.value);
      if (!e.target.value) {
        setfNameErrorMsg("firstname should not be empty");
        setFlag(true);
      } else if (e.target.value.length < 5) {
        setfNameErrorMsg("firstname should have atleast 5 chars");
        setFlag(true);
      } else {
        setfNameErrorMsg("");
        setFlag(false);
      }
    } else if (inputField == "lname") {
      setLname(e.target.value);
      if (!e.target.value) {
        setlNameErrorMsg("lastname should not be empty");
        setFlag(true);
      } else if (e.target.value.length < 5) {
        setlNameErrorMsg("lastname should have atleast 5 chars");
        setFlag(true);
      } else {
        setlNameErrorMsg("");
        setFlag(false);
      }
    } else {
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        First Name:
        <input name="fname" value={fname} onChange={changeHandler} />
        <span className="text-danger">{fNameErrorMsg}</span> <br />
        Last Name:
        <input name="lname" value={lname} onChange={changeHandler} />
        <span className="text-danger">{lNameErrorMsg}</span>
        <br />
        <br />
        <button disabled={flag}>submit</button>
      </form>
    </>
  );
}


