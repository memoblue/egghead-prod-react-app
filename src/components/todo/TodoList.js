import React from 'react';
import TodoListItem from './TodoListItem'

const TodoList = ({todos}) => (
  <ul className="todolist">
    {todos.map(item => <TodoListItem  key={item.id} name={item.name} checked={item.isComplete} />)}
  </ul>
);

export default TodoList;
