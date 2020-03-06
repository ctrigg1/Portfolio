import React from 'react';

const TodoList = ({todos, deleteTodo}) => {

  const handleEnter = (e) => {
    e.target.style.textDecoration = 'line-through';
  }

  const handleLeave = (e) => {
    e.target.style.textDecoration = '';
  }    

  const todoList = 
    todos.length === 0 ? <div className="collection-item flow-text">no items</div> : 
    todos.map(todo => {
      return(
        <div className="collection-item flow-text" key={todo.key}  onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={() => {deleteTodo(todo.key)}}>{todo.content}</div>
      )
    }) 
    
  return(
    <div className="collection">{todoList}</div>
  )
}

export default TodoList;