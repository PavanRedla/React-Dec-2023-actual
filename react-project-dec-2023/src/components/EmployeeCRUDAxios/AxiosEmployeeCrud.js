import React, { useState, useEffect } from "react";
import AxiosEmployeeList from "./AxiosEmployeeList";
import AxiosAddEmployee from "./AxiosAddEmployee";
import AxiosEditEmployee from "./AxiosEditEmployee";
import axios from "axios";

export default function EmployeeCrud() {
  // const initialEmployees = [
  //   { id: 101, name: "sanjay", sal: 5000 },
  //   { id: 104, name: "deepak", sal: 8000 },
  //   { id: 103, name: "ranjan", sal: 7000 },
  //   { id: 102, name: "manoj", sal: 9000 },
  // ];
  // const [employees, setEmployees] = useState(initialEmployees);
  const [isEdit, setIsEdit] = useState(false);
  const initialEmp = { id: "", name: "", username: "", email: "" };

  const [selectedEmployee, setSelectedEmployee] = useState(initialEmp);

  const [employees, setEmployees] = useState([]);

  const fetchUsers = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await axios.get(url);
    console.log(response);
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteEmployee = (idToDelete) => {
    let filteredEmployees = employees.filter((emp) => emp.id !== idToDelete);
    setEmployees([...filteredEmployees]);
  };
  const addEmployee = (emp) => {
    employees.push(emp);
    setEmployees([...employees]);
  };
  const editEmployee = (emp) => {
    setSelectedEmployee(emp);
    setIsEdit(true);
  };
  const saveEditedEmployee = (editedEmp) => {
    let updatedEmployees = employees.map((emp) => {
      if (emp.id === editedEmp.id) {
        return editedEmp;
      } else {
        return emp;
      }
    });
    setEmployees([...updatedEmployees]);
    setIsEdit(false);
  };
  const cancelSave = () => {
    setSelectedEmployee(initialEmp);
    setIsEdit(false);
  };

  return (
    <>
      <h2 className="text-center">This is EmployeeCRUD Component</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <h3>Employee List</h3>
            <AxiosEmployeeList
              employees={employees}
              deleteEmployee={deleteEmployee}
              editEmployee={editEmployee}
            />
          </div>
          <div className="col-sm-3">
            {isEdit ? (
              <AxiosEditEmployee
                selectedEmployee={selectedEmployee}
                saveEditedEmployee={saveEditedEmployee}
                cancelSave={cancelSave}
              />
            ) : (
              <AxiosAddEmployee addEmployee={addEmployee} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
