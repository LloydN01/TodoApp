import React from "react";

const Todo = () => {
    return(
        <div className="todo">
            <li className="todo-item">Complete the Todo List</li>
            <button type="button" className="add">+</button>
            <button type="button" className="remove">-</button>
        </div>
    );
}

export default Todo;