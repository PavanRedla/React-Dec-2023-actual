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
              <tr key={emp.eId}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
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
                              <tr key={empObj.eId}>
                                <td>{empObj.eId}</td>
                                <td>{empObj.name}</td>
                                <td>{empObj.sal}</td>
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
                    onClick={() => deleteEmployee(emp.eId)}
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
