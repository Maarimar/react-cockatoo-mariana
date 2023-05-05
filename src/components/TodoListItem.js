import React from "react";
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types'

const TodoListItem = ({ todo, onRemoveTodo}) => {
  return (
      <li className = {style.ListItem} key={todo.id}>{todo.fields.Title} <button className = {style.button}onClick={()=>onRemoveTodo(todo.id)}>done</button></li>
  );
};

TodoListItem.propTypes={
  onRemoveTodo: PropTypes.func,
  todo: PropTypes.object,
}
export default TodoListItem;
