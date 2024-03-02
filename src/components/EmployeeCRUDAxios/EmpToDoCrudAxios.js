import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Crud() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const fetchUsers = async function () {
    let response = await axios.get("http://localhost:4000");
    setUsers(...response.data);
  };
  const addUser = async function () {
    const newUser = {
      id: id,
      name: name,
      email: email,
      number: number,
    };
    let response = await axios.post("http://localhost:4000", newUser);
    Swal.fire("Employee Added Successfully", "", "success");
    fetchUsers();
  };
  const deleteUser = (id) => {
    axios.delete(`http://localhost:4000/users/${id}`).then((res) => {
      Swal.fire("Employee Deleted Successfully", "", "success");
      fetchUsers();
    });
  };
  const editUser = (id) => {};
  const mySubmitHandler = function (event) {
    event.preventDefault();
    addUser();
  };
  return (
    <>
      <h1 className="text-center">CRUD Example</h1>
      <hr />
      <button className="btn btn-success" onClick={fetchUsers}>
        Get Data
      </button>
      <hr />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <h2 className="text-center">User List</h2>
            <table className="table table-bordered table-striped table-responsive">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.number}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          DELETE
                        </button>{" "}
                        &nbsp;
                        <button
                          className="btn btn-secondary"
                          onClick={() => editUser(user.id)}
                        >
                          EDIT
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">
                      No data yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-sm-2">
            <h2 className="text-center">User List</h2>
            <form onSubmit={mySubmitHandler}>
              id:{" "}
              <input
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <br />
              <br />
              Name:{" "}
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <br />
              <br />
              email:{" "}
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <br />
              <br />
              Number:{" "}
              <input
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />{" "}
              <br />
              <br />
              <button className="btn btn-primary">Add Employee</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
