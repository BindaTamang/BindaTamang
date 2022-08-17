import React from 'react'
import { useState } from 'react'
import './index.css'

const Input = ({todos, setTodos}) => {
  
  const [data, setData] = useState("");
  const handleDelete = (item) => {
    setTodos(todos.filter((todos) => todos !==item));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleUpdate = (item) => {
    setData(item);
    handleDelete(item);
  };
  
  return (
    <>
    <input 
    className='todo-input'
    type="text"
    placeholder= 'Add a todo list'
    value={data}
    onChange = {(e) => {setData(e.target.value);}}
    />
    <button onClick={() => {
      //spread operator
      setTodos([...todos, data]);
      localStorage.getItem("todos", JSON.stringify([...todos, data]));
      setData("");
    } 
     }>Add</button>
     
     <ol>
      {todos.map((item, index) => {
        return <li key={index}>{item}
        <button onClick={() => {
          handleDelete(item);
        }}>Delete</button>
        <button onClick={() => {
          handleUpdate(item);
        }}>Update</button>
        </li>
        
      })}
     </ol>
   </>
  )
}

export default Input
