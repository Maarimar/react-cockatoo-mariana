import React from "react";
import style from './TodoListItem.module.css'

const TodoListItem = ({ todo, onRemoveTodo}) => {
  return (
      <li className = {style.ListItem} key={todo.id}>{todo.fields.Title} <button  className = {style.x}onClick={()=>onRemoveTodo(todo.id)}>X</button></li>
  );
};

export default TodoListItem;
