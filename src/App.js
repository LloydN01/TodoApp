import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div id="mainBackground">
        <div className="header">
              <h1>
                 What are we doing today?
              </h1>
        </div>

        <div className="taskBar">
          <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
        </div>

        <div className="list">
          <TodoList setTodos={setTodos} todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;