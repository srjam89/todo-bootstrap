import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    task: "",
    id: "",
    completed: false,
  });

  const handleChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      // reset tasks input
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <InputGroup className="mb-5">
      <FormControl
        name="task"
        onChange={handleChange}
        type="text"
        value={todo.task}
        placeholder="Add Todo"
        aria-label="Add Todo"
        aria-describedby="basic-addon2"
        autoComplete="off"
      />
      <Button
        onClick={handleSubmit}
        style={{ marginLeft: "10px" }}
        className="btn btn-primary text-white"
        variant="outline-secondary"
        id="button-addon2"
        type="submit"
      >
        Add
      </Button>
    </InputGroup>
  );
};

export default TodoForm;
