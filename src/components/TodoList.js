import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'


function TodoList({todoList, onRemoveTodo}) {
  return (
      <ul>
        {todoList.map((todo) => {
          return <TodoListItem onRemoveTodo={onRemoveTodo} key={todo.id} todo={todo}/>;
        })}
      </ul>
  );
}

TodoList.propTypes={
  onTodoList: PropTypes.func,
}
export default TodoList;
