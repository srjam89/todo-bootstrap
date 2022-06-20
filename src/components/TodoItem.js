import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./TodoItem.css";
import { BsCheckSquareFill, BsXSquareFill } from "react-icons/bs";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="mb-3" style={{ display: "flex" }}>
      <ListGroup.Item
        as="li"
        style={{ textDecoration: todo.completed ? "line-through" : null }}
      >
        {todo.task}
      </ListGroup.Item>
      <BsCheckSquareFill
        onClick={handleCheckboxClick}
        className="checkBtn"
        style={{ color: "rgb(47, 201, 8)" }}
      />

      <BsXSquareFill
        className="removeBtn"
        style={{ color: "rgb(242, 27, 7)" }}
        onClick={handleRemoveClick}
      />
    </div>
  );
};

export default TodoItem;
