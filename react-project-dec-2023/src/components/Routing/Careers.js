import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <h2 className="text-center">This is Careers Component</h2>
      <hr />
      <div>
        <Link to="permanent" className="m-2">
          Permanent jobs
        </Link>
        <Link to="contract">Contract jobs</Link>
      </div>
      <Outlet /> 
      {/* In outlet either permanent Job component or Contract Jobs component will get loaded. */}
    </>
  );
}
