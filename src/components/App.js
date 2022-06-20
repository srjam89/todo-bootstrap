import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <React.Fragment>
      <Container className="bg-secondary w-50" fluid="md">
        <Row>
          <Col>
            <p className="text-center text-white display-4 fst-italic fw-bold">
              Todo App
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoForm addTodo={addTodo} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default App;
