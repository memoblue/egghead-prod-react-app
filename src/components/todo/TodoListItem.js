import React from 'react';

export const TodoListItem = ({id, name, checked, handleToggle, handleRemove}) => (
  <li>
    <a href="#" onClick={(e) => handleRemove(id, e)}>x</a>
    <input checked={checked} type="checkbox" onChange={() => handleToggle(id)} />
    {name}
  </li>
);
