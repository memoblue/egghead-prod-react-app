import React from 'react';

export const TodoListItem = ({id, name, checked, handleToggle}) => (
  <li>
    <input checked={checked} type="checkbox" onChange={() => handleToggle(id)} />
    {name}
  </li>
);
