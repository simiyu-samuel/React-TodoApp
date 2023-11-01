import React, { useState } from 'react';
import './App.css'

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask
        };
       if(inputTask ==''){
         alert("Please you must enter a task");
       } else{
       setList([...list, newTask]);
        setInputTask('');
       }
    };

   const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

   const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

   return (
        <div className="head-cont">
            <h1>My To-Do List</h1>

            <div className="todo-input">
                <input id="todo-input" type="text" value={inputTask}
                   onChange={handleInputChange} placeholder="Enter a todo" />

                <button id="add" onClick={handleAddTodo}>ADD</button>
            </div>

           <ul>
                { list.map((todo) => (
                  <div id="task-hold">
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button id="delete" onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                  </div>
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 