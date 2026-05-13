import React from 'react'
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos list</h3>

      {props.todos.map((todo)=>{
        return <TodoItem todo={todo} onDelete/>
      })}
    </div>
  )
}

export default Todos

