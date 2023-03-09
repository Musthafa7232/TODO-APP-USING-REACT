import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
function App() {
  
  let todolocal = JSON.parse(localStorage.getItem("todos")) || [];
  const [inputForm, setInputForm] = useState("");
  const [todos, setTodos] = useState(todolocal);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App py-5">
      <h1 className="text-center">Todo App Using React</h1>
      <Form
        inputForm={inputForm}
        todos={todos}
        setTodos={setTodos}
        setInputForm={setInputForm}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
