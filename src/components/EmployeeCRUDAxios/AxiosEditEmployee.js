import React from "react";
import { useState } from "react";

export default function EditEmployee({
  selectedEmployee,
  saveEditedEmployee,
  cancelSave,
}) {
  const [emp, setEmp] = useState(selectedEmployee);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
  };
  return (
    <>
      <h3>Edit Employee</h3>
      <p>
        eId :{" "}
        <input value={emp.id} name="id" onChange={(e) => changeHandler(e)} />
      </p>
      <p>
        Name :{" "}
        <input
          value={emp.name}
          name="name"
          onChange={(e) => changeHandler(e)}
        />
      </p>
      <p>
        username :{" "}
        <input
          value={emp.username}
          name="username"
          onChange={(e) => changeHandler(e)}
        />
      </p>
      <p>
        email :{" "}
        <input value={emp.email} name="email" onChange={(e) => changeHandler(e)} />
      </p>
      <div className="text-center">
        <button onClick={cancelSave} className="btn btn-secondary mx-1">
          Cancel
        </button>
        <button
          onClick={() => saveEditedEmployee(emp)}
          className="btn btn-primary"
        >
          Save
        </button>
      </div>
    </>
  );
}
