import React from 'react';

export const TodoListItem = ({checked, name}) => (
  <li>
    <input defaultChecked={checked} type="checkbox" />
    {name}
  </li>
);
