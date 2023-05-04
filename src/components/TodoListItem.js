import React from "react";
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types'

const TodoListItem = ({ todo, onRemoveTodo}) => {
  return (
      <li className = {style.ListItem} key={todo.id}>{todo.fields.Title} <button  className = {style.x}onClick={()=>onRemoveTodo(todo.id)}>X</button></li>
  );
};

TodoListItem.propTypes={
  onTodoListItem: PropTypes.func,
}
export default TodoListItem;
