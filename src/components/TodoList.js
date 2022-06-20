import React from "react";
import TodoItem from "./TodoItem";
import ListGroup from "react-bootstrap/ListGroup";
import "./TodoList.css";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="input-container">
      <ListGroup as="ul">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
