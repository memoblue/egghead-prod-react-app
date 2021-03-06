import React from 'react';
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToggle, handleRemove}) => (
  <ul className="todolist">
    {todos.map(item => {
      return (
        <TodoListItem
          key={item.id}
          id={item.id}
          name={item.name}
          checked={item.isComplete}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      );
    })}
  </ul>
);
