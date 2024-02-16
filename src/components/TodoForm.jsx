import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoForm = ({ addTodo }) => {
  let [value, setValue] = useState("");

  const addEventHandler = (e) => {
    e.preventDefault();

    addTodo({
      id: uuidv4(),
      task: value,
      completed: false,
      isEditing: false,
    });

    setValue("");
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={addEventHandler}>
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Enter your task here"
          onChange={(e) => {
            setValue(e.target.value);
          }}></input>
        <button type="submit" className="todo-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
