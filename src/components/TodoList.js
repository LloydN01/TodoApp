import React from "react";
import Todo from "./Todo";

const TodoList = () => {
    return (
        <div className="todo-tasks">
            <ul className="todo-list"></ul>
            <Todo />
        </div>
    );
};

export default TodoList;