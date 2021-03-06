import React from "react";
import TodoList from "./TodoList";
const Form = ({inputText, todos, setTodos, setInputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText !== ''){
            setTodos([
                ...todos, {text: inputText, completed: false, id: Math.random()*1000}
            ]);
        } else{
            alert ("Enter a new task first!");
        };
        setInputText("");
    };

    return (
        <form>
                <input value={inputText} onChange={inputTextHandler} type="text" name="task" id="newTask" placeholder="Enter New Task"></input>
                <input onClick={submitTodoHandler} type="submit" value="Submit" id="button"></input>
            </form>
    );
};

export default Form;