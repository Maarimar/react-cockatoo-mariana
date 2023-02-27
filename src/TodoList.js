import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({todoList, onRemoveTodo}) {
  console.log(todoList);
  return (
      <ul>
        {todoList.map((todo) => {
          return <TodoListItem onRemoveTodo={onRemoveTodo} key={todo.id} todo={todo} />;
        })}
      </ul>
  );
}

export default TodoList;
