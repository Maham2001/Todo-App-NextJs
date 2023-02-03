"use client";
import React, { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([
        { todoText: "My first task", completed: false },
        { todoText: "My second task", completed: true },
        { todoText: "My third task", completed: true },
        { todoText: "My fourth task", completed: false },
    ]);

    const onClickHandler = (myElm: any) => {
        console.log("meraElm", myElm);

        // map runs on array, and returns an array
        const newTodos = todos.map((todo) => {
            console.log("todo: ", todo);
            if (todo.todoText == myElm.todoText) {
                todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
            }
            return todo;
        });

        console.log(newTodos);
        setTodos(newTodos);
    };
    const addTodo = () => {
        const newTodo = { todoText: todo, completed: false };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo("");
    };

    const deleteTodo = (meraTodo: any) => {
        const newTodos = todos.filter((todo) => {
            if (todo.todoText == meraTodo.todoText) return false;
            return true;
        });
        console.log("old todos", todos, "new todos", newTodos);
        setTodos(newTodos);
    };
    return (
        <>
            <div>Todo</div>
            <input
                placeholder="Add your task"
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((elm) => {
                    return (
                        <li
                            style={{
                                color: elm.completed ? "green" : "orange",
                                fontStyle: "oblique",
                                listStyle: "none",
                            }}
                            key={elm.todoText}
                        >
                            <input
                                type="checkbox"
                                checked={elm.completed}
                                onChange={() => {
                                    onClickHandler(elm);
                                }}
                            />
                            {elm.todoText}
                            <button
                                onClick={() => {
                                    deleteTodo(elm);
                                }}
                            >
                                {"  "}
                                <br />
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}