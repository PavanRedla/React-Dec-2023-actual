import React from "react";
import "./evenodd.css";

export default function EvenOdd() {
  let n = 5;
  let flag = true;
  return (
    <>
      <h2 style={{ color: n % 2 === 0 ? "green" : "red" }}>
        {n} is {n % 2 === 0 ? "Even " : "Odd "} Number
      </h2>

      <h2 className={n % 2 === 0 ? "even" : "odd"}>
        {n} is {n % 2 === 0 ? "Even " : "Odd "} Number
      </h2>

      <button className={`btn ${n % 2 === 0 ? "btn-success" : "btn-danger"}`}>
        {n} is {n % 2 === 0 ? "Even " : "Odd "}
      </button>
    </>
  );
}

// inline -true , conditional
