import React from "react";
import { useState } from "react";

export default function AddToDo({ addToDo }) {
  let [todoText, setTodoText] = useState("");
  let changeHandlerTask = (e) => {
    setTodoText(e.target.value);
  };
  let [todoCompleted, setTodoCompleted] = useState(false);
  let changeHandlerCompleted = (e) => {
    console.log(e.target.value, todoCompleted);
    console.log(typeof e.target.value, typeof todoCompleted);

    setTodoCompleted(
      e.target.value === todoCompleted.toString()
        ? todoCompleted
        : !todoCompleted
    );
  };
  return (
    <>
      <div className="border p-2 text-center">
        <div class="form-group mb-2">
          <input
            type="text"
            class="form-control"
            onChange={changeHandlerTask}
            placeholder="Task Name"
          ></input>
          <input
            type="text"
            class="form-control mb-2"
            onChange={changeHandlerCompleted}
            placeholder="Task Completed?"
          ></input>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            addToDo(todoText, todoCompleted);
          }}
        >
          Add To Do
        </button>
      </div>
    </>
  );
}
