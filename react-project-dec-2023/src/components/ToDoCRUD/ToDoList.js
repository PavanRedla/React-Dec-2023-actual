import React from "react";

export default function ToDoList({ todoArr, deleteToDo, toggleToDo }) {
  return (
    <table className="table table-bordered">
      <tbody>
        {todoArr.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.text}
              </td>
              <td>{todo.completed.toString()}</td>
              {/* todo.completed = true/false, it is a boolean value. Boolean values are not rendered so we have to convert them to string using .toString() method */}
              <td>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => {
                    deleteToDo(todo.id);
                  }}
                >
                  DELETE
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    toggleToDo(todo.id);
                  }}
                >
                  TOGGLE
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
