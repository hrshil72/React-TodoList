import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  let [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  const toggleComplete = (id) => {
    let updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {

    

  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
