import React from 'react'
import Tittle, {Heading} from './Tittle/tittle';
import Input from './Input/input';
import { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    //console.log(todos)
    setTodos(todos || []);
  }, []);
  return (
    <div className='todo-app'>
      <div className='form'>
      <h1>{Heading}</h1>
      <Tittle todos={todos} setTodos={setTodos}/>
      <Input todos ={todos} setTodos= {setTodos}/>
    </div>
    </div>
  )
}

export default App