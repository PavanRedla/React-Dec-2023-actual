import React, { useState } from "react";

export default function AddEmployee({ addEmployee }) {
  const initialEmp = { eId: "", name: "", sal: 0 };
  const [emp, setEmp] = useState(initialEmp);

  // let person = {
  //   name: 'David',
  //   age: 15,
  //   job: 'Programmer'
  // }

  // const { name, age } = person; // Takes the property/method from the object

  // console.log(name); // Prints 'David'
  // console.log(age); // Prints '15'
  // Without using destructuring, I would have done this:

  // const name = person.name;
  // const age = person.age;

  const changeHandler = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // e.target represents the input box.
    // the above two lines can be written with destructuring as

    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value }); // [name]:value==> [e.target.name]:e.target.value==> eId/name/sal : value entered in i/p box
  };
  const addMyEmployee = (emp) => {
    addEmployee(emp);
    setEmp(initialEmp);
  };
  return (
    <>
      <h3>Employee Add</h3>
      <p>
        eId :{" "}
        <input value={emp.eId} name="eId" onChange={(e) => changeHandler(e)} />
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
        Salary :{" "}
        <input value={emp.sal} name="sal" onChange={(e) => changeHandler(e)} />
      </p>
      <div className="text-center">
        <button onClick={() => addMyEmployee(emp)} className="btn btn-primary">
          Add Employee
        </button>
      </div>
    </>
  );
}
