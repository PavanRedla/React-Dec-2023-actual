import React, { useState } from "react";
// import "./FormDataObjStyle.css";

export default function FormDataObj() {
  const stateNames = [
    "Karnataka",
    "Odisha",
    "Tamilnadu",
    "Kerala",
    "Bihar",
    "UP",
  ];
  let [userObj, setuserObj] = useState({
    fname: "",
    lname: "",
    age: "",
    address: "",
    state: "",
  });

  let changeHandler = (e) => {
    // let name = e.target.name;
    // let val = e.target.value;
    setuserObj({ ...userObj, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userObj);
  };

  const clearFeilds = () => {
    setuserObj({
      fname: "",
      lname: "",
      age: "",
      address: "",
    });
  };

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        First Name:
        <input name="fname" onChange={(e) => changeHandler(e)} />
        Last Name: <input name="lname" onChange={(e) => changeHandler(e)} />
        <br />
        <br />
        Age:{" "}
        <input name="age" type="number" onChange={(e) => changeHandler(e)} />
        <br />
        <br />
        Address: <textarea name="address" onChange={(e) => changeHandler(e)} />
        <br />
        <br />
        Select State:
        <select name="state" onChange={(e) => changeHandler(e)}>
          <option> --select-- </option>
          {stateNames.map((state, ind) => {
            return <option key={ind}>{state}</option>;
          })}
        </select>
        <br />
        <br />
        <button>Submit</button>
        <input
          type="reset"
          value="clear"
          className="mx-1"
          onClick={clearFeilds}
        />
        <br />
        <br />
      </form>
      <p>
        {userObj.fname} {userObj.lname} is {userObj.age} years old, staying at{" "}
        {userObj.address} in {userObj.state}
      </p>
    </>
  );
}
