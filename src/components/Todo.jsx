import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Todo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className="Todo ">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => {
            editTodo(task.id);
          }}
        />
        <FontAwesomeIcon
          className="fa-trash delete-icon"
          icon={faTrash}
          onClick={() => {
            deleteTodo(task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
