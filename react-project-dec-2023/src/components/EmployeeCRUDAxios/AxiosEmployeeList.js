import React, { useState } from "react";
import Modal from "react-modal";

export default function EmployeeList({
  employees,
  deleteEmployee,
  editEmployee,
}) {
  let [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <table className="table table-bordered">
        <tbody>
          {employees.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.username}</td>
                <td>{emp.email}</td>
                <td>
                  <button className="btn btn-success" onClick={openModal}>
                    View
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                  >
                    <p>
                      <table className="table table-bordered table-striped">
                        <tbody>
                          {employees.map((empObj) => {
                            return (
                              <tr key={empObj.id}>
                                <td>{empObj.name}</td>
                                <td>{empObj.username}</td>
                                <td>{empObj.email}</td>
                              </tr>
                            );
                          })}
                          ;
                        </tbody>
                      </table>
                    </p>

                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                  </Modal>
                  <button
                    className="btn btn-primary mx-1"
                    onClick={() => editEmployee(emp)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
