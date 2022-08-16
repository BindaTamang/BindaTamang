import React from 'react'
import './index.css'
const Tittle = ({todos}) => {
    
  return (
    <div className='todos'>
      <h1 className='tittle'>Todo App {new Date().getFullYear()} {todos.length} Tasks</h1>

    </div>
  )
}
export const Heading = "Welcome to Our Page";

export default Tittle;    
